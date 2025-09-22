# Functional Test Cases – NoventiQ Playwright Assessment

## 1. Overview
This document contains functional test cases for the NoventiQ Playwright assessment.  
It includes both **positive** and **negative** scenarios for the web application features.

---

## 2. Test Case Table

| Test Case ID | Module / Feature | Test Scenario                                       | Preconditions         | Test Steps                                                                            | Expected Result                                            | Actual Result | Status (Pass/Fail) |
| ------------ | ---------------- | --------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------- | ------------------ |
| TC-01        | Login            | Verify valid login                                  | User is on login page | 1. Enter valid username<br>2. Enter valid password<br>3. Click Submit                 | Success message “Logged In Successfully” should appear     | TBD           | TBD                |
| TC-02        | Login            | Verify invalid password                             | User is on login page | 1. Enter valid username<br>2. Enter invalid password<br>3. Click Submit               | Error message “Invalid credentials” should appear          | TBD           | TBD                |
| TC-03        | Login            | Verify empty username                               | User is on login page | 1. Leave username empty<br>2. Enter valid password<br>3. Click Submit                 | Submit button should be disabled / error message displayed | TBD           | TBD                |
| TC-04        | Login            | Verify empty password                               | User is on login page | 1. Enter valid username<br>2. Leave password empty<br>3. Click Submit                 | Submit button should be disabled / error message displayed | TBD           | TBD                |
| TC-05        | Login            | Verify dashboard navigation after login             | User is on login page | 1. Enter valid credentials<br>2. Click Submit                                         | User should be redirected to Dashboard page                | TBD           | TBD                |
| TC-06        | Login            | Verify case-sensitive username                      | User is on login page | 1. Enter username in wrong case<br>2. Enter valid password<br>3. Click Submit         | Login should fail                                          | TBD           | TBD                |
| TC-07        | Login            | Verify max character limit                          | User is on login page | 1. Enter username exceeding limit<br>2. Enter password<br>3. Click Submit             | Error message displayed or input restricted                | TBD           | TBD                |
| TC-08        | Login            | Verify special characters in username               | User is on login page | 1. Enter special characters in username<br>2. Enter valid password<br>3. Click Submit | Login should fail                                          | TBD           | TBD                |
| TC-09        | Login            | Verify password masking                             | User is on login page | 1. Enter password<br>2. Check visibility of input                                     | Password should be masked (hidden)                         | TBD           | TBD                |
| TC-10        | Login            | Verify submit button click without entering details | User is on login page | 1. Do not enter username or password<br>2. Click Submit                               | Submit button should be disabled or show error             | TBD           | TBD                |

---


