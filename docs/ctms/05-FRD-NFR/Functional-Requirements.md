# Functional Requirements Document  
## TrialFlow CTMS

**Version**: 1.0

---

### 1. Study Management

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-STU-01 | Users with appropriate role can create a new Study and enter core attributes (ID, Title, Phase, Status, Start/End targets, Therapeutic Area) | Must | BR-STU-01 |
| FR-STU-02 | System shall support multiple protocol versions linked to a Study; one version marked as Current | Must | BR-STU-02 |
| FR-STU-03 | Authorized users can define an ordered list of visits with names, target day, window before/after, and visit type | Must | BR-STU-03 |

---

### 2. Site Management

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-SITE-01 | System maintains a Site master with contact details, location, and capabilities | Must | BR-SITE-01 |
| FR-SITE-02 | Study Manager can associate sites to a Study and launch a feasibility questionnaire | Must | BR-SITE-02 |
| FR-SITE-03 | Site users can complete feasibility responses within the system | Must | BR-SITE-02 |
| FR-SITE-04 | System provides an essential document checklist per Site-Study with status (Pending, Received, Expired, Waived) | Must | BR-SITE-03 |
| FR-SITE-05 | Site activation requires checklist completion (or documented waiver) and an explicit activation action by authorized user | Must | BR-SITE-04 |
| FR-SITE-06 | All site status changes are recorded in the audit trail | Must | BR-CC-02 |

---

### 3. Subject Management

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-SUB-01 | Site Coordinator can create a screening record linked to a Study and Site | Must | BR-SUB-01 |
| FR-SUB-02 | Screening outcome (Eligible / Screen Failed) and reason (if failed) can be captured | Must | BR-SUB-01 |
| FR-SUB-03 | Informed Consent record captures: Consent Version, Date, Time (optional), Obtaining Person, and optional comments | Must | BR-SUB-02 |
| FR-SUB-04 | Subject status lifecycle is controlled (e.g., cannot enroll without consent record) | Must | BR-SUB-03 |
| FR-SUB-05 | On enrollment, system automatically generates the subject visit plan based on the current protocol schedule | Must | BR-SUB-04 |

---

### 4. Visit Management

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-VIS-01 | Subject visit plan shows planned visits with calculated window dates | Must | BR-VIS-01, BR-VIS-02 |
| FR-VIS-02 | Users can record scheduled date, actual date, and visit status | Must | BR-VIS-01, BR-VIS-03 |
| FR-VIS-03 | System flags visits that are approaching window end or are outside window | Must | BR-VIS-02 |
| FR-VIS-04 | Missed or out-of-window visits can be linked to a protocol deviation record (basic) | Should | BR-VIS-02 |

---

### 5. Safety (Basic)

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-AE-01 | Authorized users can log an Adverse Event with summary fields (Subject, Date, Description, Severity/Seriousness flag) | Should | BR-AE-01 |
| FR-AE-02 | System notifies configured roles when a serious AE is logged | Should | BR-AE-01 |

---

### 6. Cross-Cutting Functional Requirements

| ID | Functional Requirement | Priority |
|----|------------------------|----------|
| FR-CC-01 | Role-based access control supporting at minimum: Study Manager, CRA/Monitor, Site Coordinator, Read-only, System Admin | Must |
| FR-CC-02 | Immutable audit trail capturing user, timestamp, action, and entity for critical create/update/status-change events | Must |
| FR-CC-03 | Operational dashboards: Enrollment by Study/Site, Site Activation Status, Visit Compliance overview | Must |
| FR-CC-04 | Search and filter capabilities across Studies, Sites, Subjects, and Visits | Must |
| FR-CC-05 | Export of key operational reports to common formats (e.g., CSV/Excel) | Should |
