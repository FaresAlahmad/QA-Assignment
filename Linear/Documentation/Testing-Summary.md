# Testing Summary

## Applications Selected and Why

The applications selected for testing were **Amazon Web** and the **Japanese Amazon mobile application**.

Amazon was selected because it contains several important user journeys and business-critical functions, including account registration and login, product search, product details, cart functionality, checkout, and address information. These areas provided opportunities to test functionality, input validation, navigation, error handling, and user experience.

The Amazon mobile application was selected to test mobile-specific navigation, UI behavior, content availability, and region-specific functionality.

## Areas Tested

The following areas were tested:

* **Registration and Login:** Valid and invalid email addresses, phone numbers, OTP verification, existing-account login behavior, and empty required login fields.
* **Checkout:** Address information and validation of user-entered data.
* **Search and Product Details:** Product search, navigation, and product information.
* **Cart:** Navigation and functionality related to accessing and adding products to the cart.
* **Responsive UI:** Website behavior across different screen sizes.
* **Mobile Application:** Navigation and content availability within the Japanese Amazon application, including Amazon Haul and Settings.
* **Negative and Edge Cases:** Invalid input formats, unsupported characters, missing required input, and unexpected but realistic user actions.

## Test Coverage Highlights

Basic positive and negative scenarios were considered across the main user journeys.

For example, empty login-field validation was tested. The application prevented the user from proceeding when the required login field was left empty, and the expected validation behavior was observed. No issue was identified from this test.

The testing also included exploratory checks to identify unexpected behavior outside the primary happy paths.

## Main Issues Discovered

Seven issues were identified during testing:

1. **Existing Account Treated as New User**
   A phone number associated with an existing account was directed to the account creation flow instead of continuing through the expected existing-account sign-in flow.

2. **Amazon Haul Navigation Sections Display No Content**
   In the Australian Amazon application, Amazon Haul navigation sections displayed their headers but no products or other content underneath them.

3. **Settings Section Not Functional in Japanese Amazon App**
   In the Japanese Amazon application, tapping the Settings section changed the arrow direction but did not display the settings or navigate to the expected page.

4. **Special Characters Accepted in Address Fields**
   The checkout address form accepted the input `#@$` in the name, street name, and building name fields and allowed the user to continue without displaying a validation message.

5. **OTP Field Missing Until Page Refresh**
   After submitting a valid phone number during sign-in, the OTP page loaded without displaying an OTP input field. The field became visible only after refreshing the page.

6. **Invalid Email Format Accepted**
   The registration form accepted the tested email values `ff@com.hotmail` and `ff@com.shotmail` and proceeded to the OTP verification step without displaying an email format validation message.

7. **Invalid Phone Number Accepted**
   The registration form accepted a phone number containing a `.` character at the end and proceeded with the registration flow without displaying a validation message.

Detailed reproduction steps, actual results, expected results, impact, environments, and evidence are documented in the individual Linear issues.

## Highest-Risk Issue

The **Existing Account Treated as New User** issue affects a fundamental authentication journey.

When a phone number associated with an existing account was used during sign-in, the application directed the user toward account creation instead of continuing through the expected existing-account sign-in flow.

This can prevent affected users from accessing their existing account through the expected sign-in journey and may create confusion during authentication and account creation.

## Areas I Would Test Next

The following areas would be tested next:

* **Checkout:** Payment methods, delivery addresses, order confirmation, failed payments, and changes to cart contents during checkout.
* **Cross-browser testing:** Chrome, Firefox, Edge, and Safari.
* **Cross-device testing:** Different desktop, tablet, and mobile screen sizes.
* **Performance:** Page loading times and behavior under slower network conditions.
* **Accessibility:** Keyboard navigation, focus states, labels, contrast, and screen-reader compatibility.
* **Mobile application testing:** Different devices, operating system versions, network conditions, and logged-in/logged-out states.

## Assumptions

* The tested Amazon website and applications were assumed to represent the intended user experience for the tested regions and environments.
* Expected behavior was determined from the application's presented functionality, standard user-flow expectations, and validation behavior.
* Validation checks were evaluated based on the application's expected handling of the entered values and whether appropriate feedback was provided.

## Limitations

* Testing was performed on a limited number of devices, browsers, operating systems, and regions.
* Testing did not cover every browser, operating system, device, network condition, or Amazon regional experience.
* Performance, security, accessibility, and load testing were not comprehensively performed.
* Testing focused primarily on the selected user journeys and functionality available during the testing sessions.
* Some issues may require additional investigation to determine their exact technical root cause.
* The documented issues represent observed behavior during the tested environments and conditions.
