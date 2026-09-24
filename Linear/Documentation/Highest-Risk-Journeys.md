# Highest-Risk Journeys

## Selected Application / Website

### Amazon Web

Amazon was selected because it is a large e-commerce platform with several important user journeys, including authentication, product browsing, cart management, checkout, and address information.

### Amazon Mobile App

The Amazon mobile app was selected because it provides the same core e-commerce functionality while also allowing testing of mobile-specific navigation, UI behavior, content availability, and region-specific features.

## Highest-Risk User Journeys

### 1. Registration and Sign-in

This is a high-risk journey because users must be able to create accounts and access their existing accounts reliably. Problems in this area can prevent users from accessing their accounts or completing registration.

During testing, an issue was observed where an existing account was treated as a new user during sign-in.

### 2. OTP Authentication

OTP authentication is an important part of the sign-in process because it is required to complete authentication for the tested flow. If the OTP step does not function correctly, users may be unable to complete sign-in.

During testing, the OTP input field was initially missing after submitting a valid phone number and only appeared after refreshing the page.

### 3. Checkout and Address Entry

Checkout is a high-risk journey because it is the final stage before completing a purchase. Problems with address information or validation can prevent users from completing orders or allow incorrect information to proceed.

During testing, special characters were accepted in address fields without validation feedback.

### 4. Product and Cart Navigation

Product browsing and cart functionality are important because users need to find products, view product information, add products to their cart, and manage their selections before checkout.

Testing focused on product navigation and cart-related functionality to verify that users could move through these parts of the purchasing journey as expected.

### 5. Mobile Navigation and Settings

Mobile navigation is important because users rely on navigation elements to access different sections and functionality within the application. If an interactive section does not respond correctly or does not display its expected content, users may be unable to access available functionality.

During testing, an issue was observed in the Japanese Amazon application where the Settings section changed its arrow direction but did not display the expected settings content or navigate to the expected page.

## Risk Selection Summary

These journeys were selected because they cover core account, purchasing, navigation, and mobile functionality. They also provide opportunities to test both expected user behavior and realistic negative or edge-case scenarios.
