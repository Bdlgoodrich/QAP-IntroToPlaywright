import { Page, expect } from '@playwright/test';

export class CartPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async verifyHeaderTitle(): Promise<void> {
        await expect(this.page.getByText('Your Cart')).toBeVisible();
    }

    async verifyCartContainsBackpackAndBikeLight(): Promise<void> {
        await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
        await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    }

    async clickBackpackName(): Promise<void> {
        await this.page.locator('[data-test="item-4-title-link"]').click();
    }

    async removeBikeLight(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    }
    async verifyItemRemoved(): Promise<void> {
        await expect(this.page.locator('.removed_cart_item')).toBeTruthy();
    }

    async clickContinueShoppingButton(): Promise<void> {
        await this.page.locator('[data-test="continue-shopping"]').click();
    }
    async clickCheckoutButton(): Promise<void> {
        await this.page.locator('[data-test="checkout"]').click();
    }    

}