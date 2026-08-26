# Risk Register  
## MediClaim AI – Including AI-Specific Risks

**Version**: 1.0

| Risk ID | Description | Category | Prob | Impact | Score | Mitigation | Owner |
|---------|-------------|----------|------|--------|-------|------------|-------|
| R01 | AI model accuracy below usable threshold | AI / Model | Med | High | 6 | Rigorous validation, human-in-loop, phased rollout | Data Science |
| R02 | Users distrust or ignore AI recommendations | Adoption | High | High | 9 | Strong explainability, pilot wins, training, feedback loops | RCM Director + BA |
| R03 | Poor historical data quality limits model performance | Data | High | High | 9 | Early data assessment, cleansing, feature engineering | Data + IT |
| R04 | Regulatory / compliance challenge to AI decisions | Compliance | Med | High | 6 | Explainability, full audit trail, human final authority, Compliance involvement | Compliance |
| R05 | Model bias across payers, specialties, or populations | AI / Ethics | Med | High | 6 | Fairness monitoring, regular bias audits, diverse training data | Data Science + Compliance |
| R06 | Integration failures with EHR or Clearinghouse | Technical | Med | High | 6 | API-first design, robust error handling, phased integration | IT |
| R07 | Scope creep into full autonomous RCM | Scope | Med | Med | 4 | Strict Phase 1 boundaries, change control | Sponsor / BA |
| R08 | Model drift after go-live degrades performance | AI / Ops | Med | High | 6 | MLOps monitoring, automated alerts, retraining schedule | Data Science |
| R09 | Staff fear of job displacement | People | Med | Med | 4 | Clear communication that AI augments, upskilling paths | Leadership |
| R10 | Over-reliance on AI leading to skill atrophy | People | Low | Med | 2 | Maintain training on core RCM skills, random quality audits | RCM Leadership |
