# Dashboard Mockup Description  
## For Portfolio Demonstration (Power BI / Tableau / Excel)

**Version**: 1.0

This document describes recommended dashboard layouts that can be built using the Sample-Metrics-Data.csv file provided in this folder.

---

### 1. Executive Operations Dashboard (Single Page)

**Layout Suggestion**:

**Top Row – KPI Cards** (4–6 cards)
- Today’s Registrations: 429 (↑ 7% vs yesterday)
- Avg Registration Time: 2.8 min (Target < 3 min) → Green
- Today’s No-Show Rate: 9.4% (Target ≤ 15%) → Green
- Today’s Collection: ₹19.7 Lakhs

**Second Row – Trends**
- Line chart: Daily Registrations (last 14–30 days)
- Line chart: No-Show Rate trend
- Line chart: Average Registration Time trend

**Third Row – Breakdowns**
- Bar chart: Appointments by Status (Booked / Completed / No-Show / Cancelled)
- Donut / Pie: Payment Mode Mix (Cash / Card+UPI / Insurance)
- Table: Top 5 Specialties by Utilization

**Filters**: Date range, Specialty, Doctor (optional)

---

### 2. Registration Deep-Dive Dashboard

- Registrations by Hour of Day (bar or heatmap)
- New vs Returning Patient split (donut)
- Average Registration Time by Clerk (if data available)
- Duplicate Warning Rate trend

---

### 3. Appointment Performance Dashboard

- Utilization % by Specialty (horizontal bar)
- No-Show Rate by Specialty / Doctor
- Cancellation Reasons (bar or pie)
- Bookings made how many days in advance (histogram)

---

### 4. How to Demo in Portfolio

1. Import `Sample-Metrics-Data.csv` into Power BI Desktop or Tableau Public.
2. Create the KPI cards and charts described above.
3. Add conditional formatting (green/amber/red) based on targets.
4. Take screenshots or export a PDF and place them in the `assets/` folder.
5. Optionally publish to Power BI Service / Tableau Public and link from the README.

This demonstrates that the BA not only gathers requirements but also defines measurable success metrics and visualization needs.
