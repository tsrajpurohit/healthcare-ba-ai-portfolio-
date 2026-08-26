# AS-IS Process Models  
## VigilAI – Current Pharmacovigilance State

**Version**: 1.0

---

### 1. Safety Case Processing – AS-IS (High-Level)

```mermaid
flowchart TD
    A[AE Report Received<br/>Multiple sources: Spontaneous, Literature, Solicited, Partners] --> B[Manual Intake into Safety Database]
    B --> C[Manual Duplicate Check<br/>Search + Excel trackers]
    C --> D[Triage: Seriousness / Expectedness<br/>Mostly manual]
    D --> E[Data Entry & MedDRA Coding<br/>Manual]
    E --> F[Narrative Writing<br/>Manual]
    F --> G[Medical Review]
    G --> H[Quality Check]
    H --> I{Queries / Corrections?}
    I -->|Yes| E
    I -->|No| J[Regulatory Submission / Distribution]
    J --> K[Tracking in Excel + Email]
```

**Pain Points**: High manual effort, variable quality, backlog risk, limited prioritization intelligence, weak real-time visibility.

---

### 2. Literature Monitoring – AS-IS

```mermaid
flowchart TD
    A[Literature Sources<br/>Databases, Alerts, Journals] --> B[Manual Search / Alert Review]
    B --> C[Analyst Screens Titles/Abstracts]
    C --> D{Potentially Relevant?}
    D -->|No| E[Discard / Archive]
    D -->|Yes| F[Full-text Review]
    F --> G{Safety Relevant?}
    G -->|No| E
    G -->|Yes| H[Create / Link Case in Safety DB]
    H --> I[Manual Tracking in Spreadsheets]
```

**Pain Points**: Labor-intensive, risk of missed articles, inconsistent screening criteria application, delayed case creation.

---

### 3. Signal Detection – AS-IS

```mermaid
flowchart TD
    A[Case Data Accumulates] --> B[Periodic Statistical / Disproportionality Runs]
    B --> C[Manual Review of Output Lists]
    C --> D[Medical / Signal Team Assessment]
    D --> E{Signal?}
    E -->|Yes| F[Signal Validation & Management Process]
    E -->|No| G[Continue Monitoring]
    F --> H[Tracking often in Excel / separate tools]
```

**Pain Points**: Batch-oriented, slower insight, high manual filtering effort, limited integration with operational case workload.

---

### Summary of AS-IS Issues

| Area | Core Issues | Impact |
|------|-------------|--------|
| Case Processing | Manual intake, coding, narrative, QC | High cost, slow cycle time, variability |
| Literature | Manual screening | Resource drain, missed information risk |
| Signal Detection | Periodic + heavy manual review | Delayed detection, capacity constraints |
| Tracking & Visibility | Excel + email | Poor real-time oversight, audit difficulty |
