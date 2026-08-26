# User Stories & Product Backlog  
## CityCare General Hospital – HMS Core Modules

**Version**: 1.0  
**Prioritization Method**: MoSCoW + Business Value + Risk

---

### Epic 1: Patient Registration & MPI

**US-REG-01** – Search Existing Patient  
**As a** Registration Clerk  
**I want to** search for a patient using name, DOB, phone, or ID  
**So that** I can quickly locate existing records and avoid duplicates  

**Acceptance Criteria**:  
- Given I am on the registration screen, when I enter search criteria, then matching patients are displayed within 2 seconds.  
- Results show Patient ID, Name, DOB, Phone, and last visit date.  
- I can select a patient to proceed with check-in.  

**Priority**: Must | Story Points: 5

---

**US-REG-02** – Duplicate Detection  
**As a** Registration Clerk  
**I want the** system to warn me about potential duplicate patients  
**So that** I do not create duplicate medical records  

**Acceptance Criteria**:  
- When creating a new patient, system checks against existing records using configurable matching rules (Name + DOB, Phone, etc.).  
- Potential matches are shown with a confidence indicator.  
- I can choose to link to existing or proceed with new registration.  

**Priority**: Must | Story Points: 8

---

**US-REG-03** – New Patient Registration  
**As a** Registration Clerk  
**I want to** register a new patient with validated mandatory fields  
**So that** complete and accurate patient data is captured  

**Acceptance Criteria**:  
- Mandatory fields: Full Name, DOB, Gender, Primary Phone, Address.  
- System validates formats (phone, email if provided).  
- On successful save, unique Patient ID and Visit Number are generated.  
- Success confirmation is displayed.  

**Priority**: Must | Story Points: 8

---

**US-REG-04** – Quick Check-in for Returning Patient  
**As a** Registration Clerk  
**I want to** quickly check-in a returning patient  
**So that** registration time is minimized  

**Acceptance Criteria**:  
- After selecting existing patient, I can update contact details if needed.  
- System generates a new Visit Number.  
- Process completes in under 1 minute for standard cases.  

**Priority**: Must | Story Points: 5

---

### Epic 2: Appointment Scheduling

**US-APT-01** – View Real-time Availability  
**As an** Appointment Coordinator  
**I want to** view real-time doctor availability  
**So that** I can book the most suitable slot efficiently  

**Acceptance Criteria**:  
- Calendar can be filtered by Specialty, Doctor, and Date.  
- Available, Booked, and Blocked slots are clearly distinguished.  
- Data refreshes in near real-time.  

**Priority**: Must | Story Points: 8

---

**US-APT-02** – Book Appointment  
**As an** Appointment Coordinator  
**I want to** book an appointment for a patient against an available slot  
**So that** the patient’s visit is scheduled  

**Acceptance Criteria**:  
- I can select patient (or create new), doctor, date, and time slot.  
- System prevents double-booking.  
- Confirmation is shown and notification is triggered.  

**Priority**: Must | Story Points: 5

---

**US-APT-03** – Reschedule / Cancel Appointment  
**As an** Appointment Coordinator  
**I want to** reschedule or cancel an appointment with reason  
**So that** the schedule remains accurate and reasons are tracked  

**Acceptance Criteria**:  
- Cancellation/reschedule requires a reason (from list or free text).  
- Original slot is released (unless overbooking rules apply).  
- Patient is notified of the change.  

**Priority**: Must | Story Points: 5

---

**US-APT-04** – Automated Reminders  
**As a** Hospital Operations Manager  
**I want** patients to receive automated appointment reminders  
**So that** no-show rates are reduced  

**Acceptance Criteria**:  
- Reminders sent via SMS and/or Email at configurable times (default 48h and 2h prior).  
- Reminder includes date, time, doctor, and location.  
- Delivery status is logged.  

**Priority**: Must | Story Points: 5

---

### Epic 3: Billing & Payments

**US-BIL-01** – Auto Charge Capture  
**As a** Billing Executive  
**I want** consultation charges to be automatically suggested  
**So that** billing is faster and more accurate  

**Acceptance Criteria**:  
- When consultation is completed, system suggests correct fee based on doctor category and visit type.  
- I can accept, modify, or add additional line items.  

**Priority**: Must | Story Points: 5

---

**US-BIL-02** – Generate Invoice & Collect Payment  
**As a** Billing Executive  
**I want to** generate an itemized invoice and record payment  
**So that** the financial transaction is completed accurately  

**Acceptance Criteria**:  
- Invoice shows all line items, discounts, net payable.  
- Multiple payment modes supported.  
- Receipt is generated and patient account updated.  
- Invoice becomes non-editable after finalization (adjustments only).  

**Priority**: Must | Story Points: 8

---

**US-BIL-03** – Apply Authorized Discount  
**As a** Billing Supervisor  
**I want to** apply discounts with proper authorization  
**So that** discounts are controlled and auditable  

**Acceptance Criteria**:  
- Discount requires reason and authorized user/role.  
- Full audit trail is maintained.  

**Priority**: Should | Story Points: 3

---

### Epic 4: Cross-Cutting

**US-CC-01** – Role-Based Access  
**As a** System Administrator  
**I want to** assign roles with specific permissions  
**So that** users only access functions relevant to their job  

**Priority**: Must | Story Points: 5

**US-CC-02** – Operational Dashboard  
**As a** Hospital Administrator  
**I want to** see real-time key metrics  
**So that** I can monitor operations effectively  

**Acceptance Criteria**:  
- Widgets for: Today’s Registrations, Appointment Status, Collection Summary.  
- Data refreshes automatically or on demand.  

**Priority**: Should | Story Points: 8
