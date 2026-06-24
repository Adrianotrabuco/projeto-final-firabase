
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** projeto-final-firabase-main
- **Date:** 2026-06-24
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Register a car successfully
- **Test Code:** [TC001_Register_a_car_successfully.py](./TC001_Register_a_car_successfully.py)
- **Test Error:** TEST BLOCKED

The test could not be run — signing in to the app did not succeed with the available credentials, so the car registration flow could not be reached.

Observations:
- After submitting credentials twice the page remained on the login screen with the 'Entrar' form visible.
- No authenticated UI or navigation to the car registration area appeared, and no explicit error message was shown.
- A valid/test Firebase credential or backend access appears to be required to continue; current environment lacks working authentication.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/279f2ab0-ec56-4731-ad66-c33e01f76620
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002 Sign out and return to the login screen
- **Test Code:** [TC002_Sign_out_and_return_to_the_login_screen.py](./TC002_Sign_out_and_return_to_the_login_screen.py)
- **Test Error:** TEST BLOCKED

The test could not be run — signing in to reach the protected home screen failed, so the sign-out flow could not be exercised.

Observations:
- The app remained on the login screen after two sign-in attempts; email and password fields and the 'Entrar' button are still visible.
- No protected/home content or any sign-out control was observed on the page.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/6237ffdd-70d8-4787-8505-b000f370f535
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003 Sign in successfully and view the authenticated home screen
- **Test Code:** [TC003_Sign_in_successfully_and_view_the_authenticated_home_screen.py](./TC003_Sign_in_successfully_and_view_the_authenticated_home_screen.py)
- **Test Error:** TEST BLOCKED

The test could not be run — no valid credentials were available to complete authentication and confirm the authenticated home screen.

Observations:
- The login page remained visible after three attempts to sign in with the fallback credentials.
- The page shows the "E-mail" field prefilled with example@gmail.com, the "Senha" field filled (masked), and the "Entrar" button.
- No authenticated home screen or account email appeared after submission attempts.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/208d5156-9262-4256-9e2f-6cca2e95f735
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004 Navigate from home to car registration and back to login
- **Test Code:** [TC004_Navigate_from_home_to_car_registration_and_back_to_login.py](./TC004_Navigate_from_home_to_car_registration_and_back_to_login.py)
- **Test Error:** TEST BLOCKED

The test could not be run — the UI prevents signing in with the provided credentials or the authentication backend is not reachable in this environment.

Observations:
- After five submit attempts the login screen (E-mail and Senha) remained displayed with the email field filled.
- No authenticated home screen or navigation controls were shown after submitting credentials.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/00fa0740-8b69-4e96-a90f-08291ee08952
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005 Save a new car successfully
- **Test Code:** [TC005_Save_a_new_car_successfully.py](./TC005_Save_a_new_car_successfully.py)
- **Test Error:** TEST BLOCKED

The test could not be run — authentication could not be completed using the available credentials, preventing access to the car registration flow.

Observations:
- The login screen remained visible after three attempts to submit credentials.
- No success feedback or navigation to the home screen was observed after clicking "Entrar".
- No valid test credentials or alternative access were provided to complete authentication.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/8c9f2618-5caa-4fd0-b043-ceed041dbbec
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006 Create a new account successfully
- **Test Code:** [TC006_Create_a_new_account_successfully.py](./TC006_Create_a_new_account_successfully.py)
- **Test Error:** TEST FAILURE

The signup flow did not complete — submitting the signup form did not return the app to the login screen and no account creation confirmation was observed.

