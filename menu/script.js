(function () {
  "use strict";

  var STORAGE_KEY = "weixiaoguan_menu_v1";
  var LANG_KEY = "weixiaoguan_lang";

  var I18N = {
    en: {
      title: "味 · Menu",
      subtitle: "One Meal · One Memory",
      upload: "Add a Dish",
      namePlaceholder: "Dish name",
      add: "Add",
      empty: "No dishes yet · awaiting your first feast",
      save: "Save",
      load: "Load",
      footer: "A meal of rice and tea · all is beauty",
      toggleLabel: "中文",
      countLabel: function (n) { return "No. " + n; },
      deleteTitle: "Remove",
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
      save: "存 册",
      load: "启 册",
      footer: "一 茶 一 饭 · 皆 为 风 月",
      toggleLabel: "EN",
      countLabel: function (n) {
        var s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        return "第" + (n <= s.length ? s[n - 1] : n) + "味";
      },
      deleteTitle: "移除",
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

  var lang = localStorage.getItem(LANG_KEY) === "zh" ? "zh" : "en";
  var dishes = load();
  var pendingImage = null;

  function t(key) {
    var v = I18N[lang][key];
    return typeof v === "function" ? v.apply(null, [].slice.call(arguments, 1)) : v;
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
    render();
  }

  function render() {
    menuEl.innerHTML = "";
    emptyEl.style.display = dishes.length ? "none" : "block";

    dishes.forEach(function (dish, i) {
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
      var count = document.createElement("span");
      count.className = "card-count";
      count.textContent = t("countLabel", i + 1);
      body.appendChild(name);
      body.appendChild(count);

      var del = document.createElement("button");
      del.className = "card-delete";
      del.textContent = "✕";
      del.title = t("deleteTitle") + " " + dish.name;
      del.setAttribute("aria-label", t("deleteTitle") + " " + dish.name);
      del.addEventListener("click", function () {
        dishes.splice(i, 1);
        save();
        render();
        showToast("toastRemoved");
      });

      card.appendChild(frame);
      card.appendChild(body);
      card.appendChild(del);
      menuEl.appendChild(card);
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
    dishes.push({ name: name, image: pendingImage, added: Date.now() });
    save();
    render();
    nameInput.value = "";
    fileInput.value = "";
    pendingImage = null;
    preview.classList.remove("show");
    updateAddBtn();
    showToast("toastAdded");
  }

  addBtn.addEventListener("click", addDish);

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
