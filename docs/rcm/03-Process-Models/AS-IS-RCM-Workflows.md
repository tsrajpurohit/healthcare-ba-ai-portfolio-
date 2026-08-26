# AS-IS Revenue Cycle Workflows  
## MediClaim AI – Current State Analysis

**Version**: 1.0

---

### 1. High-Level RCM Value Chain (AS-IS)

```mermaid
flowchart LR
    A[Patient Registration & Eligibility] --> B[Clinical Documentation & Coding]
    B --> C[Charge Capture]
    C --> D[Claim Generation & Manual Scrubbing]
    D --> E[Claim Submission via Clearinghouse]
    E --> F{Accepted?}
    F -->|Yes| G[Payment Posting / AR]
    F -->|No - Denied| H[Denial Management & Appeals]
    H --> E
    G --> I[Patient Responsibility / Collections]
```

---

### 2. Claims Preparation & Submission – AS-IS

```mermaid
flowchart TD
    A[Encounter Closed / Charges Finalized] --> B[Coder Reviews Documentation]
    B --> C[Assigns ICD-10 / CPT Codes]
    C --> D[Claim Generated in PM/EHR]
    D --> E[Biller Manually Scrubs Claim]
    E --> F{Issues Found?}
    F -->|Yes| G[Return to Coder / Fix]
    G --> E
    F -->|No| H[Submit to Clearinghouse]
    H --> I[Clearinghouse Edits]
    I --> J{Passed?}
    J -->|No| K[Rejection - Manual Fix]
    K --> E
    J -->|Yes| L[Sent to Payer]
```

**Pain Points**:
- Heavy manual scrubbing
- Inconsistent application of payer-specific rules
- Late discovery of issues (after submission)
- High volume of preventable rejections/denials

---

### 3. Denial Management – AS-IS

```mermaid
flowchart TD
    A[Denial Received from Payer] --> B[Denial Posted to Account]
    B --> C[Denial Specialist Reviews]
    C --> D[Root Cause Analysis - Manual]
    D --> E{Appeable?}
    E -->|Yes| F[Gather Documentation & Write Appeal]
    F --> G[Submit Appeal]
    G --> H[Track Status Manually]
    E -->|No| I[Write-off or Patient Responsibility]
    H --> J{Overturned?}
    J -->|Yes| K[Payment Posted]
    J -->|No| I
```

**Pain Points**:
- Reactive process
- High volume of low-value denials consuming specialist time
- Inconsistent root-cause capture
- Limited feedback loop into prevention

---

### 4. AR Follow-up – AS-IS

- Workqueues often sorted by aging or payer only
- Little prioritization by probability of payment or value
- High-touch, low-yield accounts worked equally with high-value ones
- Limited use of predictive signals

---

### Summary of AS-IS Issues

| Area | Key Issues | Business Impact |
|------|------------|-----------------|
| Claim Scrubbing | Manual, inconsistent, late | Low clean claim rate, high rework |
| Coding | Variability, under/over coding risk | Revenue leakage + compliance risk |
| Denials | Reactive, high volume | High cost-to-collect, delayed revenue |
| AR Management | Poor prioritization | Sub-optimal cash acceleration |
| Feedback Loop | Weak prevention | Same errors repeated |
