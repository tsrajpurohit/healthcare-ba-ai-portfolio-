# Acceptance Criteria Summary  
## (Detailed criteria are embedded in User-Stories.md)

This file serves as a quick reference. Full Given-When-Then style criteria are documented alongside each User Story in `User-Stories.md`.

### Key Acceptance Themes Across Stories

**Registration**
- Search returns results in < 2 seconds
- Mandatory field validation enforced
- Unique IDs generated automatically
- Duplicate warnings shown with actionable options
- Full audit logging

**Appointments**
- Real-time slot visibility
- No unintended double-booking
- Confirmation + reminder notifications triggered
- Reason capture on cancel/reschedule
- Status updates correctly reflected

**Billing**
- Correct charges auto-suggested
- Itemized invoice generated
- Multiple payment modes supported
- Account balance updated in real time
- Post-finalization edits restricted (adjustments only)
- Discount authorization enforced

**Cross-Cutting**
- Role-based permissions respected
- Dashboard metrics visible and reasonably accurate
- System usable on tablet and desktop
