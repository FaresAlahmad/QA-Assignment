# QA Technical Assignment

## Project Overview

This repository contains my submission for the QA Technical Assignment, covering **manual testing, UI test automation, API testing, and an optional k6 performance-testing bonus**.

### Tools and Technologies

| Area                        | Tool / Technology                                     |
| --------------------------- | ----------------------------------------------------- |
| Manual Testing              | Linear                                                |
| UI Automation               | Playwright + TypeScript                               |
| API Testing                 | Postman                                               |
| Manual Testing Applications | Amazon website and Amazon Japanese mobile application |
| UI Automation Application   | SauceDemo / Swag Labs                                 |
| API Under Test              | DummyJSON E-commerce REST API                         |
| Performance Testing (Bonus) | k6                                                     |

The assignment focuses on practical QA activities including test design, functional and negative testing, exploratory testing, UI automation, API validation, defect reporting, test evidence, and professional documentation.

---

# Repository Structure

```text
QA-Assignment/
│
├── README.md
│
├── Linear/
│   ├── Documentation/
│   ├── FAR-5/
│   ├── FAR-6/
│   ├── FAR-7/
│   ├── FAR-8/
│   ├── FAR-9/
│   └── FAR-10/
│
├── qa-automation-assignment/
│   ├── tests/
│   │   └── helpers/
│   ├── playwright.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── test-results.png
│
└── Task-3-Postman/
    ├── Ecommerce API Project.postman_collection.json
    ├── Ecommerce API Project.postman_environment.json
    ├── API Test Failure Report.md
    └── postman-test-results.png
```

The `Linear` folder contains the manual testing documentation, reported issues, and supporting evidence.

The `qa-automation-assignment` folder contains the Playwright project, including the automated tests and reusable login helper.

The `Task-3-Postman` folder contains the Postman collection, environment, API test failure report, and final test result evidence.

The `Task-4-k6-Bonus` folder contains the k6 performance test script, the performance test report, and an exported execution summary.

Generated dependencies such as `node_modules` are not required for the repository because they can be recreated using `npm install`.

---

# Task 1 – Manual Testing

## Tool

**Linear**

## Applications Tested

* Amazon website
* Amazon Japanese mobile application

## Testing Approach

The manual testing combined functional and exploratory testing techniques to identify functional issues, validation weaknesses, unexpected behavior, navigation problems, and usability-related observations.

Testing included:

* Positive testing
* Negative testing
* Functional testing
* Exploratory testing
* Edge-case testing
* Smoke testing
* Sanity testing
* Regression considerations
* Scenario-based testing

## Key Areas Tested

The manual testing covered areas including:

* Login and account-related flows
* Input validation
* OTP-related behavior
* Checkout fields
* Navigation
* Mobile application settings
* Mobile application navigation items
* Existing-account behavior

## Documentation and Evidence

The `Linear` folder contains the testing documentation, reported issues, and supporting evidence.

The reported issues include reproducible information such as:

* Test scenario
* Steps and conditions
* Expected behavior
* Actual behavior
* Severity / priority where applicable
* Supporting evidence

The Linear project was used to organize and track the identified findings.

## Manual Testing Access

The complete manual testing work is available in the `Linear` folder and through the Linear project linked below.

---

# Task 2 – UI Test Automation

## Tools and Technologies

* Playwright
* TypeScript
* Node.js
* npm

## Application Tested

**SauceDemo / Swag Labs**

## Test Coverage

A total of **18 automated tests** were implemented and executed successfully.

The tests cover:

* Valid login
* Invalid login
* Product sorting
* Adding products to the cart
* Removing products from the cart
* Cart validation
* Checkout validation
* Required checkout fields
* Order information

The tests were designed to be independent where possible and to verify actual application behavior through assertions.

## Reusable Login Helper

A reusable login helper is located at:

```text
qa-automation-assignment/
└── tests/
    └── helpers/
        └── login.ts
```

The helper centralizes the common login flow so that tests requiring authentication do not need to duplicate the same login steps.

