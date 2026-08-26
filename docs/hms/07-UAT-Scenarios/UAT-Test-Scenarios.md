# UAT Test Scenarios  
## CityCare General Hospital – HMS Core Modules

**Version**: 1.0  
**UAT Objective**: Validate that the system meets business requirements from an end-user perspective and is ready for production use.

---

### UAT Entry Criteria
- All Priority “Must” user stories developed and unit/integration tested
- Test environment stable with representative data
- UAT users trained on the system
- Test scenarios reviewed and approved

### UAT Exit Criteria
- All Critical and High priority scenarios passed
- No open Severity-1 defects
- Severity-2 defects have agreed workarounds or fix plan
- Formal sign-off from Registration, Appointment, Billing, and Operations representatives

---

### Test Scenarios

#### Module: Patient Registration

**UAT-REG-01: New Patient Registration – Happy Path**  
**Priority**: Critical  
**Preconditions**: User logged in as Registration Clerk; no matching patient exists.  
**Steps**:
1. Navigate to Registration → New Patient
2. Enter valid mandatory details (Name, DOB, Gender, Phone, Address)
3. Optionally enter insurance and emergency contact
4. Click Save / Register
**Expected Result**:  
- Patient ID and Visit Number generated  
- Success message displayed  
- Patient appears in search  
- Audit log entry created  

**UAT-REG-02: Duplicate Detection**  
**Priority**: Critical  
**Steps**:
1. Attempt to register a patient using Name + DOB or Phone that matches an existing patient
**Expected Result**:  
- System displays potential duplicate warning with match details  
- User can choose to link to existing or force create new  

**UAT-REG-03: Quick Check-in Returning Patient**  
**Priority**: High  
**Steps**:
1. Search and select existing patient
2. Confirm / update contact details
3. Complete check-in
**Expected Result**:  
- New Visit Number generated  
- Process completes quickly  
- Patient ready for next step (appointment or consultation)  

---

#### Module: Appointment Scheduling

**UAT-APT-01: Book New Appointment**  
**Priority**: Critical  
**Steps**:
1. Open Appointment Calendar
2. Filter by Specialty / Doctor / Date
3. Select available slot
4. Link to existing patient (or create)
5. Confirm booking
**Expected Result**:  
- Slot marked as booked  
- Confirmation message + notification triggered  
- Appointment visible in patient’s history and doctor’s schedule  

**UAT-APT-02: Reschedule Appointment**  
**Priority**: High  
**Steps**:
1. Locate existing appointment
2. Choose Reschedule
3. Select new available slot
4. Provide reason
5. Confirm
**Expected Result**:  
- Old slot released  
- New slot booked  
- Patient notified  
- Reason recorded  

**UAT-APT-03: Cancellation with Reason**  
**Priority**: High  
**Steps**:
1. Cancel an existing appointment
2. Select / enter cancellation reason
**Expected Result**:  
- Appointment status = Cancelled  
- Slot available again  
- Reason stored for reporting  

**UAT-APT-04: Automated Reminder (Verification)**  
**Priority**: High  
**Steps**:
1. Book an appointment for a future date that triggers reminder window
2. Verify reminder job / log (or simulated delivery)
**Expected Result**:  
- Reminder scheduled / sent according to configuration  
- Content includes correct date, time, doctor  

---

#### Module: Billing

**UAT-BIL-01: Auto Charge + Invoice Generation**  
**Priority**: Critical  
**Preconditions**: Consultation marked complete for a patient.  
**Steps**:
1. Open Billing for the visit
2. Verify auto-suggested consultation charge
3. Add any additional services if required
4. Generate Invoice
**Expected Result**:  
- Correct charges displayed  
- Itemized invoice generated with all details  

**UAT-BIL-02: Collect Payment and Issue Receipt**  
**Priority**: Critical  
**Steps**:
1. From generated invoice, select payment mode (Cash / Card / UPI)
2. Enter amount and complete payment
3. Generate Receipt
**Expected Result**:  
- Payment recorded  
- Patient balance updated  
- Receipt available (print + digital)  
- Invoice status updated  

**UAT-BIL-03: Apply Discount with Authorization**  
**Priority**: Medium  
**Steps**:
1. Attempt to apply discount above threshold
2. Provide authorization (role or code)
3. Complete billing
**Expected Result**:  
- Discount applied only after authorization  
- Full audit trail of who approved and why  

---

#### Cross-Cutting

**UAT-CC-01: Role-Based Access**  
**Priority**: Critical  
**Steps**:
1. Login with different roles (Clerk, Coordinator, Billing, Doctor, Admin)
2. Attempt restricted actions
**Expected Result**:  
- Users can only perform actions permitted by their role  

**UAT-CC-02: Dashboard Visibility**  
**Priority**: High  
**Steps**:
1. Login as Administrator / Supervisor
2. View operational dashboard
**Expected Result**:  
- Key metrics (Registrations today, Appointments status, Collections) are visible and reasonably accurate  

---

### Defect Logging Guidelines
- Severity 1: System crash, data loss, major business process blocked
- Severity 2: Major function incorrect with no reasonable workaround
- Severity 3: Minor functional issue or usability problem
- Severity 4: Cosmetic

### Sign-off Template

| Role | Name | Date | Signature | Comments |
|------|------|------|-----------|----------|
| Registration Lead | | | | |
| Appointment Lead | | | | |
| Billing Lead | | | | |
| Head of Operations | | | | |
| Project Sponsor | | | | |
