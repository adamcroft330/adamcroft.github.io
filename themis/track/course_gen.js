// Themis — Tomorrow Trials course generator (addendum spec).
//
// Generates a random point-A-to-point-B course that satisfies the competition
// brief addendum: 900 mm green-tape corridor, gentle bends (≤45°, both
// directions), 90° turns (both directions), the three 900→600 mm narrowings
// (right / left / both, 45° tapers, straight while narrowed) and an overhead
// hurdle (down-ramp → fly under at 600 mm → up-ramp). Start and finish boxes
// are sized for the 4-drone formation.
//
// Same file runs in Node (CAD/track/build.mjs → OpenSCAD → STL) and in the
// browser (adamcroft.me/themis/track/ viewer). Deterministic per seed using the
// same mulberry32 PRNG as racing-sim, so the sim can later rebuild the exact
// same course from a seed.
//
// Units: millimetres. Frame: x right, y up (plan view), z up. Heading in
// radians, 0 = +x, positive = counter-clockwise (left turn). "left"/"right"
// are relative to the direction of travel.

// ---- spec constants (addendum) ---------------------------------------------

export const SPEC = Object.freeze({
  trackWidth: 900,        // default corridor width, tape centre to tape centre
  narrowWidth: 600,       // narrowed corridor width
  taperAngleDeg: 45,      // narrowing taper angle
  tapeWidth: 50,          // green decorators tape
  droneBox: 250,          // per-drone bounding cube
  formationMin: 300,      // box formation centre-to-centre, per axis
  formationMax: 600,
  diamond: { width: [400, 600], length: [600, 800] },
  flightZ: 1000,          // default flight height
  flightBand: 200,        // ±band around default
  ceilingZ: 1500,         // hard max (kill switch above)
  minClearance: 200,      // per drone through any opening
  hurdle: {
    // Fig. 3: the drones pass UNDER a hanging wedge whose underside slopes
    // down in the direction of travel (green down-arrow on the slope), fly
    // level under its vertical rear "barrier", then climb OVER a floor-mounted
    // hill whose top face slopes back up (green up-arrow). Heights are our
    // interpretation of the schematic — the figure draws the barrier edge at
    // the 600 mm flight line; we lift it so a 250 mm drone at 600 mm keeps
    // ≥175 mm above and 225 mm below the structures.
    run: 400,                          // horizontal run of each 45° slope
    ceiling: { highZ: 1300, lowZ: 900 }, // hanging wedge underside, high end upstream; lowZ = barrier lower edge
    hill: { lowZ: 250, highZ: 650 },   // floor wedge top face, low end upstream
    underZ: 600,                       // target flight height under the barrier (Fig. 3)
    topZ: 1500,                        // gantry top = flight ceiling
    postSize: 50,                      // square gantry posts
    postOffset: 100,                   // posts sit this far outside the tape line
    board: { w: 600, h: 400 },         // arrow board on each slope
  },

})

// ---- generator config ---------------------------------------------------------

export const DEFAULTS = Object.freeze({
  seed: 1337,
  room: { w: 15000, d: 10000 },  // fit envelope (either orientation); null = unconstrained
  straight: [1000, 2500],        // connector straights between elements
  narrowLength: [1200, 2400],    // straight-while-narrowed run
  hurdleUnder: [800, 1200],      // level run between the two ramps
  bendAngle: [15, 45],           // gentle bend magnitude, rounded to 5°
  extraBends: [0, 3],            // random extra bends beyond the required L+R pair
  extraTurns: [0, 2],            // random extra 90° turns beyond the required L+R pair
  startBox: { w: 900, l: 1200 }, // holds 4 × 250 mm drones at ≤600 mm spacing (+ diamond 800 long)
  finishBox: { w: 900, l: 1200 },
  minGap: 600,                   // clear floor between non-adjacent corridor sections
  attempts: 400,                 // rejection-sampling budget per seed
  explore: 0.25,                 // chance a corner ignores the compaction heuristic
  sampleStep: 100,               // centreline sample spacing (mm)
})

// ---- PRNG (identical to racing-sim/src/sim/rand.js) ---------------------------

