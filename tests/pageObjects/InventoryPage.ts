import {type Page, expect } from '@playwright/test';


export class InventoryPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async gotoInventoryPage(): Promise<void> {
        await this.page.goto('saucedemo.com/inventory');
    }

    async verifyTitle(): Promise<void> {
        expect(this.page.locator('.title')).toContainText('Products');
    }
    async verifyHeaderTitle(): Promise<void> {
        await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
    }

    async addBackpackToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    async addBikeLightToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }
    async deleteBackpackFromCart(): Promise<void> {

        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }

    async verifyBackpackAddItemButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    }
    async verifyBackpackDeleteButtonIsVisible(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }

    async gotoBackpackPage(): Promise<void> {
        await this.page.locator('[class="inventory_item_img"][data-test="]').click();
    }

    //sortBy must be 'az', 'za', 'lohi', 'hilo' 
    async sortItems(sortBy): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption(sortBy);
    }
    async verifySorted(sortBy): Promise<void> {
        //await expect(this.page.locator('[class="inventory_item_img"][data-test="]')).toContainText('backpack');
    }

    /*
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
      //  await this.page.locator('.data-test="inventory-item-name"'(0).
    }
    */
}