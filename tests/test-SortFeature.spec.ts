import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';

test('loginValidUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  inventoryPage.sortItems('za');
  inventoryPage.verifySorted('za');
  inventoryPage.sortItems('lohi');
  inventoryPage.verifySorted('lohi');
});
