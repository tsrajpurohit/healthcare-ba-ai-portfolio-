# Project Charter  
## VigilAI – AI-Powered Pharmacovigilance Platform

**Project Code**: PV-AI-2025  
**Version**: 1.0  
**Date**: August 2025  
**Status**: Portfolio Simulation – Initiated from Business Request

---

### 1. Project Purpose / Business Need

A global pharmaceutical company is experiencing rising adverse event volumes, increasing regulatory complexity, and global expansion. Current pharmacovigilance operations depend heavily on a safety database supplemented by Excel trackers, emails, manual literature review, and manual case processing. This model does not scale efficiently and creates risks around processing timelines, signal detection speed, staff workload, and operational visibility.

The Head of Pharmacovigilance has requested an **AI-enabled pharmacovigilance platform** to automate aspects of safety case processing, improve signal detection, reduce manual workload, and provide better visibility into drug safety operations.

---

### 2. Project Objectives

| # | Objective | Success Indicator (Target Direction) |
|---|-----------|--------------------------------------|
| 1 | Accelerate safety case processing | Reduction in average case processing cycle time |
| 2 | Improve consistency and quality of case handling | Reduction in rework / query rates; improved coding consistency |
| 3 | Enhance signal detection | Earlier detection of potential signals; improved signal management throughput |
| 4 | Reduce manual repetitive workload | Measurable reduction in time spent on intake, triage, literature screening, routine checks |
| 5 | Improve operational visibility | Real-time / near real-time dashboards for case volumes, timelines, signals, compliance |
| 6 | Maintain / strengthen compliance posture | Full auditability of AI-assisted decisions; human accountability preserved |

---

### 3. High-Level Scope (Preliminary)

**In Scope (Recommended Phase 1 Focus)**
- AI-assisted case intake and triage
- Duplicate detection support
- AI-assisted MedDRA coding suggestions
- Case prioritization / seriousness & expectedness support
- Literature screening assistance
- Basic signal detection augmentation (disproportionality + prioritization)
- Operational dashboards and workqueue intelligence
- Integration with existing safety database (API / controlled interface)
- Human-in-the-loop controls and full audit trail

**Out of Scope (Phase 1 – Preliminary)**
- Fully autonomous case submission without human review
- Replacement of the core safety database of record
- Advanced causal inference models as sole decision makers
- Full aggregate reporting automation (PSUR/PBRER generation)
- Patient-facing applications

---

### 4. High-Level Timeline (Indicative)

| Phase | Duration | Focus |
|-------|----------|-------|
| Initiation & Discovery | 4–5 weeks | Charter, stakeholders, AS-IS, data assessment |
| AI Opportunity & Requirements | 6–7 weeks | Use-case prioritization, BRD, AI FRD, stories |
| Design, Model Development & Integration | 14–18 weeks | AI components, workflows, safety DB integration |
| Validation, Testing & UAT | 6–8 weeks | Accuracy, compliance, user acceptance |
| Pilot & Controlled Rollout | 4–6 weeks | Limited products/regions → broader |
| **Total (indicative)** | **≈ 9–12 months** | |

---

### 5. Key Stakeholders (Initial View)

- **Sponsor**: Head of Pharmacovigilance  
- **Business Owners**: PV Operations Lead, Signal Management Lead, Medical Review Lead  
- **Key Users**: Case Processors, Medical Reviewers, Literature Specialists, Signal Scientists  
- **Compliance / QA**: PV Quality, Regulatory Compliance  
- **Technical**: IT, Safety System Owner, Data Science / AI Team  
- **Others**: Epidemiology (as needed), Affiliate PV contacts  

---

### 6. High-Level Risks (Preliminary)

| Risk | Impact | Direction |
|------|--------|-----------|
| Regulatory / inspection concern over AI use | High | Human-in-the-loop, explainability, validation |
| Insufficient quality/volume of historical data for training | High | Early data assessment |
| User distrust of AI suggestions | High | Transparency, pilot success, training |
| Over-automation beyond comfort/compliance boundary | High | Clear automation boundaries |
| Integration complexity with existing safety database | Medium | API-first, phased approach |

---

### 7. Authorization

This charter initiates formal Business Analysis and AI Product Requirements work based on the sponsor request.

| Role | Name (Fictional) | Approval |
|------|------------------|----------|
| Project Sponsor | Dr. Elena Voss, Head of Pharmacovigilance | ________________ |
| PV Operations Owner | Mr. Rajiv Mehta, PV Operations Lead | ________________ |
| BA / AI Product Lead | [Your Name] | ________________ |
