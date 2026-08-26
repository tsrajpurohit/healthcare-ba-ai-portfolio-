# Portfolio Overview

Each case study follows a consistent structure:

1. **Initiation** – Charter, business case, scope  
2. **Stakeholders** – Register, power-interest grid, RACI  
3. **Process models** – AS-IS → TO-BE → gap analysis  
4. **Requirements** – BRD / FRD / NFR (and AI-specific requirements where relevant)  
5. **Agile backlog** – User stories, acceptance criteria, sample Jira CSV  
6. **UAT / validation** – Scenarios and sign-off approach  
7. **Traceability & risks** – RTM, risk register, assumptions  

AI-focused projects additionally include opportunity maps, business rules for ML, and governance (audit, explainability).

## Repository layout (typical)

```
your-repo/
├── docs/                 # MkDocs content (this site)
├── mkdocs.yml
├── requirements.txt
├── .github/workflows/    # CI + Pages deploy
└── (optional) original Markdown folders from the BA case study zips
```

You can either:

- **Option A:** Copy selected Markdown files from each portfolio zip into `docs/` and link them in `mkdocs.yml`, or  
- **Option B:** Keep one hub repo that summarizes all five projects and links to separate GitHub repos for full detail.
