# TO-BE AI-Enabled Process Models  
## VigilAI – Future State

**Version**: 1.0

---

### 1. AI-Augmented Case Processing – TO-BE

```mermaid
flowchart TD
    A[AE Report Received] --> B[AI-Assisted Intake<br/>Extraction + Structured Capture]
    B --> C[AI Duplicate Detection<br/>Ranked Potential Matches]
    C --> D[AI Triage Support<br/>Seriousness / Priority Score + Explanation]
    D --> E[Human Confirms / Adjusts Triage]
    E --> F[AI MedDRA Coding Suggestions<br/>Confidence + Rationale]
    F --> G[Coder / Processor Reviews & Finalizes]
    G --> H[AI Narrative Assistance + QC Rules]
    H --> I[Medical Review<br/>AI insights available]
    I --> J[Human Final Decision]
    J --> K[Submission / Distribution]
    K --> L[Outcomes Feedback to Models]
```

**Key Design**: AI accelerates and standardizes; humans retain decision authority at critical points.

---

### 2. AI-Assisted Literature Monitoring – TO-BE

```mermaid
flowchart TD
    A[Literature Ingested from Priority Sources] --> B[AI Relevance Screening<br/>Title/Abstract/Full-text ranking]
    B --> C[Ranked Workqueue for Reviewers]
    C --> D[Human Reviews High-Priority Items]
    D --> E{Safety Relevant?}
    E -->|Yes| F[Create / Link Case + AI pre-fill support]
    E -->|No| G[Dismiss with Reason - Feedback Captured]
    F --> H[Standard Case Processing Flow]
```

---

### 3. Enhanced Signal Detection – TO-BE

```mermaid
flowchart TD
    A[Case + Literature Data] --> B[Continuous / Frequent Signal Analytics<br/>Disproportionality + ML prioritization]
    B --> C[AI-Prioritized Signal Workqueue]
    C --> D[Signal Scientist / Medical Review]
    D --> E[Validation Decision + Documentation]
    E --> F[Signal Management Workflow]
    F --> G[Feedback Loop for Model Improvement]
```

---

### Cross-Cutting TO-BE Capabilities
- Intelligent workqueues ranked by urgency, seriousness, and complexity
- Full audit trail of AI suggestions and human decisions
- Operational dashboards (volumes, cycle times, quality, signal pipeline)
- Explainability available at point of decision
