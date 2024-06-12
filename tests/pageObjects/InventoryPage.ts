import {type Page, expect } from '@playwright/test';


export class ProductsPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async verifyTitle(): Promise<void> {
        expect(this.page.locator('.title')).toContainText('Inventory');
    }
    async verifyHeaderTitle(): Promise<void> {
        await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
    }



    async addBackpackToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async deleteBackpackFromCart(): Promise<void> {

        await this.page.locator('[data-test="remove-sauce-labs-backpack]').click();
    }

    async verifyBackpackAddItemButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    }

    async verifyBackpackDeleteButtonIsVisible(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }

    async addBikeLightToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    async sortItems(sortBy): Promise<void>{
        await this.page.locator('[data-test="product-sort-container"]').selectOption(sortBy);

    }
}
/*

await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
await expect(page.getByText('$29.99')).toBeVisible();
await page.locator('[data-test="item-4-title-link"]').click();


await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();


await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();

page.locator('[class="inventory_item_img"][data-test="]

}*/