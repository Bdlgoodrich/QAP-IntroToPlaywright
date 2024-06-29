import { test, expect } from './Fixtures/fullFixture'

test('loginValidUser', async ({ sauce }) => {

  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  await sauce.inventoryPage.verifyTitle();
});

test('loginErrorUser', async ({ sauce}) => {

  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginLockedOutUser', async ({ sauce }) => {

  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('locked_out_user', 'secret_sauce');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginWrongPassword', async ({ sauce }) => {

  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('standard_user', 'wrong_sauce');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginNoPassword', async ({ sauce }) => {
  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('standard_user', '');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginNoUserName', async ({ sauce }) => {
  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('', 'secret_sauce');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginNoUserNameAndNoPassword', async ({ sauce }) => {
  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('', '');
  await sauce.loginPage.verifyErrorMessageVisible();
});

test('loginProblemUser', async ({ sauce }) => {
  await sauce.loginPage.gotoLoginPage();
  await sauce.loginPage.verifyTitle();
  await sauce.loginPage.inputLoginInfoAndClickLogin('problem_user', 'secret_sauce');
  await sauce.inventoryPage.verifyTitle();
});