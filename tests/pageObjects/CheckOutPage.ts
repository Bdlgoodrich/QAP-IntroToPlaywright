import {type Page, expect } from '@playwright/test';


export class CheckOutLoginPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickCancelButton(): Promise<void> {
        await this.page.locator('[data-test="continue"]').click();
    }
    async clickFinishButton(): Promise<void> {
        await this.page.locator('[data-test="finish"]').click();
    }
}

    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    await page.locator('[data-test="back-to-products"]').click();