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
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }
    async closeSideBar(): Promise<void> {
        await this.page.getByRole('button', { name: 'Close Menu' }).click();
    }

    async gotoSideBarAllItems(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="inventory-sidebar-link"]').click();
    }
    async gotoSideBarAbout(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="about-sidebar-link"]').click();
    }
    async gotoSideBarLogout(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
    async sideBarReset(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="reset-sidebar-link"]').click();
    }

    async sortAtoZ(): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
    }
    async sortZtoA(): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
    }
    async sortHightoLow(): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    }
    async sortLowtoHigh(): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    }

        await page.locator('[data-test="item-0-img-link"]').click();
        await page.locator('[data-test="item-sauce-labs-bike-light-img"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();

await expect(page.locator('[data-test="remove"]')).toBeVisible();
    


}