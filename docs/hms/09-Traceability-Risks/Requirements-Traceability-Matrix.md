# Requirements Traceability Matrix (RTM)  
## CityCare General Hospital – HMS

**Version**: 1.0

This matrix links Business Requirements → Functional Requirements → User Stories → UAT Scenarios.

| Business Req ID | Business Requirement (Summary) | Functional Req ID(s) | User Story ID(s) | UAT Scenario ID(s) | Priority |
|-----------------|--------------------------------|----------------------|------------------|--------------------|----------|
| BR-REG-01 | Unique Master Patient Index | FR-REG-01, FR-REG-05 | US-REG-01, US-REG-03 | UAT-REG-01, UAT-REG-03 | Must |
| BR-REG-02 | Duplicate prevention / warning | FR-REG-02 | US-REG-02 | UAT-REG-02 | Must |
| BR-REG-03 | New + Returning patient support | FR-REG-03, FR-REG-06 | US-REG-03, US-REG-04 | UAT-REG-01, UAT-REG-03 | Must |
| BR-REG-04 | Capture key patient data | FR-REG-03, FR-REG-04 | US-REG-03 | UAT-REG-01 | Must |
| BR-REG-05 | Generate Patient ID & Visit Number | FR-REG-05 | US-REG-03, US-REG-04 | UAT-REG-01, UAT-REG-03 | Must |
| BR-APT-01 | Real-time availability | FR-APT-01, FR-APT-02 | US-APT-01 | UAT-APT-01 | Must |
| BR-APT-02 | Book / Reschedule / Cancel | FR-APT-03, FR-APT-04, FR-APT-05 | US-APT-02, US-APT-03 | UAT-APT-01, UAT-APT-02, UAT-APT-03 | Must |
| BR-APT-03 | Automated reminders | FR-APT-06, FR-APT-07 | US-APT-04 | UAT-APT-04 | Must |
| BR-BIL-01 | Configurable Price Master | FR-BIL-01 | US-BIL-01 | UAT-BIL-01 | Must |
| BR-BIL-02 | Auto charge capture | FR-BIL-02 | US-BIL-01 | UAT-BIL-01 | Must |
| BR-BIL-03 | Add additional charges | FR-BIL-03 | US-BIL-02 | UAT-BIL-01 | Must |
| BR-BIL-04 | Multiple payment modes | FR-BIL-05 | US-BIL-02 | UAT-BIL-02 | Must |
| BR-BIL-05 | Itemized invoice & receipt | FR-BIL-06, FR-BIL-07 | US-BIL-02 | UAT-BIL-01, UAT-BIL-02 | Must |
| BR-BIL-06 | Patient account & history | FR-BIL-08 | US-BIL-02 | UAT-BIL-02 | Must |
| BR-CC-01 | Role-based access | FR-CC-01 | US-CC-01 | UAT-CC-01 | Must |
| BR-CC-02 | Audit trail | FR-REG-08, FR-CC-02 | - | - | Must |
| BR-CC-03 | Real-time dashboards | FR-CC-04 | US-CC-02 | UAT-CC-02 | Should |

---

**Notes**:
- This RTM ensures every business need is covered by system functionality and testable.
- Can be maintained in Excel or Jira for live projects.
- Additional columns (Design Spec, Test Case ID, Status) can be added during implementation.