export function mulberry32(seed) {
  let a = seed >>> 0
  return function rand() {
    a |= 0
    a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const uni = (rand, [lo, hi]) => lo + rand() * (hi - lo)
const uniInt = (rand, [lo, hi]) => lo + Math.floor(rand() * (hi - lo + 1))
const round = (v, q) => Math.round(v / q) * q
const D2R = Math.PI / 180

// ---- public API -----------------------------------------------------------------

/**
 * generateCourse(config?) → course
 * Rejection-samples element sequences until one lays out without the corridor
 * folding onto itself and fits the room. Deterministic for a given config.
 */
export function generateCourse(overrides = {}) {
  const config = { ...DEFAULTS, ...overrides }
  const rand = mulberry32(config.seed)
  let last = null
  for (let attempt = 1; attempt <= config.attempts; attempt++) {
    const elements = buildSequence(rand, config)
    assignDirections(elements, config, rand)
    const course = layout(elements, config)
    course.attempt = attempt
    if (course.valid) return course
    last = course
  }
  // Give back the last failed attempt so callers can see why.
  last.valid = false
  return last
}

/** Element sequence: required obstacle set + random extras, shuffled, with
 *  connector straights between every pair and at both ends. */
export function buildSequence(rand, config) {
  // Corner directions are left undefined here; layout() assigns them with a
  // room-aware look-ahead while guaranteeing both directions of each type.
  const bend = () => ({ type: 'bend', angle: round(uni(rand, config.bendAngle), 5) })
  const turn = () => ({ type: 'turn', angle: 90 })
  const narrow = (side) => ({ type: 'narrow', side, length: round(uni(rand, config.narrowLength), 50) })
  const hurdle = () => ({ type: 'hurdle', under: round(uni(rand, config.hurdleUnder), 50) })

  const items = [bend(), bend(), turn(), turn(), narrow('right'), narrow('left'), narrow('both'), hurdle()]
  for (let i = uniInt(rand, config.extraBends); i > 0; i--) items.push(bend())
  for (let i = uniInt(rand, config.extraTurns); i > 0; i--) items.push(turn())
  // Fisher–Yates
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  const straight = () => ({ type: 'straight', length: round(uni(rand, config.straight), 50) })
  const seq = [straight()]
  for (const it of items) seq.push(it, straight())
  return seq
}

// ---- layout -----------------------------------------------------------------------

// Per straight-type element, the lateral tape offsets as a piecewise-linear
// profile [{d, offL, offR}] along the element (d from element start).
function profileOf(el) {
  const H = SPEC.trackWidth / 2, N = SPEC.narrowWidth / 2
  const one = SPEC.trackWidth - SPEC.narrowWidth          // 300: one-side lateral step
  const tan = Math.tan(SPEC.taperAngleDeg * D2R)
  if (el.type === 'narrow') {
    if (el.side === 'both') {
      const run = (one / 2) / tan
      return [{ d: 0, offL: H, offR: H }, { d: run, offL: N, offR: N },
        { d: run + el.length, offL: N, offR: N }, { d: 2 * run + el.length, offL: H, offR: H }]
    }
    const run = one / tan
    const L = el.side === 'left', R = el.side === 'right'
    return [{ d: 0, offL: H, offR: H },
      { d: run, offL: L ? H - one : H, offR: R ? H - one : H },
      { d: run + el.length, offL: L ? H - one : H, offR: R ? H - one : H },
      { d: 2 * run + el.length, offL: H, offR: H }]
  }
  const len = elementLength(el)
  return [{ d: 0, offL: H, offR: H }, { d: len, offL: H, offR: H }]
}

export function elementLength(el) {
  const tan = Math.tan(SPEC.taperAngleDeg * D2R)
  switch (el.type) {
    case 'straight': return el.length
    case 'narrow': return el.side === 'both'
      ? el.length + (SPEC.trackWidth - SPEC.narrowWidth) / tan
      : el.length + 2 * (SPEC.trackWidth - SPEC.narrowWidth) / tan
    case 'hurdle': return 2 * SPEC.hurdle.run + el.under
    default: return 0
  }
}

// Flight-height target along a hurdle element (Fig. 3): descend along the
// first ramp, level under, climb along the second ramp.
function hurdleZ(d, el) {
  const { run, underZ } = SPEC.hurdle
  const z0 = SPEC.flightZ
  if (d <= run) return z0 + (underZ - z0) * (d / run)
  if (d <= run + el.under) return underZ
  const t = Math.min(1, (d - run - el.under) / run)
  return underZ + (z0 - underZ) * t
}

/**
 * Assign a sign to every corner whose direction is still free. Each choice is
 * scored by laying out the following element with both signs and keeping the
 * one whose corridor stays clear of everything built so far and grows the
 * footprint least; a small exploration probability keeps courses varied.
 * The last free corners of each type are forced so both directions occur.
 * Mutates `elements` (angle becomes signed). Returns nothing.
 */
export function assignDirections(elements, config, rand) {
  const H = SPEC.trackWidth / 2
  const need = config.minGap + SPEC.tapeWidth
  const explore = config.explore ?? 0.25
  let x = 0, y = 0, h = 0
  const built = [] // committed run groups: [leftPts, rightPts]
  const rect = (x0, y0, hd, len) => {
    const t = { x: Math.cos(hd), y: Math.sin(hd) }, n = { x: -t.x * 0 - Math.sin(hd), y: Math.cos(hd) }
    const x1 = x0 + t.x * len, y1 = y0 + t.y * len
    return [[{ x: x0 + n.x * H, y: y0 + n.y * H }, { x: x1 + n.x * H, y: y1 + n.y * H }],
      [{ x: x0 - n.x * H, y: y0 - n.y * H }, { x: x1 - n.x * H, y: y1 - n.y * H }]]
  }
  // start box counts as the first built group
  const sb = rect(-config.startBox.l, 0, 0, config.startBox.l)
  built.push(sb)
  const pts = [...sb[0], ...sb[1]]
  const remaining = { bend: 0, turn: 0 }
  const seen = { bend: new Set(), turn: new Set() }
  for (const el of elements) {
    if (el.type === 'bend' || el.type === 'turn') {
      if (el.dir) seen[el.type].add(el.dir); else remaining[el.type]++
    }
  }
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i]
    if (el.type === 'bend' || el.type === 'turn') {
      let cands = [1, -1]
      if (!el.dir) {
        const missing = cands.filter((d) => !seen[el.type].has(d))
        if (missing.length && missing.length >= remaining[el.type]) cands = missing
        remaining[el.type]--
      } else cands = [el.dir]
      const next = elements[i + 1]
      const nextLen = next ? elementLength(next) : 0
      const scored = cands.map((d) => {
        const hd = h + d * Math.abs(el.angle) * D2R
        const r = rect(x, y, hd, nextLen)
        // clearance against everything except the run we're leaving
        let gap = Infinity
        for (let k = 0; k < built.length - 1; k++) gap = Math.min(gap, groupDistance({ pts: built[k] }, { pts: r }))
        const all = [...pts, ...r[0], ...r[1]]
        const b = boundsOf(all)
        const w = b.maxX - b.minX, dd = b.maxY - b.minY
        let over = 0
        if (config.room) over = Math.max(0, Math.min(Math.max(w - config.room.w, dd - config.room.d), Math.max(w - config.room.d, dd - config.room.w)))
        return { d, ok: gap >= need, score: w * dd + over * 1e6 }
      })
      const feasible = scored.filter((c) => c.ok)
      const pool = feasible.length ? feasible : scored
      pool.sort((a, b) => a.score - b.score)
      const pick = (pool.length > 1 && rand() < explore) ? pool[Math.floor(rand() * pool.length)] : pool[0]
      el.dir = pick.d
      el.angle = pick.d * Math.abs(el.angle)
      seen[el.type].add(pick.d)
      h += el.angle * D2R
      continue
    }
    const len = elementLength(el)
    const r = rect(x, y, h, len)
    built.push(r); pts.push(...r[0], ...r[1])
    x += Math.cos(h) * len; y += Math.sin(h) * len
  }
}

