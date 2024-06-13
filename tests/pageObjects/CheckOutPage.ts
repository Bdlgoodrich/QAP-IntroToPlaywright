import {type Page, expect } from '@playwright/test';


export class CheckoutPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickCancelButton(): Promise<void> {
        await this.page.locator('[data-test="cancel"]').click();
    }
    async clickFinishButton(): Promise<void> {
        await this.page.locator('[data-test="finish"]').click();
    }

    async verifyHeaderTitle(){
        await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
    }

    async verifyThankYouText(): Promise<void> {
        await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    }

    async clickBackHomeButton(): Promise<void> {
        await this.page.locator('[data-test="back-to-products"]').click();
    }


    
}
