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
        await expect(this.page.locator('.title')).toContainText('Products');
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

    //sortBy must be 'az', 'za', 'hilo', 'lohi' 
    async sortItems(sortBy: string): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption(sortBy);
    }
    async verifySorted(sortBy: string): Promise<void> {
        if (sortBy == 'az') await expect(this.page.getByTestId('inventory_item_name').first()).toContainText('backpack');
        else if (sortBy == 'za') await expect(this.page.getByTestId('inventory_item_name').first()).toContainText(['Test.allTheThings', 'Red']);
        else if (sortBy == 'hilo') await expect(this.page.getByTestId('inventory_item_name').first()).toContainText('Fleece Jacket');
        else if (sortBy == 'lohi') await expect(this.page.getByTestId('inventory_item_name').first()).toContainText('Onesie');
        else {console.error("sortBy must be 'az', 'za', 'hilo', or 'lohi' ");
        }
    }

}