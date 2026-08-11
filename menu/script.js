(function () {
  "use strict";

  var SUPABASE_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
  var CLIP_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js";
  var CACHE_KEY = "weixiaoguan_menu_cache";
  var LANG_KEY = "weixiaoguan_lang";

  var CUISINES = [
    { id: "japanese",   prompt: "a traditional Japanese dish",        zh: "日式", en: "Japanese" },
    { id: "korean",     prompt: "a traditional Korean dish",          zh: "韓式", en: "Korean" },
    { id: "thai",       prompt: "a traditional Thai dish",            zh: "泰式", en: "Thai" },
    { id: "vietnamese", prompt: "a traditional Vietnamese dish",      zh: "越式", en: "Vietnamese" },
    { id: "indian",     prompt: "a traditional Indian dish",          zh: "印式", en: "Indian" },
    { id: "chinese",    prompt: "a traditional Chinese dish",         zh: "中式", en: "Chinese" },
    { id: "italian",    prompt: "a traditional Italian dish",         zh: "意式", en: "Italian" },
    { id: "mexican",    prompt: "a traditional Mexican dish",         zh: "墨式", en: "Mexican" },
    { id: "spanish",    prompt: "a traditional Spanish dish",         zh: "西式", en: "Spanish" },
    { id: "greek",      prompt: "a traditional Greek dish",           zh: "希式", en: "Greek" },
    { id: "french",     prompt: "a traditional French dish",          zh: "法式", en: "French" },
    { id: "american",   prompt: "an American dish",                   zh: "美式", en: "American" },
    { id: "middleeast", prompt: "a traditional Middle Eastern dish",  zh: "中東", en: "Middle Eastern" }
  ];

  var KEYWORDS = {
    japanese: ["sushi", "sashimi", "ramen", "udon", "soba", "tempura", "teriyaki", "yakitori", "okonomiyaki", "takoyaki", "miso", "gyoza", "katsu", "karaage", "donburi", "bento", "edamame", "matcha", "onigiri", "nigiri", "maki", "sukiyaki", "shabu", "tonkotsu", "unagi", "tamagoyaki", "kaisendon", "chirashi"],
    korean: ["kimchi", "bibimbap", "bulgogi", "tteokbokki", "japchae", "kimbap", "mandu", "samgyeopsal", "soondubu", "galbi", "banchan", "jeon", "dak galbi", "korean bbq"],
    thai: ["pad thai", "pad see ew", "tom yum", "tom kha", "massaman", "green curry", "red curry", "yellow curry", "basil chicken", "som tam", "mango sticky rice", "larb", "boat noodles", "satay"],
    vietnamese: ["pho", "banh mi", "banh xeo", "goi cuon", "fresh roll", "nem", "bun cha", "bun bo", "com tam", "banh cuon", "bahn mi", "bah mi"],
    indian: ["curry", "tikka", "masala", "naan", "biryani", "samosa", "tandoori", "vindaloo", "korma", "saag", "paneer", "dal", "butter chicken", "chutney", "papadum", "dosa", "idli", "chaat", "lassi", "gulab jamun", "jalebi", "pakora", "rogan josh", "makhani", "palak"],
    chinese: ["dumpling", "wonton", "bao", "baozi", "fried rice", "chow mein", "lo mein", "mapo", "kung pao", "gong bao", "spring roll", "egg roll", "char siu", "sweet and sour", "peking duck", "szechuan", "sichuan", "dim sum", "bok choy", "hoisin", "xiaolongbao", "congee", "zhajiang", "dan dan", "chow fun", "general tso", "orange chicken", "sesame chicken", "century egg", "scallion pancake", "hot pot", "hotpot"],
    italian: ["pizza", "spaghetti", "pasta", "tagliatelle", "fettuccine", "linguine", "penne", "rigatoni", "macaroni", "lasagna", "lasagne", "risotto", "gnocchi", "ravioli", "tortellini", "carbonara", "bolognese", "arrabiata", "pesto", "margherita", "marinara", "tiramisu", "cannoli", "bruschetta", "focaccia", "calzone", "ossobuco", "minestrone", "alfredo", "parmesan", "prosciutto", "mozzarella", "gelato", "panzanella", "saltimbocca", "cacio", "caprese"],
    mexican: ["taco", "burrito", "quesadilla", "enchilada", "nachos", "guacamole", "salsa", "fajita", "tamale", "mole", "carnitas", "elote", "pozole", "tostada", "pico de gallo", "huevos rancheros", "al pastor", "carnitas"],
    spanish: ["paella", "tapas", "gazpacho", "patatas bravas", "jamon", "albondigas", "fideua", "pintxos", "croquetas", "sangria", "churros", "tortilla espanola"],
    greek: ["gyro", "souvlaki", "tzatziki", "moussaka", "spanakopita", "baklava", "feta", "dolma", "avgolemono", "saganaki", "horiatiki", "greek salad"],
    french: ["croissant", "crepe", "baguette", "quiche", "ratatouille", "bouillabaisse", "coq au vin", "escargot", "foie gras", "souffle", "mousse", "macaron", "croque", "confit", "cassoulet", "tarte", "brie", "camembert", "tartine", "pain au chocolat"],
    american: ["burger", "fries", "mac and cheese", "hot dog", "pulled pork", "fried chicken", "pancake", "waffle", "wings", "buffalo", "corn dog", "tater tots", "smashburger", "milkshake", "brownie", "cupcake", "doughnut", "donut", "club sandwich", "reuben", "philly", "cobb salad", "caesar salad", "sliders", "ribs", "cornbread", "apple pie", "bbq"],
    middleeast: ["hummus", "falafel", "shawarma", "tabbouleh", "baba ganoush", "kofta", "kebab", "pita", "manakeesh", "fattoush", "muhammara", "knafeh", "halva"]
  };

  var I18N = {
    en: {
      storeName: "Garden Cottage Kitchen",
      catAll: "All",
      dishNamePlaceholder: "Dish name",
      cuisineLabel: "Cuisine",
      addToMenu: "Add to Menu",
      shareTitle: "Add a dish to the garden menu",
      photoHint: "Tap to choose a photo",
      emptyMenu: "The garden menu is empty — add your first dish",
      emptyMenuBtn: "Add a Dish",
      addFirst: "Add the first dish",
      toastAdded: "Added to the menu",
      toastAddedFail: "Couldn't add — try again",
      toastRemoved: "Removed",
      uploading: "Uploading…",
      setupNeeded: "Fill in config.js first",
      offline: "Offline — showing the saved copy",
      toastNotImage: "Please choose a photo",
      classifiedAs: function (n) { return "Classified as " + n; },
      aiLoad: "Loading the AI garden-keeper…",
      aiReady: "AI ready",
      aiProgress: function (x, y) { return "Classifying " + x + "/" + y; },
      aiDone: function (n) { return "Classified " + n + " dish" + (n === 1 ? "" : "es"); },
      aiUnavailable: "AI is unavailable — try again later",
      deleteAsk: "Remove this dish from the menu?"
    },
    zh: {
      storeName: "花園小屋廚房",
      catAll: "全部",
      dishNamePlaceholder: "菜名",
      cuisineLabel: "菜系",
      addToMenu: "加入菜單",
      shareTitle: "為花園菜單添一道菜",
      photoHint: "點擊選擇照片",
      emptyMenu: "花園菜單尚空——添上第一道菜吧",
      emptyMenuBtn: "加一道菜",
      addFirst: "加入第一道菜",
      toastAdded: "已加入菜單",
      toastAddedFail: "未能加入——請重試",
      toastRemoved: "已移除",
      uploading: "上傳中…",
      setupNeeded: "請先填妥 config.js",
      offline: "離線——顯示已存副本",
      toastNotImage: "請選擇照片",
      classifiedAs: function (n) { return "已分類為" + n; },
      aiLoad: "AI 園丁載入中…",
      aiReady: "AI 就緒",
      aiProgress: function (x, y) { return "分類中 " + x + "/" + y; },
      aiDone: function (n) { return "已分類 " + n + " 道菜"; },
      aiUnavailable: "AI 暫不可用",
      deleteAsk: "將此菜從菜單移除？"
    }
  };

  var cfg = (window.MENU_CONFIG || {});
  var configured = !!(cfg.supabaseUrl && cfg.supabaseKey);

  var el = {};
  ["langToggle", "catSidebar", "foodList", "fabAdd", "mask", "shareSheet", "photoPick",
   "photoPlus", "preview", "photoHint", "fileInput", "nameInput", "cuisineSelect",
   "addBtn", "toast"].forEach(function (id) {
    el[id] = document.getElementById(id);
  });

  var lang = localStorage.getItem(LANG_KEY) === "zh" ? "zh" : "en";
  var dishes = [];
  var filter = "";
  var pendingImage = null;
  var supabase = null;
  var clipPipeline = null;
  var clipPromise = null;

  function t(key) {
    var v = I18N[lang][key];
    return typeof v === "function" ? v.apply(null, [].slice.call(arguments, 1)) : v;
  }

  function cname(id) {
    for (var i = 0; i < CUISINES.length; i++) {
      if (CUISINES[i].id === id) return CUISINES[i][lang] || CUISINES[i].en;
    }
    return id;
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function toastText(text) {
    el.toast.textContent = text;
    el.toast.classList.add("show");
    clearTimeout(toastText._t);
    toastText._t = setTimeout(function () { el.toast.classList.remove("show"); }, 2400);
  }

  function showToast(key) { toastText(t(key)); }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (n) {
      n.setAttribute("placeholder", t(n.getAttribute("data-i18n-placeholder")));
    });
    document.documentElement.lang = lang;
    el.langToggle.textContent = lang === "en" ? "中文" : "EN";
    renderSidebar();
    renderFood();
    fillCuisineSelect();
  }

  /* ---------- supabase ---------- */

  function initSupabase() {
    if (supabase) return Promise.resolve(supabase);
    if (!configured) return Promise.reject(new Error("not configured"));
    return import(SUPABASE_URL).then(function (mod) {
      supabase = mod.createClient(cfg.supabaseUrl, cfg.supabaseKey);
      return supabase;
    });
  }

  function fetchDishes() {
    return supabase.from("dishes").select("*").order("created_at", { ascending: false })
      .then(function (res) {
        if (res.error) throw res.error;
        dishes = res.data || [];
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(dishes)); } catch (e) {}
        document.body.setAttribute("data-cloud", "ready");
        afterData();
        return dishes;
      });
  }

  function afterData() {
    renderSidebar();
    renderFood();
  }

  function boot() {
    if (!configured) {
      showToast("setupNeeded");
      afterData();
      return;
    }
    initSupabase()
      .then(function () {
        return supabase
          .channel("menu-live")
          .on("postgres_changes", { event: "*", schema: "public", table: "dishes" }, function () {
            fetchDishes().catch(function () {});
          })
          .subscribe();
      })
      .then(fetchDishes)
      .catch(function () {
        try { dishes = JSON.parse(localStorage.getItem(CACHE_KEY)) || []; } catch (e) { dishes = []; }
        document.body.setAttribute("data-cloud", "cache");
        showToast("offline");
        afterData();
      });
  }

  /* ---------- sidebar & food list ---------- */

  function renderSidebar() {
    var counts = { "": 0 };
    CUISINES.forEach(function (c) { counts[c.id] = 0; });
    dishes.forEach(function (d) {
      counts[""]++;
      if (counts[d.cuisine] != null) counts[d.cuisine]++;
    });
    var cats = [{ id: "", label: t("catAll") }].concat(CUISINES.map(function (c) {
      return { id: c.id, label: c[lang] || c.en };
    }));
    el.catSidebar.innerHTML = "";
    cats.forEach(function (c) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-item" + (filter === c.id ? " active" : "");
      btn.innerHTML = esc(c.label) + '<span class="cat-count">' + counts[c.id] + "</span>";
      btn.addEventListener("click", function () {
        filter = c.id;
        renderSidebar();
        renderFood();
      });
      el.catSidebar.appendChild(btn);
    });
  }

  function emojiFor(d) {
    var map = {
      japanese: "🍣", korean: "🍲", thai: "🍜", vietnamese: "🍜", indian: "🍛",
      chinese: "🥟", italian: "🍝", mexican: "🌮", spanish: "🥘", greek: "🥙",
      french: "🥐", american: "🍔", middleeast: "🧆"
    };
    return map[d.cuisine] || "🍽";
  }

  function renderFood() {
    var list = filter ? dishes.filter(function (d) { return d.cuisine === filter; }) : dishes.slice();
    el.foodList.innerHTML = "";

    if (!dishes.length) {
      var e1 = document.createElement("div");
      e1.className = "list-empty";
      e1.innerHTML =
        '<button class="list-empty-btn" type="button"><span>✚</span> ' + esc(t("emptyMenuBtn")) + "</button>";
      e1.querySelector("button").addEventListener("click", openShareSheet);
      el.foodList.appendChild(e1);
      return;
    }
    if (!list.length) {
      var e2 = document.createElement("div");
      e2.className = "list-empty small";
      e2.textContent = "· · ·";
      el.foodList.appendChild(e2);
      return;
    }

    list.forEach(function (d) {
      var item = document.createElement("div");
      item.className = "dish-card";
      item.innerHTML =
        '<div class="garden">' + emojiFor(d) + "</div>" +
        '<img class="dish-img" src="' + esc(d.image) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<div class="dish-copy">' +
          '<div class="dish-name">' + esc(d.name) + "</div>" +
          (d.cuisine ? '<div class="dish-cuisine">' + esc(cname(d.cuisine)) + "</div>" : "") +
        "</div>" +
        '<button class="dish-del" type="button" title="Remove">✕</button>';
      item.querySelector(".dish-del").addEventListener("click", function () {
        if (!confirm(t("deleteAsk"))) return;
        dishes.splice(dishes.indexOf(d), 1);
        renderSidebar();
        renderFood();
        if (configured) supabase.from("dishes").delete().eq("id", d.id).then(function () {});
        toastText(t("toastRemoved"));
      });
      el.foodList.appendChild(item);
    });
  }

  /* ---------- sheets ---------- */

  var openSheetEl = null;

  function openSheet(sheet) {
    el.mask.hidden = false;
    sheet.hidden = false;
    requestAnimationFrame(function () { sheet.classList.add("open"); });
    openSheetEl = sheet;
  }

  function closeSheet(sheet, instant) {
    sheet.classList.remove("open");
    if (openSheetEl === sheet) openSheetEl = null;
    var done = function () {
      sheet.hidden = true;
      if (!openSheetEl) el.mask.hidden = true;
    };
    if (instant || !sheet.classList.contains("open")) done();
    else setTimeout(done, 320);
  }

  el.mask.addEventListener("click", function () {
    if (openSheetEl) closeSheet(openSheetEl);
  });

  function openShareSheet() {
    openSheet(el.shareSheet);
    updateAddBtn();
  }

  /* ---------- upload / add dish ---------- */

  function classifyByName(name) {
    var n = (" " + name + " ").toLowerCase();
    for (var i = 0; i < CUISINES.length; i++) {
      var kws = KEYWORDS[CUISINES[i].id] || [];
      for (var j = 0; j < kws.length; j++) {
        if (n.indexOf(kws[j]) !== -1) return CUISINES[i].id;
      }
    }
    return "";
  }

  function fillCuisineSelect() {
    el.cuisineSelect.innerHTML = "";
    var auto = document.createElement("option");
    auto.value = "";
    auto.textContent = "Auto · AI";
    el.cuisineSelect.appendChild(auto);
    CUISINES.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c.id;
      o.textContent = c[lang] || c.en;
      el.cuisineSelect.appendChild(o);
    });
  }

  function resetShareSheet() {
    pendingImage = null;
    el.fileInput.value = "";
    el.preview.src = "";
    el.preview.hidden = true;
    el.photoPlus.hidden = false;
    el.photoHint.hidden = false;
    el.nameInput.value = "";
    el.cuisineSelect.value = "";
    updateAddBtn();
  }

  function updateAddBtn() {
    el.addBtn.disabled = !pendingImage || !el.nameInput.value.trim();
  }

  function addDish() {
    el.addBtn.disabled = true;
    el.addBtn.textContent = t("uploading");
    var name = el.nameInput.value.trim();
    if (!pendingImage || !name) { el.addBtn.disabled = false; el.addBtn.textContent = t("addToMenu"); return; }
    var manual = el.cuisineSelect.value;
    var kw = classifyByName(name);
    var entry = {
      id: "local-" + Date.now(),
      name: name,
      image: pendingImage,
      cuisine: manual || kw,
      ai: manual ? "manual" : (kw ? "keyword" : ""),
      pending: true,
      created_at: new Date().toISOString()
    };
    dishes.unshift(entry);
    try { renderSidebar(); } catch (e) {}
    try { renderFood(); } catch (e) {}
    toastText(t("uploading"));
    closeSheet(el.shareSheet);
    resetShareSheet();
    if (!configured) {
      var i = dishes.indexOf(entry);
      if (i !== -1) dishes.splice(i, 1);
      try { renderFood(); } catch (e) {}
      showToast("setupNeeded");
      return;
    }
    uploadAndAdd(entry, function ok() { el.addBtn.disabled = false; el.addBtn.textContent = t("addToMenu"); }, function fail() { el.addBtn.disabled = false; el.addBtn.textContent = t("addToMenu"); });
  }

  function uploadAndAdd(entry, done, fail) {
    compressImage(entry.image, 1280)
      .then(function (small) {
        entry.image = small;
        var path = "dishes/" + Date.now() + "-" + Math.random().toString(36).slice(2, 8) + ".jpg";
        return supabase.storage.from("dishes").upload(path, dataUrlToBlob(small), { contentType: "image/jpeg" });
      })
      .then(function (res) {
        if (res.error) throw res.error;
        var url = supabase.storage.from("dishes").getPublicUrl(res.data.path).data.publicUrl;
        return supabase
          .from("dishes")
          .insert({ name: entry.name, image_url: url, cuisine: entry.cuisine, ai: entry.ai })
          .select();
      })
      .then(function (res) {
        if (res.error) throw res.error;
        var row = res.data && res.data[0];
        if (row) {
          entry.id = row.id;
          entry.image = row.image_url;
          entry.created_at = row.created_at;
        }
        entry.pending = false;
        var i = dishes.indexOf(entry);
        if (i !== -1) dishes[i] = entry;
        else dishes.unshift(entry);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(dishes)); } catch (e) {}
        try { renderSidebar(); } catch (e) {}
        try { renderFood(); } catch (e) {}
        toastText(t("toastAdded"));
        if (done) done();
        classifyPending(entry);
        return entry;
      })
      .catch(function (e) {
        var i = dishes.indexOf(entry);
        if (i !== -1) dishes.splice(i, 1);
        try { renderFood(); } catch (e) {}
        console.error("upload failed:", e);
        var detail = e && e.message && e.message.length < 60 ? " " + e.message : "";
        toastText(t("toastAddedFail") + detail);
        if (fail) fail();
      });
  }

  function compressImage(dataUrl, maxSize) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        try {
          var scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          var w = Math.round(img.width * scale);
          var h = Math.round(img.height * scale);
          if (w < 1) w = 1;
          if (h < 1) h = 1;
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        } catch (e) { resolve(makeFallbackImage(maxSize)); }
      };
      img.onerror = function () { resolve(makeFallbackImage(maxSize)); };
      img.src = dataUrl;
    });
  }

  function makeFallbackImage(size) {
    var c = document.createElement("canvas");
    c.width = size;
    c.height = Math.round(size * 0.75);
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#e5dccb";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#8b7a66";
    ctx.font = Math.round(size * 0.12) + "px serif";
    ctx.textAlign = "center";
    ctx.fillText("✦", c.width / 2, c.height / 2 + Math.round(size * 0.04));
    return c.toDataURL("image/jpeg", 0.85);
  }

  function dataUrlToBlob(dataUrl) {
    var parts = dataUrl.split(",");
    var mime = (parts[0].match(/data:(.*?);/) || [])[1] || "image/jpeg";
    var bin = atob(parts[1]);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  }

  /* ---------- AI classification ---------- */

  function loadClip() {
    if (clipPipeline) return Promise.resolve(clipPipeline);
    if (clipPromise) return clipPromise;
    clipPromise = import(CLIP_URL)
      .then(function (mod) {
        return mod.pipeline("zero-shot-image-classification", "Xenova/clip-vit-base-patch16");
      })
      .then(function (pipe) {
        clipPipeline = pipe;
        return pipe;
      })
      .catch(function (e) {
        clipPromise = null;
        showToast("aiUnavailable");
        throw e;
      });
    return clipPromise;
  }

  function classifyImage(entry) {
    if (entry.pending || entry.image.indexOf("data:") === 0 || entry.ai === "manual") {
      return Promise.resolve();
    }
    return fetch(entry.image).then(function (r) {
      if (!r.ok) throw new Error("fetch failed");
      return r.blob();
    }).then(function (b) { return URL.createObjectURL(b); })
      .then(function (objUrl) {
        return clipPipeline(objUrl, CUISINES.map(function (c) { return c.prompt; }), {
          topk: CUISINES.length
        }).then(function (res) {
          URL.revokeObjectURL(objUrl);
          var sum = 0;
          var i;
          for (i = 0; i < res.length; i++) sum += Math.exp(res[i].score);
          var best = res[0];
          var prob = sum > 0 ? Math.exp(best.score) / sum : 0;
          entry.ai = "clip";
          var id = best.label.indexOf("Japanese") !== -1 ? "japanese"
            : best.label.indexOf("Korean") !== -1 ? "korean"
            : best.label.indexOf("Thai") !== -1 ? "thai"
            : best.label.indexOf("Vietnamese") !== -1 ? "vietnamese"
            : best.label.indexOf("Indian") !== -1 ? "indian"
            : best.label.indexOf("Chinese") !== -1 ? "chinese"
            : best.label.indexOf("Italian") !== -1 ? "italian"
            : best.label.indexOf("Mexican") !== -1 ? "mexican"
            : best.label.indexOf("Spanish") !== -1 ? "spanish"
            : best.label.indexOf("Greek") !== -1 ? "greek"
            : best.label.indexOf("French") !== -1 ? "french"
            : best.label.indexOf("American") !== -1 ? "american"
            : best.label.indexOf("Middle Eastern") !== -1 ? "middleeast"
            : "";
          entry.cuisine = prob >= 0.25 ? id : "";
          renderFood();
          renderSidebar();
        }).catch(function (e) {
          URL.revokeObjectURL(objUrl);
          throw e;
        });
      });
  }

  function classifyPending(focus) {
    var todo = dishes.filter(function (d) {
      return !d.cuisine && !d.pending && d.image && d.image.indexOf("data:") !== 0;
    });
    if (!todo.length) return Promise.resolve();
    return loadClip()
      .then(function () {
        return todo.reduce(function (p, d, i) {
          return p.then(function () {
            return classifyImage(d).then(function () {
              if (d.cuisine && configured) {
                return supabase.from("dishes").update({ cuisine: d.cuisine, ai: "clip" }).eq("id", d.id);
              }
            });
          });
        }, Promise.resolve());
      })
      .then(function () {
        if (focus && focus.cuisine && focus.ai === "clip") {
          toastText(t("classifiedAs", cname(focus.cuisine)));
        } else {
          var n = todo.filter(function (d) { return d.cuisine; }).length;
          if (n) toastText(t("aiDone", n));
        }
      })
      .catch(function () {});
  }

  /* ---------- handlers ---------- */

  el.langToggle.addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, lang);
    applyLang();
  });

  el.fabAdd.addEventListener("click", openShareSheet);

  el.photoPick.addEventListener("click", function () { el.fileInput.click(); });

  el.fileInput.addEventListener("change", function () {
    var file = el.fileInput.files && el.fileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("toastNotImage");
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      pendingImage = reader.result;
      el.preview.src = pendingImage;
      el.preview.hidden = false;
      el.photoPlus.hidden = true;
      el.photoHint.hidden = true;
      updateAddBtn();
    };
    reader.readAsDataURL(file);
  });

  el.nameInput.addEventListener("input", updateAddBtn);
  el.nameInput.addEventListener("keydown", function (e) { if (e.key === "Enter") addDish(); });

  el.addBtn.addEventListener("click", addDish);

  fillCuisineSelect();
  applyLang();
  boot();
})();