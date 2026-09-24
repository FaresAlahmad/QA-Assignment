# UI Consistency and Usability

## Overview

UI consistency and usability were considered during exploratory testing of the Amazon website and mobile application.

The focus was on whether important elements were visible and usable, whether interactive elements responded as expected, and whether the interface provided clear feedback to the user.

## Input Fields

Important input fields were checked during registration, authentication, and checkout.

The testing focused on:

* Visibility of required fields
* Ability to enter information
* Validation feedback
* Whether users could understand what information was required

The empty login-field test provided the expected validation feedback and prevented the user from continuing.

## Navigation Elements

Navigation elements were checked to verify that selecting them produced the expected result.

The Amazon Haul navigation sections and the mobile Settings section were specifically examined because they appeared to be interactive.

Issues were observed where navigation elements did not provide the expected content or functionality.

## OTP Usability

The OTP page was checked to verify that the required input was immediately available after reaching the authentication step.

The OTP input field was initially missing and only appeared after refreshing the page. This can make the next required action unclear to the user.

## Error and Validation Feedback

Validation feedback was considered during negative testing.

The application correctly displayed validation behavior when the required login field was empty.

However, some tested invalid inputs were accepted without appropriate validation feedback, including invalid email formats, an invalid phone-number format, and unsupported special characters in address fields.

## Content Availability

The application was checked to verify that navigation elements displayed the content users would reasonably expect after selecting them.

In the tested Australian Amazon experience, Amazon Haul sections displayed their navigation headers but no products or other content.

In the Japanese Amazon application, the Settings section responded visually by changing its arrow direction but did not display the expected settings content.

## Usability Observations

The testing identified areas where the interface could make the user's next action unclear:

* The missing OTP field required a page refresh before the user could continue.
* Some navigation elements appeared interactive but did not display the expected content.
* Some invalid inputs were accepted without validation feedback.

These observations were documented as issues where the behavior affected expected functionality.

## Limitations

UI consistency and usability testing was exploratory and focused on the selected user journeys. It was not a comprehensive accessibility or UX audit and did not evaluate every page, component, device, or regional Amazon experience.
