# MkDocs Portfolio Setup
[![CI](https://github.com/tsrajpurohit/healthcare-ba-ai-portfolio-/actions/workflows/ci.yml/badge.svg)](https://github.com/tsrajpurohit/healthcare-ba-ai-portfolio-/actions/workflows/ci.yml)
Publish your Healthcare BA & AI portfolio case studies as a polished documentation site using **MkDocs Material** and **GitHub Pages**.

## Quick start

1. Read **[SETUP-INSTRUCTIONS.md](SETUP-INSTRUCTIONS.md)** (full guide).
2. Copy `mkdocs.yml`, `requirements.txt`, `docs/`, and `.github/workflows/mkdocs-pages.yml` into your hub repository.
3. Run locally:
   ```bash
   pip install -r requirements.txt
   mkdocs serve
   ```
4. Enable **GitHub Pages → Source: GitHub Actions**, then push to `main`.

## Contents

| Path | Description |
|------|-------------|
| `mkdocs.yml` | Site config, Material theme, nav structure for all 5 projects |
| `requirements.txt` | mkdocs, material, mermaid plugin, pymdown-extensions |
| `docs/` | Home, overview, about + placeholder pages per project |
| `.github/workflows/mkdocs-pages.yml` | Build + deploy to GitHub Pages |
| `SETUP-INSTRUCTIONS.md` | Step-by-step setup, content mapping, troubleshooting |

Replace placeholders under `docs/hms/`, `docs/rcm/`, `docs/ctms/`, `docs/analytics/`, and `docs/pv/` with content from your portfolio zips.
