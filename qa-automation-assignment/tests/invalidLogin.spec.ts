import { expect, test } from "@playwright/test";

test('Invalid Login Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('sauce');
    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(
        'Username and password do not match any user in this service'
    );

});