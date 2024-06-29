import {type Page, expect } from '@playwright/test';


export class InventoryPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async gotoInventoryPage(): Promise<void> {
        await this.page.goto('/inventory');
    }
    async gotoBackpackPage(): Promise<void> {
        await this.page.goto('/inventory-item.html?id=4');
    }

    async verifyTitle(): Promise<void> {
        expect(this.page.locator('.title')).toContainText('Products');
    }
    async verifyHeaderTitle(): Promise<void> {
        expect(this.page.locator('[data-test="title"]')).toContainText('Products');
    }
    async verifyBlank() {
        expect(this.page.getByText('Products')).toBeEmpty;
    }

    async addBackpackToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    async addBikeLightToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }
    async removeBackpackFromCart(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }

    async verifyBackpackAddItemButtonIsVisible(): Promise<void> {
        expect(this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    }
    async verifyBackpackDeleteButtonIsVisible(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }


    //sortBy must be 'az', 'za', 'hilo', 'lohi' 
    async sortItems(sortBy: string): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption(sortBy);
    }
    async verifySorted(sortBy: string): Promise<void> {
        if (sortBy == 'az') expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Backpack');
        else if (sortBy == 'za') expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Test.allTheThings');
        else if (sortBy == 'hilo') expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Fleece Jacket');
        else if (sortBy == 'lohi') expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Onesie');
        else {console.error("sortBy must be 'az', 'za', 'hilo', or 'lohi' ");
        }
    }

}