export function layout(elements, config) {
  const H = SPEC.trackWidth / 2
  // 1. walk the spine: vertices between straight-type elements, heading changes at corners
  let x = 0, y = 0, h = 0, s = 0
  const verts = [{ x, y, hIn: h, hOut: h, s }]
  const runs = []             // straight-type elements with pose + arc range
  for (const el of elements) {
    if (el.type === 'bend' || el.type === 'turn') {
      h += el.angle * D2R
      verts[verts.length - 1].hOut = h
      verts[verts.length - 1].corner = el
      continue
    }
    const len = elementLength(el)
    const run = { el, x0: x, y0: y, heading: h, len, s0: s, profile: profileOf(el), vi: verts.length - 1 }
    runs.push(run)
    x += Math.cos(h) * len; y += Math.sin(h) * len; s += len
    verts.push({ x, y, hIn: h, hOut: h, s })
  }
  const length = s

  // 2. tape edges: mitre at vertices, interior breakpoints inside elements
  const left = [], right = []
  const mitre = (v, off) => {
    const n1 = { x: -Math.sin(v.hIn), y: Math.cos(v.hIn) }
    const n2 = { x: -Math.sin(v.hOut), y: Math.cos(v.hOut) }
    const bx = n1.x + n2.x, by = n1.y + n2.y
    const bl = Math.hypot(bx, by) || 1
    const half = (v.hOut - v.hIn) / 2
    const k = off / Math.cos(half)
    return { x: v.x + (bx / bl) * k, y: v.y + (by / bl) * k }
  }
  runs.forEach((r, i) => {
    const v0 = verts[r.vi], v1 = verts[r.vi + 1]
    const n = { x: -Math.sin(r.heading), y: Math.cos(r.heading) }
    const t = { x: Math.cos(r.heading), y: Math.sin(r.heading) }
    r.left = [], r.right = []
    r.profile.forEach((p, k) => {
      let pl, pr
      if (k === 0) { pl = mitre(v0, p.offL); pr = mitre(v0, -p.offR) }
      else if (k === r.profile.length - 1) { pl = mitre(v1, p.offL); pr = mitre(v1, -p.offR) }
      else {
        const bx = r.x0 + t.x * p.d, by = r.y0 + t.y * p.d
        pl = { x: bx + n.x * p.offL, y: by + n.y * p.offL }
        pr = { x: bx - n.x * p.offR, y: by - n.y * p.offR }
      }
      r.left.push(pl); r.right.push(pr)
    })
    // share vertex points between consecutive runs (avoid duplicate tape ends)
    if (i === 0) { left.push(...r.left); right.push(...r.right) }
    else { left.push(...r.left.slice(1)); right.push(...r.right.slice(1)) }
  })

  // 3. start / finish boxes (tape rectangles butted onto the corridor ends)
  const first = runs[0], lastRun = runs[runs.length - 1]
  const boxAt = (px, py, heading, w, l, dir, name) => {
    const t = { x: Math.cos(heading), y: Math.sin(heading) }
    const n = { x: -t.x * 0 - Math.sin(heading), y: Math.cos(heading) }
    const cx = px + t.x * dir * l / 2, cy = py + t.y * dir * l / 2
    const c = (a, b) => ({ x: cx + t.x * a + n.x * b, y: cy + t.y * a + n.y * b })
    const corners = [c(-l / 2, w / 2), c(l / 2, w / 2), c(l / 2, -w / 2), c(-l / 2, -w / 2)]
    return { name, cx, cy, heading, w, l, corners }
  }
  const startBox = boxAt(first.x0, first.y0, first.heading, config.startBox.w, config.startBox.l, -1, 'start')
  const endV = verts[verts.length - 1]
  const finishBox = boxAt(endV.x, endV.y, lastRun.heading, config.finishBox.w, config.finishBox.l, 1, 'finish')

  // 4. tape segments (what gets laid on the floor)
  const tape = []
  const pushPoly = (pts, kind) => { for (let i = 0; i + 1 < pts.length; i++) tape.push({ a: pts[i], b: pts[i + 1], kind }) }
  pushPoly(left, 'left'); pushPoly(right, 'right')
  for (const b of [startBox, finishBox]) pushPoly([...b.corners, b.corners[0]], b.name)

  // 5. hurdles (overhead structures) with world pose
  const hurdles = runs.filter((r) => r.el.type === 'hurdle').map((r) => ({
    x: r.x0, y: r.y0, heading: r.heading, run: SPEC.hurdle.run, under: r.el.under,
    length: r.len, s: r.s0, width: SPEC.trackWidth,
  }))

  // 6. centreline for the sim: midpoint of the tape edges, width, target z
  const centreline = []
  for (const r of runs) {
    const t = { x: Math.cos(r.heading), y: Math.sin(r.heading) }
    const n = { x: -t.x * 0 - Math.sin(r.heading), y: Math.cos(r.heading) }
    const nS = Math.max(1, Math.round(r.len / config.sampleStep))
    for (let i = 0; i <= nS; i++) {
      if (i === nS && r !== lastRun) break // next run supplies this point
      const d = (i / nS) * r.len
      const { offL, offR } = interpProfile(r.profile, d)
      const mid = (offL - offR) / 2
      centreline.push({
        x: r.x0 + t.x * d + n.x * mid, y: r.y0 + t.y * d + n.y * mid,
        s: r.s0 + d, heading: r.heading, width: offL + offR,
        z: r.el.type === 'hurdle' ? hurdleZ(d, r.el) : SPEC.flightZ,
        element: r.el.type,
      })
    }
  }

  // 7. validation: bounds + no folding
  const allPts = [...left, ...right, ...startBox.corners, ...finishBox.corners]
  const bounds = boundsOf(allPts, SPEC.hurdle.postOffset + SPEC.hurdle.postSize + SPEC.tapeWidth)
  const ext = { w: bounds.maxX - bounds.minX, d: bounds.maxY - bounds.minY }
  const problems = []
  if (config.room) {
    const fits = (ext.w <= config.room.w && ext.d <= config.room.d) || (ext.w <= config.room.d && ext.d <= config.room.w)
    if (!fits) problems.push(`extent ${Math.round(ext.w)}×${Math.round(ext.d)} exceeds room ${config.room.w}×${config.room.d}`)
  }
  const groups = runs.map((r) => ({ id: r.el.type, pts: [r.left, r.right] }))
  groups.unshift({ id: 'start', pts: [[...startBox.corners, startBox.corners[0]]] })
  groups.push({ id: 'finish', pts: [[...finishBox.corners, finishBox.corners[0]]] })
  const need = config.minGap + SPEC.tapeWidth
  outer: for (let i = 0; i < groups.length; i++) {
    for (let j = i + 2; j < groups.length; j++) {
      const dmin = groupDistance(groups[i], groups[j])
      if (dmin < need) { problems.push(`${groups[i].id}#${i} vs ${groups[j].id}#${j}: gap ${Math.round(dmin)} < ${need}`); break outer }
    }
  }

  const tapeLength = tape.reduce((sum, seg) => sum + Math.hypot(seg.b.x - seg.a.x, seg.b.y - seg.a.y), 0)
  return {
    seed: config.seed, config, spec: SPEC, elements, valid: problems.length === 0, problems,
    length, tapeLength, bounds, extent: ext,
    verts, runs: runs.map(stripRun), left, right, tape, startBox, finishBox, hurdles, centreline,
    counts: countElements(elements),
  }
}

