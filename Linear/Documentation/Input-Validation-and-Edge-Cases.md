# Input Validation and Edge Cases

## Overview

Input validation and edge-case testing were performed in areas where unexpected or incorrect user input could affect account registration, authentication, or checkout.

The purpose was to verify that the application validates user input appropriately, prevents invalid information from proceeding when necessary, and provides clear feedback to the user.

## Invalid Email Formats

Invalid email values were tested during registration to verify that incorrectly formatted email addresses are rejected.

The tested values included:

* `ff@com.hotmail`
* `ff@com.shotmail`

### Observed Result

The application accepted the tested values and proceeded to the OTP verification step without displaying an email format validation message.

This was documented as **Invalid Email Format Accepted**.

## Invalid Phone Number

A phone number containing a `.` character at the end was tested during registration.

### Purpose

The test was intended to verify that the phone-number field rejects an invalid format before allowing the registration process to continue.

### Observed Result

The application accepted the value and proceeded with the registration flow without displaying a validation message.

This was documented as **Invalid Phone Number Accepted**.

## Special Characters in Address Fields

The characters `#@$` were entered into the name, street name, and building name fields during checkout.

### Purpose

The test was intended to verify whether address fields appropriately handle unsupported or invalid characters.

### Observed Result

The application accepted the entered values and allowed the user to continue without displaying a validation message.

This was documented as **Special Characters Accepted in Address Fields**.

## Existing Account Information

A phone number associated with an existing account was tested during the sign-in and registration flow.

### Purpose

The test was intended to verify that the application correctly distinguishes between an existing account and a new registration.

### Observed Result

The application directed the user toward account creation instead of continuing through the expected existing-account sign-in flow.

This was documented as **Existing Account Treated as New User**.

## Missing OTP Input

The OTP step was checked after submitting a valid phone number during sign-in.

### Purpose

The OTP input is required for the user to complete the authentication flow, so its availability was checked after reaching the OTP page.

### Observed Result

The OTP input field was initially missing. After refreshing the page, the field became visible.

This was documented as **OTP Field Missing Until Page Refresh**.

## Empty Required Login Field

An empty required login field was tested to verify that the application prevents the user from continuing without the required information.

### Observed Result

The application correctly prevented the user from proceeding and displayed the expected validation behavior.

No issue was identified from this test.

## Edge-Case Coverage

The testing included the following edge cases:

* Invalid email formats
* Invalid phone-number format
* Unsupported special characters
* Existing account information
* Missing OTP input
* Empty required login fields
* Unexpected but realistic user actions

These cases were selected because they represent realistic situations where users may provide incomplete, malformed, or unexpected information.

## Limitations

The validation testing was limited to the selected fields and values used during the testing sessions. It did not cover every possible invalid character, input length, Unicode character, boundary value, or validation rule across all Amazon forms.
