import { Locator, type Page, expect } from '@playwright/test';

export class ProductPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async logout(): Promise<void> {
         this.page.locator('.title')
    }

    async verifyAddToCartIsVisible() : Promise<void> {
        await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
    }

    
}
/*test('ProductPageValidations', async ({ page }) => {
await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();


await page.locator('[data-test="add-to-cart"]').click();
await expect(page.locator('[data-test="remove"]')).toBeVisible();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');

await page.locator('[data-test="remove"]').click();
await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden;

await page.locator('[data-test="back-to-products"]').click();
}*/
