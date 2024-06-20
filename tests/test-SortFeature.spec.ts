import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';

test('verifySortFeature', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.verifySorted('az')
  await inventoryPage.sortItems('za');
  await inventoryPage.verifySorted('za');
  await inventoryPage.sortItems('lohi');
  await inventoryPage.verifySorted('lohi');
});
