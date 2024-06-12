import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.getByText('Price (low to high)Name (A to').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.getByText('Price (high to low)Name (A to').click();
  await expect(page.locator('[data-test="secondary-header"] div')).toContainText('Price (high to low)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  await page.locator('[data-test="product-sort-container"]').selectOption('az');
});