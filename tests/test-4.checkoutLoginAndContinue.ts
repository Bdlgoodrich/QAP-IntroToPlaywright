import { test, expect } from '@playwright/test';

test('checkoutLogin', async ({ page }) => {
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('First');
await page.locator('[data-test="lastName"]').click();
await page.locator('[data-test="lastName"]').fill('Last');
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill('99999');
await page.locator('[data-test="continue"]').click();
})