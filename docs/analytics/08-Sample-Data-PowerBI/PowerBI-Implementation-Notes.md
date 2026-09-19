# Power BI Implementation Notes  
## InsightCare Analytics (Portfolio Guidance)

**Version**: 1.0

---

### Semantic Model
- Prefer star schema (Date, Facility, Department dimensions + fact tables)
- Centralize business logic in measures, not calculated columns where possible
- Use display folders for measures by domain (Flow, Quality, Finance)
- Document measure definitions to match the KPI Dictionary
- Plan incremental refresh for large fact tables
- Implement row-level security if multi-facility

---
