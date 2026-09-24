# Unexpected but Realistic User Actions

## Overview

Unexpected but realistic user actions were included as part of exploratory testing to identify how the application behaves when users provide unusual input or interact with the application in ways that are still reasonable in normal use.

These scenarios were selected because real users do not always follow the ideal happy path.

## Malformed Registration Information

Malformed email and phone-number values were entered during registration.

**Purpose:**
To verify that the application validates user-provided information before allowing the registration process to continue.

**Observed behavior:**
Some invalid values were accepted and the registration flow continued without displaying appropriate validation feedback.

## Unsupported Characters in Address Fields

Special characters such as `#@$` were entered into address fields during checkout.

**Purpose:**
To verify how the application handles unexpected characters in information that is expected to contain address details.

**Observed behavior:**
The application accepted the values and allowed the user to continue without displaying a validation message.

## Existing Account Used During Registration

A phone number associated with an existing account was used during the account flow.

**Purpose:**
To verify that the application correctly identifies existing account information and directs the user to the appropriate authentication flow.

**Observed behavior:**
The application directed the user toward account creation instead of continuing through the expected existing-account sign-in flow.

## Refreshing the OTP Page

The OTP page was refreshed after the OTP input field was initially missing.

**Purpose:**
To determine whether refreshing the page affected the availability of the required authentication input.

**Observed behavior:**
The OTP input field became visible after the page was refreshed.

## Opening Amazon Haul While Not Logged In

Amazon Haul sections were opened while the user was not logged in.

**Purpose:**
To verify whether the sections displayed the content represented by their navigation elements regardless of authentication state.

**Observed behavior:**
In the tested Australian Amazon experience, the navigation headers were displayed but no products or other content appeared underneath them.

## Tapping an Apparently Interactive Settings Section

The Settings section in the Japanese Amazon application was tapped because it appeared to be an interactive navigation element.

**Purpose:**
To verify that the interface responds consistently to user interaction and provides the functionality indicated by the navigation element.

**Observed behavior:**
The arrow direction changed, but the expected settings content was not displayed and the application did not navigate to the expected page.

## Summary

These scenarios were selected because they represent realistic actions that users may perform when entering unexpected information, navigating the application, or attempting to recover from an unexpected state.

The observed behaviors were documented as issues where they differed from the expected user experience.
