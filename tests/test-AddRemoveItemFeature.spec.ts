import { test, expect } from '@playwright/test';
import { InventoryPage } from './pageObjects/InventoryPage';
import { LoginPage } from './pageObjects/LoginPage';
import { ProductPage } from './pageObjects/ProductPage';
import { SideBarAndCartIcon } from './pageObjects/SideBarAndCartIcon';

test('verifyAddAndRemoveItemsFromInventoryPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.gotoLoginPage();
    loginPage.verifyTitle();
    loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
    const inventoryPage = new InventoryPage(page);
    inventoryPage.verifyTitle();
    inventoryPage.verifyHeaderTitle
    const cartIcon = new SideBarAndCartIcon(page);
    cartIcon.verifyCartItemNumber(0);
    inventoryPage.verifyBackpackAddItemButtonIsVisible;
    inventoryPage.addBackpackToCart();
    inventoryPage.verifyBackpackDeleteButtonIsVisible;
    cartIcon.verifyCartItemNumber(1);
    inventoryPage.addBikeLightToCart();
    cartIcon.verifyCartItemNumber(2);
    inventoryPage.deleteBackpackFromCart();
    cartIcon.verifyCartItemNumber(1);
    inventoryPage.verifyBackpackAddItemButtonIsVisible;
  });

test('verifyAddAndRemoveFromProductPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.gotoLoginPage();
    loginPage.verifyTitle();
    loginPage.inputLoginInfoAndClickLogin('standard_user', 'secret_sauce')
    const inventoryPage = new InventoryPage(page);
    const cartIcon = new SideBarAndCartIcon(page);
    cartIcon.verifyCartItemNumber(0);
    inventoryPage.addBikeLightToCart();
    cartIcon.verifyCartItemNumber(1);
    inventoryPage.gotoBackpackPage();
    const backpackPage = new ProductPage(page);
    backpackPage.verifyAddToCartButtonIsVisible();
    backpackPage.clickAddToCartButton();
    backpackPage.verifyRemoveButtonIsVisible();
    cartIcon.verifyCartItemNumber(2);
    backpackPage.clickRemoveButton();
    backpackPage.verifyAddToCartButtonIsVisible();
    cartIcon.verifyCartItemNumber(1);
    backpackPage.clickBackToProducts();
  });