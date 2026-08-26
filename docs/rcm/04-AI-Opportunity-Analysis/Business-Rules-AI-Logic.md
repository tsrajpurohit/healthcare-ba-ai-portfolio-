# Business Rules & AI Decision Logic  
## MediClaim AI

**Version**: 1.0

---

### 1. Guiding Principles

1. **Human-in-the-Loop**: AI never has final authority on coding or high-risk claim submission.
2. **Explainability First**: Every score or recommendation must be accompanied by top contributing factors.
3. **Conservative Defaults**: When confidence is low, route to human review.
4. **Continuous Learning**: All accept / modify / reject actions are captured for model improvement.
5. **Compliance Override**: Any regulatory or payer rule always takes precedence over AI suggestion.

---

### 2. Denial Risk Scoring Rules

| Risk Score Band | Score Range | System Behavior | Human Action Required |
|-----------------|-------------|-----------------|-----------------------|
| Low Risk | 0 – 30 | Eligible for auto-submit (if other edits pass) | Optional review |
| Medium Risk | 31 – 70 | Routed to Biller workqueue with explanation | Required review |
| High Risk | 71 – 100 | Routed to senior reviewer / coder with high priority | Mandatory review + documented decision |

**Key Features Used by Model** (examples):
- Historical denial rate for same CPT + ICD combination + Payer
- Missing or incomplete documentation indicators
- Timely filing risk
- Authorization status
- Patient eligibility flags
- Coding complexity / unusual code pairs

---

### 3. Coding Assistance Rules

- AI may **suggest** codes with confidence score (0–100%).
- Suggestions below 70% confidence are shown as “low confidence – review carefully”.
- Coder must explicitly accept, modify, or reject each primary suggestion.
- Final coded claim always records whether AI suggestion was used.
- AI never auto-finalizes codes.

---

### 4. Workqueue Prioritization Logic (Simplified)

**Priority Score** =  
(Account Balance × Collection Probability × Strategic Weight) ÷ (Days Already Worked Factor)

Where:
- Collection Probability comes from ML model
- Strategic Weight can boost certain payers, specialties, or high-profile accounts
- Aging is considered but not the only factor

---

### 5. Override & Feedback Rules

- Every time a user rejects or modifies an AI recommendation, a reason code is mandatory (dropdown + optional free text).
- High-volume rejection patterns trigger model review by Data Science team.
- Compliance team has read-only access to all AI decisions and overrides for audit.

---

### 6. Model Governance Rules

- Models must be re-validated at least quarterly or after significant payer rule changes.
- Bias monitoring across payer, specialty, and demographic segments (where legally appropriate).
- Performance degradation (drift) automatically alerts AI team.
- Rollback capability to previous model version must exist.
