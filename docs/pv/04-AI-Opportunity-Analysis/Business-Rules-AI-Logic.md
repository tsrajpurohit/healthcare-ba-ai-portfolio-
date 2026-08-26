# Business Rules & AI Decision Logic  
## VigilAI

**Version**: 1.0

---

### 1. Guiding Principles
1. AI **recommends**; qualified humans **decide** on medical and regulatory-critical steps.
2. Every AI output that influences a decision must be explainable at the point of use.
3. All AI suggestions and human accept/modify/reject actions are immutably logged.
4. Low-confidence AI outputs default to human review queues.
5. Deterministic regulatory rules always override probabilistic AI suggestions.

---

### 2. Case Triage / Priority Scoring (Illustrative)

| Priority Band | Behavior |
|---------------|----------|
| Critical / High | Immediate human review queue; SLA timers visible |
| Medium | Standard workqueue ranked by score |
| Low | Batch / lower priority queue |

**Example contributing factors**: Reported seriousness, outcome (e.g., death, hospitalization), unexpectedness, special populations, product priority list, data completeness.

---

### 3. MedDRA Coding Assistance Rules
- Suggestions presented with confidence score and supporting text evidence.
- Suggestions below confidence threshold clearly labeled “Low confidence – review carefully”.
- Final MedDRA selection always requires human confirmation.
- System records whether final code matched AI suggestion.

---

### 4. Duplicate Detection Rules
- Potential duplicates presented as ranked list with match reasons (patient, product, event, dates, reporter, etc.).
- Human must confirm “True Duplicate”, “Related”, or “Not Duplicate”.
- Decision and rationale captured.

---

### 5. Literature Screening Rules
- AI assigns relevance score; items above threshold enter reviewer workqueue.
- Reviewer decision (Relevant / Not Relevant / Further Review) is mandatory feedback.
- Relevant items route into case creation flow with pre-filled data where possible.

---

### 6. Override & Feedback Rules
- Reject or modify actions require a reason code (structured) + optional comment.
- High-volume rejection patterns trigger model review by Data Science.
- Compliance / QA have read access to AI decision logs for inspection support.

---

### 7. Model Governance Rules
- Models versioned; every suggestion linked to model version.
- Periodic performance review (precision/recall, drift, bias where applicable).
- Rollback capability required.
- Changes to models follow defined change control aligned with validation approach.
