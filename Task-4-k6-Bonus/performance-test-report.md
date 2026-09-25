# k6 Performance Test Report

## 1. Overview

This test evaluates the basic performance and responsiveness of the DummyJSON products endpoint using k6.

**Endpoint:** `GET https://dummyjson.com/products?limit=10`

**Tool:** k6 v2.2.0

## 2. Test Objective

The objective was to perform a low-load performance test, verify that the endpoint returns valid responses, and check whether response times remain within the defined thresholds.

This is a basic performance smoke test, not a stress test or capacity test.

## 3. Test Configuration

| Setting                     | Value              |
| --------------------------- | ------------------ |
| Virtual users (VUs)         | 2                  |
| Duration                    | 30 seconds         |
| Request method              | GET                |
| Products requested          | 10                 |
| Response-time threshold     | p95 below 2,000 ms |
| HTTP failure-rate threshold | Below 1%           |

## 4. Checks

Each response was checked for:

* HTTP status code is 200.
* Response time is below 2 seconds.
* Response contains a non-empty products array.

## 5. Results

| Metric                              |    Result |
| ----------------------------------- | --------: |
| HTTP requests                       |        52 |
| Checks passed                       | 156 / 156 |
| Checks failed                       |         0 |
| Average response time               | 162.57 ms |
| Median response time                | 146.47 ms |
| 95th-percentile response time (p95) | 159.79 ms |
| Maximum response time               | 595.17 ms |
| HTTP request failure rate           |        0% |
| Requests per second                 |      1.71 |

**Thresholds:** Both configured thresholds passed.

## 6. Observations

The endpoint returned successful responses during this test. All 156 checks passed, and the measured p95 response time was below the configured 2,000 ms threshold.

The HTTP request failure rate was 0% during this run.

These results describe the endpoint's behavior under this specific low-load test configuration. They do not establish how it would perform under heavy traffic.

## 7. Limitations and Further Testing

* The test used only 2 virtual users for 30 seconds.
* Only the products-list endpoint was tested.
* Results may vary between runs and with network conditions.
* This test does not determine the API's maximum capacity.

For a real performance-testing project, I would first establish performance requirements and a baseline, then test representative endpoints and realistic user journeys. I would increase the load gradually in a controlled environment, monitor server-side resources, and compare results against agreed service-level objectives.

## 8. Conclusion

The DummyJSON products endpoint met the response-time and HTTP failure-rate thresholds defined for this low-load performance smoke test. All checks passed during the recorded run.
