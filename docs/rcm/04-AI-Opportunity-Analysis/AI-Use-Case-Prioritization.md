# AI Use-Case Prioritization  
## MediClaim AI

**Version**: 1.0  
**Method**: Impact × Feasibility × Strategic Fit (Weighted Scoring)

---

### Scoring Model (1–5 scale)

| Criterion | Weight |
|-----------|--------|
| Financial Impact | 30% |
| Operational Impact (effort reduction) | 20% |
| Technical Feasibility | 25% |
| Data Readiness | 15% |
| User Adoption Likelihood | 10% |

---

### Prioritized Backlog of AI Use Cases

| Priority | Use Case | Weighted Score | Phase | Notes |
|----------|----------|----------------|-------|-------|
| P0 | Pre-Submission Denial Risk Scoring + Scrubbing | 4.6 | Phase 1 | Highest ROI, clear data |
| P0 | AI-Ranked Denial & AR Workqueues | 4.4 | Phase 1 | Quick win, high user value |
| P0 | Denial Reason Classification | 4.2 | Phase 1 | Feeds prevention loop |
| P1 | Intelligent Coding Assistance | 3.9 | Phase 1 | High value but needs strong explainability |
| P1 | Prior Auth Intelligence & Alerts | 3.5 | Phase 1 (light) / Phase 2 | Depends on data access |
| P2 | Patient Payment Propensity | 3.3 | Phase 2 | Valuable for PFS |
| P2 | GenAI Appeal Drafting | 3.1 | Phase 2 | Emerging capability |
| P3 | Underpayment Detection | 2.9 | Future | Requires contract data |

---

### Pilot Recommendation

**Recommended Pilot Scope**:
1. Denial Risk Scoring on outpatient claims for top 3 payers
2. AI-ranked denial workqueue for one specialty or one denial category
3. Basic coding suggestions for high-volume procedures

**Success Criteria for Pilot**:
- Denial prediction Precision ≥ 75% at chosen threshold
- At least 20% reduction in manual scrubbing time for pilot population
- User acceptance rate of AI recommendations ≥ 60%
- No increase in compliance incidents
