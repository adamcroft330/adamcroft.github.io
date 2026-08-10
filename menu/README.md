# 味 · Menu

Menu site served at `adamcroft.me/menu`. Minimalist, traditional-Chinese-styled gallery: upload a photo and name of a dish and it joins the menu.

- EN / 中文 toggle (top-right)
- Dishes persist per-browser (localStorage; GitHub Pages is static)
- 存 册 (Save) / 启 册 (Load) JSON backups at the bottom
- Hover a card to remove it

Local dev: `python3 -m http.server` in this folder.

> Images are stored as base64 in localStorage (~5 MB quota ≈ 10–20 photos). Use Save to back up, then clear.