function stripRun(r) {
  return { type: r.el.type, el: r.el, x0: r.x0, y0: r.y0, heading: r.heading, len: r.len, s0: r.s0, profile: r.profile, left: r.left, right: r.right }
}

function interpProfile(profile, d) {
  for (let i = 0; i + 1 < profile.length; i++) {
    const a = profile[i], b = profile[i + 1]
    if (d <= b.d) {
      const t = b.d === a.d ? 0 : (d - a.d) / (b.d - a.d)
      return { offL: a.offL + (b.offL - a.offL) * t, offR: a.offR + (b.offR - a.offR) * t }
    }
  }
  const e = profile[profile.length - 1]
  return { offL: e.offL, offR: e.offR }
}

function countElements(elements) {
  const c = { straight: 0, bendL: 0, bendR: 0, turnL: 0, turnR: 0, narrowLeft: 0, narrowRight: 0, narrowBoth: 0, hurdle: 0 }
  for (const el of elements) {
    if (el.type === 'straight') c.straight++
    else if (el.type === 'bend') el.angle > 0 ? c.bendL++ : c.bendR++
    else if (el.type === 'turn') el.angle > 0 ? c.turnL++ : c.turnR++
    else if (el.type === 'narrow') c[el.side === 'both' ? 'narrowBoth' : el.side === 'left' ? 'narrowLeft' : 'narrowRight']++
    else if (el.type === 'hurdle') c.hurdle++
  }
  return c
}

