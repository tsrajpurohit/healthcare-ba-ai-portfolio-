# TO-BE Process Models  
## TrialFlow CTMS – Future State

**Version**: 1.0

---

### 1. Site Feasibility & Activation – TO-BE

```mermaid
flowchart TD
    A[Study Manager creates Study in CTMS] --> B[Add potential sites from Site Registry]
    B --> C[System sends structured Feasibility Questionnaire]
    C --> D[Site Coordinator completes questionnaire in system]
    D --> E[Study Manager reviews responses in dashboard]
    E --> F{Proceed?}
    F -->|No| G[Update site status = Not Selected]
    F -->|Yes| H[Activate Essential Document Checklist]
    H --> I[Site uploads / updates document status]
    I --> J[System tracks completeness & overdue items]
    J --> K[Site Initiation activities recorded]
    K --> L[Activation Approval in system with e-attribution]
    L --> M[Site status = Active; notifications sent]
```

**Improvements**: Single source of truth, automated tracking, clear status, audit trail of decisions.

---

### 2. Subject Screening, Consent & Enrollment – TO-BE

```mermaid
flowchart TD
    A[Site Coordinator logs Screening in CTMS] --> B[Record screening outcome]
    B --> C{Eligible?}
    C -->|No| D[Screen Fail reason captured]
    C -->|Yes| E[Initiate Informed Consent tracking]
    E --> F[Record consent version, date, personnel]
    F --> G[Enrollment decision & date]
    G --> H[Subject status = Enrolled]
    H --> I[Visit schedule auto-generated from protocol calendar]
    I --> J[Real-time enrollment metrics updated]
```

**Improvements**: Immediate central visibility, structured consent tracking, automatic visit plan generation.

---

### 3. Visit Scheduling & Tracking – TO-BE

```mermaid
flowchart TD
    A[Protocol Visit Schedule defined in Study setup] --> B[On enrollment, subject-specific visit plan created]
    B --> C[Site views upcoming visits & windows]
    C --> D[Schedule / confirm actual visit date]
    D --> E[System flags visits approaching or outside window]
    E --> F[Visit completion recorded with status]
    F --> G[Deviations flagged for review if window missed]
    G --> H[Study Manager & CRA see real-time compliance]
```

**Improvements**: Proactive window monitoring, reduced missed visits, consistent tracking across sites.

---

### Cross-Cutting TO-BE Benefits

- Role-based views (Study Manager vs Site Coordinator vs CRA)
- Complete electronic audit trail of key actions
- Standardized terminology and status values
- Dashboards for enrollment, site activation, and visit compliance
- Foundation for future EDC and eTMF integration
