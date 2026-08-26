# Scope Statement  
## MediClaim AI – Intelligent RCM Platform

**Version**: 1.0

---

### 1. Product Scope Description

MediClaim AI is an intelligence layer that sits alongside existing Revenue Cycle systems (EHR, Practice Management, Clearinghouse) and uses AI/ML to improve claim quality, prevent denials, prioritize work, and accelerate cash flow.

---

### 2. In-Scope Capabilities (Phase 1)

| Capability Area | Description |
|-----------------|-------------|
| Claims Pre-Submission Scrubbing | Real-time validation of claims against payer rules, coding completeness, and historical denial patterns |
| Denial Prediction & Risk Scoring | ML model that scores each claim for denial probability and likely denial reason category |
| Intelligent Coding Assistance | Suggest ICD-10 and CPT codes based on clinical documentation with confidence scores |
| Smart AR & Denial Workqueues | AI-ranked worklists based on value, probability of collection, aging, and denial risk |
| Prior Authorization Intelligence | Track status, identify missing information, and alert before service or claim submission |
| Patient Payment Propensity | Score likelihood of patient payment to guide collection strategy |
| Explainability & Audit | Reason codes and feature importance for AI recommendations (human-in-the-loop) |
| Integration Layer | Bi-directional APIs with EHR / PM system and Clearinghouse |
| RCM Analytics Dashboard | Real-time and trend views of clean claim rate, denial rate, Days in AR, AI adoption |

---

### 3. Out-of-Scope (Phase 1)

- Fully autonomous claim submission without human review
- Clinical Documentation Improvement (CDI) natural language processing deep dive
- Patient-facing billing portal or payment plans engine
- Payer contract modeling and underpayment detection
- End-to-end RPA bots for every RCM step
- Multi-country / multi-currency support
- Advanced generative AI for appeal letter drafting (Phase 2 candidate)

---

### 4. Key Deliverables

1. Project Charter & Business Case  
2. Stakeholder Analysis & RACI  
3. AS-IS and TO-BE RCM Process Models  
4. AI Opportunity & Use-Case Prioritization  
5. Business Requirements Document (BRD)  
6. Functional & AI Requirements Document  
7. Business Rules & AI Decision Logic  
8. Prioritized Agile Backlog (User Stories + AC)  
9. UAT Scenarios focused on AI recommendations  
10. KPI Framework & Sample Dashboard Data  
11. Requirements Traceability Matrix  
12. Risk Register (including AI-specific risks)

---

### 5. Acceptance Criteria (Project Level)

- All Must-have AI use cases deliver measurable lift in pilot (e.g., denial prediction precision/recall targets met)
- Human-in-the-loop controls are functional and accepted by users
- Integration with at least one EHR/PM and one Clearinghouse validated
- Key RCM KPIs show positive movement in pilot period
- Formal UAT sign-off from RCM leadership and end-user representatives
- Compliance and audit requirements satisfied

---

### 6. Constraints

- Must maintain HIPAA / applicable data protection compliance
- AI recommendations must be explainable to end users
- Cannot replace certified coder final responsibility for coding
- Timeline pressure to show value within first 12 months
- Dependency on historical claims and denial data quality
