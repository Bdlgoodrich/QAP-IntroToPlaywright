import { test, expect } from '@playwright/test';

test('add2ItemsToCart', async ({ page }) => {
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

}

);