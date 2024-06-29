import { test, expect } from './Fixtures/fullFixture';

test('verifyAddAndRemoveItemsFromInventoryPage', async ({ auth, sauce }) => {
    await sauce.inventoryPage.gotoInventoryPage();
    await sauce.inventoryPage.verifyTitle();
    await sauce.inventoryPage.verifyHeaderTitle();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(0);
    await sauce.inventoryPage.verifyBackpackAddItemButtonIsVisible();
    await sauce.inventoryPage.addBackpackToCart();
    await sauce.inventoryPage.verifyBackpackDeleteButtonIsVisible();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(1);
    await sauce.inventoryPage.addBikeLightToCart();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(2);
    await sauce.inventoryPage.removeBackpackFromCart();
    await sauce.inventoryPage.verifyBackpackAddItemButtonIsVisible();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(1);
    await sauce.inventoryPage.addBackpackToCart();
    await sauce.cartPage.verifyCartContainsBackpackAndBikeLight();
  });

test('verifyAddAndRemoveFromProductPage', async ({ auth, sauce }) => {
    await sauce.inventoryPage.gotoInventoryPage();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(0);
    await sauce.inventoryPage.addBikeLightToCart();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(1);
    
    await sauce.inventoryPage.gotoBackpackPage();
    await sauce.backpackPage.verifyAddToCartButtonIsVisible();
    await sauce.backpackPage.clickAddToCartButton();
    await sauce.backpackPage.verifyRemoveButtonIsVisible();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(2);
    await sauce.backpackPage.clickRemoveButton();
    await sauce.backpackPage.verifyAddToCartButtonIsVisible();
    await sauce.sidebarAndCartIcon.verifyCartItemNumber(1);
    await sauce.backpackPage.clickBackToProducts();
  });