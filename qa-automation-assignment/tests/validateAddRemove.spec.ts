import { test, expect } from '@playwright/test';
import { login } from "./helpers/login";

test('Add, remove and validate cart products', async ({ page }) => {

    await login(page);

    const bikeLight = page.locator('.inventory_item').filter({
        hasText: 'Sauce Labs Bike Light'
    });

    const boltTShirt = page.locator('.inventory_item').filter({
        hasText: 'Sauce Labs Bolt T-Shirt'
    });

    // Add both products
    await bikeLight.getByRole('button', { name: 'Add to cart' }).click();
    await boltTShirt.getByRole('button', { name: 'Add to cart' }).click();

    // Open cart
    await page.getByRole('button', { name: /Cart/ }).click();

    // Verify both product titles
    await expect(
        page.locator('[data-test="inventory-item-name"]', {
        }).filter({ hasText: 'Sauce Labs Bike Light' })
    ).toBeVisible();

    await expect(
        page.locator('[data-test="inventory-item-name"]', {
        }).filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    ).toBeVisible();

    // Remove Bolt T-Shirt specifically
    const boltInCart = page.locator('.cart_item').filter({
        hasText: 'Sauce Labs Bolt T-Shirt'
    });

    await boltInCart.getByRole('button', { name: 'Remove' }).click();

    // Verify Bolt T-Shirt is gone
    await expect(
        page.locator('.cart_item').filter({
            hasText: 'Sauce Labs Bolt T-Shirt'
        })
    ).not.toBeVisible();

    // Verify Bike Light remains
    await expect(
        page.locator('.cart_item').filter({
            hasText: 'Sauce Labs Bike Light'
        })
    ).toBeVisible();

    // Verify exactly one product remains
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});