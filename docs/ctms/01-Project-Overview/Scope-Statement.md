# Scope Statement  
## TrialFlow CTMS

**Version**: 1.0

---

### 1. Product / Project Scope

TrialFlow CTMS will digitize and control the core operational workflows of clinical trials from study setup through subject visit tracking, with strong emphasis on data integrity, role-based access, and auditability.

---

### 2. In-Scope (Phase 1)

| Domain | Capabilities |
|--------|--------------|
| Study Management | Create/manage studies, protocol versions, key milestones, status |
| Site Management | Site registry, feasibility questionnaire, activation checklist, status tracking |
| Subject Management | Screening log, informed consent tracking, enrollment, withdrawal/completion |
| Visit Management | Define visit schedule (protocol calendar), schedule & track subject visits, window compliance |
| Safety (Basic) | Log Adverse Events at high level, route notifications to defined roles |
| Documents | Track status of essential documents (site & study level) |
| Security & Compliance | Role-based access, electronic audit trail, user attribution |
| Reporting | Operational dashboards (enrollment, site status, visit compliance) and standard reports |

---

### 3. Out-of-Scope (Phase 1)

- Full Electronic Data Capture (eCRF design & clinical data entry)
- Randomization / IWRS
- Investigational Product supply chain management
- Complete eTMF content repository
- Advanced pharmacovigilance / safety database
- Patient-reported outcomes (ePRO) apps
- Grant payment / site financial management
- Direct integration with external lab or imaging systems (beyond basic status)

---

### 4. Key Deliverables

1. Project Charter & Business Case  
2. Stakeholder Analysis & RACI  
3. AS-IS and TO-BE Process Models (BPMN-style)  
4. Business Requirements Document  
5. Functional & Non-Functional Requirements  
6. User Stories + Acceptance Criteria + Backlog  
7. UAT Scenarios & Sign-off approach  
8. Requirements Traceability Matrix  
9. Risk Register & Assumptions  

---

### 5. Acceptance Criteria (Project Level)

- All Must-have requirements implemented and accepted in UAT  
- Audit trail captures critical create/update/delete actions with user and timestamp  
- Role-based access enforced and tested  
- Core operational reports available and validated by Study Managers  
- Formal UAT sign-off from Clinical Operations and key user representatives  
- No open Severity-1 defects at go-live  

---

### 6. Constraints

- Must support principles of data integrity and auditability expected in clinical research
- Timeline pressure to support upcoming studies
- Sites have varying levels of technical maturity — usability is critical
- Changes to validated state require controlled processes
