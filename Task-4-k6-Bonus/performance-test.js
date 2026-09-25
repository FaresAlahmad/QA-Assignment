import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 2,
  duration: '30s',

  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const response = http.get(
    'https://dummyjson.com/products?limit=10'
  );

  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time is below 2 seconds': (r) => r.timings.duration < 2000,
    'response contains products': (r) => {
      const body = r.json();
      return Array.isArray(body.products) && body.products.length > 0;
    },
  });

  sleep(1);
}