# 味 · Menu

Menu site served at `adamcroft.me/menu`. Minimalist, traditional-Chinese-styled gallery: upload a photo and name of a dish and it joins the menu.

- EN / 中文 toggle (top-right)
- Left sidebar filters by cuisine (Italian, Chinese, Japanese, …)
- AI classification (CLIP via Transformers.js, runs in-browser, no API key): hit **AI Classify** in the sidebar to tag uncategorized dishes from their photos; dish names are also classified instantly by keyword
- Hover a card to remove it, or to manually set its cuisine from a dropdown
- 存 册 (Save) / 启 册 (Load) JSON backups at the bottom

Local dev: `python3 -m http.server` in this folder.

> Images are stored as base64 in localStorage (~5 MB quota ≈ 10–20 photos). Use Save to back up, then clear.
> AI classification downloads the CLIP model (~150 MB, cached after the first run) from Hugging Face via jsDelivr on first use.
