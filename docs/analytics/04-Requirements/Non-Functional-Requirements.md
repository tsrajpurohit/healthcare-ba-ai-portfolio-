# Non-Functional Requirements  
## InsightCare Analytics

**Version**: 1.0

---

### Performance
- Dashboard pages for typical users load within 5–8 seconds under normal load
- Filter interactions respond within 2–3 seconds for aggregated views
- Dataset refresh completes within agreed overnight / incremental windows

### Security & Access
- Authentication integrated with organizational identity provider where possible
- Role-based access to dashboards and underlying data
- Row-level security concepts applied where users should only see their facility/unit
- No inappropriate exposure of patient-identifiable data in executive/operational aggregates

### Reliability & Availability
- Dashboards available during core business hours with high reliability
- Clear communication when data refresh fails or is delayed

### Usability
- Consistent layout patterns across dashboards
- Minimal training required for consumption of Executive and Operational views
- Definitions accessible (tooltip or linked dictionary)

### Maintainability
- Measures and calculations centralized in the semantic model (not scattered across visuals)
- Documentation of data sources, refresh schedules, and owners kept current
- Change control for metric definition changes

### Compliance & Privacy
- Aggregation and access controls designed to respect privacy obligations
- Auditability of who can access which dashboards
