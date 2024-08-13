
import { test, } from '@playwright/test';
import { InventoryPage } from './pageObjects/Inventory-Page';
import { LoginPage } from './pageObjects/Login-Page';
import { CartPage } from './pageObjects/Cart-Page';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon-Page';
import { CheckoutLoginPage } from './pageObjects/CheckoutLogin-Page';
import { CheckoutPage } from './pageObjects/Checkout-Page';



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