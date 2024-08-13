import { Page, expect } from '@playwright/test';

export class CartPage {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async goToCartPage(): Promise<void> {
        await this.page.goto('/cart');
    }

    async verifyHeaderTitle(): Promise<void> {
        await expect(this.page.getByText('Your Cart')).toBeVisible();
    }

    async verifyCartContainsBikeLight() {
        await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
      }

    //verify title links are visible for both products
    async verifyCartContainsBackpackAndBikeLight(): Promise<void> {
        await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();

    }

    async clickBackpackName(): Promise<void> {
        await this.page.locator('[data-test="item-4-title-link"]').click();
    }

    async removeBikeLight(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    }

    //verify "item removed" message is present
    async verifyItemRemoved(): Promise<void> {
        await expect(this.page.locator('.removed_cart_item')).toBeTruthy();
    }

    async clickContinueShoppingButton(): Promise<void> {
        await this.page.locator('[data-test="continue-shopping"]').click();
    }
    async clickCheckoutButton(): Promise<void> {
        await this.page.locator('[data-test="checkout"]').click();
    }


    //TODO modifg this to check for all/any items
    async removeAllItems(): Promise<void> {
        if (await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').isVisible())
            await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

        if (await this.page.locator('[data-test="remove-sauce-labs-backpack"]').isVisible())
            await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    }

}