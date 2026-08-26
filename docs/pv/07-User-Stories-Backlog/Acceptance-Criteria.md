# Acceptance Criteria Reference  
## VigilAI

Detailed Given-When-Then style criteria are embedded in User Stories. Cross-cutting themes:

- AI suggestions always show confidence/explanation where applicable
- Human confirmation required for coding, duplicate, and triage overrides
- Every AI suggestion and human decision is audit-logged with model version
- Low-confidence outputs route to human review by default
- Workqueues are ranked but allow manual override with reason
- Dashboards show data freshness and key operational KPIs
- Integration errors are visible and recoverable without data loss
