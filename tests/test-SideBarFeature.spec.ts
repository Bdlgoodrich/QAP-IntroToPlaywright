import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon';

test('loginValidUser', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.verifyTitle();
  loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  const sideBar = new SideBarAndCartIcon(page);

  inventoryPage.gotoBackpackPage();
  sideBar.openSideBar();
  sideBar.sideBarGotoAllItems();
  inventoryPage.verifyTitle();

  inventoryPage.gotoBackpackPage();
  sideBar.openSideBar();
  sideBar.sideBarGotoAbout();
  sideBar.verifyAboutPageTitle();

  inventoryPage.addBackpackToCart();
  inventoryPage.sortItems('lohi');
  sideBar.sideBarReset();
  sideBar.verifyReset();

  inventoryPage.gotoInventoryPage();
  sideBar.openSideBar();
  sideBar.sideBarLogout();
  loginPage.verifyTitle();
  inventoryPage.gotoInventoryPage();
  
});