// ---- geometry helpers -------------------------------------------------------------

function boundsOf(pts, pad = 0) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const p of pts) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y) }
  return { minX: minX - pad, minY: minY - pad, maxX: maxX + pad, maxY: maxY + pad }
}

function groupDistance(g1, g2) {
  let best = Infinity
  for (const p1 of g1.pts) for (const p2 of g2.pts)
    for (let i = 0; i + 1 < p1.length; i++) for (let j = 0; j + 1 < p2.length; j++)
      best = Math.min(best, segDist(p1[i], p1[i + 1], p2[j], p2[j + 1]))
  return best
}

function segDist(a, b, c, d) {
  if (segsIntersect(a, b, c, d)) return 0
  return Math.min(ptSegDist(a, c, d), ptSegDist(b, c, d), ptSegDist(c, a, b), ptSegDist(d, a, b))
}

function ptSegDist(p, a, b) {
  const vx = b.x - a.x, vy = b.y - a.y
  const L2 = vx * vx + vy * vy || 1e-9
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * vx + (p.y - a.y) * vy) / L2))
  return Math.hypot(p.x - (a.x + vx * t), p.y - (a.y + vy * t))
}

function segsIntersect(a, b, c, d) {
  const o = (p, q, r) => Math.sign((q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x))
  const o1 = o(a, b, c), o2 = o(a, b, d), o3 = o(c, d, a), o4 = o(c, d, b)
  return o1 !== o2 && o3 !== o4 && o1 !== 0 && o2 !== 0 && o3 !== 0 && o4 !== 0
}

