# Mobile-Specific Behavior

## Overview

Mobile-specific testing was performed using the Amazon application on an **iPhone 17 Pro**.

The testing focused on mobile navigation, content availability, authentication-related behavior, and region-specific functionality.

## Mobile Navigation

The application's navigation elements were checked to verify that users could access the available sections and that interactive elements responded as expected.

Particular attention was given to sections that appeared interactive but did not provide the expected content or navigation.

## Amazon Haul

Amazon Haul sections were tested to verify that selecting navigation categories displayed the expected products or content.

In the tested **Australian Amazon experience**, the navigation sections displayed their headers but no products or other content underneath them.

This behavior was documented as an issue.

## Settings Navigation

The Settings section in the **Japanese Amazon application** was tested to verify that users could open and access the available settings.

When the Settings section was tapped, the arrow direction changed, but the expected settings content was not displayed and the application did not navigate to the expected page.

This behavior was documented as an issue.

## Authentication and Account Behavior

Authentication and account-related flows were also considered during mobile testing.

The focus was on whether users could navigate through authentication-related screens and whether required functionality was available when needed.

## Content Loading

Mobile sections were checked to determine whether expected content appeared after navigation.

The Amazon Haul testing identified a case where navigation headers were available but the expected content was not displayed.

## Region-Specific Testing

Testing included region-specific Amazon experiences:

* Japanese Amazon application
* Australian Amazon experience

Observed behavior was documented specifically for the region in which it was reproduced.

No assumptions were made about other Amazon regions that were not tested.

## Results

The mobile-specific testing identified issues related to:

* Settings navigation in the Japanese Amazon application
* Content availability in Amazon Haul in the tested Australian Amazon experience

## Limitations

Mobile testing was performed on a limited device and selected Amazon regional experiences.

Testing did not cover all supported mobile devices, operating system versions, screen sizes, network conditions, or Amazon regions.