Observations:
- After submitting the filled form multiple times, the page remained on '/signup' (http://localhost:19006/signup).
- The form fields are populated (Nome='Test User', E-mail='testuser+20260624@example.com') and both password fields appear filled, but repeated submit attempts (5+) produced no success indication and did not navigate to login.
- No visible success message or explicit error message was shown on the page to explain the failure.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/66ffbb40-3543-4aee-aad0-76dc4dbd62a7
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007 Create an account and reach the login screen
- **Test Code:** [TC007_Create_an_account_and_reach_the_login_screen.py](./TC007_Create_an_account_and_reach_the_login_screen.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/f337d55c-ef5f-4cd3-b7e5-ecdc14898a43
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008 View saved car details in the listing
- **Test Code:** [TC008_View_saved_car_details_in_the_listing.py](./TC008_View_saved_car_details_in_the_listing.py)
- **Test Error:** TEST BLOCKED

The test could not be run — a valid authenticated session could not be established and no test credentials were provided.

Observations:
- The login screen with E-mail and Senha fields remained visible after multiple sign-in attempts.
- No navigation to any post-login page (car registration or listing) occurred after three attempts with fallback credentials.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/5c339793-5269-4a6d-9c70-0aae478f55e8
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009 View an empty car listing
- **Test Code:** [TC009_View_an_empty_car_listing.py](./TC009_View_an_empty_car_listing.py)
- **Test Error:** TEST BLOCKED

Sign-in could not be completed with the provided fallback credentials, preventing access to the authenticated car listing required by the test.

Observations:
- After entering credentials and clicking 'Entrar' twice, the page remained on the login screen showing the email and password fields.
- No navigation to the app or indication of a successful login was observed; the 'Entrar' button and login form remain visible.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/4021f2aa-ddbe-4352-b230-518b921c39b1
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010 Reject invalid login credentials
- **Test Code:** [TC010_Reject_invalid_login_credentials.py](./TC010_Reject_invalid_login_credentials.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/59b218c6-72a6-4386-ad35-537cce391aba
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011 Keep required car fields from submitting when incomplete
- **Test Code:** [TC011_Keep_required_car_fields_from_submitting_when_incomplete.py](./TC011_Keep_required_car_fields_from_submitting_when_incomplete.py)
- **Test Error:** TEST BLOCKED

The car registration flow cannot be reached for testing because authentication is required and no test credentials were provided.

Observations:
- The app shows the login screen with 'Entrar' and visible email/password fields.
- No public link or navigation to a car registration form is present on the login page.
- No test credentials were supplied, so authenticated pages cannot be accessed to perform the required validation checks.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/b19d94e9-e390-445c-8d99-d7161187a6cc
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012 Require car registration fields before saving
- **Test Code:** [TC012_Require_car_registration_fields_before_saving.py](./TC012_Require_car_registration_fields_before_saving.py)
- **Test Error:** TEST BLOCKED

The test could not be run — a valid authenticated session is required but valid test credentials were not provided.

Observations:
- After submitting the fallback credentials the UI remained on the login screen showing the email and password fields and the 'Entrar' button.
- No navigation control or link to the car registration page was visible without authentication.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/408657e4-56e1-4dd1-8816-f61f7ca40631
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC013 Go back to home from car registration
- **Test Code:** [TC013_Go_back_to_home_from_car_registration.py](./TC013_Go_back_to_home_from_car_registration.py)
- **Test Error:** TEST BLOCKED

The test could not be run — a working authenticated session could not be established because valid test credentials are not available.

Observations:
- After filling the email and password fields and clicking 'Entrar', the app remained on the login screen and did not navigate to an authenticated home screen.
- No authenticated UI (home or car registration) was observed after the sign-in attempt.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/27206f81-5eab-4c09-a3a6-fc94cdc8fbc7
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014 Reject a weak password during signup
- **Test Code:** [TC014_Reject_a_weak_password_during_signup.py](./TC014_Reject_a_weak_password_during_signup.py)
- **Test Error:** TEST FAILURE

Password validation did not appear — weak password submission was not visibly blocked.

Observations:
- The signup page remained visible after submitting the form with a weak password.
- No inline or toast password-strength/validation message containing terms like 'fraca' or 'mínimo' was found on the page.
- The Nome and E-mail fields still contain the entered values (Test User / test.weak@example.com), indicating the signup form remained available.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/18467c00-8798-401e-b08d-8d6dbea48550
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC015 Reject an invalid email during signup
- **Test Code:** [TC015_Reject_an_invalid_email_during_signup.py](./TC015_Reject_an_invalid_email_during_signup.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/462a2255-337a-41e2-937f-f18aa8d33735/4375ab22-9c7c-4177-a2e4-3043ce66cd5c
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **20.00** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---