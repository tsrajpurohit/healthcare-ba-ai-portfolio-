# Risk Register  
## CityCare General Hospital – HMS Project

**Version**: 1.0  
**Last Updated**: August 2025

---

| Risk ID | Risk Description | Category | Probability | Impact | Score | Mitigation Strategy | Owner | Status |
|---------|------------------|----------|-------------|--------|-------|---------------------|-------|--------|
| R01 | Front-desk staff resist new system due to fear of change or complexity | People / Change | High | High | 9 | Early involvement in design, super-user program, comprehensive training, highlight personal benefits (less overtime, easier work) | Head of Ops + BA | Open |
| R02 | Poor data quality in existing records causes migration issues and ongoing duplicates | Data | High | High | 9 | Define clear matching rules, perform data cleansing before migration, implement strong MPI at go-live | IT + BA | Open |
| R03 | Doctors push back if scheduling system reduces their control or flexibility | People | Medium | High | 6 | Involve doctor representatives early, preserve ability to block slots and manage personal preferences | Medical Director | Open |
| R04 | Scope creep into clinical documentation or other modules delays core delivery | Scope | Medium | High | 6 | Strict change control process, clear Phase 1 boundary, escalate to Sponsor | Project Manager / BA | Open |
| R05 | Integration challenges with any remaining legacy systems | Technical | Medium | Medium | 4 | Prefer API-based or phased approach; define clear interface requirements early | IT Manager | Open |
| R06 | Notification (SMS/Email) delivery failures reduce reminder effectiveness | Technical | Medium | Medium | 4 | Select reliable gateway, implement delivery status tracking and fallback | IT | Open |
| R07 | Insufficient UAT participation from busy end users | Project | Medium | High | 6 | Schedule UAT during lower volume periods, provide backfill support, make participation part of performance expectation | Head of Ops | Open |
| R08 | Benefits not realized due to incomplete process adoption | Benefits | Medium | High | 6 | Strong change management, post-go-live hypercare, regular KPI monitoring and coaching | Sponsor + Ops | Open |

**Score Legend**: Probability × Impact (1–3 scale) → 1–3 Low, 4–6 Medium, 7–9 High

---

### Risk Response Summary
- Focus heavily on change management and data quality (highest scores).
- Maintain clear scope control.
- Monitor adoption metrics closely after go-live.
