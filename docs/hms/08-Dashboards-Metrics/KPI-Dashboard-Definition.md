# KPI & Dashboard Definition  
## CityCare General Hospital – HMS Operational Dashboards

**Version**: 1.0

---

### 1. Purpose
Provide real-time and near-real-time visibility into the performance of Registration, Appointments, and Billing processes to support operational decision-making and benefits tracking.

---

### 2. Key Performance Indicators (KPIs)

| KPI | Description | Target | Frequency | Owner |
|-----|-------------|--------|-----------|-------|
| Average Registration Time | Time from start of registration to completion | < 3 minutes | Daily / Real-time | Operations |
| % Unique Patient Records | Percentage of registrations that match existing MPI correctly | ≥ 95% | Weekly | Quality / Ops |
| Appointment No-Show Rate | % of booked appointments where patient did not attend | ≤ 15% | Daily / Weekly | Operations |
| Appointment Utilization Rate | % of available slots that were booked | ≥ 80% | Daily | Operations |
| First-Pass Billing Accuracy | % of invoices generated without correction | ≥ 90% | Weekly | Billing / Finance |
| Average Time to Invoice | Time from service completion to invoice generation | < 10 minutes | Daily | Billing |
| Daily Collection Amount | Total payments collected | Track vs target | Real-time / Daily | Finance |
| Patient Throughput (OPD) | Number of patients registered / seen | Track trend | Daily | Operations |

---

### 3. Recommended Dashboard Views

#### 3.1 Executive / Operations Dashboard (Landing Page)
- Today’s Registrations (count + vs yesterday)
- Today’s Appointments: Booked | Completed | No-Show | Cancelled
- Today’s Collection (₹) + Payment mode split
- Average Registration Time (today)
- No-Show Rate (last 7 days trend)
- Alerts: High no-show doctors, long registration queues (if measurable)

#### 3.2 Registration Performance Dashboard
- Registrations by hour (heatmap / bar)
- New vs Returning patients ratio
- Duplicate warning rate
- Average registration time trend
- Top registration clerks (volume)

#### 3.3 Appointment Performance Dashboard
- Utilization by Specialty / Doctor
- No-show rate by Specialty / Doctor
- Cancellation reasons breakdown
- Reminder delivery success rate
- Lead time distribution (how far in advance appointments are booked)

#### 3.4 Billing & Revenue Dashboard
- Collection by payment mode
- Average invoice value
- Pending payments / outstanding
- Discount amount and % of revenue
- Invoices generated vs services completed

---

### 4. Data Requirements for Dashboards
- Patient registration timestamp and completion timestamp
- Appointment status history (Booked → Confirmed → Completed / No-Show / Cancelled)
- Invoice and payment transaction records
- User actions for audit and performance attribution
- Doctor and Specialty master data

---

### 5. Sample Visualization Ideas (for Power BI / Tableau)
- KPI cards with conditional coloring (Green / Amber / Red against target)
- Line charts for trends (No-show rate, Registration time)
- Bar charts for volume by hour / specialty
- Pie / Donut for payment mode mix
- Table with drill-through to patient / appointment details (role-based)

---

### 6. Benefits Tracking
Post go-live, these KPIs will be used to measure actual benefits realization against the original Business Case targets.
