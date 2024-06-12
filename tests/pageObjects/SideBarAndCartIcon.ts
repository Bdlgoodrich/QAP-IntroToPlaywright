import { Locator, type Page, expect, } from '@playwright/test';

export class ProductPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getCartItemNumber(): Promise<Number> {
        if (await this.page.locator('[data-test="shopping-cart-badge"]').isHidden()) return 1;
        return parseInt(await this.page.locator('[data-test="shopping-cart-badge"]').textContent());
    }

    async goToCart(): Promise<CartPage> {
        return cartPage: Cartpage;
    }

    async openSideBar(): Promise<void> {
        
    }


}