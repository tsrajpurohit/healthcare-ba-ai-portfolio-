# Scope Statement (Preliminary)  
## VigilAI – AI-Powered Pharmacovigilance Platform

**Version**: 1.0  
**Based on**: Day 0 Business Request + Initial Analysis

---

### 1. In-Scope (Phase 1 – Proposed)

| Domain | Capabilities |
|--------|--------------|
| Case Intake & Triage | Multi-source intake support, AI-assisted data extraction, duplicate detection, automatic prioritization |
| Case Processing Support | MedDRA coding suggestions, seriousness/expectedness decision support, narrative assistance, quality rule checks |
| Literature Monitoring | AI-assisted screening of literature for relevant safety information, relevance ranking, routing to reviewers |
| Signal Detection Support | Enhanced detection and prioritization of potential signals from case data (and literature where integrated) |
| Workqueues & Workflow | Intelligent workqueues, status tracking, workload visibility |
| Operational Analytics | Dashboards for case volumes, processing timelines, quality metrics, signal pipeline, compliance indicators |
| Integration | Controlled integration with existing safety database; literature source connections |
| Governance | Role-based access, explainability of AI outputs, full audit trail of AI suggestions and human decisions |

---

### 2. Out-of-Scope (Phase 1)

- Replacement of the validated safety database of record
- Fully autonomous case processing or submission without human review
- Automatic generation and submission of aggregate reports (PSUR/PBRER) as final output
- Replacement of medical judgment for causality assessment
- Patient or healthcare professional mobile apps
- Full global multi-language literature coverage beyond agreed priority sources in Phase 1

---

### 3. Key Principles (Non-Negotiable)

1. **Human-in-the-Loop** – AI recommends; qualified PV professionals decide  
2. **Explainability** – Users can understand why an AI suggestion was made  
3. **Auditability** – Every AI recommendation and human decision is logged  
4. **Compliance-First** – Design supports GVP principles and inspection readiness  
5. **Augmentation, not Replacement** – Goal is to elevate human expertise, not remove it  

---

### 4. Success Criteria (Direction)

- Measurable reduction in manual effort for targeted steps
- Improved or maintained compliance with processing timelines
- Positive user acceptance of AI assistance in pilot
- Demonstrable value in signal prioritization or earlier insight
- Clean audit trail and successful validation / UAT outcomes
