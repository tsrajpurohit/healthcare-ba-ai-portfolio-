# Risk Register  
## TrialFlow CTMS

**Version**: 1.0

| Risk ID | Description | Category | Probability | Impact | Score | Mitigation | Owner |
|---------|-------------|----------|-------------|--------|-------|------------|-------|
| R01 | Sites resist additional data entry burden | People / Adoption | High | High | 9 | Simple UX, demonstrate value (less dual entry, clearer schedules), strong training & support | Clin Ops Manager |
| R02 | Underestimation of validation / compliance effort | Compliance | Medium | High | 6 | Engage QA/Validation early; design for auditability from the start | QA + BA |
| R03 | Scope creep into full EDC or eTMF | Scope | Medium | High | 6 | Strict Phase 1 boundary; formal change control | Sponsor / BA |
| R04 | Inconsistent data entry leading to poor data quality | Data | Medium | High | 6 | Controlled terminology, mandatory fields, training, monitoring | Study Managers |
| R05 | Visit window logic errors | Functional | Medium | High | 6 | Thorough testing of window calculations with edge cases | BA + Test |
| R06 | Insufficient UAT participation from busy sites | Project | Medium | Medium | 4 | Schedule thoughtfully; provide clear value proposition; leadership support | Clin Ops |
| R07 | Integration needs emerge late | Technical | Low | Medium | 2 | Keep architecture integration-ready; document future interface needs | IT |
| R08 | Audit trail incomplete for critical actions | Compliance | Low | High | 3 | Explicit requirements + dedicated test scenarios | QA + Dev |
