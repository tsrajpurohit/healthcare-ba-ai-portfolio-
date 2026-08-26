# Metric Calculation Rules  
## InsightCare Analytics

**Version**: 1.0  
**Purpose**: Remove ambiguity from how numbers are calculated.

---

### General Rules
- All time-based metrics use a consistent time zone (hospital local time).
- Patient-day calculations follow the organization’s standard midnight census rule unless otherwise specified.
- Exclusion rules (e.g., observation vs inpatient, left without being seen) are explicitly documented per metric.
- When source systems disagree, the system of record for each metric is stated.

---

### Example Detailed Rules

**KPI-PF-01 – ED Average Wait Time (Door to Provider)**
- **Numerator**: Sum of minutes from ED Arrival Timestamp to First Provider Contact Timestamp
- **Denominator**: Count of ED encounters with both timestamps present
- **Exclusions**: Encounters with missing timestamps; dead-on-arrival if configured
- **System of Record**: ED tracking / EHR ED module
- **Refresh**: Daily (previous full day + MTD option)

**KPI-PF-04 – Inpatient Bed Occupancy Rate**
- **Numerator**: Count of occupied staffed inpatient beds at the daily census snapshot time
- **Denominator**: Count of staffed inpatient beds at the same snapshot
- **Notes**: Observation beds treated according to local policy (document decision)
- **Snapshot Time**: e.g., 00:00 or agreed census time
- **Refresh**: Daily snapshot

**KPI-RC-01 – Days in Accounts Receivable**
- **Formula**: Total AR Balance ÷ Average Daily Net Revenue (trailing 30 or 90 days as agreed)
- **System of Record**: Billing / RCM system
- **Refresh**: Daily or Weekly as data latency allows

**KPI-QU-02 – 30-Day Readmission Rate**
- **Numerator**: Count of unplanned readmissions within 30 days of index discharge for the defined cohort
- **Denominator**: Count of index discharges in the cohort
- **Cohort Definition**: To be agreed (e.g., all-cause vs condition-specific; exclude certain planned readmissions)
- **Refresh**: Monthly (with lag for complete data)

---

### Data Quality Rules (Examples)
- Records missing critical timestamps are excluded from time-based metrics and counted in a data quality monitor.
- Duplicate encounter IDs are handled via agreed survivorship rules.
- Each dashboard page should surface a “Data as of” timestamp and known limitations.
