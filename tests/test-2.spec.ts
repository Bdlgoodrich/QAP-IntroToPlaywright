import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('loginErrorUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  //loginPage.verifyErrorMessageVisible();
});