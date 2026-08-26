# Dashboard Requirements  
## InsightCare Analytics

**Version**: 1.0

---

### 1. Audience & Dashboard Map

| Dashboard | Primary Audience | Purpose | Key KPIs |
|-----------|------------------|---------|----------|
| Executive Overview | C-Suite, Senior Leadership | Institutional pulse | Occupancy, ALOS, ED Wait/LWBS, Readmission, Days in AR, Volumes |
| Patient Flow & Capacity | COO team, ED, Bed Management, Unit Managers | Daily operational management | ED Wait, ED LOS, LWBS, Occupancy, Bed Turnaround, ALOS |
| Quality & Safety Snapshot | CMO, Quality, Nursing | Quality performance monitoring | Readmission, HAI (selected), Medication Errors (selected) |
| Workforce Overview | CNO, Nursing Leadership | Staffing efficiency | Nursing Hours per Patient Day, Agency/OT % |
| Finance / RCM Snapshot | CFO, RCM, Finance | Revenue cycle health | Days in AR, Clean Claim Rate, Denial Rate |

---

### 2. Functional Dashboard Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| DR-01 | Each dashboard shall have a clear title, “Data as of” timestamp, and last refresh indicator | Must |
| DR-02 | Users shall be able to filter by Date Range, Facility/Site (if multi-site), and relevant dimensions (e.g., Department, Specialty) | Must |
| DR-03 | KPI cards shall support conditional formatting against targets (e.g., green/amber/red) | Must |
| DR-04 | Trend visuals (line/bar) shall be available for core KPIs over selectable periods | Must |
| DR-05 | Users shall be able to drill from summary KPI to supporting detailed view (within security boundaries) | Should |
| DR-06 | Tooltips shall show definition or link to KPI dictionary entry where practical | Should |
| DR-07 | Dashboards shall be usable on desktop and standard tablet browsers | Must |
| DR-08 | Export of summarized tables to Excel/CSV shall be supported where policy allows | Should |

---

### 3. Wireframe-Level Descriptions (Textual)

**Executive Overview (Single Page)**
- Top row: 6–8 KPI cards (Occupancy, ALOS, ED Median Wait, LWBS %, 30-Day Readmission, Days in AR, Today’s Admissions, Today’s ED Visits)
- Second row: Trend sparklines or small multiples for the last 30/90 days
- Third row: Volume trend (Admissions / Discharges / ED Visits) + simple breakdown (e.g., by major service line)

**Patient Flow & Capacity**
- ED section: Wait time, ED LOS, LWBS, volume by hour/day
- Inpatient section: Occupancy (overall + by ward/unit), ALOS, Bed Turnaround
- Alerts / callouts for units above occupancy threshold or ED wait above target

**Finance / RCM Snapshot**
- KPI cards: Days in AR, Clean Claim Rate, Denial Rate
- Trend lines
- Optional breakdown by payer group or major service line

---

### 4. Non-Visual Requirements
- Consistent color palette and number formatting across all dashboards
- Accessibility considerations (contrast, readable fonts)
- Mobile/responsive behavior acceptable for consumption (not heavy editing)
