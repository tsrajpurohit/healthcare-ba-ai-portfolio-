# Project Charter  
## InsightCare Analytics – Healthcare Dashboards

**Project Code**: HADA-2025  
**Version**: 1.0  
**Date**: August 2025  
**Type**: Business Analysis Portfolio Simulation

---

### 1. Project Purpose / Business Need

Hospital leadership and operational managers currently rely on delayed, fragmented, and sometimes conflicting reports. Decisions about bed capacity, emergency department flow, staffing, quality performance, and financial health are often made with incomplete or outdated information.

**InsightCare Analytics** will deliver a governed suite of interactive dashboards that provide trusted, timely KPIs tailored to Executive, Operational, Clinical, and Finance audiences.

---

### 2. Project Objectives

| # | Objective | Success Metric | Target |
|---|-----------|----------------|--------|
| 1 | Establish a single source of truth for priority KPIs | % of priority KPIs with agreed definition & owner | 100% of Phase 1 KPIs |
| 2 | Improve reporting timeliness | Availability of operational KPIs | Daily (or near real-time where feasible) |
| 3 | Increase self-service usage | Active dashboard users / month | Defined adoption target |
| 4 | Build trust in numbers | User confidence score / validation sign-off | Formal validation completed |
| 5 | Support faster decisions | Reduction in ad-hoc data requests | Measurable decline |

---

### 3. High-Level Scope

**In Scope (Phase 1)**
- KPI discovery, definition, and prioritization
- Executive dashboard (high-level institutional performance)
- Operational dashboards (Patient Flow / ED, Inpatient Capacity, Workforce overview)
- Selected Quality & Safety indicators
- Selected Revenue Cycle / Financial indicators
- Role-based access and basic row-level security concepts
- Data dictionary / KPI dictionary
- Validation approach and UAT scenarios
- Power BI (or equivalent) delivery considerations

**Out of Scope (Phase 1)**
- Advanced predictive / AI models
- Real-time streaming clinical device data
- Full enterprise data warehouse redesign
- Patient-level clinical decision support
- External public reporting submissions (regulatory reporting systems)

---

### 4. High-Level Timeline (Indicative)

| Phase | Duration | Focus |
|-------|----------|-------|
| Discovery & KPI Workshops | 3–4 weeks | Stakeholder needs, current reports, pain points |
| KPI Definition & Prioritization | 3 weeks | Dictionary, calculation rules, owners |
| Dashboard Requirements & Design | 4 weeks | Wireframes, user stories, acceptance criteria |
| Data Preparation & Build | 6–8 weeks | Semantic model, visuals (Power BI) |
| Validation & UAT | 3–4 weeks | Data accuracy + usability acceptance |
| Training & Rollout | 2–3 weeks | Role-based enablement |
| **Total** | **≈ 5–6 months** | |

---

### 5. Key Stakeholders

- **Sponsor**: Chief Operating Officer / Chief Medical Officer (joint or primary COO)
- **Business Owners**: Heads of Operations, Quality, Finance, Nursing
- **Key Users**: Unit Managers, ED Leadership, Bed Management, Finance Analysts, Quality Team
- **Technical**: BI / Analytics team, Data Engineering, IT Security
- **Data Stewards**: Designated owners for each major metric domain

---

### 6. High-Level Risks

| Risk | Impact | Mitigation Direction |
|------|--------|----------------------|
| Disagreement on metric definitions | High | Formal KPI dictionary + sign-off process |
| Data quality issues in source systems | High | Early data profiling + clear data quality rules |
| Low user trust / adoption | High | Transparent calculations, validation, training |
| Scope creep into too many metrics | Medium | Strict prioritization (Must / Should) |
| Performance issues with large datasets | Medium | Aggregation strategy, incremental refresh |

---

### 7. Authorization

This charter authorizes the Business Analysis work for the InsightCare Analytics portfolio simulation.

| Role | Name (Fictional) | Approval |
|------|------------------|----------|
| Project Sponsor | Dr. Ananya Rao, COO | ________________ |
| Business Owner (Ops) | Mr. Vikram Shah, Head of Operations | ________________ |
| BA / Analytics Lead | [Your Name] | ________________ |
