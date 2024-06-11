import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('[data-test="cart-list"]')).toContainText('$29.99');
    await expect(page.locator('[data-test="cart-list"]')).toContainText('$15.99');
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText('$45.98');
    await page.locator('[data-test="finish"]').click();
});