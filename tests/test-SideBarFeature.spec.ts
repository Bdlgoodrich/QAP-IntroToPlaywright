import { test, expect } from './Fixtures/fullFixture';


test('sidebarOptions', async ({auth, sauce}) => {

  await sauce.inventoryPage.gotoBackpackPage();
  await sauce.sidebarAndCartIcon.openSideBar();
  await sauce.sidebarAndCartIcon.sideBarGotoAllItems();
  await sauce.inventoryPage.verifyTitle();

  await sauce.sidebarAndCartIcon.openSideBar();
  await sauce.sidebarAndCartIcon.sideBarGotoAbout();
  await sauce.sidebarAndCartIcon.verifyAboutPageTitle();

  await sauce.inventoryPage.addBackpackToCart();
  await sauce.inventoryPage.sortItems('lohi');
  await sauce.sidebarAndCartIcon.sideBarReset();
  await sauce.sidebarAndCartIcon.verifyReset();

  await sauce.sidebarAndCartIcon.openSideBar();
  await sauce.sidebarAndCartIcon.sideBarLogout();
  await sauce.loginPage.verifyTitle();
  await sauce.inventoryPage.gotoInventoryPage();
  await sauce.inventoryPage.verifyBlank();
  
});