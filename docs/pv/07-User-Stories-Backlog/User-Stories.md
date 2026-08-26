# User Stories  
## VigilAI – AI-Powered Pharmacovigilance Platform

**Version**: 1.0

---

### Epic 1: Intelligent Case Intake & Triage

**US-CS-01** – AI-Assisted Data Extraction  
**As a** Case Processor  
**I want** the system to extract key data from incoming reports  
**So that** I spend less time on manual data entry  

**Acceptance Criteria**: Extracted fields shown for confirmation; user can edit before save; source reference available; action logged.

**Priority**: Must | SP: 8

---

**US-CS-02** – Duplicate Detection Support  
**As a** Case Processor  
**I want** potential duplicates ranked with reasons  
**So that** I can quickly confirm or dismiss duplicates  

**Acceptance Criteria**: Ranked list with match factors; user decision + reason mandatory; decision logged.

**Priority**: Must | SP: 5

---

**US-CS-03** – Priority Scoring & Workqueue  
**As a** Case Processor / Supervisor  
**I want** cases prioritized by AI-supported urgency  
**So that** serious cases are handled first  

**Acceptance Criteria**: Priority score + explanation visible; workqueue sorted by priority; override with reason possible.

**Priority**: Must | SP: 5

---

### Epic 2: Coding & Processing Support

**US-COD-01** – MedDRA Coding Suggestions  
**As a** Case Processor / Coder  
**I want** AI-suggested MedDRA terms with confidence  
**So that** coding is faster and more consistent while I retain final control  

**Acceptance Criteria**: Suggestions + confidence + rationale shown; explicit human confirmation required; match/usage logged.

**Priority**: Must | SP: 8

---

**US-QC-01** – Automated Quality Checks  
**As a** Case Processor  
**I want** the system to flag completeness and consistency issues  
**So that** I catch problems before medical review  

**Priority**: Should | SP: 5

---

### Epic 3: Literature Intelligence

**US-LIT-01** – AI Literature Screening  
**As a** Literature Specialist  
**I want** literature ranked by safety relevance  
**So that** I focus on the most important items first  

**Acceptance Criteria**: Ranked workqueue; decision capture (Relevant/Not/Further); feedback stored.

**Priority**: Must | SP: 8

---

### Epic 4: Visibility & Governance

**US-VIS-01** – PV Operations Dashboard  
**As a** PV Operations Lead  
**I want** real-time views of case volumes, cycle times, backlog, and quality  
**So that** I can manage resources and compliance  

**Priority**: Must | SP: 8

---

**US-GOV-01** – Audit AI Decisions  
**As a** QA / Compliance user  
**I want** to review AI suggestions and human decisions  
**So that** we support inspections and internal oversight  

**Priority**: Must | SP: 5
