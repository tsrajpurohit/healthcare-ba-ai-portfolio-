# AI & Automation Opportunity Map  
## VigilAI Pharmacovigilance

**Version**: 1.0

---

### Prioritized Opportunities

| Rank | Opportunity | Description | Impact | Feasibility | Phase 1 |
|------|-------------|-------------|--------|-------------|---------|
| 1 | AI-Assisted Case Intake & Extraction | Extract structured data from source documents / emails / forms | Very High | High | **Must** |
| 2 | Duplicate Detection | Rank potential duplicate cases | Very High | High | **Must** |
| 3 | Case Triage & Prioritization | Score seriousness / urgency / complexity for workqueue ranking | Very High | High | **Must** |
| 4 | MedDRA Coding Assistance | Suggest Preferred Terms with confidence and rationale | High | Medium-High | **Must** |
| 5 | Literature Relevance Screening | Rank literature for safety relevance | High | Medium-High | **Must** |
| 6 | QC Rule Automation | Automated checks for completeness / consistency | High | High | **Should** |
| 7 | Narrative Assistance | Draft or improve case narratives | Medium-High | Medium | Should |
| 8 | Signal Prioritization | Prioritize potential signals for review | High | Medium | **Should** |
| 9 | Automated Aggregate Insights | Support for periodic reporting insights | Medium | Medium | Phase 2 |
| 10 | Fully Autonomous Submission | End-to-end without human | Low (compliance) | Low | Out of Scope |

---

### Automation vs Augmentation Principle

| Use Case | Approach | Rationale |
|----------|----------|-----------|
| Intake extraction | Augmentation | Human verifies extracted data |
| Duplicate detection | Augmentation | Human confirms true duplicate |
| Triage scoring | Augmentation | Human confirms priority |
| MedDRA coding | Augmentation only | Final coding responsibility remains with qualified person |
| Literature ranking | Augmentation | Human reviews high-relevance items |
| QC rules | Selective automation | Clear deterministic rules can auto-flag |
| Medical causality | Human only | Not delegated to AI in Phase 1 |
| Regulatory submission decision | Human only | Non-negotiable |
