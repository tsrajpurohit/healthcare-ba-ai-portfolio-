# AS-IS Process Models  
## CityCare General Hospital – Current State

**Version**: 1.0  
**Date**: August 2025

---

### 1. Patient Registration – AS-IS

**Trigger**: Patient arrives at hospital (walk-in or with prior appointment)

```mermaid
flowchart TD
    A[Patient Arrives at Registration Counter] --> B[Stands in Queue]
    B --> C[Receives Paper Registration Form]
    C --> D[Patient Fills Form Manually]
    D --> E[Clerk Manually Searches Excel / Legacy System]
    E --> F{Patient Found?}
    F -->|Yes| G[Update details on paper + system]
    F -->|No| H[Create new record manually]
    G --> I[Issue Token / Handwritten Number]
    H --> I
    I --> J[Patient Waits in Waiting Area]
    J --> K[Possible re-entry of data at Doctor / Billing]
    K --> L[End]
```

**Key Pain Points**:
- Average time: 12–18 minutes
- High rate of incomplete forms
- Duplicate records common (name variations, phone changes)
- No real-time status visibility
- Paper forms create storage and retrieval issues

---

### 2. Appointment Scheduling – AS-IS

**Trigger**: Patient or relative calls / walks in to book appointment

```mermaid
flowchart TD
    A[Patient Calls or Walks In] --> B[Coordinator Checks Paper Diary or Shared Excel]
    B --> C{Slot Available?}
    C -->|Yes| D[Manually Write Appointment]
    C -->|No| E[Offer Alternative Dates / Put on Waitlist]
    D --> F[Confirm Verbally / Write on Slip]
    E --> F
    F --> G[No Automated Reminder]
    G --> H[High Chance of No-Show]
    H --> I[End]
```

**Key Pain Points**:
- No real-time multi-user visibility
- Frequent double-booking or missed slots
- No automated reminders → high no-show rate (22–25%)
- Difficult to reschedule efficiently
- Poor utilization reporting

---

### 3. Billing Process – AS-IS

**Trigger**: Consultation or service completed

```mermaid
flowchart TD
    A[Consultation / Service Completed] --> B[Doctor / Staff Notes Charges on Paper]
    B --> C[Patient Goes to Billing Counter]
    C --> D[Billing Clerk Manually Enters Charges]
    D --> E[Calculates Total + Any Discount]
    E --> F[Generates Handwritten / Basic Printed Bill]
    F --> G[Patient Pays Cash / Card]
    G --> H[Receipt Issued]
    H --> I[Manual Entry into Excel / Legacy for Tracking]
    I --> J[End]
```

**Key Pain Points**:
- Charge capture delays and omissions
- Calculation errors
- Delayed invoicing
- Poor linkage between service and payment
- Difficult reconciliation and aging analysis

---

### Summary of AS-IS Issues

| Process | Major Issues | Impact |
|---------|--------------|--------|
| Registration | Manual search, paper forms, duplicates | Long queues, data quality problems |
| Appointments | Spreadsheet/paper based, no reminders | High no-shows, lost revenue |
| Billing | Manual charge entry, delayed | Revenue leakage, patient dissatisfaction |