## Setup Requirements

The following are required to run the Playwright tests:

* Node.js
* npm

## Installation

Navigate to the Playwright project:

```bash
cd qa-automation-assignment
```

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Run the Tests

Run the complete test suite:

```bash
npx playwright test
```

Run the tests with the browser visible:

```bash
npx playwright test --headed
```

Open the Playwright HTML report after a test run:

```bash
npx playwright show-report
```

## Final Result

**18 automated tests were implemented and executed successfully.**

## Evidence

The test result screenshot is located at:

```text
qa-automation-assignment/test-results.png
```

---

# Task 3 – API Testing

## Tool Selection

**Postman** was selected for API testing because it provides a practical environment for creating and organizing API requests, managing environments and variables, chaining requests using saved values, and writing JavaScript-based assertions.

Postman also provides the Collection Runner, which allows the complete collection to be executed and the resulting test assertions to be reviewed together.

## API Tested

**DummyJSON E-commerce REST API**

The testing covered authentication, products, carts, pagination, negative scenarios, and request workflows.

---

# Test Coverage

## Authentication

Tested scenarios include:

* Successful authentication
* Invalid authentication
* Token handling
* Authenticated requests
* Invalid token behavior
* Authenticated user requests

The saved authentication token is used by authenticated requests through the Postman environment.

## Products

Tested scenarios include:

* Retrieve products
* Retrieve a product by ID
* Product search
* Product categories
* Products by category
* Pagination
* Sorting
* Invalid product IDs
* Boundary values

## Carts

Tested scenarios include:

* Retrieve carts
* Retrieve a cart by user
* Add products to a cart
* Update cart quantities
* Invalid product data
* Invalid quantities
* Missing required product information

## Negative Testing

Negative scenarios included:

* Missing fields
* Null values
* Empty values
* Invalid IDs
* Invalid tokens
* Invalid values
* Negative quantities
* Pagination boundary values
* Invalid input types where applicable

The tests were designed to verify expected API behavior rather than simply checking whether a request returned a response.

---

# Postman Collection and Environment

The Postman files are located in:

```text
Task-3-Postman/
├── Ecommerce API Project.postman_collection.json
└── Ecommerce API Project.postman_environment.json
```

## Importing the Collection

1. Open Postman.
2. Select **Import**.
3. Import the following collection:

```text
Ecommerce API Project.postman_collection.json
```

4. Import the environment:

```text
Ecommerce API Project.postman_environment.json
```

5. Select the imported environment in Postman.

## Running the Tests

Open the imported collection and use the **Postman Collection Runner** to execute the requests and assertions.

The environment contains the variables required by the collection, including the API base URL and values used during request chaining.

---

# Final API Test Results

The final Postman collection run produced:

* **92 assertions passed**
* **3 assertions failed**

The three failed assertions were investigated and documented rather than being hidden or weakened to produce an artificial all-pass result.

The detailed failure report is located at:

```text
Task-3-Postman/API Test Failure Report.md
```

The final test result screenshot is located at:

```text
Task-3-Postman/postman-test-results.png
```

---

# API Failed Results

The three failed assertions were related to validation of the product ID when adding products to a cart.

## 1. Missing Product ID

### Scenario

A `POST /carts/add` request was sent without providing the product ID.

### Expected Result

The API should reject the request with:

```text
400 Bad Request
```

### Actual Result

The API returned:

```text
201 Created
```

### Test Result

❌ Failed

### Observation

The API accepted the request even though the product ID was missing.

### Impact

Invalid cart data may be accepted instead of being rejected during input validation.

### Severity

**Medium**

---

## 2. Null Product ID

### Scenario

A `POST /carts/add` request was sent with the product ID set to `null`.

Example:

```json
{
  "id": null
}
```

### Expected Result

The API should reject the invalid product ID with:

```text
400 Bad Request
```

### Actual Result

The API returned:

```text
201 Created
```

### Test Result

❌ Failed

### Observation

