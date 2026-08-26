# Functional Requirements Document (FRD)  
## CityCare General Hospital – HMS Core Modules

**Document Version**: 1.0  
**Date**: August 2025  
**Status**: Portfolio Simulation

---

### 1. Introduction

This document translates the Business Requirements (BRD) into detailed functional requirements that describe **what** the system must do. It is intended for solution designers, developers, and testers.

---

### 2. Functional Requirements by Module

#### 2.1 Patient Registration Module

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-REG-01 | The system shall allow users to search for existing patients using Name, Date of Birth, Phone Number, National ID, or Patient ID (single or combination) | Must | BR-REG-01, 02 |
| FR-REG-02 | The system shall display potential matches ranked by confidence score when a possible duplicate is detected | Must | BR-REG-02 |
| FR-REG-03 | The system shall allow creation of a new patient record with the following mandatory fields: Full Name, Date of Birth, Gender, Primary Phone, Address | Must | BR-REG-04 |
| FR-REG-04 | The system shall validate phone number format and email format (if provided) | Must | BR-REG-04 |
| FR-REG-05 | Upon successful registration, the system shall automatically generate a unique Patient ID and a Visit Number for the current encounter | Must | BR-REG-05 |
| FR-REG-06 | The system shall support quick check-in for returning patients (select existing record → confirm/update contact → generate new Visit Number) | Must | BR-REG-03 |
| FR-REG-07 | The system shall allow generation and printing of a patient identification slip containing Patient ID, Name, Visit Number, and QR code | Should | BR-REG-06 |
| FR-REG-08 | The system shall log all registration and update actions with user ID, timestamp, and before/after values for critical fields | Must | BR-CC-02 |

#### 2.2 Appointment Scheduling Module

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-APT-01 | The system shall display a calendar view of doctor availability filtered by Specialty, Doctor, Date range, and Location (if multi-site) | Must | BR-APT-01 |
| FR-APT-02 | The system shall show available, booked, blocked, and overbooked slots with clear visual distinction | Must | BR-APT-01 |
| FR-APT-03 | The system shall allow booking of an available slot for an existing patient (or create patient on the fly) | Must | BR-APT-02 |
| FR-APT-04 | The system shall prevent double-booking of the same doctor at the same time unless an overbooking rule is active | Must | BR-APT-02 |
| FR-APT-05 | The system shall allow rescheduling and cancellation of appointments with mandatory reason capture | Must | BR-APT-02, 05 |
| FR-APT-06 | The system shall send confirmation notification (SMS/Email) immediately after booking | Must | BR-APT-03 |
| FR-APT-07 | The system shall schedule and send automated reminders at configurable intervals (default: 48 hours and 2 hours before appointment) | Must | BR-APT-03, 04 |
| FR-APT-08 | The system shall provide reports on appointment utilization, no-show rate, and cancellation reasons | Should | BR-APT-06 |

#### 2.3 Billing Module

| ID | Functional Requirement | Priority | Related BR |
|----|------------------------|----------|------------|
| FR-BIL-01 | The system shall maintain a configurable Price Master for consultation types and common services | Must | BR-BIL-01 |
| FR-BIL-02 | When a consultation is marked complete, the system shall automatically suggest the appropriate consultation charge based on doctor category and visit type (New / Follow-up) | Must | BR-BIL-02 |
| FR-BIL-03 | The system shall allow the billing user to add, modify, or remove line items before finalizing the invoice | Must | BR-BIL-03 |
| FR-BIL-04 | The system shall support application of discounts with reason and authorization (role-based or approval code) | Should | BR-BIL-07 |
| FR-BIL-05 | The system shall support payment collection via Cash, Card, UPI, and mark as Insurance (with basic policy details) | Must | BR-BIL-04 |
| FR-BIL-06 | The system shall generate an itemized invoice containing patient details, visit details, line items, taxes (if any), discounts, net amount, and payment status | Must | BR-BIL-05 |
| FR-BIL-07 | The system shall generate a payment receipt linked to the invoice | Must | BR-BIL-05 |
| FR-BIL-08 | The system shall update the patient’s account balance and maintain full payment history | Must | BR-BIL-06 |
| FR-BIL-09 | Once an invoice is finalized and payment recorded, the system shall not allow direct editing (only credit notes / adjustments with reason) | Must | Business Rule |

#### 2.4 Cross-Cutting Functional Requirements

| ID | Functional Requirement | Priority |
|----|------------------------|----------|
| FR-CC-01 | The system shall support role-based access (at minimum: Registration Clerk, Appointment Coordinator, Billing Executive, Doctor, Supervisor, System Admin) | Must |
| FR-CC-02 | The system shall maintain an immutable audit log for create, update, cancel, and payment actions | Must |
| FR-CC-03 | The system shall provide global search capability across Patients, Appointments, and Invoices | Must |
| FR-CC-04 | The system shall support real-time dashboard widgets for: Today’s Registrations, Today’s Appointments (Booked / Completed / No-Show), Today’s Billing Collection | Should |
| FR-CC-05 | The system shall be usable on both desktop browsers and tablets at registration counters | Must |

---

### 3. Non-Functional Requirements (Selected)

| Category | Requirement |
|----------|-------------|
| Performance | Patient search and registration completion < 2 seconds under normal load |
| Availability | 99.5% during hospital operational hours (7 AM – 10 PM) |
| Security | Role-based access, encrypted data in transit, audit logging |
| Usability | Maximum 3 clicks for common registration and billing tasks for trained users |
| Scalability | Support at least 500 concurrent registrations/appointments per day initially |

---

### 4. Traceability
All Functional Requirements are traced back to Business Requirements. See Requirements Traceability Matrix in Folder 09.
