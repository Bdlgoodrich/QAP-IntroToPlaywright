import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  //await page.goto('https://www.saucedemo.com/');
  loginPage.gotoLoginPage();
  await page.getByTestId('username').fill('locked_out_user');
  //await page.locator('[data-test="username"]').press('Tab');
  //await page.locator('[data-test="password"]').fill('secret_sauce');
  //await page.locator('[data-test="login-button"]').click();
  loginPage.inputLoginInfoAndClickLogin('locked_out_user', 'secret_sauce');
});