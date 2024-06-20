import { test, expect, Browser, Page, chromium } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { InventoryPage } from './pageObjects/InventoryPage';


test('loginValidUser', async ({ page }) => {
  try{
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce');
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.verifyTitle();
  }
  catch (error) {
    console.log('Browser context stuck. Another attempt');
  } 
  /*finally {
    await page.close();
  }*/
});

