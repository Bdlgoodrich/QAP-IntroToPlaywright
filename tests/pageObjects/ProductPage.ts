import {type Page, expect } from '@playwright/test';

export class ProductPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async verifyTitle(): Promise<void> {
        expect(this.page.locator('.title')).toContainText('Swag Labs')
    }

    async verifyAddToCartButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
    }
    async verifyRemoveButtonIsVisible(): Promise<void> {
        await expect(this.page.locator('[data-test="remove"]')).toBeVisible();
    }

    async clickBackToProducts(): Promise<void> {
        await this.page.locator('[data-test="back-to-products"]').click();
    }
}
/*test('ProductPageValidations', async ({ page }) => {
await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();

        await page.locator('[data-test="continue-shopping"]').click();
await page.locator('[data-test="add-to-cart"]').click();

await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');

await page.locator('[data-test="remove"]').click();
await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden;


}*/
