import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('loginValidUser', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  /*await expect(page.getByText('Swag Labs')).toBeTruthy();
  await page.getByTestId("username").click();
  await page.getByTestId("username").fill('test_user');
  await page.getByTestId('username').press('Tab');
  await page.locator('[data-test="password"]').fill('test_sauce');*/
  const loginPage = new LoginPage(page);
  //loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce');
  //await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('.title')).toContainText('Products');
});

test('loginErrorUser', async ({ page }) => {
  /*await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeTruthy();
  await page.getByTestId("username").click();
  await page.getByTestId("username").fill('test_user');
  await page.getByTestId('username').press('Tab');
  await page.locator('[data-test="password"]').fill('test_sauce');*/
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  loginPage.verifyErrorMessageVisible();
});