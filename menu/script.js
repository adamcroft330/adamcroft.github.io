(function () {
  "use strict";

  var SUPABASE_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
  var CLIP_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js";
  var CACHE_KEY = "weixiaoguan_menu_cache";
  var LANG_KEY = "weixiaoguan_lang";
  var LEGACY_KEY = "weixiaoguan_menu_v1";

  var CUISINES = [
    { id: "japanese",   prompt: "a traditional Japanese dish",        zh: "日 式", en: "Japanese" },
    { id: "korean",     prompt: "a traditional Korean dish",          zh: "韓 式", en: "Korean" },
    { id: "thai",       prompt: "a traditional Thai dish",            zh: "泰 式", en: "Thai" },
    { id: "vietnamese", prompt: "a traditional Vietnamese dish",      zh: "越 式", en: "Vietnamese" },
    { id: "indian",     prompt: "a traditional Indian dish",          zh: "印 式", en: "Indian" },
    { id: "chinese",    prompt: "a traditional Chinese dish",         zh: "中 式", en: "Chinese" },
    { id: "italian",    prompt: "a traditional Italian dish",         zh: "意 式", en: "Italian" },
    { id: "mexican",    prompt: "a traditional Mexican dish",         zh: "墨 式", en: "Mexican" },
    { id: "spanish",    prompt: "a traditional Spanish dish",         zh: "西 式", en: "Spanish" },
    { id: "greek",      prompt: "a traditional Greek dish",           zh: "希 式", en: "Greek" },
    { id: "french",     prompt: "a traditional French dish",          zh: "法 式", en: "French" },
    { id: "american",   prompt: "an American dish",                   zh: "美 式", en: "American" },
    { id: "middleeast", prompt: "a traditional Middle Eastern dish",  zh: "中 東", en: "Middle Eastern" }
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
      title: "味 · Menu",
      subtitle: "One Meal · One Memory",
      upload: "Add a Dish",
      namePlaceholder: "Dish name",
      add: "Add",
      empty: "No dishes yet · awaiting your first feast",
      emptyFilter: "No dishes in this category",
      footer: "A meal of rice and tea · all is beauty",
      toggleLabel: "中文",
      cuisines: "Cuisines",
      all: "All",
      uncategorized: "Uncategorized",
      aiLoad: "Loading AI model…",
      aiReady: "AI ready",
      aiDone: function (n) { return "Classified · " + n + " dishes"; },
      aiProgress: function (x, y) { return "Classifying · " + x + "/" + y; },
      aiUnavailable: "AI is unavailable — try again later",
      uploading: "Uploading…",
      uploadFail: "Upload failed — try again",
      syncLocal: "Upload local dishes",
      synced: function (n) { return "Uploaded · " + n + " dishes"; },
      offline: "Offline — showing the last saved copy",
      setupNeeded: "Fill in config.js with your Supabase details first",
      countLabel: function (n) { return "No. " + n; },
      deleteTitle: "Remove",
      selectCuisine: "Cuisine",
      toastNotImage: "Please choose an image",
      toastRemoved: "Removed",
      toastAdded: "Added to the menu",
      deleteAsk: "Remove this dish from the menu?"
    },
    zh: {
      title: "味 · 小館",
      subtitle: "一 餐 · 一 記",
      upload: "添 一 道 菜",
      namePlaceholder: "菜名 / 菜品名",
      add: "入 册",
      empty: "冊 上 尚 无 一 菜 · 静 候 佳 肴",
      emptyFilter: "此 類 尚 无 菜 品",
      footer: "一 茶 一 饭 · 皆 为 风 月",
      toggleLabel: "EN",
      cuisines: "菜 系",
      all: "全 部",
      uncategorized: "未 分 類",
      aiLoad: "載 入 模 型 · 請 稍 候",
      aiReady: "AI 已 就 緒",
      aiDone: function (n) { return "已 分 類 · " + n + " 道 菜"; },
      aiProgress: function (x, y) { return "分 類 中 · " + x + "/" + y; },
      aiUnavailable: "AI 暂 时 不 可 用 · 請 稍 後 再 試",
      uploading: "上 傳 中 · 請 稍 候",
      uploadFail: "上 傳 失 敗 · 請 重 試",
      syncLocal: "上 傳 本 機 菜 單",
      synced: function (n) { return "已 上 傳 · " + n + " 道 菜"; },
      offline: "無 法 連 接 · 已 顯 示 本 地 記 憶",
      setupNeeded: "請 先 在 config.js 填 入 Supabase 資 料",
      countLabel: function (n) {
        var s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        return "第" + (n <= s.length ? s[n - 1] : n) + "味";
      },
      deleteTitle: "移除",
      selectCuisine: "分 類",
      toastNotImage: "須 為 圖 片",
      toastRemoved: "已 移 除",
      toastAdded: "入 冊 成 功",
      deleteAsk: "將 此 菜 自 冊 中 移 除？"
    }
  };

  var cfg = (window.MENU_CONFIG || {});
  var configured = !!(cfg.supabaseUrl && cfg.supabaseKey);

  var fileInput = document.getElementById("fileInput");
  var nameInput = document.getElementById("nameInput");
  var addBtn = document.getElementById("addBtn");
  var preview = document.getElementById("preview");
  var menuEl = document.getElementById("menu");
  var emptyEl = document.getElementById("empty");
  var toastEl = document.getElementById("toast");
  var langToggle = document.getElementById("langToggle");
  var cuisineList = document.getElementById("cuisineList");
  var aiStatus = document.getElementById("aiStatus");
  var syncBtn = document.getElementById("syncBtn");

  var lang = localStorage.getItem(LANG_KEY) === "zh" ? "zh" : "en";
  var filter = "all";
  var dishes = [];
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

  function toastText(text) {
    toastEl.textContent = text;
    toastEl.classList.add("show");
    clearTimeout(toastText._t);
    toastText._t = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2400);
  }

  function showToast(key) {
    toastText(t(key));
  }

  function setStatus(msg) {
    if (msg) {
      aiStatus.textContent = msg;
      aiStatus.hidden = false;
    } else {
      aiStatus.hidden = true;
      aiStatus.textContent = "";
    }
  }

  function applyLang() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    var ph = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < ph.length; j++) {
      ph[j].setAttribute("placeholder", t(ph[j].getAttribute("data-i18n-placeholder")));
    }
    document.documentElement.lang = lang;
    document.body.classList.remove("lang-en", "lang-zh");
    document.body.classList.add("lang-" + lang);
    langToggle.textContent = t("toggleLabel");
    renderSidebar();
    render();
  }

  /* ---------- supabase ---------- */

  function initSupabase() {
    if (supabase) return Promise.resolve(supabase);
    if (!configured) {
      showToast("setupNeeded");
      return Promise.reject(new Error("not configured"));
    }
    return import(SUPABASE_URL).then(function (mod) {
      supabase = mod.createClient(cfg.supabaseUrl, cfg.supabaseKey);
      return supabase;
    });
  }

  function fetchDishes() {
    return supabase
      .from("dishes")
      .select("*")
      .order("created_at", { ascending: true })
      .then(function (res) {
        if (res.error) throw res.error;
        dishes = res.data || [];
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(dishes)); } catch (e) {}
        document.body.setAttribute("data-cloud", "ready");
        renderSidebar();
        render();
        return dishes;
      });
  }

  function boot() {
    if (!configured) {
      showToast("setupNeeded");
      renderSidebar();
      render();
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
        try {
          dishes = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
        } catch (e) {
          dishes = [];
        }
        document.body.setAttribute("data-cloud", "cache");
        showToast("offline");
        renderSidebar();
        render();
      });
  }

  function legacySyncBtn() {
    var legacy = [];
    try {
      legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)) || [];
    } catch (e) {}
    syncBtn.hidden = !(configured && legacy.length && !dishes.length);
    return legacy;
  }

  /* ---------- upload ---------- */

  function compressImage(dataUrl, maxSize) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        try {
          var scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          var w = Math.round(img.width * scale);
          var h = Math.round(img.height * scale);
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        } catch (e) {
          resolve(dataUrl);
        }
      };
      img.onerror = function () { resolve(dataUrl); };
      img.src = dataUrl;
    });
  }

  function dataUrlToBlob(dataUrl) {
    var parts = dataUrl.split(",");
    var mime = (parts[0].match(/data:(.*?);/) || [])[1] || "image/jpeg";
    var bin = atob(parts[1]);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  }

  function uploadAndAdd(entry) {
    return compressImage(entry.image, 1280)
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
        renderSidebar();
        render();
        showToast("toastAdded");
        classifyPending();
        return entry;
      })
      .catch(function (e) {
        entry.pending = false;
        var idx = dishes.indexOf(entry);
        if (idx !== -1) dishes.splice(idx, 1);
        renderSidebar();
        render();
        console.error("upload failed:", e);
        var detail = e && e.message && e.message.length < 60 ? " " + e.message : "";
        toastText(t("uploadFail") + detail);
        throw new Error("upload failed");
      });
  }

  fileInput.addEventListener("change", function () {
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("toastNotImage");
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      pendingImage = reader.result;
      preview.src = pendingImage;
      preview.alt = file.name;
      preview.classList.add("show");
      updateAddBtn();
    };
    reader.readAsDataURL(file);
  });

  nameInput.addEventListener("input", updateAddBtn);
  nameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addDish();
  });

  function updateAddBtn() {
    addBtn.disabled = !pendingImage || !nameInput.value.trim();
  }

  function addDish() {
    var name = nameInput.value.trim();
    if (!pendingImage || !name) return;
    var cuisine = classifyByName(name);
    var entry = {
      id: "local-" + Date.now(),
      name: name,
      image: pendingImage,
      cuisine: cuisine,
      ai: cuisine ? "keyword" : "",
      pending: true,
      created_at: new Date().toISOString()
    };
    dishes.push(entry);
    renderSidebar();
    render();
    nameInput.value = "";
    fileInput.value = "";
    pendingImage = null;
    preview.classList.remove("show");
    updateAddBtn();
    showToast("uploading");
    if (configured) {
      uploadAndAdd(entry);
    } else {
      setTimeout(function () {
        var i = dishes.indexOf(entry);
        if (i !== -1) dishes.splice(i, 1);
        renderSidebar();
        render();
        showToast("setupNeeded");
      }, 800);
    }
  }

  addBtn.addEventListener("click", addDish);

  syncBtn.addEventListener("click", function () {
    var legacy = [];
    try {
      legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)) || [];
    } catch (e) {}
    if (!legacy.length) return;
    var chain = Promise.resolve();
    legacy.forEach(function (d) {
      chain = chain.then(function () {
        var entry = {
          id: "local-" + Date.now(),
          name: d.name,
          image: d.image,
          cuisine: d.cuisine || classifyByName(d.name),
          ai: d.ai || (d.cuisine ? "" : "keyword"),
          pending: true,
          created_at: d.added ? new Date(d.added).toISOString() : new Date().toISOString()
        };
        dishes.push(entry);
        renderSidebar();
        render();
        return uploadAndAdd(entry);
      });
    });
    chain
      .then(function () {
        localStorage.removeItem(LEGACY_KEY);
        syncBtn.hidden = true;
        showToast("synced", legacy.length);
      })
      .catch(function () {});
  });

  /* ---------- cuisine classification ---------- */

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

  function loadClip() {
    if (clipPipeline) return Promise.resolve(clipPipeline);
    if (clipPromise) return clipPromise;
    setStatus(t("aiLoad"));
    clipPromise = import(CLIP_URL)
      .then(function (mod) {
        return mod.pipeline("zero-shot-image-classification", "Xenova/clip-vit-base-patch16", {
          progress_callback: function (p) {
            if (p && p.status === "progress" && p.file && p.total && p.file.indexOf("model") !== -1) {
              setStatus(t("aiLoad") + " · " + Math.round((p.loaded / p.total) * 100) + "%");
            }
          }
        });
      })
      .then(function (pipe) {
        clipPipeline = pipe;
        setStatus(t("aiReady"));
        return pipe;
      })
      .catch(function (e) {
        clipPromise = null;
        setStatus("");
        showToast("aiUnavailable");
        throw e;
      });
    return clipPromise;
  }

  function loadImageAsBlobUrl(url) {
    return fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("fetch failed");
        return r.blob();
      })
      .then(function (b) { return URL.createObjectURL(b); });
  }

  function classifyImage(entry) {
    if (entry.pending || entry.image.indexOf("data:") === 0) {
      return Promise.resolve();
    }
    return loadImageAsBlobUrl(entry.image).then(function (objUrl) {
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
        entry.aiScore = Math.round(prob * 100) / 100;
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
      }).catch(function (e) {
        URL.revokeObjectURL(objUrl);
        throw e;
      });
    });
  }

  function classifyPending() {
    var todo = dishes.filter(function (d) {
      return !d.cuisine && !d.pending && d.image && d.image.indexOf("data:") !== 0;
    });
    if (!todo.length) return Promise.resolve();
    return loadClip()
      .then(function () {
        return todo.reduce(function (p, d, i) {
          return p.then(function () {
            setStatus(t("aiProgress", i + 1, todo.length));
            return classifyImage(d).then(function () {
              renderSidebar();
              render();
              if (d.cuisine && configured) {
                return supabase
                  .from("dishes")
                  .update({ cuisine: d.cuisine, ai: "clip" })
                  .eq("id", d.id);
              }
            });
          });
        }, Promise.resolve());
      })
      .then(function () {
        setStatus("");
        var n = todo.filter(function (d) { return d.cuisine; }).length;
        if (n) toastText(t("aiDone", n));
      })
      .catch(function () {
        setStatus("");
      });
  }

  /* ---------- rendering ---------- */

  function renderSidebar() {
    var counts = { all: dishes.length, uncategorized: 0 };
    CUISINES.forEach(function (c) { counts[c.id] = 0; });
    dishes.forEach(function (d) {
      if (counts[d.cuisine] !== undefined) counts[d.cuisine]++;
      else counts.uncategorized++;
    });

    var items = [{ id: "all", label: t("all") }].concat(
      CUISINES
        .filter(function (c) { return counts[c.id] > 0; })
        .sort(function (a, b) { return counts[b.id] - counts[a.id]; })
        .map(function (c) { return { id: c.id, label: cname(c.id) }; }),
      counts.uncategorized > 0 ? [{ id: "uncategorized", label: t("uncategorized") }] : []
    );

    cuisineList.innerHTML = "";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "cuisine-item" + (filter === item.id ? " active" : "");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.addEventListener("click", function () {
        filter = item.id;
        renderSidebar();
        render();
      });
      var span = document.createElement("span");
      span.textContent = item.label;
      var count = document.createElement("span");
      count.className = "cuisine-count";
      count.textContent = counts[item.id];
      btn.appendChild(span);
      btn.appendChild(count);
      li.appendChild(btn);
      cuisineList.appendChild(li);
    });
  }

  var renderedIds = {};

  function tiltFor(id) {
    var s = String(id);
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 10000;
    return (((h % 240) / 100) - 1.2).toFixed(2) + "deg";
  }

  function render() {
    var wrap = document.getElementById("emptyWrap");
    menuEl.innerHTML = "";
    menuEl.appendChild(wrap);
    var nextIds = {};

    var filtered = filter === "all" ? dishes
      : filter === "uncategorized" ? dishes.filter(function (d) { return !d.cuisine; })
      : dishes.filter(function (d) { return d.cuisine === filter; });

    if (!dishes.length) {
      emptyEl.textContent = t("empty");
      wrap.style.display = "block";
    } else if (!filtered.length) {
      emptyEl.textContent = t("emptyFilter");
      wrap.style.display = "block";
    } else {
      wrap.style.display = "none";
    }

    filtered.forEach(function (dish, i) {
      nextIds[dish.id] = true;
      var card = document.createElement("article");
      card.className = "card" + (dish.pending ? " pending" : "") + (renderedIds[dish.id] ? "" : " new-anim");
      card.style.setProperty("--tilt", tiltFor(dish.id));

      var frame = document.createElement("div");
      frame.className = "card-frame";
      var img = document.createElement("img");
      img.className = "card-img";
      img.src = dish.image;
      img.alt = dish.name;
      img.loading = "lazy";
      frame.appendChild(img);

      var body = document.createElement("div");
      body.className = "card-body";
      var name = document.createElement("h3");
      name.className = "card-name";
      name.textContent = dish.name;

      var meta = document.createElement("div");
      meta.className = "card-meta";
      var count = document.createElement("span");
      count.className = "card-count";
      count.textContent = t("countLabel", i + 1);
      meta.appendChild(count);
      if (dish.cuisine) {
        var chip = document.createElement("span");
        chip.className = "cuisine-chip";
        chip.textContent = cname(dish.cuisine);
        meta.appendChild(chip);
      }
      body.appendChild(name);
      body.appendChild(meta);

      var select = document.createElement("select");
      select.className = "card-cuisine";
      select.title = t("selectCuisine");
      var noneOpt = document.createElement("option");
      noneOpt.value = "";
      noneOpt.textContent = t("uncategorized");
      select.appendChild(noneOpt);
      CUISINES.forEach(function (c) {
        var opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = cname(c.id);
        if (dish.cuisine === c.id) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener("change", function () {
        dish.cuisine = select.value;
        dish.ai = "manual";
        renderSidebar();
        render();
        if (configured) {
          supabase
            .from("dishes")
            .update({ cuisine: dish.cuisine, ai: "manual" })
            .eq("id", dish.id);
        }
      });

      var del = document.createElement("button");
      del.className = "card-delete";
      del.textContent = "✕";
      del.title = t("deleteTitle") + " " + dish.name;
      del.setAttribute("aria-label", t("deleteTitle") + " " + dish.name);
      del.addEventListener("click", function () {
        if (!confirm(t("deleteAsk"))) return;
        var idx = dishes.indexOf(dish);
        if (idx !== -1) dishes.splice(idx, 1);
        renderSidebar();
        render();
        if (configured) {
          supabase.from("dishes").delete().eq("id", dish.id).then(function () {});
        }
        showToast("toastRemoved");
      });

      card.appendChild(frame);
      card.appendChild(body);
      card.appendChild(select);
      card.appendChild(del);
      menuEl.appendChild(card);
    });

    renderedIds = nextIds;
  }

  langToggle.addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, lang);
    applyLang();
  });

  applyLang();
  legacySyncBtn();
  boot();
})();