The API accepted a `null` product ID instead of rejecting the invalid input.

### Impact

Invalid product identifiers may be accepted during cart processing.

### Severity

**Medium**

---

## 3. Empty Product ID

### Scenario

A `POST /carts/add` request was sent with an empty product ID value.

### Expected Result

The API should reject the empty product ID with:

```text
400 Bad Request
```

### Actual Result

The API returned:

```text
201 Created
```

### Test Result

❌ Failed

### Observation

The API accepted the empty product ID instead of rejecting the invalid input.

### Impact

Invalid product identifiers may be accepted during cart processing.

### Severity

**Medium**

---

## Overall Assessment of the Three Failures

The three negative test cases expected invalid or missing product IDs to be rejected with a `400 Bad Request` response.

Instead, all three requests received `201 Created`.

The assertions were intentionally kept unchanged. For example:

```javascript
pm.response.to.have.status(400);
```

The expected status was not changed to `201` simply to make the tests pass.

The failures therefore provide evidence that the actual API behavior did not match the validation behavior expected by these negative test scenarios.

A detailed version of this analysis is available in:

```text
Task-3-Postman/API Test Failure Report.md
```

---

# Known Limitations

## DummyJSON Simulated Writes

DummyJSON is a simulated API environment. Successful `POST` or `PUT` requests should not automatically be interpreted as proof that modified data has been permanently stored in a database.

Tests involving write operations therefore focus primarily on validating the returned response and API behavior.

## API Validation Behavior

Some invalid inputs were accepted by the simulated API. These cases were documented as API validation observations rather than being hidden or changed to produce passing assertions.

## Assignment Scope

Testing was limited to the scenarios and endpoints selected for this assignment. The testing was not intended to provide complete coverage of every possible API behavior.

---

# Task 4 – Basic Performance Testing (Optional Bonus)

## Tool

**k6 v2.2.0**

## Objective

A low-load performance smoke test was created for the DummyJSON e-commerce API. The goal was to demonstrate basic k6 usage, validate the endpoint response, and measure response times under a deliberately small load. This was not a stress test or capacity test.

## Endpoint Tested

`GET https://dummyjson.com/products?limit=10`

## Test Configuration

| Setting | Value |
|---|---|
| Virtual users (VUs) | 2 |
| Duration | 30 seconds |
| Request | `GET /products?limit=10` |
| Response-time threshold | p95 below 2,000 ms |
| HTTP request failure-rate threshold | Below 1% |

## Checks

Each response was checked for:

- HTTP status code is 200.
- Response time is below 2 seconds.
- Response contains a non-empty `products` array.

## Recorded Results

The recorded run produced the following results:

| Metric | Result |
|---|---:|
| HTTP requests | 52 |
| Checks passed | 156 / 156 |
| Checks failed | 0 |
| Average response time | 162.57 ms |
| Median response time | 146.47 ms |
| 95th-percentile response time (p95) | 159.79 ms |
| Maximum response time | 595.17 ms |
| HTTP request failure rate | 0% |
| Requests per second | 1.71 |
| Thresholds | Both passed |

## Files and Execution

The k6 files are located in `Task-4-k6-Bonus/`:

- `performance-test.js` — k6 test script.
- `performance-test-report.md` — test configuration, thresholds, results, observations, and limitations.
- `summary.json` — exported summary from the recorded execution.

To run the test from the bonus folder:

```bash
k6 run performance-test.js
```

To run the test and export a summary:

```bash
k6 run performance-test.js --summary-export=summary.json
```

## Observations and Limitations

The endpoint met the response-time and HTTP failure-rate thresholds defined for this low-load run. All checks passed. These results describe only this endpoint under the stated configuration; they do not establish how the API would perform under heavy traffic.

The test used 2 virtual users for 30 seconds and covered only the products-list endpoint. Results may vary between runs and with network conditions. A real performance-testing project would use agreed performance objectives, a baseline, representative endpoints and user journeys, gradually increased load in a controlled environment, and server-side monitoring.

