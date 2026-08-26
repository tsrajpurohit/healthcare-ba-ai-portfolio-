# Project Charter  
## TrialFlow CTMS – Clinical Trial Management System

**Project Code**: CTMS-2025  
**Version**: 1.0  
**Date**: August 2025  
**Type**: Business Analysis Portfolio Simulation

---

### 1. Project Purpose / Business Need

Clinical trial operations at the organization currently depend on a patchwork of spreadsheets, email, shared folders, and legacy tools. This creates:

- Delays in site feasibility assessment and activation
- Inconsistent tracking of subject screening and enrollment
- Difficulty maintaining up-to-date visit schedules across sites
- High effort and risk during audits and inspections
- Limited real-time visibility for study managers and sponsors

A modern Clinical Trial Management System (CTMS) is required to standardize, digitize, and control core trial operational workflows while supporting regulatory compliance expectations (ICH-GCP principles, audit trails, role-based access).

---

### 2. Project Objectives

| # | Objective | Success Metric | Target |
|---|-----------|----------------|--------|
| 1 | Accelerate site activation | Average site activation cycle time | ↓ 25–35% |
| 2 | Improve enrollment visibility | Real-time enrollment status accuracy | ≥ 98% |
| 3 | Strengthen compliance posture | Audit trail completeness & retrieval time | Significant reduction in prep effort |
| 4 | Standardize visit tracking | % of visits tracked in system vs offline | ≥ 95% |
| 5 | Enable cross-study reporting | Standard operational dashboards available | Yes |

---

### 3. High-Level Scope

**In Scope (Phase 1)**
- Study / Protocol setup and version management
- Site identification, feasibility questionnaire, and activation workflow
- Subject screening, informed consent tracking, and enrollment
- Visit schedule definition and subject visit tracking
- Basic Adverse Event logging and notification routing (high-level)
- Role-based access, electronic audit trails
- Operational dashboards and standard reports
- Document tracking (essential documents status)

**Out of Scope (Phase 1)**
- Full Electronic Data Capture (EDC) / eCRF design and data entry
- Randomization and drug supply management (IWRS/IRT deep integration)
- Advanced pharmacovigilance / safety database
- eTMF (electronic Trial Master File) full content management
- Direct patient-facing apps / ePRO
- Financial / grant payment management

---

### 4. High-Level Timeline (Indicative)

| Phase | Duration | Focus |
|-------|----------|-------|
| Discovery & Process Analysis | 3–4 weeks | Stakeholder workshops, AS-IS mapping |
| Requirements Definition | 5–6 weeks | BRD, FRD, NFR, User Stories |
| Solution Design & Configuration | 10–14 weeks | System build / configuration |
| Testing & UAT | 4–5 weeks | Functional + UAT + compliance checks |
| Training & Go-Live | 3–4 weeks | Role-based training, hypercare |
| **Total** | **≈ 6–8 months** | |

---

### 5. Key Stakeholders

- **Sponsor**: Head of Clinical Operations / VP Clinical Development  
- **Business Owner**: Clinical Operations Manager / Study Management Lead  
- **Key Users**: Study Managers, Site Coordinators, CRAs / Monitors, Regulatory, Data Management  
- **Technical**: IT / Clinical Systems, Validation / QA  
- **External**: Principal Investigators (sites), Sponsor representatives (if applicable)

---

### 6. High-Level Risks

| Risk | Impact | Mitigation Direction |
|------|--------|----------------------|
| Resistance from sites to new processes | High | Early site engagement, simple UX, training |
| Regulatory / validation requirements underestimated | High | Involve QA/Validation early, design for auditability |
| Scope creep into full EDC / eTMF | Medium | Strict Phase 1 boundary, change control |
| Data migration from spreadsheets | Medium | Clear data standards and cleansing plan |

---

### 7. Authorization

This charter authorizes the Business Analysis activities for the TrialFlow CTMS portfolio simulation.

| Role | Name (Fictional) | Approval |
|------|------------------|----------|
| Project Sponsor | Dr. Meera Krishnan, Head of Clinical Operations | ________________ |
| Business Owner | Mr. Sanjay Verma, Clinical Operations Manager | ________________ |
| BA Lead | [Your Name] | ________________ |
