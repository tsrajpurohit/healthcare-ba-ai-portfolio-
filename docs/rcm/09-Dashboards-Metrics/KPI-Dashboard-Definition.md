# KPI & Dashboard Definition  
## MediClaim AI

**Version**: 1.0

---

### Core RCM + AI KPIs

| KPI | Description | Target | Owner |
|-----|-------------|--------|-------|
| First-Pass Clean Claim Rate | % of claims accepted on first submission | ≥ 90% | RCM Director |
| Overall Denial Rate | % of claims denied | ≤ 10% | RCM Director |
| Average Days in AR | Average days from claim to payment | ≤ 35 | PFS Leader |
| AI Recommendation Acceptance Rate | % of AI suggestions accepted or lightly modified | ≥ 70% | AI + RCM |
| Manual Touch Rate | Average human interventions per claim | ↓ 40% | Ops |
| Denial Overturn Rate | % of appealed denials successfully overturned | ≥ 65% | Denial Lead |
| Model Precision (Denial Prediction) | At operating threshold | Agreed pilot target | Data Science |
| Model Recall (Denial Prediction) | At operating threshold | Agreed pilot target | Data Science |

---

### Recommended Dashboard Pages

1. **Executive RCM Pulse** – Clean Claim Rate, Denial Rate, Days in AR, Collection Trends, AI Adoption
   [Executive RCM Pulse](../assets/samples/executive_rcm_pulse.png)
3. **AI Performance** – Acceptance rate, Precision/Recall trends, Override reasons distribution, Drift alerts
4. **Denial Deep Dive** – Denial reasons, Overturn rates by category, AI vs Manual performance
5. **Workqueue Effectiveness** – Recovery rate of AI-prioritized vs traditional queues
6. **Coding Assist Impact** – Suggestion acceptance, coding time trend, under/over coding indicators

---

### Sample Data
See `Sample-Metrics-Data.csv` for illustrative daily metrics that can be used to build demo dashboards in Power BI or Tableau.