---

# Final Results Summary

| Task   | Tool                    | Scope                  | Final Result                                   |
| ------ | ----------------------- | ---------------------- | ---------------------------------------------- |
| Task 1 | Linear                  | Manual testing         | Completed                                      |
| Task 2 | Playwright + TypeScript | UI automation          | **18 tests executed successfully**             |
| Task 3 | Postman                 | REST API testing       | **92 assertions passed / 3 assertions failed** |
| Bonus  | k6                      | Performance smoke test | **All checks and thresholds passed**           |

The three Task 3 failures are documented in the `API Test Failure Report.md` file.

---

# Resubmission Improvements

The following improvements were made based on the feedback received during the resubmission review:

* Strengthened test assertions so that each test verifies a specific expected result.
* Reviewed negative API tests to avoid accepting multiple outcomes without justification.
* Reviewed authentication handling and connected authenticated requests to the saved token.
* Added or updated invalid-token testing to use a clearly invalid token.
* Corrected the pagination expectation for `limit=0` based on DummyJSON behavior.
* Strengthened UI assertions to verify actual application behavior rather than relying only on headings or cart badges.
* Improved cart validation by checking the expected products.
* Improved checkout validation and verification.
* Reviewed sorting tests and their prerequisites.
* Added and reviewed negative test cases for missing, null, and empty product ID values.
* Investigated and documented the three failed API assertions.
* Organized the GitHub repository into clear task folders.
* Consolidated the documentation into one main README for the complete assignment.
* Removed unnecessary template content and duplicate documentation.
* Included relevant test result evidence.
* Reviewed the final repository, README, tests, evidence, and reported results for consistency.

---

# AI Usage

AI tools were used as a supporting resource during the assignment and resubmission process.

I used AI primarily for:

* Understanding QA, Playwright, and Postman concepts while learning the tools.
* Brainstorming additional test scenarios and negative test cases.
* Reviewing test assertions and identifying areas where tests could be strengthened.
* Getting guidance on organizing the automation project and reusable helper functions.
* Reviewing and improving the README and test documentation.
* Getting guidance on creating and documenting the basic k6 performance test.
* Reviewing the explanation and documentation of API test results and failures.
* Improving the clarity and structure of the final submission and email communication.

All tests and API requests were executed and verified by me. AI suggestions were reviewed against the actual application/API behavior and the assignment requirements before being used.

AI was used as a supporting tool rather than as a substitute for executing and verifying the tests.

---

# Submission Links

### GitHub Repository

https://github.com/FaresAlahmad/QA-Assignment

### Linear Project

https://linear.app/fares-alahmad/project/amazon-qa-testing-webmobileapp-d64886715807/overview

---

# Final Checklist

Before submitting the assignment, the following were reviewed:

* [x] Task 1 manual testing documentation included
* [x] Task 1 issues and supporting evidence included
* [x] Task 2 Playwright project included
* [x] Reusable login helper included
* [x] 18 UI automation tests completed
* [x] Task 2 test evidence included
* [x] Task 3 Postman collection included
* [x] Task 3 Postman environment included
* [x] Task 3 final test results included
* [x] Task 3 failures investigated and documented
* [x] Optional k6 performance test script included
* [x] k6 execution summary and performance report included
* [x] API validation observations documented
* [x] Known DummyJSON limitations documented
* [x] One main README provided for the complete assignment
* [x] Setup and execution instructions provided
* [x] AI usage documented
* [x] Repository structure documented

---

# Conclusion

This repository contains the complete QA Technical Assignment submission, including manual testing documentation, UI automation tests, API tests, the optional k6 performance-testing bonus, supporting evidence, and final test results.

The submission demonstrates practical QA skills in:

* Test design
* Functional testing
* Negative testing
* Exploratory testing
* UI automation
* API testing
* API validation
* Assertions
* Reusable automation components
* Defect and observation reporting
* Test evidence
* Documentation
* Test result analysis
* Basic performance testing with k6
* Professional QA reporting
