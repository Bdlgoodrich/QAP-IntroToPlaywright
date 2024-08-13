import { test, /*expect*/ } from './Fixtures/docFixture';

test('verifyAddAndRemoveItemsFromInventoryPage', async ({ auth, page, inventoryPage, sideBarAndCartIcon, cartPage,}) => {

  //verify on inventory page and cart shows empty
  await inventoryPage.verifyTitle();
  await sideBarAndCartIcon.verifyCartItemNumber(0);

  //add backpack to cart, verify button changes from "add" to "remove" and cart icon shows "1"
  await inventoryPage.verifyBackpackAddItemButtonIsVisible();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.verifyBackpackDeleteButtonIsVisible();
  await sideBarAndCartIcon.verifyCartItemNumber(1);

  //add bike light to cart, verify cart icon shows "2", remove backpack, verify button returns to "add" and cart shows 1
  await inventoryPage.addBikeLightToCart();
  await sideBarAndCartIcon.verifyCartItemNumber(2);
  await inventoryPage.removeBackpackFromCart();
  await inventoryPage.verifyBackpackAddItemButtonIsVisible();
  await sideBarAndCartIcon.verifyCartItemNumber(1);

  //readd back pack to cart
  await inventoryPage.addBackpackToCart();

  //verify both products are in the cart
  await cartPage.goToCartPage();
  await cartPage.verifyCartContainsBackpackAndBikeLight();
});

test('verifyAddAndRemoveFromProductPage', async ({ inventoryPage, backpackPage, sideBarAndCartIcon, cartPage, page, auth }) => {

    inventoryPage.gotoInventoryPage();

  //verify on inventory page and cart shows empty
  await inventoryPage.verifyTitle();
  await sideBarAndCartIcon.verifyCartItemNumber(0);

  await inventoryPage.addBikeLightToCart();
  await sideBarAndCartIcon.verifyCartItemNumber(1);

  //go to product page for backpack
  await inventoryPage.clickOnBackpackImage();

  //verify we're on the page for the correct item and the "add" button is visible, click the button
  await backpackPage.verifyCorrectItem('Backpack');
  await backpackPage.verifyAddToCartButtonIsVisible();
  await backpackPage.clickAddToCartButton();

  //verify that the "remove" button is now visible and the cart contains 2 items
  await backpackPage.verifyRemoveButtonIsVisible();
  await sideBarAndCartIcon.verifyCartItemNumber(2);

  //click remove button, verify "add" button is visible again and cart contains 1 item
  await backpackPage.clickRemoveButton();
  await backpackPage.verifyAddToCartButtonIsVisible();
  await sideBarAndCartIcon.verifyCartItemNumber(1);

  //click "back to products" button and verify the title matches the inventory page
  await backpackPage.clickBackToProducts();
  await inventoryPage.verifyTitle();

    //verify cart still contains bike light
    await cartPage.goToCartPage();
    await cartPage.verifyCartContainsBikeLight();
});