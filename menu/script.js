(function () {
  "use strict";

  var STORAGE_KEY = "weixiaoguan_menu_v1";
  var LANG_KEY = "weixiaoguan_lang";
  var CLIP_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js";

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
      save: "Save",
      load: "Load",
      footer: "A meal of rice and tea · all is beauty",
      toggleLabel: "中文",
      cuisines: "Cuisines",
      all: "All",
      uncategorized: "Uncategorized",
      aiClassify: "AI Classify",
      aiLoad: "Loading AI model…",
      aiReady: "AI ready",
      aiNone: "Nothing to classify",
      aiDone: function (n) { return "Classified · " + n + " dishes"; },
      aiProgress: function (x, y) { return "Classifying · " + x + "/" + y; },
      aiUnavailable: "AI is unavailable — try again later",
      countLabel: function (n) { return "No. " + n; },
      deleteTitle: "Remove",
      selectCuisine: "Cuisine",
      toastNotImage: "Please choose an image",
      toastRemoved: "Removed",
      toastAdded: "Added to the menu",
      toastSaveFail: "Menu is full · export a backup, then clear",
      toastEmpty: "No dishes yet",
      toastSaved: "Menu saved",
      toastLoaded: function (n) { return "Menu loaded · " + n + " dishes"; },
      toastBadFile: "Invalid backup file"
    },
    zh: {
      title: "味 · 小館",
      subtitle: "一 餐 · 一 記",
      upload: "添 一 道 菜",
      namePlaceholder: "菜名 / 菜品名",
      add: "入 册",
      empty: "冊 上 尚 无 一 菜 · 静 候 佳 肴",
      emptyFilter: "此 類 尚 无 菜 品",
      save: "存 册",
      load: "启 册",
      footer: "一 茶 一 饭 · 皆 为 风 月",
      toggleLabel: "EN",
      cuisines: "菜 系",
      all: "全 部",
      uncategorized: "未 分 類",
      aiClassify: "AI 分 類",
      aiLoad: "載 入 模 型 · 請 稍 候",
      aiReady: "AI 已 就 緒",
      aiNone: "無 需 分 類",
      aiDone: function (n) { return "已 分 類 · " + n + " 道 菜"; },
      aiProgress: function (x, y) { return "分 類 中 · " + x + "/" + y; },
      aiUnavailable: "AI 暂 时 不 可 用 · 請 稍 後 再 試",
      countLabel: function (n) {
        var s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        return "第" + (n <= s.length ? s[n - 1] : n) + "味";
      },
      deleteTitle: "移除",
      selectCuisine: "分 類",
      toastNotImage: "須 為 圖 片",
      toastRemoved: "已 移 除",
      toastAdded: "入 冊 成 功",
      toastSaveFail: "冊 滿 了 · 請 存 冊 後 清 空",
      toastEmpty: "冊 上 无 菜",
      toastSaved: "已 存 冊",
      toastLoaded: function (n) { return "已 启 冊 · " + n + " 道 菜"; },
      toastBadFile: "冊 文 有 誤"
    }
  };

  var fileInput = document.getElementById("fileInput");
  var nameInput = document.getElementById("nameInput");
  var addBtn = document.getElementById("addBtn");
  var preview = document.getElementById("preview");
  var menuEl = document.getElementById("menu");
  var emptyEl = document.getElementById("empty");
  var exportBtn = document.getElementById("exportBtn");
  var importBtn = document.getElementById("importBtn");
  var importInput = document.getElementById("importInput");
  var toastEl = document.getElementById("toast");
  var langToggle = document.getElementById("langToggle");
  var cuisineList = document.getElementById("cuisineList");
  var aiBtn = document.getElementById("aiBtn");
  var aiStatus = document.getElementById("aiStatus");

  var lang = localStorage.getItem(LANG_KEY) === "zh" ? "zh" : "en";
  var filter = "all";
  var dishes = load();
  var pendingImage = null;

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

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dishes));
    } catch (e) {
      showToast("toastSaveFail");
    }
  }

  function showToast(key) {
    var msg = t(key);
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2400);
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

  function classifyImage(entry) {
    return clipPipeline(entry.image, CUISINES.map(function (c) { return c.prompt; }), {
      topk: CUISINES.length
    }).then(function (res) {
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
    });
  }

  function classifyAll() {
    var todo = dishes.filter(function (d) { return !d.cuisine; });
    if (!todo.length) {
      showToast("aiNone");
      return;
    }
    loadClip()
      .then(function () {
        return todo.reduce(function (p, d, i) {
          return p.then(function () {
            setStatus(t("aiProgress", i + 1, todo.length));
            return classifyImage(d).then(function () {
              save();
              renderSidebar();
              render();
            });
          });
        }, Promise.resolve());
      })
      .then(function () {
        setStatus("");
        showToast("aiDone", todo.length);
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

  function render() {
    menuEl.innerHTML = "";

    var filtered = filter === "all" ? dishes
      : filter === "uncategorized" ? dishes.filter(function (d) { return !d.cuisine; })
      : dishes.filter(function (d) { return d.cuisine === filter; });

    if (!dishes.length) {
      emptyEl.textContent = t("empty");
      emptyEl.style.display = "block";
    } else if (!filtered.length) {
      emptyEl.textContent = t("emptyFilter");
      emptyEl.style.display = "block";
    } else {
      emptyEl.style.display = "none";
    }

    filtered.forEach(function (dish, i) {
      var card = document.createElement("article");
      card.className = "card";
      card.style.setProperty("--tilt", (Math.random() * 2 - 1).toFixed(2) + "deg");

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
        save();
        renderSidebar();
        render();
      });

      var del = document.createElement("button");
      del.className = "card-delete";
      del.textContent = "✕";
      del.title = t("deleteTitle") + " " + dish.name;
      del.setAttribute("aria-label", t("deleteTitle") + " " + dish.name);
      del.addEventListener("click", function () {
        dishes.splice(dishes.indexOf(dish), 1);
        save();
        renderSidebar();
        render();
        showToast("toastRemoved");
      });

      card.appendChild(frame);
      card.appendChild(body);
      card.appendChild(select);
      card.appendChild(del);
      menuEl.appendChild(card);
    });
  }

  /* ---------- upload ---------- */

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
    var entry = {
      name: name,
      image: pendingImage,
      cuisine: classifyByName(name),
      ai: classifyByName(name) ? "keyword" : "",
      added: Date.now()
    };
    dishes.push(entry);
    save();
    renderSidebar();
    render();
    nameInput.value = "";
    fileInput.value = "";
    pendingImage = null;
    preview.classList.remove("show");
    updateAddBtn();
    if (!entry.cuisine && clipPipeline) {
      classifyImage(entry).then(function () {
        save();
        renderSidebar();
        render();
      });
    }
    showToast("toastAdded");
  }

  addBtn.addEventListener("click", addDish);
  aiBtn.addEventListener("click", classifyAll);

  /* ---------- backup ---------- */

  exportBtn.addEventListener("click", function () {
    if (!dishes.length) {
      showToast("toastEmpty");
      return;
    }
    var blob = new Blob([JSON.stringify(dishes, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "menu-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("toastSaved");
  });

  importBtn.addEventListener("click", function () {
    importInput.click();
  });

  importInput.addEventListener("change", function () {
    var file = importInput.files && importInput.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (!Array.isArray(data)) throw new Error("bad");
        data.forEach(function (d) {
          if (!d || typeof d.name !== "string" || typeof d.image !== "string") throw new Error("bad");
        });
        dishes = data;
        save();
        renderSidebar();
        render();
        showToast("toastLoaded", data.length);
      } catch (e) {
        showToast("toastBadFile");
      }
      importInput.value = "";
    };
    reader.readAsText(file);
  });

  langToggle.addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, lang);
    applyLang();
  });

  applyLang();
})();
