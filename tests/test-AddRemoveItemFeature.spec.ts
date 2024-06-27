import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';
import { ProductPage } from './pageObjects/ProductPage';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon';
import { CartPage } from './pageObjects/CartPage';

test('verifyAddAndRemoveItemsFromInventoryPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.verifyTitle();
    await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.verifyTitle();
    await inventoryPage.verifyHeaderTitle();
    const cartIcon = new SideBarAndCartIcon(page);
    await cartIcon.verifyCartItemNumber(0);
    await inventoryPage.verifyBackpackAddItemButtonIsVisible();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyBackpackDeleteButtonIsVisible();
    await cartIcon.verifyCartItemNumber(1);
    await inventoryPage.addBikeLightToCart();
    await cartIcon.verifyCartItemNumber(2);
    await inventoryPage.deleteBackpackFromCart();
    await inventoryPage.verifyBackpackAddItemButtonIsVisible();
    await cartIcon.verifyCartItemNumber(1);
    await inventoryPage.addBackpackToCart();
    const cartPage = new CartPage (page);
    cartPage.verifyCartContainsBackpackAndBikeLight();
  });

test('verifyAddAndRemoveFromProductPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.verifyTitle();
    await loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
    const inventoryPage = new InventoryPage(page);
    const cartIcon = new SideBarAndCartIcon(page);
    await cartIcon.verifyCartItemNumber(0);
    await inventoryPage.addBikeLightToCart();
    await cartIcon.verifyCartItemNumber(1);
    await inventoryPage.gotoBackpackPage();
    const backpackPage = new ProductPage(page);
    await backpackPage.verifyAddToCartButtonIsVisible();
    await backpackPage.clickAddToCartButton();
    await backpackPage.verifyRemoveButtonIsVisible();
    await cartIcon.verifyCartItemNumber(2);
    await backpackPage.clickRemoveButton();
    await backpackPage.verifyAddToCartButtonIsVisible();
    await cartIcon.verifyCartItemNumber(1);
    await backpackPage.clickBackToProducts();
  });