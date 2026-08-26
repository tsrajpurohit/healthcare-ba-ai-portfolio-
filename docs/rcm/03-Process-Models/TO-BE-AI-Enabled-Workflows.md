# TO-BE AI-Enabled RCM Workflows  
## MediClaim AI – Future State

**Version**: 1.0

---

### 1. High-Level TO-BE Value Chain

```mermaid
flowchart LR
    A[Registration & Eligibility] --> B[Documentation & AI Coding Assist]
    B --> C[Charge Capture]
    C --> D[AI Claim Scrubbing + Denial Risk Score]
    D --> E{Risk Acceptable?}
    E -->|Yes| F[Submit via Clearinghouse]
    E -->|No - High Risk| G[Human Review + Fix]
    G --> D
    F --> H[Payment / AR]
    H --> I[AI-Prioritized Workqueues]
    F --> J[Denial Received]
    J --> K[AI Root Cause + Smart Appeal Routing]
```

---

### 2. AI-Augmented Claim Preparation – TO-BE

```mermaid
flowchart TD
    A[Encounter Closed] --> B[AI Coding Assist Suggests ICD/CPT]
    B --> C[Coder Reviews Suggestions + Finalizes Codes]
    C --> D[Claim Generated]
    D --> E[AI Real-time Scrubbing Engine]
    E --> F[Denial Risk Score + Issue List Generated]
    F --> G{Score & Issues}
    G -->|Low Risk + Clean| H[Auto-route to Submission]
    G -->|Medium / High Risk or Issues| I[Biller / Coder Workqueue]
    I --> J[Human Reviews AI Explanation]
    J --> K[Fixes Issues]
    K --> E
    H --> L[Submitted to Clearinghouse / Payer]
```

**Key Improvements**:
- Issues caught before submission
- AI provides explainable reasons
- Human remains final decision maker
- Continuous learning from outcomes

---

### 3. Intelligent Denial Management – TO-BE

```mermaid
flowchart TD
    A[Denial Received] --> B[AI Classifies Denial Reason + Predicts Overturn Probability]
    B --> C[Smart Routing]
    C --> D{High Overturn Probability?}
    D -->|Yes| E[Priority Appeal Workqueue + Suggested Evidence]
    D -->|No / Low Value| F[Auto-suggest Write-off or Patient Bill]
    E --> G[Specialist Reviews AI Recommendation]
    G --> H[Files Appeal with AI-assisted content]
    H --> I[Outcome Fed Back to Model]
```

---

### 4. AI-Prioritized AR Workqueue – TO-BE

- Accounts ranked by composite score:  
  **Expected Value × Probability of Collection × Aging Factor × Strategic Priority**
- Specialists work highest-impact accounts first
- AI flags accounts needing clinical review vs pure administrative follow-up

---

### 5. Human-in-the-Loop Principles (Design Mandate)

1. AI **recommends**, humans **decide** on coding and high-risk claims  
2. Every AI score/recommendation must have an explanation  
3. Users can accept, modify, or reject AI suggestions (feedback captured)  
4. Override reasons are logged for model improvement and compliance  
5. Final coding responsibility remains with certified coder
