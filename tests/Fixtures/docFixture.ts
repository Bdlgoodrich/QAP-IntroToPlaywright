import { test as base } from '@playwright/test';

import { LoginPage } from '../pageObjects/Login-Page';
import { InventoryPage } from '../pageObjects/Inventory-Page';
import { ProductPage } from '../pageObjects/Product-Page';
import { SideBarAndCartIcon } from '../pageObjects/SideBarAndCartIcon-Page';
import { CartPage } from '../pageObjects/Cart-Page';
import { CheckoutLoginPage } from '../pageObjects/CheckoutLogin-Page';
import { CheckoutPage } from '../pageObjects/Checkout-Page';


// Declare the types of your fixtures.
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    backpackPage: ProductPage;
    sideBarAndCartIcon: SideBarAndCartIcon;
    cartPage: CartPage;
    checkoutLoginPage: CheckoutLoginPage;
    checkoutPage: CheckoutPage;
    auth: any;
};

// Extend base test by providing necessary pages and parameters.

export const test = base.extend<MyFixtures>({
    page: async ({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await use(page);
    },

    //Set the cookie for login authentication before each test
    auth: async ({ baseURL, page }, use) => {
        const cookie = {
            name: 'session-username',
            value: 'standard_user',
            url: baseURL,
        }

        await page.goto(baseURL)
        await page.context().addCookies([cookie])
        await page.goto('/inventory');

        //Use the fixture in the test
        await use({ page })
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    backpackPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    sideBarAndCartIcon: async ({ page }, use) => {
        await use(new SideBarAndCartIcon(page));
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);

        //clean up by removing all items from the cart
        await cartPage.removeAllItems();
    },

    checkoutLoginPage: async ({ page }, use) => {
        await use(new CheckoutLoginPage(page))
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },


});

//TODO removed expects from verify methods and chance to Promise: boolean in all pages

// Following line has been commented out because expect statements are currently incorporated into "verfy" methods
//export { expect } from '@playwright/test';