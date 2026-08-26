# Validation & UAT Scenarios  
## InsightCare Analytics

**Version**: 1.0

---

### Dual Focus of Validation
1. **Data Accuracy** – Do the numbers match the trusted source within agreed tolerance?
2. **Usability & Acceptance** – Can target users find insights and trust what they see?

---

### Entry Criteria
- KPI Dictionary signed off by owners
- Semantic model and dashboards built for Phase 1 scope
- Source extracts available for reconciliation
- UAT users trained on navigation

### Exit Criteria
- Critical KPIs validated against source within tolerance
- No open Severity-1 defects
- Formal acceptance from metric owners and key user representatives
- “Data as of” and known limitations documented on dashboards

---

### Sample Validation Scenarios

**VAL-PF-01: ED Wait Time Reconciliation**  
**Priority**: Critical  
**Steps**:
1. Select a specific date in the dashboard
2. Note ED Average Wait Time value
3. Compare to independent extract from ED system using the same definition
**Expected**: Difference within agreed tolerance (e.g., ±1–2% or absolute minute threshold). Differences investigated and explained.

**VAL-PF-02: Occupancy Snapshot**  
**Priority**: Critical  
**Steps**: Compare dashboard occupancy for a census timestamp against bed management source.  
**Expected**: Match within tolerance; bed inclusion rules confirmed.

**VAL-RC-01: Days in AR**  
**Priority**: Critical  
**Steps**: Reconcile dashboard Days in AR to Finance/RCM report for the same period.  
**Expected**: Alignment within tolerance; formula documented.

**VAL-QU-01: Readmission Rate**  
**Priority**: High  
**Steps**: Compare monthly rate to Quality team’s official calculation.  
**Expected**: Match after applying agreed cohort and exclusion rules.

**UAT-EX-01: Executive Dashboard Usability**  
**Priority**: High  
**Role**: Executive / Senior Leader  
**Steps**: Navigate Executive Overview, apply date filter, interpret KPI cards and trends.  
**Expected**: User can explain what they see without assistance; finds the view useful.

**UAT-OP-01: Operational Decision Support**  
**Priority**: High  
**Role**: ED or Operations Manager  
**Steps**: Use Flow & Capacity dashboard to answer: “Where are we off target today and what needs attention?”  
**Expected**: User can identify off-target metrics and supporting detail within a few minutes.

**UAT-GOV-01: Definition Transparency**  
**Priority**: Medium  
**Steps**: Locate definition for a KPI from the dashboard.  
**Expected**: Definition and owner are accessible and match the KPI Dictionary.

---

### Sign-off

| Role | Name | Date | Signature | Comments |
|------|------|------|-----------|----------|
| COO / Sponsor | | | | |
| Head of Operations | | | | |
| Quality Lead | | | | |
| Finance / RCM Lead | | | | |
| BI / Analytics Lead | | | | |
