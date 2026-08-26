# Scope Statement  
## CityCare General Hospital – HMS Core Modules

**Version**: 1.0  
**Date**: August 2025

---

### 1. Project Scope Description

This project will design, configure, and implement the following core modules of a Hospital Management System:

1. **Patient Registration Module**  
   - New patient registration  
   - Returning patient check-in / quick registration  
   - Master Patient Index (MPI) with duplicate detection  
   - Generation of unique Patient ID and Visit number  
   - Support for both OPD and IPD registration  

2. **Appointment Scheduling Module**  
   - Real-time multi-doctor / multi-specialty calendar  
   - Booking, rescheduling, and cancellation  
   - Automated SMS / Email reminders  
   - Waitlist and basic overbooking rules  
   - Doctor schedule management  

3. **Billing & Payment Module**  
   - Automated charge capture for consultations and selected services  
   - Support for Cash, Card, UPI, and basic Insurance patients  
   - Itemized invoice generation  
   - Payment collection and receipting  
   - Patient account balance tracking  

Supporting capabilities: Role-based access control, audit logging, basic operational reports and dashboards.

---

### 2. In-Scope Items (Detailed)

| Module | In-Scope Capabilities |
|--------|-----------------------|
| Registration | Demographics, contact, insurance info, emergency contact, reason for visit, MPI search & matching, QR/barcode generation |
| Appointments | Availability view, book/reschedule/cancel, reminders (48h + 2h), cancellation reasons, utilization reports |
| Billing | Price master, auto-consultation charges, manual add of services, discounts (with approval), multiple payment modes, invoice & receipt, basic aging report |
| Cross-cutting | User roles (Clerk, Coordinator, Billing, Doctor, Admin), audit trail, search functionality, printable documents |

---

### 3. Out-of-Scope Items

- Clinical documentation / full EHR
- Electronic prescribing
- Pharmacy management & inventory
- Laboratory and Radiology order entry & results
- Advanced revenue cycle (claim submission, denial management, AR follow-up)
- Patient self-service portal / mobile app (planned for Phase 2)
- Bed management / IPD ward management beyond basic admission registration
- Inventory of medical consumables
- Payroll or HR modules
- Advanced analytics / AI-based prediction

---

### 4. Deliverables

1. Project Charter & Business Case  
2. Stakeholder Analysis & RACI  
3. AS-IS and TO-BE Process Models  
4. Business Requirements Document (BRD)  
5. Functional Requirements Document (FRD)  
6. Prioritized Product Backlog (User Stories + Acceptance Criteria)  
7. UAT Test Scenarios & Sign-off Templates  
8. KPI Dashboard Definitions + Sample Data  
9. Requirements Traceability Matrix  
10. Risk Register & Assumptions Log  
11. Training materials outline (high-level)

---

### 5. Acceptance Criteria (Project Level)

- All Priority 1 (Must Have) requirements implemented and accepted in UAT  
- Registration time reduced as measured in pilot  
- No Severity-1 defects open at go-live  
- Key user groups trained and signed off  
- Dashboards operational and showing live data  
- Formal project closure approved by Sponsor

---

### 6. Constraints

- Project must go live within 6–7 months  
- Budget ceiling as approved in Business Case  
- Must comply with applicable data protection regulations (e.g., local equivalent of HIPAA/GDPR)  
- Minimal disruption to ongoing hospital operations during implementation  
- Solution must support both desktop and tablet use at registration counters

---

### 7. Assumptions

- Hospital will provide timely access to subject matter experts  
- Existing network infrastructure is adequate  
- Staff will be available for training and UAT  
- Price master and doctor schedules will be provided by hospital in agreed format  
- Change management support will be provided by hospital leadership
