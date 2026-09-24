import { test, expect } from '@playwright/test';
import { login } from './helpers/login';

test('Checkout order information test', async ({ page }) => {

    await login(page);

    // Add a specific product
    const bikeLight = page.locator('.inventory_item').filter({
        hasText: 'Sauce Labs Bike Light'
    });

    await bikeLight.getByRole('button', { name: 'Add to cart' }).click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Verify the correct product is in the cart
    const cartItem = page.locator('.cart_item').filter({
        hasText: 'Sauce Labs Bike Light'
    });

    await expect(cartItem).toBeVisible();

    // Go to checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    await page.getByPlaceholder('First Name').fill('Fares');
    await page.getByPlaceholder('Last Name').fill('Alahmad');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');

    await page.getByRole('button', { name: 'Continue' }).click();

    // Verify checkout overview
    await expect(page.getByText('Checkout: Overview')).toBeVisible();

    // Verify the correct product is shown in the order
    await expect(
        page.locator('.cart_item').filter({
            hasText: 'Sauce Labs Bike Light'
        })
    ).toBeVisible();

    // Get item price
    const itemPriceText = await page.locator('.inventory_item_price').textContent();
    const itemPrice = parseFloat(itemPriceText!.replace('$', ''));

    // Get subtotal
    const subtotalText = await page.locator('.summary_subtotal_label').textContent();
    const subtotal = parseFloat(subtotalText!.replace('Item total: $', ''));

    // Get tax
    const taxText = await page.locator('.summary_tax_label').textContent();
    const tax = parseFloat(taxText!.replace('Tax: $', ''));

    // Get final total
    const totalText = await page.locator('.summary_total_label').textContent();
    const total = parseFloat(totalText!.replace('Total: $', ''));

    // Verify subtotal calculation
    expect(subtotal).toBe(itemPrice);

    // Verify total calculation
    expect(total).toBeCloseTo(subtotal + tax, 2);

    // Finish order
    await page.getByRole('button', { name: 'Finish' }).click();

    // Verify successful order
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});