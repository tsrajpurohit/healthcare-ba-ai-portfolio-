# User Stories – MediClaim AI

**Version**: 1.0

---

### Epic 1: AI Claim Intelligence

**US-AI-01** – View Denial Risk Score  
**As a** Biller / Claims Specialist  
**I want to** see a Denial Risk Score and top reasons for each claim before submission  
**So that** I can fix issues proactively and improve clean claim rate  

**Acceptance Criteria**:
- Score (0–100) and risk band (Low/Medium/High) displayed
- Top 3–5 contributing factors shown in plain language
- Ability to drill into claim details
- Action buttons: Accept & Submit / Send to Review / Edit Claim

**Priority**: Must | SP: 8

---

**US-AI-02** – Configure Risk Thresholds  
**As an** RCM Supervisor  
**I want to** configure the risk score thresholds for auto-submit vs review  
**So that** the system behavior matches our risk tolerance  

**Priority**: Must | SP: 5

---

**US-AI-03** – Capture Feedback on AI Recommendation  
**As a** Biller  
**I want to** accept, modify, or reject the AI suggestion with a reason  
**So that** the system learns and compliance is maintained  

**Acceptance Criteria**:
- Mandatory reason on reject/modify
- Feedback stored with model version and user ID
- Clear confirmation of action taken

**Priority**: Must | SP: 5

---

### Epic 2: Coding Assistance

**US-COD-01** – Receive Code Suggestions  
**As a** Medical Coder  
**I want to** receive AI-suggested ICD-10 and CPT codes with confidence scores  
**So that** I can code faster and more consistently while retaining final control  

**Acceptance Criteria**:
- Suggestions appear in coding workspace
- Confidence score and short rationale visible
- Coder must confirm or change before finalizing
- System records whether AI suggestion was used

**Priority**: Must | SP: 8

---

### Epic 3: Denial Intelligence & Workqueues

**US-DEN-01** – AI-Classified Denials  
**As a** Denial Specialist  
**I want** denials to be automatically classified and scored for overturn probability  
**So that** I can focus on the highest-value appeals first  

**Priority**: Must | SP: 8

---

**US-WQ-01** – AI-Prioritized Workqueue  
**As an** AR / Denial Specialist  
**I want** my workqueue ranked by expected recovery value  
**So that** I recover more revenue in less time  

**Acceptance Criteria**:
- Default sort by AI Priority Score
- Ability to see why an account is ranked high
- Manual filters and supervisor overrides available

**Priority**: Must | SP: 5

---

### Epic 4: Insights & Governance

**US-AN-01** – RCM AI Performance Dashboard  
**As an** RCM Director  
**I want to** see Clean Claim Rate, Denial Rate, Days in AR, and AI Adoption metrics  
**So that** I can track value realization and model performance  

**Priority**: Must | SP: 8

---

**US-GOV-01** – Audit AI Decisions  
**As a** Compliance Officer  
**I want to** review AI recommendations and human overrides  
**So that** we maintain auditability and detect bias or drift  

**Priority**: Must | SP: 5
