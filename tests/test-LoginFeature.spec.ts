import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';

test('loginValidUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.verifyTitle();
});

test('loginErrorUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginLockedOutUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('locked_out_user', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginWrongPassword', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'wrong_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoPassword', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', '');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoUserName', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoUserNameAndNoPassword', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('', '');
  await loginPage.verifyErrorMessageVisible();
});

test('loginProblemUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('problem_user', 'secret_sauce');
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.verifyTitle();
});