# Gap Analysis  
## AS-IS vs TO-BE – VigilAI

**Version**: 1.0

| Area | AS-IS | TO-BE | Gap | Priority |
|------|-------|-------|-----|----------|
| Case Intake | Manual entry from multiple sources | AI-assisted extraction + structured capture | NLP / extraction + source connectors | Critical |
| Duplicate Detection | Manual search + trackers | AI ranked potential duplicates | Matching model + UI | Critical |
| Triage | Mostly manual | AI priority / seriousness support + human confirm | Scoring model + workflow | Critical |
| MedDRA Coding | Manual | AI suggestions with confidence + rationale | Coding model + human finalization | Critical |
| Narrative / QC | Manual | AI assistance + automated rule checks | Generation support + rules engine | High |
| Literature Screening | Fully manual | AI relevance ranking + human review queue | Screening model + workqueue | High |
| Signal Detection | Periodic + heavy manual filter | Continuous prioritization + smart workqueue | Analytics + prioritization layer | High |
| Tracking | Excel + email | System workqueues + dashboards | Workflow + analytics platform | Critical |
| Audit / Explainability | Limited | Full AI + human decision audit trail | Logging + XAI | Critical |
| Feedback Loop | Weak | Outcomes captured for model improvement | Feedback capture design | Medium |

### People & Compliance Gaps
- Trust in AI medical suggestions → Require strong explainability and pilot evidence
- Validation / GVP expectations → Involve QA early; design for inspectability
- Skill shift from pure processing to exception handling & medical oversight → Training & change management
