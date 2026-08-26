# UAT Test Scenarios  
## TrialFlow CTMS

**Version**: 1.0

---

### UAT Objectives
- Confirm that core clinical trial operational workflows function as expected for Study Managers, CRAs, and Site Coordinators
- Validate role-based access and audit trail behavior
- Ensure visit window logic and enrollment rules work correctly
- Obtain formal acceptance from Clinical Operations stakeholders

### Entry Criteria
- All Must-have user stories developed and internally tested
- UAT environment stable with representative configuration
- UAT users trained on their roles
- Test data prepared (sample studies, sites, subjects)

### Exit Criteria
- All Critical and High priority scenarios passed
- No open Severity-1 defects
- Severity-2 defects have agreed disposition
- Formal sign-off from Clinical Operations Manager and key representatives

---

### Sample Scenarios

**UAT-STU-01: Create Study and Visit Schedule**  
**Priority**: Critical  
**Role**: Study Manager  
**Steps**: Create new study → Define protocol version → Enter visit schedule with windows → Save  
**Expected**: Study created, visit schedule stored, audit entries generated.

**UAT-SITE-01: Feasibility to Activation**  
**Priority**: Critical  
**Roles**: Study Manager + Site Coordinator  
**Steps**: Associate site → Launch questionnaire → Site completes responses → Review → Complete essential docs → Activate site  
**Expected**: Status progresses correctly; activation blocked if required docs incomplete (unless waived); full audit trail.

**UAT-SUB-01: Screening → Consent → Enrollment**  
**Priority**: Critical  
**Role**: Site Coordinator  
**Steps**: Log screening (eligible) → Record consent → Enroll subject  
**Expected**: Status updates correctly; enrollment blocked without consent; visit plan auto-generated.

**UAT-SUB-02: Screen Fail Path**  
**Priority**: High  
**Steps**: Log screening with Screen Failed outcome and reason  
**Expected**: Reason captured; subject not enrolled; visible in screening metrics.

**UAT-VIS-01: Record Visit Inside/Outside Window**  
**Priority**: Critical  
**Steps**: Schedule visit → Record actual date inside window → Record another outside window  
**Expected**: System correctly indicates window status; out-of-window visit flagged.

**UAT-VIS-02: Visit Compliance Visibility**  
**Priority**: High  
**Role**: Study Manager / CRA  
**Steps**: View dashboard / list of at-risk or out-of-window visits  
**Expected**: Accurate list with drill-down capability.

**UAT-SEC-01: Role-Based Access**  
**Priority**: Critical  
**Steps**: Login as different roles and attempt restricted actions  
**Expected**: Access granted/denied according to role matrix.

**UAT-AUD-01: Audit Trail Verification**  
**Priority**: Critical  
**Role**: QA / Regulatory  
**Steps**: Perform key actions → Search audit trail for those entities  
**Expected**: Complete records with user, timestamp, and action details; export possible.

---

### Sign-off Template

| Role | Name | Date | Signature | Comments |
|------|------|------|-----------|----------|
| Clinical Operations Manager | | | | |
| Study Manager Representative | | | | |
| CRA / Monitor Representative | | | | |
| Site Coordinator Representative | | | | |
| QA / Validation | | | | |
| Project Sponsor | | | | |
