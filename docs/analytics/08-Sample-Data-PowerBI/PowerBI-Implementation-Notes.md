# Power BI Implementation Notes  
## InsightCare Analytics (Portfolio Guidance)

**Version**: 1.0

---

### Recommended Approach for Portfolio Demo

1. **Import** `Sample-KPI-Data.csv` into Power BI Desktop.
2. **Create measures** (examples):
   - Average ED Wait = AVERAGE(ED_Avg_Wait_Min)
   - LWBS Rate = DIVIDE(SUM(LWBS_Count), SUM(ED_Arrivals))
   - Occupancy = AVERAGE(Inpatient_Occupancy_Pct)
3. **Build pages**:
   - Executive Overview (KPI cards + trends)
   - Patient Flow & Capacity
   - Finance / RCM Snapshot
4. **Add**:
   - Date slicer
   - Conditional formatting on KPI cards (e.g., Wait Time > 45 min = amber/red)
   - “Data as of” text box
5. **Optional**:
   - Simple tooltips with metric definitions
   - Buttons to navigate between pages

---

### Semantic Model Tips (Real Project)
- Prefer star schema (Date, Facility, Department dimensions + fact tables)
- Centralize business logic in measures, not calculated columns where possible
- Use display folders for measures by domain (Flow, Quality, Finance)
- Document measure definitions to match the KPI Dictionary
- Plan incremental refresh for large fact tables
- Implement row-level security if multi-facility

---

### Portfolio Presentation Tips
- Export PDF or take screenshots of each dashboard page
- Place images in `assets/samples/`
- In your README, link or embed the visuals
- Mention that sample data shows an improving trajectory (e.g., declining Days in AR, improving Clean Claim Rate) to demonstrate insight potential
