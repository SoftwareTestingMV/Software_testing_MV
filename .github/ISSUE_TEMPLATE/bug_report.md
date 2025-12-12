---
name: Bug report
about: Create a report to help us improve
title: "[bug]"
labels: bug
assignees: ''

---

**Description**
A clear and concise description of what the bug is.

**Test Details**
- File: [e.g., test/toString.test.js]
- Test case: [e.g., "should handle null values"]
- Function under test: [e.g., toString()]

**Steps to Reproduce**
Steps:
1. Run `npm test test/toString.test.js.`
2. Observe failure in test case: "should return empty string for null values"

**Expected result**
Describe the correct output or state.

**Actual result**
Describe what actually happens (wrong value, exception, etc.).

**Environment**
- OS: [e.g., Ubuntu 22.04]
- Language/Framework: [e.g., Node.js 22, Jest 29]
- CI/CD: [e.g., GitHub Actions]

**Criticality level** 
low/minor/major/critical
Key:
- Low: The bug does not affect the correctness of the unit’s logic – it is a non-functional issue. 
- Minor: The test fails because of incorrect expectations or minor logic errors. 
- Major: The test failed because of a real bug in the unit. 
- Critical: The bug prevents tests from running entirely or a severe defect in the unit’s functionality. 

**Priority rating**
low/medium/high
Key:
- Low: The bug can be fixed later; it does not affect builds or give misleading results. 
- Medium: Can be fixed withing normal development process, it does not block progress. 
- High: Must be fixed immediately; it blocks builds or hides results. 

**Additional context**
Add any other context about the problem here.
