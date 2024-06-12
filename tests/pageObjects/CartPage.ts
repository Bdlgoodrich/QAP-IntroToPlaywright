import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('2');
await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
await page.locator('[data-test="continue-shopping"]').click();
}