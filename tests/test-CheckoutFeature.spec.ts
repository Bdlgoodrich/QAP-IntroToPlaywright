import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';
import { CartPage } from './pageObjects/CartPage';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon';
import { CheckoutLoginPage } from './pageObjects/CheckOutLoginPage';
import { CheckoutPage } from './pageObjects/CheckOutPage';

test('AddContAddCheckout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
  loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
  const inventoryPage = new InventoryPage(page);
  inventoryPage.addBackpackToCart();
  const cartIcon = new SideBarAndCartIcon(page);
  cartIcon.gotoCart();

  const cartPage = new CartPage(page);
  cartPage.verifyHeaderTitle();
  cartPage.clickContinueShoppingButton();
  inventoryPage.verifyTitle();
  inventoryPage.addBikeLightToCart();
  cartIcon.gotoCart();
  cartPage.clickCheckoutButton();

  const checkoutLoginPage = new CheckoutLoginPage(page);
  checkoutLoginPage.clickCancelButton();
  cartPage.verifyHeaderTitle();
  cartPage.clickCheckoutButton();

  checkoutLoginPage.inputLoginInfo();
  checkoutLoginPage.clickContinueButton();

  const checkoutPage = new CheckoutPage(page);
  checkoutPage.verifyHeaderTitle();
  checkoutPage.clickCancelButton();
  cartPage.verifyHeaderTitle();
  cartPage.clickCheckoutButton();

  checkoutLoginPage.inputLoginInfo();
  checkoutLoginPage.clickContinueButton();
  checkoutPage.verifyHeaderTitle();

  checkoutPage.clickCancelButton();
  inventoryPage.verifyTitle();
  cartIcon.gotoCart();
  cartPage.clickCheckoutButton();
  checkoutLoginPage.inputLoginInfo();
  checkoutLoginPage.clickContinueButton();
  checkoutPage.clickFinishButton();
  checkoutPage.verifyThankYouText();
  checkoutPage.clickBackHomeButton();
  inventoryPage.verifyTitle();


});