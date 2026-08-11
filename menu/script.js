(function () {
  "use strict";

  var SUPABASE_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
  var CLIP_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js";
  var CACHE_KEY = "weixiaoguan_menu_cache";
  var LANG_KEY = "weixiaoguan_lang";
  var NAME_KEY = "weixiaoguan_name";
  var LEGACY_KEY = "weixiaoguan_menu_v1";
  var WISHES_KEY = "weixiaoguan_wishes_local";

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

  var BUCKET_KW = {
    dessert: ["dessert", "cake", "pudding", "tart", "crumble", "pie", "scone", "trifle", "eton", "cheesecake", "brownie", "cookie", "biscuit", "ice cream", "gelato", "tiramisu", "pastry", "croissant", "doughnut", "donut", "cupcake", "muffin", "pavlova", "custard", "victoria", "sponge", "souffle", "macaron", "toffee", "jam roly", "profiterole", "mousse"],
    drink: ["drink", "juice", "lemonade", "smoothie", "milkshake", "soda", "pop", "tea", "coffee", "latte", "cappuccino", "fizz", "cider", "beer", "ale", "wine", "cooler", "punch", "elderflower", "spritz", "squash", "espresso", "chai", "mocha"],
    snack: ["snack", "crisps", "chips", "popcorn", "nuts", "pretzel", "toast", "sandwich", "toastie", "scotch egg", "sausage roll", "pork pie", "samosa", "spring roll", "fries", "wedges", "bread", "roll", "bun", "crackers", "cheese board", "olives", "crostini", "bruschetta", "nibbles"]
  };

  var I18N = {
    en: {
      storeName: "Garden Cottage Kitchen",
      storeLoc: "Willow Lane · The Village",
      homeEyebrow: "The Garden Cottage",
      homeTitle: "What shall we eat when you visit?",
      homeSub: "Add the dishes you fancy — we'll take the hint",
      shareDish: "Add a Dish",
      dineIn: "Dine In",
      takeaway: "Picnic",
      delivery: "Delivered",
      memberEyebrow: "The Cottage Circle",
      memberTitle: "The family guest book",
      memberSub: "Everyone's wishes, all in one place",
      openWishlist: "Wishlist",
      openWishlistShort: "Wishlist",
      tabHome: "Home",
      tabOrder: "Menu",
      tabOrders: "Wishes",
      tabMine: "Mine",
      couponText: "New here? Add your name once, then wish away",
      couponClaim: "Name",
      searchPlaceholder: "Search the menu…",
      catBest: "Best Seller",
      catPopular: "Popular Picks",
      catDesserts: "Handmade Desserts",
      catDrinks: "Fruit Drinks",
      catSnacks: "Snacks",
      wishBtn: "I'd like this",
      wishedBtn: "Wishlisted ✓",
      wantsSuffix: function (n) { return n + (n === 1 ? " wants this" : " want this"); },
      portionLabel: "Portion",
      sizeClassic: "Classic",
      sizeGenerous: "Generous",
      qtyLabel: "How many does it feed?",
      addToWishlist: "Add to Wishlist",
      shareList: "Share the List",
      cartTitle: "The Wishlist",
      cartTotal: "Everyone's wishes",
      nameTitle: "Who's wishing today?",
      nameNote: "Your name stays on this device, so the kitchen knows whose wishes are whose.",
      namePlaceholder: "Your name",
      nameSave: "Save",
      shareTitle: "Add a dish to the garden menu",
      photoHint: "Tap to choose a photo",
      dishNamePlaceholder: "Dish name",
      cuisineLabel: "Cuisine",
      addToMenu: "Add to Menu",
      viewWishlist: "View Wishlist",
      emptyMenu: "The garden menu is empty — add your first dish",
      emptyMenuBtn: "Add a Dish",
      stageNote: "Grown, cooked & shared from our little cottage garden",
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
      syncLocal: "Upload local dishes",
      synced: function (n) { return "Uploaded " + n + " dishes"; },
      wishAdded: function (n) { return "Added — " + n + " want" + (n === 1 ? "s" : "") + " this"; },
      wishRemoved: "Removed from your wishes",
      nameSaved: function (n) { return "Nice to meet you, " + n + "!"; },
      alreadyName: function (n) { return "We know you, " + n + "!"; },
      entryDine: "Dine in — the table's laid!",
      entryPicnic: "Picnic basket — fresh bread & flowers",
      entryDelivery: "Delivered to the gate, weather permitting",
      cartEmpty: "No wishes yet — go pick something!",
      listShared: "List copied — send it to the kitchen",
      deleteAsk: "Remove this dish from the menu?",
      portionClassic: "Classic",
      portionGenerous: "Generous"
    },
    zh: {
      storeName: "花園小屋廚房",
      storeLoc: "柳樹巷 · 村莊",
      homeEyebrow: "花園小屋",
      homeTitle: "你來訪時想吃什麼？",
      homeSub: "把想吃的菜加進來——我們會收到心意",
      shareDish: "加一道菜",
      dineIn: "堂食",
      takeaway: "野餐",
      delivery: "外送",
      memberEyebrow: "小屋會員",
      memberTitle: "家庭訪客冊",
      memberSub: "大家的願望都在這裡",
      openWishlist: "願望清單",
      openWishlistShort: "願望清單",
      tabHome: "首頁",
      tabOrder: "菜單",
      tabOrders: "心願",
      tabMine: "我的",
      couponText: "新來的？先記下名字，然後盡情許願",
      couponClaim: "名字",
      searchPlaceholder: "搜尋菜單…",
      catBest: "人氣之選",
      catPopular: "家常之選",
      catDesserts: "手作甜點",
      catDrinks: "水果飲品",
      catSnacks: "小食",
      wishBtn: "我想吃這個",
      wishedBtn: "已加心願 ✓",
      wantsSuffix: function (n) { return n + " 人想吃"; },
      portionLabel: "份量",
      sizeClassic: "標準",
      sizeGenerous: "加大",
      qtyLabel: "可供幾人享用？",
      addToWishlist: "加入願望清單",
      shareList: "分享清單",
      cartTitle: "願望清單",
      cartTotal: "大家的願望",
      nameTitle: "今天誰在許願？",
      nameNote: "你的名字只存於此裝置，廚房便能知道誰想吃什麼。",
      namePlaceholder: "你的名字",
      nameSave: "儲存",
      shareTitle: "為花園菜單添一道菜",
      photoHint: "點擊選擇照片",
      dishNamePlaceholder: "菜名",
      cuisineLabel: "菜系",
      addToMenu: "加入菜單",
      viewWishlist: "查看願望清單",
      emptyMenu: "花園菜單尚空——添上第一道菜吧",
      emptyMenuBtn: "加一道菜",
      stageNote: "來自小屋花園的種植、烹調與分享",
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
      syncLocal: "上傳本機菜單",
      synced: function (n) { return "已上傳 " + n + " 道菜"; },
      wishAdded: function (n) { return "已加入——" + n + " 人想吃"; },
      wishRemoved: "已從你的心願移除",
      nameSaved: function (n) { return "很高興認識你，" + n + "！"; },
      alreadyName: function (n) { return "我們記得你，" + n + "！"; },
      entryDine: "堂食——桌子已擺好！",
      entryPicnic: "野餐籃——新鮮麵包與鮮花",
      entryDelivery: "送到門口，視天氣而定",
      cartEmpty: "尚無心願——快去挑一道！",
      listShared: "清單已複製——發給廚房吧",
      deleteAsk: "將此菜從菜單移除？",
      portionClassic: "標準",
      portionGenerous: "加大"
    }
  };

  var cfg = (window.MENU_CONFIG || {});
  var configured = !!(cfg.supabaseUrl && cfg.supabaseKey);

  var el = {};
  ["langToggle", "shareBtn", "wishBtn", "floatWish", "addDishBtn", "searchBtn", "memberBtn",
   "cartBtn", "cartBadge", "searchRow", "searchInput", "carouselTrack", "carouselDots",
   "couponBtn", "couponClaim", "catSidebar", "foodList", "orderFoot", "viewCartBtn",
   "viewCartTotal", "fabAdd", "aiStatus", "syncBtn", "mask", "nameSheet", "nameInput2",
   "nameSaveBtn", "shareSheet", "photoPick", "photoPlus", "preview", "photoHint", "fileInput",
   "nameInput", "cuisineSelect", "addBtn", "specSheet", "specImg", "specName", "specChip",
   "sizeRow", "qtyMinus", "qtyPlus", "qtyNum", "addToOrderBtn", "cartSheet", "cartList",
   "cartTotal", "checkoutBtn", "toast"].forEach(function (id) {
    el[id] = document.getElementById(id);
  });

  var lang = localStorage.getItem(LANG_KEY) === "zh" ? "zh" : "en";
  var myName = localStorage.getItem(NAME_KEY) || "";
  var dishes = [];
  var wishes = [];
  var cloudWishes = true;
  var filter = "best";
  var searchQ = "";
  var currentDish = null;
  var specPortion = "classic";
  var specQty = 1;
  var nameCallback = null;
  var pendingImage = null;
  var carouselIdx = 0;
  var carouselTimer = null;

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

  function setStatus(msg) {
    if (msg) {
      el.aiStatus.textContent = msg;
      el.aiStatus.hidden = false;
    } else {
      el.aiStatus.hidden = true;
      el.aiStatus.textContent = "";
    }
  }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (n) {
      n.setAttribute("placeholder", t(n.getAttribute("data-i18n-placeholder")));
    });
    document.documentElement.lang = lang;
    el.langToggle.textContent = lang === "en" ? "中文" : "EN";
    renderCategories();
    renderFood();
    renderWishlistSheet();
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
    return supabase.from("dishes").select("*").order("created_at", { ascending: true })
      .then(function (res) {
        if (res.error) throw res.error;
        dishes = res.data || [];
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(dishes)); } catch (e) {}
        document.body.setAttribute("data-cloud", "ready");
        afterData();
        return dishes;
      });
  }

  function fetchWishes() {
    return supabase.from("wishes").select("*")
      .then(function (res) {
        if (res.error) throw res.error;
        cloudWishes = true;
        wishes = res.data || [];
        afterData();
      })
      .catch(function () {
        cloudWishes = false;
        try { wishes = JSON.parse(localStorage.getItem(WISHES_KEY)) || []; } catch (e) { wishes = []; }
        afterData();
      });
  }

  function afterData() {
    renderCategories();
    renderFood();
    renderCarousel();
    renderWishlistSheet();
    legacySyncBtn();
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
          .on("postgres_changes", { event: "*", schema: "public", table: "wishes" }, function () {
            fetchWishes().catch(function () {});
          })
          .subscribe();
      })
      .then(fetchWishes)
      .then(fetchDishes)
      .catch(function () {
        try { dishes = JSON.parse(localStorage.getItem(CACHE_KEY)) || []; } catch (e) { dishes = []; }
        document.body.setAttribute("data-cloud", "cache");
        showToast("offline");
        afterData();
      });
  }

  function legacySyncBtn() {
    var legacy = [];
    try { legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)) || []; } catch (e) {}
    el.syncBtn.hidden = !(configured && legacy.length && !dishes.length);
  }

  /* ---------- categories & food list ---------- */

  function bucketOf(dish) {
    var n = (" " + (dish.name || "") + " ").toLowerCase();
    for (var b in BUCKET_KW) {
      for (var i = 0; i < BUCKET_KW[b].length; i++) {
        if (n.indexOf(BUCKET_KW[b][i]) !== -1) return b;
      }
    }
    return "popular";
  }

  function wantCount(dishId) {
    var n = 0;
    wishes.forEach(function (w) { if (w.dish_id === dishId) n++; });
    return n;
  }

  function myWishIds() {
    var set = {};
    wishes.forEach(function (w) { if (w.name === myName) set[w.dish_id] = true; });
    return set;
  }

  function dishById(id) {
    for (var i = 0; i < dishes.length; i++) if (dishes[i].id === id) return dishes[i];
    return null;
  }

  function renderCategories() {
    var counts = { best: 0, popular: 0, dessert: 0, drink: 0, snack: 0 };
    dishes.forEach(function (d) {
      var b = bucketOf(d);
      counts[b]++;
      counts.best++;
    });
    var cats = [
      { id: "best", label: t("catBest") },
      { id: "popular", label: t("catPopular") },
      { id: "dessert", label: t("catDesserts") },
      { id: "drink", label: t("catDrinks") },
      { id: "snack", label: t("catSnacks") }
    ];
    el.catSidebar.innerHTML = "";
    cats.forEach(function (c) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-item" + (filter === c.id ? " active" : "");
      btn.innerHTML = esc(c.label) + '<br><span class="cat-count">' + counts[c.id] + "</span>";
      btn.addEventListener("click", function () {
        filter = c.id;
        renderCategories();
        renderFood();
      });
      el.catSidebar.appendChild(btn);
    });
  }

  function emojiFor(d) {
    var b = bucketOf(d);
    if (b === "dessert") return "🍰";
    if (b === "drink") return "🍹";
    if (b === "snack") return "🥨";
    return "🍽";
  }

  function filteredDishes() {
    var q = searchQ.toLowerCase().trim();
    var list;
    if (filter === "best") {
      list = dishes.slice().sort(function (a, b) { return wantCount(b.id) - wantCount(a.id); });
    } else if (filter === "popular") {
      list = dishes.filter(function (d) { return bucketOf(d) === "popular"; });
    } else {
      list = dishes.filter(function (d) { return bucketOf(d) === filter; });
    }
    if (q) list = list.filter(function (d) { return (d.name || "").toLowerCase().indexOf(q) !== -1; });
    return list;
  }

  function renderFood() {
    var list = filteredDishes();
    el.foodList.innerHTML = "";

    if (!dishes.length) {
      var e1 = document.createElement("div");
      e1.className = "list-empty";
      e1.innerHTML = esc(t("emptyMenu")) + '<button class="list-empty-btn" type="button">' + esc(t("emptyMenuBtn")) + "</button>";
      e1.querySelector("button").addEventListener("click", openShareSheet);
      el.foodList.appendChild(e1);
      return;
    }
    if (!list.length) {
      var e2 = document.createElement("div");
      e2.className = "list-empty";
      e2.textContent = "· · ·";
      el.foodList.appendChild(e2);
      return;
    }

    var mine = myWishIds();
    list.forEach(function (d, i) {
      var item = document.createElement("div");
      item.className = "food-item" + (i < 6 ? " new-anim" : "");
      var emoji = emojiFor(d);
      var wants = wantCount(d.id);
      var wished = !!mine[d.id];

      item.innerHTML =
        '<div class="food-img-wrap">' +
          '<span class="food-emoji">' + emoji + "</span>" +
          '<img class="food-img" src="' + esc(d.image) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' +
          '<button class="food-del" type="button" title="remove">✕</button>' +
        "</div>" +
        '<div class="food-copy">' +
          '<div class="food-name">' + esc(d.name) + "</div>" +
          '<div class="food-meta">' +
            (d.cuisine ? '<span class="cuisine-chip">' + esc(cname(d.cuisine)) + "</span>" : "") +
            (wants > 0 ? '<span class="wish-names">' + esc(wantNames(d.id)) + "</span>" : "") +
          "</div>" +
          '<div class="food-bottom">' +
            '<span class="wants-chip">♡ ' + wants + " " + t("wantsSuffix", wants) + "</span>" +
            '<button class="spec-btn' + (wished ? " wished" : "") + '" type="button">' +
              (wished ? esc(t("wishedBtn")) : esc(t("wishBtn"))) +
            "</button>" +
          "</div>" +
        "</div>";

      item.querySelector(".food-del").addEventListener("click", function () {
        if (!confirm(t("deleteAsk"))) return;
        dishes.splice(dishes.indexOf(d), 1);
        renderFood();
        if (configured) supabase.from("dishes").delete().eq("id", d.id).then(function () {});
        showToast("toastRemoved");
      });
      item.querySelector(".spec-btn").addEventListener("click", function () {
        openSpecSheet(d);
      });
      el.foodList.appendChild(item);
    });
  }

  function wantNames(dishId) {
    var names = {};
    wishes.forEach(function (w) { if (w.dish_id === dishId && w.name) names[w.name] = true; });
    var arr = Object.keys(names);
    if (arr.length > 2) return arr.slice(0, 2).join(", ") + " +" + (arr.length - 2);
    return arr.join(", ");
  }

  /* ---------- carousel ---------- */

  function renderCarousel() {
    var top = dishes.slice().sort(function (a, b) { return wantCount(b.id) - wantCount(a.id); }).slice(0, 5);
    var slides = top.length ? top : null;
    el.carouselTrack.innerHTML = "";
    el.carouselDots.innerHTML = "";

    if (slides) {
      slides.forEach(function (d, i) {
        var s = document.createElement("div");
        s.className = "car-slide";
        s.innerHTML =
          '<img src="' + esc(d.image) + '" alt="" onerror="this.style.display=\'none\'">' +
          '<div class="car-caption">' +
            '<div class="car-name">' + esc(d.name) + "</div>" +
            '<div class="car-sub">♡ ' + wantCount(d.id) + " " + t("wantsSuffix", wantCount(d.id)) + "</div>" +
          "</div>";
        el.carouselTrack.appendChild(s);
        var dot = document.createElement("button");
        dot.className = "car-dot" + (i === 0 ? " active" : "");
        dot.type = "button";
        dot.addEventListener("click", function () { goSlide(i); });
        el.carouselDots.appendChild(dot);
      });
    } else {
      [
        { emoji: "🍰", name: t("catDesserts") },
        { emoji: "🍹", name: t("catDrinks") },
        { emoji: "🥧", name: t("catPopular") }
      ].forEach(function (p, i) {
        var s = document.createElement("div");
        s.className = "car-slide";
        s.style.background = i === 0
          ? "linear-gradient(150deg,#e3c9ab,#c08552)"
          : i === 1
          ? "linear-gradient(150deg,#c9d2bb,#7c8a6d)"
          : "linear-gradient(150deg,#d8cfb8,#8a6f52)";
        s.innerHTML =
          '<div class="car-caption"><div class="car-name" style="font-size:2rem;line-height:1">' + p.emoji + "</div>" +
          '<div class="car-sub">' + esc(p.name) + "</div></div>";
        el.carouselTrack.appendChild(s);
        var dot = document.createElement("button");
        dot.className = "car-dot" + (i === 0 ? " active" : "");
        dot.type = "button";
        dot.addEventListener("click", function () { goSlide(i); });
        el.carouselDots.appendChild(dot);
      });
    }

    carouselIdx = 0;
    clearInterval(carouselTimer);
    carouselTimer = setInterval(function () {
      var total = el.carouselTrack.children.length;
      if (total > 1) goSlide((carouselIdx + 1) % total);
    }, 4500);
  }

  function goSlide(i) {
    carouselIdx = i;
    el.carouselTrack.style.transform = "translateX(-" + i * 100 + "%)";
    var dots = el.carouselDots.children;
    for (var j = 0; j < dots.length; j++) dots[j].classList.toggle("active", j === i);
  }

  /* ---------- sheets ---------- */

  var openSheetEl = null;

  function openSheet(sheet) {
    if (openSheetEl && openSheetEl !== sheet) closeSheet(openSheetEl, true);
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

  function openSpecSheet(dish) {
    currentDish = dish;
    specPortion = "classic";
    specQty = 1;
    el.specImg.src = dish.image;
    el.specName.textContent = dish.name;
    el.specChip.textContent = dish.cuisine ? cname(dish.cuisine) : "";
    el.specChip.className = "cuisine-chip" + (dish.cuisine ? "" : " spec-chip-empty");
    el.qtyNum.textContent = specQty;
    var btns = el.sizeRow.querySelectorAll(".size-btn");
    for (var i = 0; i < btns.length; i++) btns[i].classList.toggle("active", btns[i].getAttribute("data-size") === specPortion);
    openSheet(el.specSheet);
  }

  el.sizeRow.addEventListener("click", function (e) {
    var b = e.target.closest(".size-btn");
    if (!b) return;
    specPortion = b.getAttribute("data-size");
    el.sizeRow.querySelectorAll(".size-btn").forEach(function (x) { x.classList.toggle("active", x === b); });
  });

  el.qtyMinus.addEventListener("click", function () { setQty(specQty - 1); });
  el.qtyPlus.addEventListener("click", function () { setQty(specQty + 1); });

  function setQty(n) {
    specQty = Math.max(1, Math.min(9, n));
    el.qtyNum.textContent = specQty;
  }

  /* ---------- name ---------- */

  function needName(cb) {
    if (myName) return cb();
    nameCallback = cb;
    el.nameInput2.value = "";
    openSheet(el.nameSheet);
  }

  el.nameSaveBtn.addEventListener("click", function () {
    var n = el.nameInput2.value.trim();
    if (!n) return;
    myName = n;
    localStorage.setItem(NAME_KEY, n);
    closeSheet(el.nameSheet);
    toastText(t("nameSaved", n));
    if (nameCallback) { var cb = nameCallback; nameCallback = null; cb(); }
  });

  el.nameInput2.addEventListener("keydown", function (e) {
    if (e.key === "Enter") el.nameSaveBtn.click();
  });

  /* ---------- wishes ---------- */

  function addWish() {
    needName(function () {
      var row = {
        id: "local-" + Date.now(),
        dish_id: currentDish.id,
        name: myName,
        portion: specPortion,
        qty: specQty,
        created_at: new Date().toISOString()
      };
      if (cloudWishes && configured) {
        supabase.from("wishes").insert({
          dish_id: row.dish_id, name: row.name, portion: row.portion, qty: row.qty
        }).then(function (res) {
          if (res.error) throw res.error;
        }).catch(function () {
          cloudWishes = false;
          pushLocalWish(row);
          afterData();
        });
        wishes.push(row);
        afterData();
      } else {
        pushLocalWish(row);
        afterData();
      }
      closeSheet(el.specSheet);
      toastText(t("wishAdded", wantCount(currentDish.id)));
    });
  }

  function pushLocalWish(row) {
    wishes.push(row);
    try { localStorage.setItem(WISHES_KEY, JSON.stringify(wishes)); } catch (e) {}
  }

  function removeWish(w) {
    var i = wishes.indexOf(w);
    if (i !== -1) wishes.splice(i, 1);
    if (cloudWishes && configured && w.id && w.id.indexOf("local-") !== 0) {
      supabase.from("wishes").delete().eq("id", w.id).then(function () {});
    } else {
      try { localStorage.setItem(WISHES_KEY, JSON.stringify(wishes)); } catch (e) {}
    }
    afterData();
  }

  el.addToOrderBtn.addEventListener("click", addWish);

  function renderWishlistSheet() {
    var n = wishes.length;
    el.cartBadge.hidden = n === 0;
    el.cartBadge.textContent = n > 99 ? "99" : n;
    el.orderFoot.hidden = n === 0;
    el.viewCartTotal.textContent = n + (lang === "en" ? (n === 1 ? " dish" : " dishes") : " 道菜");
    el.cartTotal.textContent = n + (lang === "en" ? " wish" + (n === 1 ? "" : "es") : " 個心願");

    el.cartList.innerHTML = "";
    if (!n) {
      var empty = document.createElement("li");
      empty.className = "cart-empty";
      empty.textContent = t("cartEmpty");
      el.cartList.appendChild(empty);
      return;
    }
    wishes.slice().reverse().forEach(function (w) {
      var d = dishById(w.dish_id);
      var li = document.createElement("li");
      li.className = "cart-item";
      var portionLabel = w.portion === "generous" ? t("sizeGenerous") : t("sizeClassic");
      li.innerHTML =
        '<img class="cart-item-img" src="' + (d ? esc(d.image) : "") + '" alt="" onerror="this.style.display=\'none\'">' +
        '<div class="cart-item-copy">' +
          '<div class="cart-item-name">' + (d ? esc(d.name) : "· · ·") + "</div>" +
          '<div class="cart-item-sub">' + esc(w.name || "?") + " · " + portionLabel + " · " + w.qty + "</div>" +
        "</div>" +
        '<button class="cart-remove" type="button">✕</button>';
      li.querySelector(".cart-remove").addEventListener("click", function () {
        if (w.name === myName) removeWish(w);
        else showToast("wishRemoved");
      });
      el.cartList.appendChild(li);
    });
  }

  function openWishlist() {
    renderWishlistSheet();
    openSheet(el.cartSheet);
  }

  function shareList() {
    if (!wishes.length) return;
    var lines = [];
    var byDish = {};
    wishes.forEach(function (w) {
      var d = dishById(w.dish_id);
      var key = d ? d.name : w.dish_id;
      (byDish[key] = byDish[key] || []).push(w);
    });
    Object.keys(byDish).forEach(function (name) {
      var ws = byDish[name];
      var people = ws.map(function (w) {
        return w.name + " (" + (w.portion === "generous" ? t("sizeGenerous") : t("sizeClassic")) + " ×" + w.qty + ")";
      });
      lines.push("• " + name + " — " + people.join(", "));
    });
    var text = "Garden Cottage Kitchen wishlist\n" + lines.join("\n");
    if (navigator.share) {
      navigator.share({ text: text }).catch(function () {});
      toastText(t("listShared"));
    } else {
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
        .then(function () { toastText(t("listShared")); })
        .catch(function () {
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); toastText(t("listShared")); } catch (e) {}
          ta.remove();
        });
    }
  }

  el.checkoutBtn.addEventListener("click", shareList);

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

  function updateAddBtn() {
    el.addBtn.disabled = !pendingImage || !el.nameInput.value.trim();
  }

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
        } catch (e) { resolve(dataUrl); }
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

  function addDish() {
    var name = el.nameInput.value.trim();
    if (!pendingImage || !name) return;
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
    renderFood();
    toastText(t("uploading"));
    closeSheet(el.shareSheet);
    resetShareSheet();
    if (!configured) {
      var i = dishes.indexOf(entry);
      if (i !== -1) dishes.splice(i, 1);
      renderFood();
      showToast("setupNeeded");
      return;
    }
    uploadAndAdd(entry);
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

  function uploadAndAdd(entry) {
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
        renderFood();
        toastText(t("toastAdded"));
        classifyPending(entry);
        return entry;
      })
      .catch(function (e) {
        var i = dishes.indexOf(entry);
        if (i !== -1) dishes.splice(i, 1);
        renderFood();
        console.error("upload failed:", e);
        var detail = e && e.message && e.message.length < 60 ? " " + e.message : "";
        toastText(t("toastAddedFail") + detail);
      });
  }

  el.addBtn.addEventListener("click", addDish);

  /* ---------- AI classification ---------- */

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
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error("fetch failed");
      return r.blob();
    }).then(function (b) { return URL.createObjectURL(b); });
  }

  function classifyImage(entry) {
    if (entry.pending || entry.image.indexOf("data:") === 0 || entry.ai === "manual") {
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
        var label = best.label;
        var id = label.indexOf("Japanese") !== -1 ? "japanese"
          : label.indexOf("Korean") !== -1 ? "korean"
          : label.indexOf("Thai") !== -1 ? "thai"
          : label.indexOf("Vietnamese") !== -1 ? "vietnamese"
          : label.indexOf("Indian") !== -1 ? "indian"
          : label.indexOf("Chinese") !== -1 ? "chinese"
          : label.indexOf("Italian") !== -1 ? "italian"
          : label.indexOf("Mexican") !== -1 ? "mexican"
          : label.indexOf("Spanish") !== -1 ? "spanish"
          : label.indexOf("Greek") !== -1 ? "greek"
          : label.indexOf("French") !== -1 ? "french"
          : label.indexOf("American") !== -1 ? "american"
          : label.indexOf("Middle Eastern") !== -1 ? "middleeast"
          : "";
        entry.cuisine = prob >= 0.25 ? id : "";
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
            setStatus(t("aiProgress", i + 1, todo.length));
            return classifyImage(d).then(function () {
              renderFood();
              if (d.cuisine && configured) {
                return supabase.from("dishes").update({ cuisine: d.cuisine, ai: "clip" }).eq("id", d.id);
              }
            });
          });
        }, Promise.resolve());
      })
      .then(function () {
        setStatus("");
        if (focus && focus.cuisine && focus.ai === "clip") {
          toastText(t("classifiedAs", cname(focus.cuisine)));
        } else {
          var n = todo.filter(function (d) { return d.cuisine; }).length;
          if (n) toastText(t("aiDone", n));
        }
      })
      .catch(function () { setStatus(""); });
  }

  /* ---------- misc handlers ---------- */

  el.langToggle.addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, lang);
    applyLang();
    fillCuisineSelect();
  });

  el.shareBtn.addEventListener("click", openShareSheet);
  el.addDishBtn.addEventListener("click", openShareSheet);
  el.fabAdd.addEventListener("click", openShareSheet);

  el.wishBtn.addEventListener("click", openWishlist);
  el.floatWish.addEventListener("click", openWishlist);
  el.cartBtn.addEventListener("click", openWishlist);
  el.viewCartBtn.addEventListener("click", openWishlist);

  el.searchBtn.addEventListener("click", function () {
    el.searchRow.hidden = !el.searchRow.hidden;
    if (!el.searchRow.hidden) el.searchInput.focus();
  });

  el.searchInput.addEventListener("input", function () {
    searchQ = el.searchInput.value;
    renderFood();
  });

  el.memberBtn.addEventListener("click", function () {
    if (myName) toastText(t("alreadyName", myName));
    else needName(function () {});
  });

  el.couponBtn.addEventListener("click", function () {
    if (myName) toastText(t("alreadyName", myName));
    else needName(function () {});
  });

  document.querySelectorAll(".entry-card").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var k = btn.getAttribute("data-entry");
      if (k === "dinein") showToast("entryDine");
      else if (k === "takeaway") showToast("entryPicnic");
      else showToast("entryDelivery");
    });
  });

  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var nav = tab.getAttribute("data-nav");
      document.querySelectorAll(".tab").forEach(function (x) {
        x.classList.toggle("active", x === tab);
      });
      if (nav === "home") {
        document.getElementById("phoneHome").scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (nav === "order") {
        document.getElementById("phoneOrder").scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (nav === "orders") {
        openWishlist();
      } else if (nav === "mine") {
        if (myName) toastText(t("alreadyName", myName));
        else needName(function () {});
      }
    });
  });

  el.syncBtn.addEventListener("click", function () {
    var legacy = [];
    try { legacy = JSON.parse(localStorage.getItem(LEGACY_KEY)) || []; } catch (e) {}
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
        dishes.unshift(entry);
        renderFood();
        return uploadAndAdd(entry);
      });
    });
    chain.then(function () {
      localStorage.removeItem(LEGACY_KEY);
      el.syncBtn.hidden = true;
      showToast("synced", legacy.length);
    }).catch(function () {});
  });

  fillCuisineSelect();
  applyLang();
  boot();
})();
