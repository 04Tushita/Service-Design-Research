# Service Design Research Presentation Website

An interactive, multi-page UX research presentation site skeleton built according to [`site_build_brief.md`](site_build_brief.md) and [`site_layout.png`](site_layout.png).

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/04Tushita/Service-Design-Research](https://github.com/04Tushita/Service-Design-Research)
- **Live URL (via GitHub Pages)**: `https://04tushita.github.io/Service-Design-Research/`

---

## 🗂️ Site Architecture & Pages

| Page | File | Key Features & Layout |
|---|---|---|
| **Home** | [`index.html`](index.html) | Hero with call-to-actions, 4-stat metrics strip, and 4 project step cards |
| **Research** | [`research/index.html`](research/index.html) | Interactive filter chips (Interviews 1-4, Pain points), 3x2 insight cards with quote modal, sticky persona archetype |
| **Frame** | [`frame/index.html`](frame/index.html) | Archetype deep-dive, User story, Point of View (POV) statement, and 3 How Might We (HMW) opportunity cards |
| **Maps** | [`maps/index.html`](maps/index.html) | Interactive tabs (*Mind map*, *User flow*, *Journey map*), 8-phase node tracker, pan/zoom canvas toolbar, dynamic Detail Panel (Pains, Gains, Evidence) |
| **Solution** | [`solution/index.html`](solution/index.html) | Wireframe concept comparison (*Flow A: Unified Hub* vs. *Flow B: Milestone Stepper*) with step screens |
| **Process** | [`process/index.html`](process/index.html) | Double Diamond methodology breakdown (Discover, Define, Develop, Deliver) with workshop artifact boards |
| **Reflection** | [`reflection/index.html`](reflection/index.html) | Key reflections, research limitations, and next steps roadmap |

---

## 💻 How to Preview Locally

Because this project uses vanilla HTML, CSS, and JavaScript with zero build steps or external dependencies, you can preview it instantly:

### Option A: Using Python (Built-in on macOS)
In this directory, run:
```bash
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B: Using Node / npx
```bash
npx serve .
```

### Option C: Direct File Opening
You can simply double-click [`index.html`](index.html) or open it directly in Safari, Chrome, or Firefox.

---

## 🌐 How to Deploy to GitHub Pages

1. Ensure all changes are pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```
2. Open your repository on GitHub: [https://github.com/04Tushita/Service-Design-Research](https://github.com/04Tushita/Service-Design-Research)
3. Click **Settings** (top tab) → **Pages** (in the left sidebar).
4. Under **Build and deployment > Branch**:
   - Source: **Deploy from a branch**
   - Branch: Select **`main`** and **`/ (root)`**
   - Click **Save**.
5. Wait ~30-60 seconds. Your site will be published at:  
   👉 **`https://04tushita.github.io/Service-Design-Research/`**

---

## ☁️ How to Deploy to Netlify

### Option A: 1-Click Drag & Drop (Instant)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder into the browser window.
3. Your site is deployed immediately with a live URL.

### Option B: Continuous Deployment via GitHub
1. In Netlify, click **"Add new site"** → **"Import an existing project"**.
2. Select **GitHub** and authorize access to `04Tushita/Service-Design-Research`.
3. Leave build command empty and publish directory as `/` or `.`.
4. Click **Deploy**. Netlify will automatically redeploy whenever you push commits!

---

## 🎨 Customizing Styles & Visuals Later

All styles follow a wireframe design system with CSS custom properties defined in [`css/style.css`](css/style.css).

To update typography, colors, or spacing when moving from wireframes to high-fidelity:
```css
:root {
  /* Change brand palette */
  --bg-body: #f8f9fa;
  --bg-surface: #ffffff;
  --text-primary: #181a1b;
  --accent-color: #212529;

  /* Change typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```
All wireframe boxes use `.wireframe-box` and can be easily replaced with actual photos, Figma export SVGs, or screenshots as research artifacts become available.
