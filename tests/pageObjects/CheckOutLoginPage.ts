import { Page, expect } from '@playwright/test';

export class CheckoutLoginPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async inputLoginInfo(): Promise<void> {
        await this.page.locator('[data-test="firstName"]').fill('First');
        await this.page.locator('[data-test="lastName"]').fill('Last');
        await this.page.locator('[data-test="postalCode"]').fill('99999');
    }

    async clickContinueButton(): Promise<void> {
        await this.page.locator('[data-test="cancel"]').click();
    }

    async clickCancelButton(): Promise<void> {
        await this.page.locator('[data-test="continue"]').click();
    }

    async verifyCheckoutInfo(): Promise<void> {
        await expect(this.page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
        await expect(this.page.locator('[data-test="cart-list"]')).toContainText('$29.99');
        await expect(this.page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
        await expect(this.page.locator('[data-test="cart-list"]')).toContainText('$9.99');
        await expect(this.page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
        await expect(this.page.locator('[data-test="shipping-info-value"]')).toContainText('Free Pony Express Delivery!');
        await expect(this.page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $39.98');
    }

}