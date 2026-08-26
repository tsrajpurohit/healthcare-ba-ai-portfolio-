# UAT Test Scenarios  
## VigilAI

**Version**: 1.0

---

### UAT Objectives
- Confirm AI assistance is usable and trustworthy for case processors and reviewers
- Validate human-in-the-loop controls and audit logging
- Verify integration behaviors with safety database
- Obtain acceptance from PV Operations, Medical, and QA stakeholders

### Entry Criteria
- Must-have stories developed and unit/integration tested
- Model performance meets pilot acceptance thresholds
- UAT environment stable with representative data
- Users trained on AI-assisted workflows

### Exit Criteria
- Critical scenarios passed
- No open Severity-1 defects
- Audit trail and explainability demonstrated to QA
- Formal sign-off from PV Operations and QA representatives

---

### Key Scenarios

**UAT-CS-01: AI Extraction + Human Confirmation**  
**Priority**: Critical  
**Steps**: Ingest sample source → Review extracted fields → Correct one field → Save  
**Expected**: Extraction presented; edits allowed; final data saved; audit log complete.

**UAT-CS-02: Duplicate Detection Decision**  
**Priority**: Critical  
**Steps**: Process case with known potential duplicate → Review ranked matches → Record decision  
**Expected**: Ranked list with reasons; decision + reason captured; log available.

**UAT-CS-03: Priority Score & Workqueue**  
**Priority**: Critical  
**Steps**: View workqueue → Inspect priority explanation → Override priority with reason  
**Expected**: Score + factors visible; override logged.

**UAT-COD-01: MedDRA Suggestion Flow**  
**Priority**: Critical  
**Steps**: Open coding step → Review AI suggestions → Accept one / modify another → Finalize  
**Expected**: Confidence + rationale shown; human confirmation required; usage logged.

**UAT-LIT-01: Literature Ranking & Decision**  
**Priority**: High  
**Steps**: Open literature workqueue → Review high-relevance item → Mark Relevant / Not Relevant  
**Expected**: Ranking sensible; decision captured as feedback.

**UAT-GOV-01: Audit Trail Completeness**  
**Priority**: Critical  
**Role**: QA  
**Steps**: Retrieve AI and human decision history for a test case  
**Expected**: Full trail with model version, user, timestamps, reasons.

**UAT-INT-01: Safety DB Round-Trip**  
**Priority**: Critical  
**Steps**: Create/update case via platform → Confirm reflection in safety DB (or interface layer) per design  
**Expected**: Controlled, accurate exchange; errors handled gracefully.

---

### Sign-off Template

| Role | Name | Date | Signature | Comments |
|------|------|------|-----------|----------|
| Head of PV / Sponsor | | | | |
| PV Operations Lead | | | | |
| Medical Review Representative | | | | |
| QA / Compliance | | | | |
| Data Science Lead | | | | |
