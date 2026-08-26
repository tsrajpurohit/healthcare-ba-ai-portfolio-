# Functional & AI Requirements Document  
## VigilAI

**Version**: 1.0

---

### 1. Case Intake & Duplicate Detection

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-AI-01 | System shall extract structured data elements from incoming source documents/messages using AI/NLP | Must | BR-CS-01 |
| FR-AI-02 | Extracted fields shall be presented to user for confirmation/correction before final save | Must | BR-CS-01 |
| FR-AI-03 | System shall return a ranked list of potential duplicate cases with match reasons | Must | BR-CS-02 |
| FR-AI-04 | User shall confirm True Duplicate / Related / Not Duplicate with reason capture | Must | BR-CS-04 |

---

### 2. Triage & Prioritization

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-AI-05 | System shall generate a priority / seriousness support score with top contributing factors | Must | BR-CS-03 |
| FR-AI-06 | Cases shall be routed to workqueues based on priority configuration | Must | BR-CS-03 |
| FR-AI-07 | User can accept or override priority with mandatory reason on override | Must | BR-CS-04 |

---

### 3. Coding Assistance

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-AI-08 | System shall suggest MedDRA Preferred Terms (and related levels as designed) with confidence scores | Must | BR-CS-05 |
| FR-AI-09 | Suggestions shall include short rationale or source text highlights where feasible | Must | BR-CS-05 |
| FR-AI-10 | Final code selection requires explicit human confirmation | Must | BR-CS-06 |
| FR-AI-11 | System shall log whether final code matched AI suggestion | Must | BR-GOV-01 |

---

### 4. Literature Screening

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-AI-12 | System shall assign relevance scores to literature items from configured sources | Must | BR-LIT-01 |
| FR-AI-13 | Items above threshold appear in reviewer workqueue ranked by score | Must | BR-LIT-02 |
| FR-AI-14 | Reviewer decisions (Relevant / Not / Further Review) are mandatory and stored as feedback | Must | BR-LIT-03 |

---

### 5. Quality, Narrative & Signal (Selected)

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-AI-15 | System shall run configurable QC rules and flag failures | Should | BR-CS-07 |
| FR-AI-16 | System shall offer narrative drafting assistance based on structured case data | Should | BR-CS-08 |
| FR-AI-17 | System shall support prioritization of potential signals for human review | Should | BR-SIG-01 |

---

### 6. Explainability, Audit & Integration

| ID | Requirement | Priority | Related BR |
|----|-------------|----------|------------|
| FR-GOV-01 | Every AI suggestion stored with model version, timestamp, key inputs summary, output | Must | BR-GOV-01 |
| FR-GOV-02 | User can view explanation for any AI recommendation at decision time | Must | BR-GOV-02 |
| FR-GOV-03 | Human accept / modify / reject actions logged with user, timestamp, reason | Must | BR-GOV-01 |
| FR-INT-01 | Controlled bi-directional interface with safety database for case data exchange | Must | BR-INT-01 |
| FR-INT-02 | API failures handled gracefully with clear user messaging and retry support | Must | BR-INT-01 |

---

### 7. Non-Functional (AI-Specific Highlights)
- Suggestion latency within agreed SLA for interactive use
- Model versioning and rollback capability
- Performance monitoring (precision/recall, drift alerts)
- Privacy and security controls aligned with pharmacovigilance data sensitivity
- Validation evidence package support for AI components
