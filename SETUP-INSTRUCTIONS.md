# MkDocs Setup Instructions  
## Publish your BA / AI portfolio as a documentation site

This package configures **MkDocs + Material theme** and a **GitHub Actions** workflow that builds the site and deploys it to **GitHub Pages**.

---

## 1. Prerequisites

- Python 3.10+ (3.12 recommended)
- `pip`
- Git
- A GitHub repository (new hub repo or one of your portfolio repos)

---

## 2. Local setup (one-time)

```bash
# Clone or open your portfolio / hub repository
cd your-portfolio-repo

# Copy files from this package into the repo root:
#   mkdocs.yml
#   requirements.txt
#   docs/          (entire folder)
#   .github/workflows/mkdocs-pages.yml

# Create a virtual environment (recommended)
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Serve locally – open http://127.0.0.1:8000
mkdocs serve
```

Edit content under `docs/` and `mkdocs.yml` (especially `nav`, `site_name`, `repo_url`). Refresh the browser to see changes.

---

## 3. Map your existing portfolio Markdown into `docs/`

You already have five portfolio zips. Two practical approaches:

### Option A – Hub site (recommended)

Keep full detail in separate GitHub repos. In this MkDocs hub:

- Write short overview pages under `docs/hms/`, `docs/rcm/`, etc.
- Link out to the full GitHub repos for deep artifacts (BRD, CSV backlogs, etc.).

### Option B – Single repo with full content

Copy selected files from each portfolio into `docs/`:

| From portfolio zip | Suggested docs path |
|--------------------|---------------------|
| README.md, Charter, Business Case | `docs/<project>/index.md`, `charter.md`, … |
| Stakeholder / Process / BRD / FRD | Matching pages under `docs/<project>/` |
| User Stories, UAT | `docs/<project>/stories-uat.md` |

Then update `nav:` in `mkdocs.yml` so every page is listed.

**Tip:** Mermaid diagrams in your Markdown (```mermaid) work when `pymdownx.superfences` + mermaid fence (already in `mkdocs.yml`) or the `mkdocs-mermaid2-plugin` is installed.

---

## 4. Enable GitHub Pages

1. Push the repo (with `mkdocs.yml`, `docs/`, `requirements.txt`, and `.github/workflows/mkdocs-pages.yml`).
2. GitHub → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. On the next push to `main`/`master` (or run the workflow manually under the **Actions** tab), the site builds and deploys.
5. After a few minutes, open the URL shown in the Pages settings (or in the workflow summary), typically:

   `https://<username>.github.io/<repo-name>/`

6. Optional: set `site_url` in `mkdocs.yml` to that URL.

---

## 5. Customize branding

In `mkdocs.yml`:

- `site_name`, `site_description`, `site_author`
- `repo_name` / `repo_url`
- Theme `primary` / `accent` colors
- `extra.social` links (GitHub, LinkedIn)

---

## 6. Useful commands

```bash
mkdocs serve          # Local preview with live reload
mkdocs build          # Output static site to ./site
mkdocs build --strict # Fail on warnings (used in CI)
mkdocs gh-deploy      # Alternative deploy via gh-pages branch (not required if using Actions)
```

---

## 7. CI notes

The workflow `.github/workflows/mkdocs-pages.yml`:

- Installs dependencies from `requirements.txt`
- Runs `mkdocs build --strict`
- Uploads the `site/` folder and deploys with official Pages actions

You can keep your earlier portfolio workflows (`ci.yml`, `markdown-lint.yml`, `link-check.yml`) alongside this one.

---

## 8. Troubleshooting

| Issue | What to try |
|-------|-------------|
| Build fails on unknown page in `nav` | Create the missing `.md` file under `docs/` or remove the nav entry |
| Mermaid not rendering | Ensure `pymdownx.superfences` mermaid fence is present; or install/use `mkdocs-mermaid2-plugin` |
| Pages 404 | Confirm Pages source is **GitHub Actions**, workflow succeeded, and you wait for deployment |
| `--strict` fails | Fix warnings locally with `mkdocs build --strict` before pushing |

---

## 9. Suggested hub repo structure

```
healthcare-ba-ai-portfolio/          # GitHub repo name
├── mkdocs.yml
├── requirements.txt
├── docs/
│   ├── index.md
│   ├── overview.md
│   ├── about.md
│   ├── hms/
│   ├── rcm/
│   ├── ctms/
│   ├── analytics/
│   └── pv/
├── .github/workflows/
│   ├── mkdocs-pages.yml
│   └── ci.yml                       # optional, from earlier package
└── README.md                        # points visitors to the Pages site
```

---

## 10. Next step after setup

1. Replace placeholder pages under `docs/hms/`, `docs/rcm/`, etc. with real summaries or copied content from your five portfolio zips.  
2. Update links in the [master Profile README](GITHUB-PROFILE-README.md) to your live Pages URL.  
3. Pin the hub repo on your GitHub profile.
