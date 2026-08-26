# KPI & Dashboard Definition  
## VigilAI Pharmacovigilance Operations

**Version**: 1.0

---

### Core KPIs

| KPI | Description | Target Direction | Owner |
|-----|-------------|------------------|-------|
| Case Intake-to-Triage Time | Elapsed time from receipt to triage complete | ↓ | PV Ops |
| Case Processing Cycle Time | Receipt to submission-ready | ↓ | PV Ops |
| Manual Touch Rate | Average human interventions per case on AI-supported steps | ↓ | PV Ops |
| AI Suggestion Acceptance Rate | % of AI coding / triage suggestions accepted or lightly modified | ↑ (to agreed band) | PV Ops / DS |
| Duplicate Detection Precision | Precision of ranked duplicate suggestions at operating threshold | ≥ agreed pilot target | Data Science |
| Literature Screening Volume Handled | Items screened with AI support vs baseline | ↑ efficiency | Literature Lead |
| Serious Case Timeliness Compliance | % of serious cases meeting regulatory timelines | ≥ target | PV Ops / Compliance |
| Open Backlog by Priority | Count and age of open cases by priority band | Monitor / ↓ aging | PV Ops |
| Signal Review Throughput | Potential signals reviewed per period | ↑ | Signal Lead |
| Audit Trail Completeness | % of AI-influenced decisions fully logged | 100% | QA |

---

### Recommended Dashboards

1. **PV Operations Command Center** – Volumes, cycle times, backlog by priority, timeliness, AI adoption  
2. **Case Processing Quality** – Rework rates, QC flag rates, coding consistency indicators  
3. **Literature Pipeline** – Inflow, ranked queue size, decision mix, time-to-review  
4. **Signal Pipeline** – New potential signals, prioritization distribution, review status  
5. **AI Performance & Governance** – Acceptance rates, override reasons, model version, drift alerts  

---

### Sample Data Note
A representative sample metrics file can be added under `assets/samples/` or `09-Dashboards-Metrics/` for Power BI / Tableau demos showing improving cycle times and rising AI acceptance during a simulated pilot.
