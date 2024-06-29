import { test, } from './Fixtures/fullFixture';

test('AddItemsAndCheckout', async ({ auth, sauce }) => {
  await sauce.inventoryPage.gotoInventoryPage();
  await sauce.inventoryPage.addBackpackToCart();
  await sauce.sidebarAndCartIcon.clickCartIcon();
  await sauce.cartPage.verifyHeaderTitle();
  await sauce.cartPage.clickContinueShoppingButton();
  await sauce.inventoryPage.verifyTitle();
  await sauce.inventoryPage.addBikeLightToCart();
  await sauce.sidebarAndCartIcon.clickCartIcon();

  //click checkout and cancel
  await sauce.cartPage.clickCheckoutButton();
  await sauce.checkoutLoginPage.clickCancelButton();
  await sauce.cartPage.verifyHeaderTitle();

  //click checkout, input info, continue, then cancel
  await sauce.cartPage.clickCheckoutButton();
  await sauce.checkoutLoginPage.inputLoginInfo();
  await sauce.checkoutLoginPage.clickContinueButton();
  await sauce.checkoutPage.verifyHeaderTitle();
  await sauce.checkoutPage.clickCancelButton();
  await sauce.inventoryPage.verifyHeaderTitle();

  await sauce.cartPage.gotoCheckoutStep1();
  await sauce.checkoutLoginPage.inputLoginInfo();
  await sauce.checkoutLoginPage.clickContinueButton();
  await sauce.checkoutPage.verifyHeaderTitle();
  await sauce.checkoutPage.clickFinishButton();
  await sauce.checkoutPage.verifyThankYouText();
  await sauce.checkoutPage.clickBackHomeButton();
  await sauce.inventoryPage.verifyTitle();

});