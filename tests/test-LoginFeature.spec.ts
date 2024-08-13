
import { test, /*expect*/ } from './Fixtures/docFixture';

test('loginValidUser', async ({ loginPage, inventoryPage }) => {

  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  await inventoryPage.verifyTitle();
});

test('loginErrorUser', async ({ loginPage}) => {
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('error_user', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginLockedOutUser', async ({ loginPage }) => {

  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('locked_out_user', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginWrongPassword', async ({ loginPage }) => {

  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'wrong_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoPassword', async ({ loginPage }) => {
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', '');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoUserName', async ({ loginPage }) => {
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('', 'secret_sauce');
  await loginPage.verifyErrorMessageVisible();
});

test('loginNoUserNameAndNoPassword', async ({ loginPage }) => {
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('', '');
  await loginPage.verifyErrorMessageVisible();
});

test('loginProblemUser', async ({ loginPage , inventoryPage}) => {
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('problem_user', 'secret_sauce');
  await inventoryPage.verifyTitle();
});