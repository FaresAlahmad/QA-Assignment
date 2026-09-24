import { expect, test } from "@playwright/test";
import { login } from "./helpers/login";

test('Login Test', async ({ page }) => {

    await login(page);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

});