# TestSprite AI Testing Report (MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** projeto-final-firabase-main
- **Date:** 2026-06-24
- **Prepared by:** TestSprite AI Team / Codex
- **Execution Target:** Expo Web at `http://localhost:19006`
- **Execution Mode:** development

---

## 2️⃣ Requirement Validation Summary

### Requirement: Authentication - Login, Session, and Logout
The app should allow users to sign in, reject invalid credentials, display the authenticated home screen, and sign out.

#### Test TC003 Sign in successfully and view the authenticated home screen
- **Test Code:** [TC003_Sign_in_successfully_and_view_the_authenticated_home_screen.py](./TC003_Sign_in_successfully_and_view_the_authenticated_home_screen.py)
- **Test Error:** No valid Firebase test credentials were available, so the login page remained visible after repeated attempts.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/208d5156-9262-4256-9e2f-6cca2e95f735
- **Status:** BLOCKED
- **Severity:** High
- **Analysis / Findings:** Authenticated flows cannot be verified without a seeded test account or an auth bypass for test environments.

#### Test TC010 Reject invalid login credentials
- **Test Code:** [TC010_Reject_invalid_login_credentials.py](./TC010_Reject_invalid_login_credentials.py)
- **Test Error:** N/A
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/59b218c6-72a6-4386-ad35-537cce391aba
- **Status:** ✅ Passed
- **Severity:** Low
- **Analysis / Findings:** Invalid login attempts keep the user on the login screen as expected.

#### Test TC002 Sign out and return to the login screen
- **Test Code:** [TC002_Sign_out_and_return_to_the_login_screen.py](./TC002_Sign_out_and_return_to_the_login_screen.py)
- **Test Error:** Authentication could not be completed, so the sign-out control could not be reached.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/6237ffdd-70d8-4787-8505-b000f370f535
- **Status:** BLOCKED
- **Severity:** Medium
- **Analysis / Findings:** Logout remains unverified until a valid authenticated session is available.

### Requirement: Signup and Validation
The app should create accounts, reject invalid emails, reject weak passwords, and return users to the login screen after successful signup.

#### Test TC006 Create a new account successfully
- **Test Code:** [TC006_Create_a_new_account_successfully.py](./TC006_Create_a_new_account_successfully.py)
- **Test Error:** The form stayed on `/signup` after repeated submit attempts and no success confirmation was observed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/66ffbb40-3543-4aee-aad0-76dc4dbd62a7
- **Status:** ❌ Failed
- **Severity:** High
- **Analysis / Findings:** Account creation did not visibly complete in the automated run. This may indicate Firebase signup failure, network/backend configuration, or React Native `Alert` behavior not being visible to the TestSprite browser runner.

#### Test TC007 Create an account and reach the login screen
- **Test Code:** [TC007_Create_an_account_and_reach_the_login_screen.py](./TC007_Create_an_account_and_reach_the_login_screen.py)
- **Test Error:** N/A
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/f337d55c-ef5f-4cd3-b7e5-ecdc14898a43
- **Status:** ✅ Passed
- **Severity:** Low
- **Analysis / Findings:** One signup/navigation scenario was accepted by the runner.

#### Test TC014 Reject a weak password during signup
- **Test Code:** [TC014_Reject_a_weak_password_during_signup.py](./TC014_Reject_a_weak_password_during_signup.py)
- **Test Error:** Weak password submission did not show a visible validation message containing the expected terms.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/18467c00-8798-401e-b08d-8d6dbea48550
- **Status:** ❌ Failed
- **Severity:** Medium
- **Analysis / Findings:** Validation may be using native alerts that are not captured as page-visible text. Consider inline validation text for stronger UX and testability.

#### Test TC015 Reject an invalid email during signup
- **Test Code:** [TC015_Reject_an_invalid_email_during_signup.py](./TC015_Reject_an_invalid_email_during_signup.py)
- **Test Error:** N/A
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/4375ab22-9c7c-4177-a2e4-3043ce66cd5c
- **Status:** ✅ Passed
- **Severity:** Low
- **Analysis / Findings:** Invalid email signup keeps the user on the signup form.

### Requirement: Car Registration
Authenticated users should register cars and required fields should be enforced.

#### Tests TC001, TC005, TC011, TC012, TC013
- **Test Code:** [TC001_Register_a_car_successfully.py](./TC001_Register_a_car_successfully.py), [TC005_Save_a_new_car_successfully.py](./TC005_Save_a_new_car_successfully.py), [TC011_Keep_required_car_fields_from_submitting_when_incomplete.py](./TC011_Keep_required_car_fields_from_submitting_when_incomplete.py), [TC012_Require_car_registration_fields_before_saving.py](./TC012_Require_car_registration_fields_before_saving.py), [TC013_Go_back_to_home_from_car_registration.py](./TC013_Go_back_to_home_from_car_registration.py)
- **Test Error:** All were blocked because the authenticated car registration route could not be reached without valid Firebase credentials.
- **Status:** BLOCKED
- **Severity:** High
- **Analysis / Findings:** Registration behavior and required field checks are unverified in end-to-end testing until TestSprite can authenticate.

### Requirement: Car Listing
Authenticated users should view saved cars or an empty listing state.

#### Tests TC008, TC009
- **Test Code:** [TC008_View_saved_car_details_in_the_listing.py](./TC008_View_saved_car_details_in_the_listing.py), [TC009_View_an_empty_car_listing.py](./TC009_View_an_empty_car_listing.py)
- **Test Error:** Both were blocked because the listing screen requires authentication.
- **Status:** BLOCKED
- **Severity:** High
- **Analysis / Findings:** Firestore listing behavior remains unverified without a seeded authenticated user and known database state.

---

## 3️⃣ Coverage & Matching Metrics

- **Total Tests:** 15
- **Passed:** 3
- **Failed:** 2
- **Blocked:** 10
- **Pass Rate:** 20.00%

| Requirement | Total Tests | ✅ Passed | ❌ Failed | BLOCKED |
|---|---:|---:|---:|---:|
| Authentication | 4 | 1 | 0 | 3 |
| Signup and Validation | 4 | 2 | 2 | 0 |
| Car Registration | 5 | 0 | 0 | 5 |
| Car Listing | 2 | 0 | 0 | 2 |

---

## 4️⃣ Key Gaps / Risks

- Most user-critical flows are behind Firebase authentication, but no dedicated test credentials were available. This blocked registration, listing, home navigation, and logout coverage.
- Signup validation relies on alerts/side effects that were not consistently visible to the browser-based test runner. Inline validation messages would make failures clearer for users and tests.
- Successful signup produced inconsistent outcomes across TC006 and TC007, suggesting a need to inspect Firebase auth configuration, duplicate-email behavior, and how success alerts behave on web.
- The car `ano` field uses numeric keyboard input but does not validate realistic year ranges before saving.
- Some existing unit tests still cover legacy sneaker validation (`tenis-validations`) while the app UI currently manages cars, so the automated test corpus and product domain should be aligned.
