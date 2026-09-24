# Navigation and Error Handling

## Overview

Navigation and error handling were tested across important web and mobile user journeys.

The testing focused on whether navigation elements responded correctly, whether users were directed to the expected screens, and whether appropriate feedback was provided when invalid or unexpected conditions occurred.

## Registration and Sign-in Navigation

Registration and sign-in flows were tested to verify that users could move through the expected authentication steps.

This included checking how the application handled valid information, invalid information, and information associated with an existing account.

An issue was identified where an existing account was treated as a new user during the sign-in flow.

## OTP Page Navigation

The OTP step was checked after submitting a valid phone number.

The expected behavior was for the OTP page to display the required input field so that the user could continue authentication.

During testing, the OTP field was initially missing and only became visible after refreshing the page.

## Checkout Navigation

The checkout flow was tested from cart navigation through address entry.

The focus was on whether users could move through the checkout process and whether invalid address information received appropriate validation.

An issue was identified where special characters were accepted in address fields without validation feedback.

## Amazon Haul Navigation

Amazon Haul navigation sections were tested to verify that selecting a section displayed the expected content.

During testing, the navigation headers were displayed, but the selected sections did not show products or other content underneath them in the tested Australian Amazon experience.

## Mobile Settings Navigation

The Settings section in the Japanese Amazon application was tested to verify that the navigation element responded correctly and displayed the expected settings.

During testing, tapping the Settings section changed the arrow direction but did not display the expected settings content or navigate to the expected page.

## Error Handling

Error handling was checked during invalid-input and account-related scenarios.

The testing included:

* Invalid email formats
* Invalid phone-number format
* Empty required login fields
* Existing account information
* Unsupported characters in address fields

The empty required login-field test showed the expected validation behavior and prevented the user from continuing.

Several other negative tests showed that the application allowed unexpected input to proceed without displaying appropriate validation feedback. These behaviors were documented as individual issues.

## Summary

The testing identified navigation and error-handling problems in authentication, OTP, checkout, and mobile navigation. Each observed issue was documented separately with reproduction steps, actual results, expected results, impact, environment, and evidence.
