import {type Page, expect } from '@playwright/test';

export class ProductPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async verifyAddToCartButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
    }
    async verifyRemoveButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="remove"]')).toBeVisible();
    }

    async clickAddToCartButton(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart"]').click();
    }
    async clickRemoveButton(): Promise<void>{
        await this.page.locator('[data-test="remove"]').click();
    }

    async clickBackToProducts(): Promise<void> {
        await this.page.locator('[data-test="back-to-products"]').click();
    }
}

