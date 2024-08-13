import { test } from "./Fixtures/docFixture";

test('sidebarOptions', async ({ auth, page, inventoryPage, sideBarAndCartIcon, loginPage }) => {
  await inventoryPage.clickOnBackpackTitle();
  await sideBar.openSideBar();
  await sideBar.sideBarGotoAllItems();
  await inventoryPage.verifyTitle();

  await inventoryPage.clickOnBackpackTitle();
  await sideBar.openSideBar();
  await sideBar.sideBarGotoAbout();
  await sideBar.verifyAboutPageTitle();
};

test('sidebarOptions', async ({ auth, page, inventoryPage, sideBarAndCartIcon, loginPage }) => {

  await inventoryPage.clickOnBackpackImage();
  await sideBarAndCartIcon.openSideBar();
  await sideBarAndCartIcon.sideBarGotoAllItems();
  await inventoryPage.verifyTitle();

  await sideBarAndCartIcon.openSideBar();
  await sideBarAndCartIcon.sideBarGotoAbout();
  await sideBarAndCartIcon.verifyAboutPageTitle();

  await inventoryPage.addBackpackToCart();
  await inventoryPage.sortItems('lohi');
  await sideBarAndCartIcon.sideBarReset();
  await sideBarAndCartIcon.verifyReset();

  await sideBarAndCartIcon.openSideBar();
  await sideBarAndCartIcon.sideBarLogout();
  await loginPage.verifyTitle();
  await inventoryPage.gotoInventoryPage();
  await inventoryPage.verifyBlank();

});