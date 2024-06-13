import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';

test('loginValidUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  inventoryPage.verifyTitle();
});

test('loginErrorUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  loginPage.verifyErrorMessageVisible();
});

test('loginLockedOutUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('locked_out_user', 'secret_sauce');
  loginPage.verifyErrorMessageVisible();
});

test('loginProblemUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('problem_user', 'secret_sauce');
  loginPage.verifyErrorMessageVisible();
});