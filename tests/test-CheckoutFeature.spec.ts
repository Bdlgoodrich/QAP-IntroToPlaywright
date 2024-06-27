import { test, } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';
import { CartPage } from './pageObjects/CartPage';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon';
import { CheckoutLoginPage } from './pageObjects/CheckOutLoginPage';
import { CheckoutPage } from './pageObjects/CheckOutPage';

test('AddItemsAndCheckout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addBackpackToCart();
  const cartIcon = new SideBarAndCartIcon(page);
  await cartIcon.gotoCart();

  const cartPage = new CartPage(page);
  await cartPage.verifyHeaderTitle();
  await cartPage.clickContinueShoppingButton();
  await inventoryPage.verifyTitle();
  await inventoryPage.addBikeLightToCart();
  await cartIcon.gotoCart();
  await cartPage.clickCheckoutButton();

  const checkoutLoginPage = new CheckoutLoginPage(page);
  await checkoutLoginPage.clickCancelButton();
  await cartPage.verifyHeaderTitle();
  await cartPage.clickCheckoutButton();

  await checkoutLoginPage.inputLoginInfo();
  await checkoutLoginPage.clickContinueButton();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.verifyHeaderTitle();
  await checkoutPage.clickCancelButton();
  await inventoryPage.verifyHeaderTitle();
  await cartIcon.gotoCart();
  await cartPage.clickCheckoutButton();

  await checkoutLoginPage.inputLoginInfo();
  await checkoutLoginPage.clickContinueButton();
  await checkoutPage.verifyHeaderTitle();

  await checkoutPage.clickCancelButton();
  await inventoryPage.verifyTitle();
  await cartIcon.gotoCart();
  await cartPage.clickCheckoutButton();
  await checkoutLoginPage.inputLoginInfo();
  await checkoutLoginPage.clickContinueButton();
  await checkoutPage.clickFinishButton();
  await checkoutPage.verifyThankYouText();
  await checkoutPage.clickBackHomeButton();
  await inventoryPage.verifyTitle();

});