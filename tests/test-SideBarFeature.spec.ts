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
  sideBar.gotoSideBarAllItems();
  sideBar.verifyAboutPageTitle();
  inventoryPage.gotoInventoryPage();

  inventoryPage.gotoBackpackPage();
  sideBar.openSideBar();
  sideBar.gotoSideBarAllItems();
  inventoryPage.verifyTitle();

  sideBar.openSideBar();
  sideBar.gotoSideBarLogout();
  loginPage.verifyTitle();
});