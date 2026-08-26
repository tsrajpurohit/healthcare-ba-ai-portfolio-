# AS-IS Process Models  
## TrialFlow CTMS – Current State

**Version**: 1.0  
*(Modeled in Mermaid – BPMN-inspired flow style)*

---

### 1. Site Feasibility & Activation – AS-IS

```mermaid
flowchart TD
    A[Study Manager identifies potential sites] --> B[Send feasibility questionnaire via email]
    B --> C[Site Coordinator completes form offline / Excel]
    C --> D[Email response back]
    D --> E[Study Manager reviews manually]
    E --> F{Suitable?}
    F -->|No| G[Archive / Notify site]
    F -->|Yes| H[Collect essential documents via email / shared drive]
    H --> I[Track document status in spreadsheet]
    I --> J[Multiple follow-ups by email/phone]
    J --> K[Site Initiation Visit scheduled manually]
    K --> L[Activation decision recorded in spreadsheet]
    L --> M[Notify site by email]
```

**Pain Points**: Version control issues, delayed responses, no single status view, high email volume, difficult audit trail.

---

### 2. Subject Screening & Enrollment – AS-IS

```mermaid
flowchart TD
    A[Patient identified at site] --> B[Screening recorded in site spreadsheet or paper]
    B --> C[Informed Consent process paper-based]
    C --> D[Consent form filed locally]
    D --> E[Enrollment decision]
    E --> F[Details emailed or entered into central spreadsheet later]
    F --> G[Study Manager consolidates enrollment numbers periodically]
    G --> H[Status often outdated]
```

**Pain Points**: Delayed central visibility, risk of incomplete consent documentation tracking, enrollment forecasts unreliable.

---

### 3. Visit Scheduling & Tracking – AS-IS

```mermaid
flowchart TD
    A[Protocol visit schedule defined in protocol / Excel] --> B[Site Coordinator maintains local calendar]
    B --> C[Subject visits scheduled ad-hoc]
    C --> D[Reminders via phone/email]
    D --> E[Visit completion noted locally]
    E --> F[Status updated to central tracker late or inconsistently]
    F --> G[Missed windows discovered late]
    G --> H[Protocol deviations raised reactively]
```

**Pain Points**: Window compliance hard to monitor in real time, high risk of missed visits, limited proactive alerts.

---

### Summary of AS-IS Issues

| Process | Major Issues | Business Impact |
|---------|--------------|-----------------|
| Site Activation | Manual, email-driven, poor tracking | Delayed study startup |
| Enrollment | Fragmented data entry | Inaccurate metrics & forecasts |
| Visit Tracking | Local calendars, delayed updates | Protocol deviations, data gaps |
| Overall | Weak audit trail, dual data entry | Compliance risk, inefficiency |
