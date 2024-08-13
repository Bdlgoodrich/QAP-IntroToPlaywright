import { type Page, expect } from '@playwright/test';


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

    async addBackpackToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    async addBikeLightToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }
    async removeBackpackFromCart(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }
    async removeBikeLightFromCart(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    }

    async verifyBackpackAddItemButtonIsVisible(): Promise<void> {
        expect(this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    }
    async verifyBackpackDeleteButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    }

    async verifyBikeLightAddItemButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
    }
    async verifyBikeLightDeleteButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    }

    async clickOnBackpackImage(): Promise<void> {
        await this.page.locator('[class="inventory_item_img"][data-test="]').click();
    }

    //sortBy must be 'az', 'za', 'hilo', 'lohi' 
    async sortItems(sortBy: string): Promise<void> {
        await this.page.locator('[data-test="product-sort-container"]').selectOption(sortBy);
    }
    async verifySorted(sortBy: string): Promise<void> {
        if (sortBy == 'az') await expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Backpack');
        else if (sortBy == 'za') await expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Test.allTheThings');
        else if (sortBy == 'hilo') await expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Fleece Jacket');
        else if (sortBy == 'lohi') await expect(this.page.getByTestId('inventory-item-name').first()).toContainText('Onesie');
        else {
            console.error("sortBy must be 'az', 'za', 'hilo', or 'lohi' ");
        }
    }

    async verifyBlank(): Promise<void> {
        await expect(this.page.getByTitle.length === 0);
    }

    //TODO modify to check for any items in cart and remove all
    //currently checks for and removes only Backpack and Bike Light because those are all we currently test
    async removeAllItems(): Promise<void> {
        await this.gotoInventoryPage();
        if (this.verifyBackpackDeleteButtonIsVisible())
            await this.removeBackpackFromCart();
        if (this.verifyBikeLightDeleteButtonIsVisible)
            await this.removeBikeLightFromCart();
    }

}