// ---- human summary + OpenSCAD export -------------------------------------------------

export function describe(course) {
  const c = course.counts
  const lines = course.elements.map((el, i) => {
    switch (el.type) {
      case 'straight': return `${i + 1}. straight ${el.length} mm`
      case 'bend': return `${i + 1}. gentle bend ${Math.abs(el.angle)}° ${el.angle > 0 ? 'left' : 'right'}`
      case 'turn': return `${i + 1}. 90° turn ${el.angle > 0 ? 'left' : 'right'}`
      case 'narrow': return `${i + 1}. narrowing ${el.side} 900→600 mm, ${el.length} mm narrowed (${Math.round(elementLength(el))} mm total)`
      case 'hurdle': return `${i + 1}. overhead hurdle: 400 mm down-ramp, ${el.under} mm under at 600 mm, 400 mm up-ramp`
      default: return `${i + 1}. ${el.type}`
    }
  })
  return {
    seed: course.seed, valid: course.valid, attempt: course.attempt, problems: course.problems,
    courseLength_m: +(course.length / 1000).toFixed(2),
    tapeLength_m: +(course.tapeLength / 1000).toFixed(1),
    extent_m: `${(course.extent.w / 1000).toFixed(1)} × ${(course.extent.d / 1000).toFixed(1)}`,
    counts: c, elements: lines,
  }
}

/** OpenSCAD data file: `include <track_lib.scad>` + arrays + part switch. */
export function toScad(course, libPath = '../../../track/track_lib.scad') {
  const f = (v) => Math.round(v * 100) / 100
  const seg = course.tape.map((t) => `[${f(t.a.x)},${f(t.a.y)},${f(t.b.x)},${f(t.b.y)}]`).join(',\n  ')
  const hur = course.hurdles.map((h) => `[${f(h.x)},${f(h.y)},${f(h.heading)},${h.run},${h.under},${h.width}]`).join(',\n  ')
  const boxes = [course.startBox, course.finishBox].map((b) => `[${f(b.cx)},${f(b.cy)},${f(b.heading)},${b.w},${b.l}]`).join(',\n  ')
  const cl = course.centreline.map((p) => `[${f(p.x)},${f(p.y)},${f(p.z)}]`).join(',')
  const b = course.bounds
  return `// Generated by CAD/track/build.mjs — seed ${course.seed}. Do not edit; regenerate.
// part = "all" | "tape" | "hurdles" | "floor" | "flightpath"
part = "all";
include <${libPath}>

course_seed = ${course.seed};
course_bounds = [${f(b.minX)},${f(b.minY)},${f(b.maxX)},${f(b.maxY)}];
tape_segments = [
  ${seg}
];
boxes = [
  ${boxes}
];
hurdles = [
  ${hur}
];
flight_path = [${cl}];

course(part);
`
}
