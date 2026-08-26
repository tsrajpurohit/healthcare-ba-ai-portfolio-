# Risk Register  
## VigilAI – Including AI & Compliance Risks

**Version**: 1.0

| Risk ID | Description | Category | Prob | Impact | Score | Mitigation | Owner |
|---------|-------------|----------|------|--------|-------|------------|-------|
| R01 | Regulatory / inspection concern regarding AI use in PV | Compliance | Med | High | 6 | Human-in-the-loop, explainability, full audit, early QA involvement, validation evidence | QA + Sponsor |
| R02 | Insufficient historical data quality/volume for robust models | Data | High | High | 9 | Early data assessment, phased use cases, human fallback | Data Science |
| R03 | User distrust of AI medical/coding suggestions | Adoption | High | High | 9 | Transparent explanations, pilot wins, training, easy override | PV Ops + BA |
| R04 | Over-automation beyond compliance comfort zone | Scope / Compliance | Med | High | 6 | Clear automation boundaries in scope; change control | Sponsor + QA |
| R05 | Integration instability with safety database | Technical | Med | High | 6 | API-first design, robust error handling, phased integration | IT |
| R06 | Model drift degrades performance post go-live | AI Ops | Med | High | 6 | Monitoring, drift alerts, retraining schedule, rollback | Data Science |
| R07 | Medical reviewers reject AI-assisted workflow | People | Med | High | 6 | Co-design with medical stakeholders; preserve authority | Medical Lead |
| R08 | Validation effort underestimated | Project | Med | Med | 4 | Early validation strategy; involve QA from requirements | QA + BA |
| R09 | Literature source access / licensing constraints | External | Med | Med | 4 | Confirm source rights early; prioritize accessible sources | Literature + Legal |
| R10 | Change fatigue among case processors | People | Med | Med | 4 | Clear benefit communication; reduce (not add) clicks | PV Ops |
