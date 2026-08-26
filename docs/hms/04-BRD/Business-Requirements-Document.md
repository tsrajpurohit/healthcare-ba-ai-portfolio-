# Business Requirements Document (BRD)  
## CityCare General Hospital – HMS Core Modules

**Document Version**: 1.0  
**Date**: August 2025  
**Status**: Portfolio Simulation  
**Author**: Business Analyst  

---

### 1. Introduction

#### 1.1 Purpose
This Business Requirements Document defines the business needs, objectives, scope, and high-level requirements for the implementation of Patient Registration, Appointment Scheduling, and Billing modules at CityCare General Hospital.

#### 1.2 Business Objectives
- Reduce average patient registration time to under 3 minutes
- Achieve ≥ 95% unique patient identification accuracy
- Reduce appointment no-show rate by approximately 40%
- Improve first-pass billing accuracy to ≥ 90%
- Provide real-time operational and financial visibility

#### 1.3 Scope
**In Scope**: Patient Registration (OPD/IPD), Master Patient Index, Appointment Scheduling & Reminders, Billing & Payment Collection, Role-based Access, Basic Dashboards.  

**Out of Scope**: Full EHR, Pharmacy, Lab/Radiology, Advanced Claims, Patient Portal (Phase 2).

---

### 2. Stakeholders
Refer to Stakeholder Register (Folder 02). Key decision makers: COO (Sponsor), Medical Director, Head of Operations.

---

### 3. Current Business Process Summary
See AS-IS Process Models (Folder 03). Key issues: long queues, duplicates, high no-shows, delayed billing, lack of real-time data.

---

### 4. Business Requirements

#### 4.1 Patient Registration & Identity Management

| ID | Business Requirement | Priority | Source |
|----|----------------------|----------|--------|
| BR-REG-01 | The system shall maintain a unique Master Patient Index (MPI) for all patients | Must | Operations |
| BR-REG-02 | The system shall prevent or warn about potential duplicate patient records using demographic matching | Must | Operations / Quality |
| BR-REG-03 | The system shall support both new patient registration and quick check-in for returning patients | Must | Front Desk |
| BR-REG-04 | The system shall capture demographics, contact details, insurance information, emergency contact, and reason for visit | Must | Operations |
| BR-REG-05 | The system shall generate a unique Patient ID and Visit Number upon successful registration | Must | Operations |
| BR-REG-06 | The system shall support generation of printable / digital patient identification (QR/Barcode) | Should | Front Desk |

#### 4.2 Appointment Management

| ID | Business Requirement | Priority | Source |
|----|----------------------|----------|--------|
| BR-APT-01 | The system shall provide real-time visibility of doctor availability by specialty, date, and time | Must | Appointment Team |
| BR-APT-02 | The system shall allow booking, rescheduling, and cancellation of appointments | Must | Appointment Team |
| BR-APT-03 | The system shall send automated appointment reminders via SMS and/or Email | Must | Operations |
| BR-APT-04 | The system shall support configurable reminder schedules (default 48 hours and 2 hours prior) | Should | Operations |
| BR-APT-05 | The system shall capture reason for cancellation / rescheduling | Should | Operations |
| BR-APT-06 | The system shall provide appointment utilization and no-show reports | Should | Management |

#### 4.3 Billing & Payments

| ID | Business Requirement | Priority | Source |
|----|----------------------|----------|--------|
| BR-BIL-01 | The system shall support a configurable price master for consultations and common services | Must | Billing / Finance |
| BR-BIL-02 | The system shall automatically suggest / capture consultation charges based on doctor category and visit type | Must | Billing |
| BR-BIL-03 | The system shall allow addition of additional services/charges during billing | Must | Billing |
| BR-BIL-04 | The system shall support multiple payment modes (Cash, Card, UPI, Insurance) | Must | Billing |
| BR-BIL-05 | The system shall generate itemized invoices and receipts (printable and digital) | Must | Billing / Patients |
| BR-BIL-06 | The system shall maintain patient account balance and payment history | Must | Finance |
| BR-BIL-07 | The system shall support authorized discounts with audit trail | Should | Finance |

#### 4.4 Cross-Cutting Business Requirements

| ID | Business Requirement | Priority |
|----|----------------------|----------|
| BR-CC-01 | The system shall enforce role-based access control | Must |
| BR-CC-02 | The system shall maintain a complete audit trail of registration, appointment, and billing transactions | Must |
| BR-CC-03 | The system shall provide real-time operational dashboards (registrations, appointments, billing summary) | Should |
| BR-CC-04 | The system shall support search across patients, appointments, and invoices | Must |

---

### 5. Business Rules (Selected)

- A patient must have a unique Patient ID before any appointment or billing can be created.
- Appointment slots cannot be double-booked for the same doctor at the same time (unless overbooking rule is explicitly enabled).
- Discounts above a defined threshold require supervisor authorization.
- All financial transactions must be non-editable after posting (only adjustments allowed with reason).

---

### 6. Assumptions & Constraints
See dedicated Assumptions-Constraints document in Folder 09.

---

### 7. Success Metrics / KPIs
- Average Registration Time  
- % Unique Patient Records  
- Appointment No-Show Rate  
- First-Pass Billing Accuracy  
- Average Time to Generate Invoice  
- User Adoption / Satisfaction Score  

---

### 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Sponsor | Dr. Anita Sharma | | |
| Business Owner | Dr. Rajesh Mehta | | |
| Head of Operations | Ms. Priya Nair | | |
| Business Analyst | [Your Name] | | |
