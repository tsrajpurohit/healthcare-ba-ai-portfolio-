# TO-BE Process Models  
## CityCare General Hospital – Future State

**Version**: 1.0  
**Date**: August 2025

---

### 1. Patient Registration – TO-BE

**Trigger**: Patient arrives (or pre-registered online in future phase)

```mermaid
flowchart TD
    A[Patient Arrives at Counter / Kiosk] --> B[Clerk / System Searches MPI]
    B --> C{Match Found?}
    C -->|Yes - High Confidence| D[Quick Check-in / Update Details]
    C -->|Possible Duplicate| E[Review Potential Matches]
    E --> F[Link to Existing or Create New]
    C -->|No Match| G[New Patient Registration Form]
    G --> H[System Validates Mandatory Fields]
    H --> I[Generate Unique Patient ID + Visit Number + QR]
    D --> I
    F --> I
    I --> J[Print / Digital ID Card + Token]
    J --> K[Patient Directed to Waiting / Consultation]
    K --> L[End]
```

**Improvements**:
- Average registration time target: < 3 minutes
- Smart duplicate detection
- Mandatory field validation
- Instant unique ID generation
- Reduced paper dependency

---

### 2. Appointment Scheduling – TO-BE

**Trigger**: Patient request (phone, walk-in, or future self-service)

```mermaid
flowchart TD
    A[Appointment Request Received] --> B[Coordinator / System Opens Real-time Calendar]
    B --> C[Select Doctor / Specialty / Date]
    C --> D[View Available Slots]
    D --> E[Book Selected Slot]
    E --> F[System Confirms Instantly]
    F --> G[Send Confirmation SMS / Email]
    G --> H[Schedule Automated Reminders - 48h & 2h]
    H --> I{Patient Confirms / Needs Change?}
    I -->|Reschedule / Cancel| J[Update Slot + Notify]
    I -->|Attends| K[Check-in Linked to Appointment]
    J --> L[End]
    K --> L
```

**Improvements**:
- Real-time multi-user calendar
- Automated reminders → expected significant drop in no-shows
- Easy rescheduling with audit trail
- Better slot utilization visibility

---

### 3. Billing Process – TO-BE

**Trigger**: Service / Consultation marked complete

```mermaid
flowchart TD
    A[Service / Consultation Completed] --> B[System Auto-suggests / Captures Charges]
    B --> C[Billing Executive Reviews / Adds Extra Services]
    C --> D[Apply Eligible Discount if Authorized]
    D --> E[Generate Itemized Digital Invoice]
    E --> F[Patient Pays - Cash / Card / UPI / Insurance]
    F --> G[System Records Payment Instantly]
    G --> H[Generate Receipt - Printable + Digital]
    H --> I[Update Patient Account Balance]
    I --> J[Real-time Dashboard Update]
    J --> K[End]
```

**Improvements**:
- Automated charge capture reduces omissions
- Instant payment recording
- Clear itemized invoices improve transparency
- Real-time financial visibility

---

### Cross-Process Benefits in TO-BE

- Single source of truth for patient identity
- Seamless flow from Registration → Appointment → Billing
- Full audit trail for compliance
- Real-time operational and financial dashboards
- Foundation for future patient portal and advanced analytics
