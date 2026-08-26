# Gap Analysis  
## AS-IS vs TO-BE – CityCare HMS

**Version**: 1.0

---

### 1. Process Gap Summary

| Process Area | AS-IS State | TO-BE State | Gap / Required Change | Priority |
|--------------|-------------|-------------|-----------------------|----------|
| Patient Identification | Manual search in Excel/Legacy; high duplicates | Smart MPI search with matching rules + unique ID | Implement robust Master Patient Index + matching algorithm | Critical |
| Registration Speed | 12–18 minutes average | < 3 minutes target | Digitize form, auto-validation, quick check-in for returning patients | Critical |
| Data Quality | Incomplete forms, inconsistent entries | Mandatory fields + format validation | Enforce data rules at entry point | High |
| Appointment Visibility | Paper diary / shared Excel | Real-time multi-user calendar | Centralized scheduling engine | Critical |
| Reminders | None | Automated SMS/Email (48h + 2h) | Integrate notification service | High |
| No-Show Management | Reactive | Proactive reminders + easy reschedule | Process + system support | High |
| Charge Capture | Manual after the fact | Auto-suggested based on service | Configurable price master + service linkage | Critical |
| Invoice Generation | Manual / delayed | Instant itemized digital invoice | Billing engine | High |
| Payment Recording | Separate manual entry | Real-time linked to invoice | Integrated payment module | High |
| Operational Visibility | Delayed Excel reports | Real-time dashboards | KPI data model + reporting layer | Medium |
| Audit & Compliance | Limited paper trails | Full electronic audit log | System logging of all key actions | High |

---

### 2. People & Change Gaps

| Gap | Description | Recommended Action |
|-----|-------------|--------------------|
| Skill Gap | Staff accustomed to paper/Excel | Structured training + super-user program |
| Resistance | Fear of job impact or system complexity | Early involvement, clear communication of benefits, quick wins |
| Process Discipline | Current workarounds and informal processes | Standard operating procedures (SOPs) + monitoring |
| Doctor Buy-in | Concern about schedule control | Involve doctor representatives early; preserve flexibility |

---

### 3. Technology Gaps

| Gap | Current | Required |
|-----|---------|----------|
| Core System | Fragmented legacy + Excel | Integrated HMS modules |
| Integration | Minimal | Ability to exchange data with existing systems if needed |
| Mobile / Tablet Support | Limited | Registration counters should support tablets |
| Notification Capability | None | SMS + Email gateway |
| Reporting | Manual | Configurable dashboards and scheduled reports |
| Security & Access | Basic | Role-based access control + audit trail |

---

### 4. Priority of Gaps for Phase 1

**Must Address (Critical for Go-Live)**  
- MPI & Registration workflow  
- Real-time Appointment calendar  
- Basic automated Billing & Payment  
- Role-based access & audit  

**Should Address**  
- Automated reminders  
- Core operational dashboards  
- Training & change management  

**Could Address (Later)**  
- Advanced analytics  
- Patient self-service  
- Deep legacy integration
