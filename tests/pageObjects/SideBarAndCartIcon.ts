import {type Page, expect } from '@playwright/test';

export class ProductPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async verifyCartItemNumber(expectedNum:Number): Promise<void> {
        if (expectedNum===0){
            await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
        }
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toContainText(expectedNum.toString());
    }
/*
    async goToCart(): Promise<CartPage> {
        return cartPage: Cartpage;
    }*/

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

    async verifyZtoASort(): Promise<void> {
        await this.page.locator('.data-test="inventory-item-name"'(0).
    }
        await page.locator('[data-test="item-0-img-link"]').click();
        await page.locator('[data-test="item-sauce-labs-bike-light-img"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();



}