# API Test Failure Report

## Invalid Product ID Validation

### Summary

During negative testing of the DummyJSON Cart API, three test cases were designed to verify that invalid or missing product IDs are rejected with a `400 Bad Request` response.

All three tests failed because the API returned `201 Created` instead of the expected `400 Bad Request`.

The tests were kept unchanged because changing the expected status code from `400` to `201` would hide the validation behavior being tested.

---

### Test Case 1 – Missing Product ID

**Request:**
`POST /carts/add`

A cart item was submitted without providing the required product ID.

**Expected Behavior:**
The API should reject the request and return:

`400 Bad Request`

**Actual Response:**
The API returned:

`201 Created`

**Test Result:**
❌ Failed

**Observation:**
The API accepted the request even though the product ID was missing.

---

### Test Case 2 – Null Product ID

**Request:**
`POST /carts/add`

The product ID was explicitly provided as:

```json
{
  "id": null
}
```

**Expected Behavior:**
The API should reject the invalid `null` product ID and return:

`400 Bad Request`

**Actual Response:**
The API returned:

`201 Created`

**Test Result:**
❌ Failed

**Observation:**
The API accepted a `null` product ID instead of rejecting the invalid input.

---

### Test Case 3 – Empty Product ID

**Request:**
`POST /carts/add`

An empty product ID value was submitted.

**Expected Behavior:**
The API should reject the empty product ID and return:

`400 Bad Request`

**Actual Response:**
The API returned:

`201 Created`

**Test Result:**
❌ Failed

**Observation:**
The API accepted the empty product ID instead of rejecting the invalid input.

---

## Impact

Accepting missing, `null`, or empty product IDs may allow invalid product references to be processed by the cart endpoint.

This could result in invalid cart data and unexpected behavior for consumers of the API.

**Severity:** Medium

---

## Assessment

These failures were not caused by weakening or removing the test assertions. The assertions correctly checked the expected negative behavior:

```javascript
pm.response.to.have.status(400);
```

The failures indicate that the actual API response did not match the validation behavior expected by these negative test scenarios.

The tests have therefore been retained and the behavior has been documented rather than changing the assertions simply to produce passing results.

---

## Final Postman Results

The final Postman collection run produced:

* **92 assertions passed**
* **3 assertions failed**

The three failed assertions correspond to the missing, null, and empty product ID validation scenarios documented above.

These results are included intentionally to provide an accurate representation of the API test execution.
