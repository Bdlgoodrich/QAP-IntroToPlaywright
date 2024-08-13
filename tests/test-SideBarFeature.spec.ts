import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/Inventory-Page';
import { LoginPage } from './pageObjects/Login-Page';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon-Page';

test('loginValidUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.verifyTitle();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  const sideBar = new SideBarAndCartIcon(page);

  await inventoryPage.clickOnBackpackTitle();
  await sideBar.openSideBar();
  await sideBar.sideBarGotoAllItems();
  await inventoryPage.verifyTitle();

  await inventoryPage.clickOnBackpackTitle();
  await sideBar.openSideBar();
  await sideBar.sideBarGotoAbout();
  await sideBar.verifyAboutPageTitle();

  await inventoryPage.addBackpackToCart();
  await inventoryPage.sortItems('lohi');
  await sideBar.sideBarReset();
  await sideBar.verifyReset();

  await inventoryPage.gotoInventoryPage();
  await sideBar.openSideBar();
  await sideBar.sideBarLogout();
  await loginPage.verifyTitle();
  await inventoryPage.gotoInventoryPage();
  
});