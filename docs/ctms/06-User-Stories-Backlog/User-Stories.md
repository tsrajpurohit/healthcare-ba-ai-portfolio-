# User Stories  
## TrialFlow CTMS

**Version**: 1.0

---

### Epic 1: Study & Protocol Setup

**US-STU-01** – Create and Configure Study  
**As a** Study Manager  
**I want to** create a new study and define its key attributes and protocol visit schedule  
**So that** the operational framework for the trial is established in one place  

**Acceptance Criteria**:
- I can enter Study ID, Title, Phase, Status, and key dates
- I can define an ordered visit schedule with windows
- I can set one protocol version as Current
- All creation actions are audit-logged

**Priority**: Must | SP: 8

---

### Epic 2: Site Management

**US-SITE-01** – Manage Site Feasibility  
**As a** Study Manager  
**I want to** send a structured feasibility questionnaire to potential sites and review responses  
**So that** I can select suitable sites efficiently  

**Acceptance Criteria**:
- I can select sites and launch questionnaire
- Site Coordinator can complete and submit responses in the system
- I can view consolidated responses and update site status

**Priority**: Must | SP: 8

---

**US-SITE-02** – Track Essential Documents & Activate Site  
**As a** Study Manager / CRA  
**I want to** track essential document status and formally activate a site  
**So that** activation is controlled and auditable  

**Acceptance Criteria**:
- Checklist shows required documents and current status
- Overdue items are visible
- Activation action is only available when requirements met (or waived with reason)
- Activation is audit-logged with user and timestamp

**Priority**: Must | SP: 5

---

### Epic 3: Subject Lifecycle

**US-SUB-01** – Log Screening and Consent  
**As a** Site Coordinator  
**I want to** record screening outcomes and informed consent details  
**So that** eligibility and consent are properly documented  

**Acceptance Criteria**:
- Screening record linked to Study and Site
- Screen fail reason capturable
- Consent version, date, and obtaining person recorded
- Cannot enroll without consent record

**Priority**: Must | SP: 8

---

**US-SUB-02** – Enroll Subject and Generate Visit Plan  
**As a** Site Coordinator  
**I want to** enroll an eligible consented subject and automatically receive the visit schedule  
**So that** subsequent visits are clearly planned  

**Acceptance Criteria**:
- Enrollment updates subject status
- Visit plan is generated from protocol schedule
- Planned window dates are visible
- Enrollment metrics update in near real time

**Priority**: Must | SP: 5

---

### Epic 4: Visit Tracking

**US-VIS-01** – Schedule and Record Visits  
**As a** Site Coordinator  
**I want to** schedule visits and record actual completion dates and status  
**So that** visit compliance is accurately tracked  

**Acceptance Criteria**:
- I can set scheduled and actual dates
- Visit status options available (Scheduled, Completed, Missed, etc.)
- System indicates if visit is inside or outside window

**Priority**: Must | SP: 5

---

**US-VIS-02** – Monitor Visit Window Compliance  
**As a** Study Manager / CRA  
**I want to** see which visits are approaching or outside window  
**So that** I can intervene proactively  

**Acceptance Criteria**:
- Dashboard or list highlights at-risk or out-of-window visits
- Filterable by Study and Site
- Drill-down to subject visit details available

**Priority**: Must | SP: 5

---

### Epic 5: Visibility & Compliance

**US-RPT-01** – Operational Dashboards  
**As a** Clinical Operations Manager  
**I want to** view enrollment progress, site activation status, and visit compliance at a glance  
**So that** I can manage study performance effectively  

**Priority**: Must | SP: 8

---

**US-AUD-01** – Audit Trail Access  
**As a** QA / Regulatory user  
**I want to** search and export audit trail records for key entities  
**So that** I can support inspections and internal audits  

**Priority**: Must | SP: 5
