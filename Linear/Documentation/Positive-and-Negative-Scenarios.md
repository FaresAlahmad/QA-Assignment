# Positive and Negative Scenarios

## Positive Scenarios

Positive scenarios were used to verify that the main user journeys work correctly when valid and expected information is provided.

### Registration Using Valid Information

A valid registration flow was considered to verify that users can proceed through account creation using acceptable information.

### Sign-in Using an Existing Account

An existing account sign-in flow was tested to verify that returning users can access their accounts using valid information.

### Entering a Valid Phone Number

A valid phone number was tested during authentication to verify that the application proceeds to the expected OTP verification step.

### Navigating Through Product Sections

Normal product navigation was tested to verify that users can access product sections and view the expected content.

### Proceeding Through Checkout Using Normal Information

Normal checkout information was used to verify that users can proceed through the purchasing flow using expected address information.

## Negative Scenarios

Negative scenarios were selected to verify that the application handles invalid, unexpected, or unsupported input appropriately instead of allowing incorrect information to proceed without validation.

### Invalid Email Formats

Invalid email formats were tested during registration to verify that the application rejects incorrectly formatted email addresses and provides appropriate validation feedback.

During testing, the tested invalid email values were accepted and the flow proceeded to OTP verification without displaying an email format validation message.

### Invalid Phone Number

An invalid phone number containing a `.` character at the end was tested to verify that incorrect phone-number formats are rejected.

During testing, the value was accepted and the registration flow proceeded without displaying a validation message.

### Unsupported Special Characters in Address Fields

Special characters such as `#@$` were entered into address fields during checkout to verify that inappropriate input is handled correctly.

During testing, the values were accepted and the user was allowed to continue without validation feedback.

### Existing Account Information During Registration

A phone number associated with an existing account was used to verify how the application handles an account that already exists.

During testing, the application directed the user toward account creation instead of continuing through the expected existing-account sign-in flow.

### Missing OTP Input Field

The OTP page was checked after submitting a valid phone number to verify that the required OTP input is available when authentication reaches that step.

During testing, the OTP input field was initially missing and became visible only after refreshing the page.

### Empty Required Login Field

An empty required login field was tested to verify that the application prevents the user from continuing without the required information.

The application correctly prevented the user from proceeding and displayed the expected validation behavior. No issue was identified.

## Scenario Selection

The scenarios were selected based on the main user journeys, business-critical functionality, common user inputs, and realistic invalid or unexpected actions.

The positive scenarios verify normal functionality, while the negative scenarios focus on validation, error handling, and behavior when users provide information outside the expected format.
