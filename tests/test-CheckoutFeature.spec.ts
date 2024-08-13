
import { test, } from './Fixtures/docFixture';

test('AddItemsAndCheckout', async ({ auth, inventoryPage, sideBarAndCartIcon, cartPage, checkoutLoginPage, checkoutPage}) => {
  await inventoryPage.gotoInventoryPage();
  await inventoryPage.addBackpackToCart();
  await sideBarAndCartIcon.clickCartIcon();
  await cartPage.verifyHeaderTitle();
  await cartPage.clickContinueShoppingButton();
  await inventoryPage.verifyTitle();
  await inventoryPage.addBikeLightToCart();
  await sideBarAndCartIcon.clickCartIcon();
  await cartPage.verifyCartContainsBackpackAndBikeLight();


  //click checkout and cancel
  await cartPage.clickCheckoutButton();
  await checkoutLoginPage.clickCancelButton();
  await cartPage.verifyHeaderTitle();

  //click checkout, input info, continue, then cancel
  await cartPage.clickCheckoutButton();
  await checkoutLoginPage.inputLoginInfo();
  await checkoutLoginPage.clickContinueButton();
  await checkoutPage.verifyHeaderTitle();
  await checkoutPage.clickCancelButton();
  await inventoryPage.verifyTitle();

  await checkoutLoginPage.goToCheckoutLoginPage();
  await checkoutLoginPage.inputLoginInfo();
  await checkoutLoginPage.clickContinueButton();
  await checkoutPage.verifyHeaderTitle();
  await checkoutPage.clickFinishButton();
  await checkoutPage.verifyThankYouText();
  await checkoutPage.clickBackHomeButton();
  await inventoryPage.verifyTitle();

});