# Business Requirements Document (BRD)  
## TrialFlow CTMS

**Version**: 1.0  
**Date**: August 2025

---

### 1. Purpose
This document captures the business requirements for a Clinical Trial Management System focused on study setup, site activation, subject enrollment, and visit tracking, with strong emphasis on process control, visibility, and auditability.

---

### 2. Business Objectives
- Reduce site activation cycle time
- Provide accurate, near real-time enrollment visibility
- Improve visit window compliance and reduce related protocol deviations
- Strengthen inspection readiness through complete audit trails and controlled processes
- Standardize operational reporting across studies

---

### 3. Business Requirements

#### 3.1 Study & Protocol Management
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-STU-01 | The system shall allow authorized users to create and manage clinical studies with key attributes (title, phase, therapeutic area, status, milestones) | Must |
| BR-STU-02 | The system shall support protocol version management and association of the current protocol version to the study | Must |
| BR-STU-03 | The system shall allow definition of the protocol visit schedule (visit names, windows, order) | Must |

#### 3.2 Site Management
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-SITE-01 | The system shall maintain a registry of investigative sites with contact and capability information | Must |
| BR-SITE-02 | The system shall support structured feasibility questionnaires and capture of responses | Must |
| BR-SITE-03 | The system shall track essential document status for each site-study combination | Must |
| BR-SITE-04 | The system shall support a controlled site activation workflow culminating in an Active status | Must |

#### 3.3 Subject Management
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-SUB-01 | The system shall allow recording of subject screening activities and outcomes (including screen fail reasons) | Must |
| BR-SUB-02 | The system shall track informed consent (version, date, obtaining personnel) | Must |
| BR-SUB-03 | The system shall manage subject status lifecycle (Screened, Consented, Enrolled, Withdrawn, Completed, etc.) | Must |
| BR-SUB-04 | Upon enrollment, the system shall generate the subject-specific visit plan from the protocol schedule | Must |

#### 3.4 Visit Management
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-VIS-01 | The system shall allow scheduling and recording of actual visit dates against the planned schedule | Must |
| BR-VIS-02 | The system shall calculate and display visit windows and flag visits outside window | Must |
| BR-VIS-03 | The system shall support recording of visit status (Scheduled, Completed, Missed, etc.) | Must |

#### 3.5 Safety (Basic)
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-AE-01 | The system shall allow logging of Adverse Events at a summary level and route notifications to configured roles | Should |

#### 3.6 Cross-Cutting
| ID | Requirement | Priority |
|----|-------------|----------|
| BR-CC-01 | The system shall enforce role-based access control | Must |
| BR-CC-02 | The system shall maintain a complete electronic audit trail of critical actions | Must |
| BR-CC-03 | The system shall provide operational dashboards for enrollment, site status, and visit compliance | Must |
| BR-CC-04 | The system shall support standard operational reports exportable for further analysis | Should |

---

### 4. Key Business Rules (Examples)
- A subject cannot be enrolled without a recorded informed consent for the current protocol version.
- Site status can only move to Active when required essential documents are marked complete (or explicitly waived with reason).
- Visit window calculations are based on the reference visit (usually enrollment / baseline) defined in the protocol schedule.
- All status changes on critical entities (Study, Site, Subject, Visit) are audit-logged.
