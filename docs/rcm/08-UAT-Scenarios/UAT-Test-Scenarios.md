# UAT Test Scenarios  
## MediClaim AI – Focus on AI Recommendations & Human-in-the-Loop

**Version**: 1.0

---

### UAT Objectives
- Validate that AI recommendations are accurate enough to be useful
- Confirm explainability is clear to end users
- Ensure human-in-the-loop controls work correctly
- Verify workflow integration does not slow users down
- Confirm audit and feedback capture

---

### Key Scenarios

**UAT-AI-01: Denial Risk Score Display & Explanation**  
**Priority**: Critical  
**Steps**:
1. Open a claim in the pre-submission workspace
2. Observe Denial Risk Score and risk band
3. Expand contributing factors
**Expected**: Score, band, and top factors are displayed clearly within 3 seconds. Factors are understandable to a biller.

**UAT-AI-02: Medium/High Risk Routing**  
**Priority**: Critical  
**Steps**:
1. Process a claim that the model scores as Medium or High risk
**Expected**: Claim is routed to review workqueue and not auto-submitted. Explanation is available.

**UAT-AI-03: Accept / Reject Feedback Capture**  
**Priority**: Critical  
**Steps**:
1. Reject an AI recommendation
2. Provide reason
3. Complete action
**Expected**: Feedback is stored. Subsequent audit view shows original suggestion, user decision, and reason.

**UAT-COD-01: Coding Suggestion Review**  
**Priority**: Critical  
**Steps**:
1. Open an encounter for coding
2. Review AI-suggested codes and confidence
3. Accept some, modify others, finalize
**Expected**: Suggestions visible with confidence. Finalization requires explicit coder action. System logs AI usage.

**UAT-WQ-01: AI-Prioritized Workqueue**  
**Priority**: High  
**Steps**:
1. Open Denial or AR workqueue
2. Observe default ranking
3. Inspect priority explanation for top items
**Expected**: Queue is sorted by AI priority. Users can see why an item is ranked high.

**UAT-GOV-01: Audit Trail Completeness**  
**Priority**: Critical  
**Steps**:
1. As Compliance user, search for a specific claim’s AI history
**Expected**: Full history of scores, recommendations, user actions, and model version is available.

**UAT-INT-01: End-to-End Claim Flow**  
**Priority**: Critical  
**Steps**:
1. Claim generated in EHR/PM → appears in MediClaim AI → scored → actioned → status reflected back
**Expected**: Seamless flow with no data loss; status updates correctly.

---

### AI-Specific Exit Criteria
- Agreed model performance thresholds met on pilot data
- User acceptance rate of recommendations ≥ target (e.g., 60%+)
- No critical usability or trust issues raised by coders/billers
- Compliance sign-off on auditability and explainability
- Formal UAT sign-off from RCM Director and key user representatives
