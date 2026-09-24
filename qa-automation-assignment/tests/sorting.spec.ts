import { expect, test } from "@playwright/test";
import { login } from "./helpers/login";

test('Sorting test', async ({ page }) => {

    await login(page);

    await page.getByLabel('Sort products').selectOption('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();

    // Make sure enough products are available before comparing
    expect(prices.length).toBeGreaterThan(1);

    const numbers = prices.map(price =>
        parseFloat(price.replace('$', ''))
    );

    // Verify prices are sorted from low to high
    for (let i = 0; i < numbers.length - 1; i++) {
        expect(numbers[i]).toBeLessThanOrEqual(numbers[i + 1]);
    }

});