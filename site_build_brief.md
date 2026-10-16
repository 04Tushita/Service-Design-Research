# Build brief: research presentation site (basic layout only)

Build a simple, multi-page website for a UX research presentation. Use the attached image `site_layout.png` as the layout reference. This first version is **structure only**: use placeholder content, keep styling plain and clean, and make it easy to host.

## Goal
A working site skeleton that I can host and fill in later. Do not spend time on visual polish or real content yet.

## Tech
- Plain HTML, CSS and JavaScript, no framework and no build step, so it can be hosted on GitHub Pages or Netlify as-is.
- One shared header and footer reused on every page (use a small JS include or copy the markup).
- Responsive: works on desktop and phone.
- Grayscale, wireframe-like styling for now. Keep colors and fonts in CSS variables so they are easy to change later.

## Pages and routes
| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, quick-facts strip, four section cards |
| Research | `research/index.html` | Contains Interviews and Findings (findings page in the image) |
| Frame | `frame/index.html` | Archetype, POV and HMW, User story |
| Maps | `maps/index.html` | Tabs: Mind map, User flow, Journey map (page in the image) |
| Solution | `solution/index.html` | Two wireframe flows, A and B |
| Process | `process/index.html` | Ideation notes |
| Reflection | `reflection/index.html` | Reflection and next steps |

Top nav on every page: Home, Research, Frame, Maps, Solution, Process, Reflection. The current page is underlined.

## Shared header and footer
- Header: logo box and project name on the left, nav links on the right.
- Footer: team / course, contact, "Back to top".

## Page layouts (see the image)
**Home**
1. Hero: small label, large title, two lines of text, two buttons ("Start the story" and "Jump to maps"), and an image placeholder on the right.
2. Quick-facts strip with four boxes: 4 interviews, 3 companies, 8 journey phases, 2 solution flows.
3. "The project, in four steps": four cards (Research, Frame, Maps, Solution), each with an image placeholder, title, one line of text and a link to its section.

**Maps**
1. Breadcrumb and page title.
2. Tab buttons: Mind map, User flow, Journey map. Clicking a tab shows that map's panel without reloading the page.
3. Main area: a large placeholder box for the map canvas, plus zoom in, zoom out and fit buttons (buttons can be non-functional for now).
4. Right side: a detail panel with a title, text lines, and "Pains", "Gains" and "Evidence" headings.
5. Bottom: "Previous" and "Next" buttons linking to the neighboring sections.

**Research (Findings)**
1. Page title.
2. Filter chips: All, Interview 1 to 4. Clicking a chip shows only the matching cards.
3. A grid of six placeholder insight cards, each with a theme tag, text lines, and a quote with its interview source.
4. A sticky archetype card on the right with an avatar placeholder, name, text lines and a button "See POV & HMW".

**Frame, Solution, Process, Reflection**
Use the same page template as Research: title, short intro text, and one or two placeholder content blocks. These will be filled later.

## Interactions to include now
- Tab switching on the Maps page.
- Filter chips on the Findings page.
- Everything else can be static.

## Do not do yet
- No real content, charts, or animations.
- No backend, database or login.
- No design polish beyond a clean, consistent layout.

## Deliverable
A folder of static files I can drop onto GitHub Pages or Netlify, plus a short README on how to preview it locally and how to deploy it.
