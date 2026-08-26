# Gap Analysis  
## AS-IS vs TO-BE – TrialFlow CTMS

**Version**: 1.0

---

### Process Gaps

| Area | AS-IS | TO-BE | Gap / Required Change | Priority |
|------|-------|-------|-----------------------|----------|
| Site Feasibility | Email + Excel questionnaires | Structured digital questionnaire + status tracking | Digitize form, workflow, notifications | Critical |
| Essential Documents | Shared drives + spreadsheets | Checklist with status, overdue alerts | Document status tracking module | Critical |
| Site Activation Decision | Informal / email | System-recorded approval with attribution | Controlled status change + audit | High |
| Subject Screening Log | Local spreadsheets | Central screening log with outcomes | Standardized data capture | Critical |
| Informed Consent Tracking | Paper + local filing | Structured consent record (version, date, personnel) | Consent tracking fields + history | Critical |
| Enrollment Visibility | Periodic manual consolidation | Real-time enrollment dashboard | Central subject status model | Critical |
| Visit Schedule | Protocol PDF + local calendars | System-generated subject visit plan from protocol calendar | Visit schedule engine | Critical |
| Visit Window Compliance | Reactive discovery | Proactive alerts + deviation flagging | Window calculation + alerting | High |
| Audit Trail | Limited / paper | Electronic, user-attributed, searchable | System-wide audit logging | Critical |
| Reporting | Manual Excel pivots | Configurable operational dashboards | Reporting layer | High |

---

### People & Change Gaps

| Gap | Action |
|-----|--------|
| Site staff may resist additional system entry | Emphasize reduced dual entry and clearer schedules; provide simple UX and training |
| Study teams accustomed to personal trackers | Demonstrate superior real-time visibility and reduced reporting burden |
| Varying site technical maturity | Role-based simple interfaces; offline considerations if needed later |

---

### Technology & Compliance Gaps

| Gap | Required Capability |
|-----|---------------------|
| No controlled audit trail | Immutable audit log with user, timestamp, action, before/after where relevant |
| Weak access control | Role-based permissions (Study Manager, CRA, Site Coordinator, Read-only, Admin) |
| No standard data definitions | Controlled terminology for statuses, visit types, screen fail reasons |
| Limited integration readiness | API-friendly design for future EDC / eTMF links |
