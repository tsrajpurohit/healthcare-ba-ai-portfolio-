# KPI Dictionary  
## InsightCare Analytics – Phase 1

**Version**: 1.0  
**Purpose**: Single source of truth for metric definitions, owners, and usage.

---

### 1. Patient Flow & Capacity

| KPI ID | KPI Name | Definition | Formula / Logic (Summary) | Unit | Refresh | Owner | Dashboard |
|--------|----------|------------|---------------------------|------|---------|-------|-----------|
| KPI-PF-01 | ED Average Wait Time (Door to Provider) | Average time from patient arrival in ED to first provider contact | Sum of (Provider Contact Time – Arrival Time) / Count of ED Encounters | Minutes | Daily | ED Director | Flow & Capacity |
| KPI-PF-02 | ED Length of Stay | Average total time from ED arrival to departure | Sum of (Departure – Arrival) / Count of ED Encounters | Hours | Daily | ED Director | Flow & Capacity |
| KPI-PF-03 | Left Without Being Seen (LWBS) Rate | % of ED patients who left before provider evaluation | (LWBS Count / Total ED Arrivals) × 100 | % | Daily | ED Director | Flow & Capacity |
| KPI-PF-04 | Inpatient Bed Occupancy Rate | % of staffed inpatient beds occupied at census time | (Occupied Beds / Staffed Beds) × 100 | % | Daily (snapshot) | Bed Management | Flow & Capacity |
| KPI-PF-05 | Average Length of Stay (ALOS) – Inpatient | Average number of days patients stay in inpatient beds | Total Inpatient Days / Number of Discharges | Days | Daily / Monthly | Operations | Flow & Capacity / Executive |
| KPI-PF-06 | Bed Turnaround Time | Average time from patient discharge to bed ready for next patient | Sum of (Bed Ready Time – Discharge Time) / Count of Turnarounds | Hours | Daily | Operations | Flow & Capacity |

---

### 2. Quality & Safety (Selected)

| KPI ID | KPI Name | Definition | Formula / Logic (Summary) | Unit | Refresh | Owner | Dashboard |
|--------|----------|------------|---------------------------|------|---------|-------|-----------|
| KPI-QU-01 | Hospital-Acquired Infection Rate (selected) | Rate of specified HAIs per 1,000 patient days | (HAI Count / Patient Days) × 1000 | Rate | Monthly | Quality | Quality / Executive |
| KPI-QU-02 | 30-Day Readmission Rate (selected cohort) | % of patients readmitted within 30 days of discharge | (Readmissions within 30 days / Index Discharges) × 100 | % | Monthly | Quality | Quality / Executive |
| KPI-QU-03 | Medication Error Rate (reported) | Reported medication errors per 1,000 patient days | (Reported Errors / Patient Days) × 1000 | Rate | Monthly | Quality / Nursing | Quality |

---

### 3. Workforce

| KPI ID | KPI Name | Definition | Formula / Logic (Summary) | Unit | Refresh | Owner | Dashboard |
|--------|----------|------------|---------------------------|------|---------|-------|-----------|
| KPI-WF-01 | Nursing Hours per Patient Day | Productive nursing hours divided by patient days | Productive Nursing Hours / Patient Days | Hours | Daily / Monthly | CNO | Workforce / Executive |
| KPI-WF-02 | Agency / Overtime % of Nursing Hours | Share of nursing hours delivered via agency or overtime | (Agency + OT Hours) / Total Nursing Hours × 100 | % | Monthly | CNO | Workforce |

---

### 4. Revenue Cycle / Financial (Selected)

| KPI ID | KPI Name | Definition | Formula / Logic (Summary) | Unit | Refresh | Owner | Dashboard |
|--------|----------|------------|---------------------------|------|---------|-------|-----------|
| KPI-RC-01 | Days in Accounts Receivable | Average number of days to collect payment | (AR Balance / Average Daily Revenue) | Days | Daily / Weekly | Finance | Finance / Executive |
| KPI-RC-02 | Clean Claim Rate | % of claims accepted on first submission | (Clean Claims / Total Claims Submitted) × 100 | % | Daily / Weekly | RCM | Finance |
| KPI-RC-03 | Denial Rate | % of claims denied | (Denied Claims / Total Claims) × 100 | % | Weekly / Monthly | RCM | Finance |

---

### 5. Executive Summary Metrics
The Executive Dashboard surfaces a curated subset: Occupancy, ALOS, ED Wait Time / LWBS, selected Quality indicators, Days in AR, and high-level volume trends (Admissions, ED Visits, Discharges).
