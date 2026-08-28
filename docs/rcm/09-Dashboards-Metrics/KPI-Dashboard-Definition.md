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

=== ":material-monitor-dashboard: Executive RCM Pulse"
    Clean Claim Rate · Denial Rate · Days in AR · Collection Trends · AI Adoption

    ![Executive RCM Pulse](../assets/samples/executive_rcm_pulse.png)

=== ":material-robot: AI Performance"
    Acceptance Rate · Precision/Recall Trends · Override Reasons · Drift Alerts

    ![AI Performance](../assets/samples/ai_performance.png)

=== ":material-alert-decagram-outline: Denial Deep Dive"
    Denial Reasons · Overturn Rates by Category · AI vs. Manual Performance

    ![Denial Deep Dive](../assets/samples/denial_deep_dive.png)
---

### Sample Data

:material-file-delimited-outline: See [`Sample-Metrics-Data.csv`](Sample-Metrics-Data.csv) for illustrative metrics.



<!--
    ### Recommended Dashboard Pages

!!! example "1 · Executive RCM Pulse"
    Clean Claim Rate · Denial Rate · Days in AR · Collection Trends · AI Adoption

    <figure markdown="span">
      ![Executive RCM Pulse](../assets/samples/executive_rcm_pulse.png)
      <figcaption>Executive RCM Pulse Dashboard</figcaption>
    </figure>
-->


<!--
<div class="grid cards" markdown>

-   #### :material-monitor-dashboard: Executive RCM Pulse
    Clean Claim Rate · Denial Rate · Days in AR · Collection Trends · AI Adoption
    ![Executive RCM Pulse](../assets/samples/executive_rcm_pulse.png)

-   #### :material-robot: AI Performance
    Acceptance Rate · Precision/Recall Trends · Override Reasons · Drift Alerts
    ![AI Performance](../assets/samples/ai_performance.png)

-   #### :material-alert-decagram-outline: Denial Deep Dive
    Denial Reasons · Overturn Rates by Category · AI vs. Manual Performance
    ![Denial Deep Dive](../assets/samples/denial_deep_dive.png)

</div>

-->
