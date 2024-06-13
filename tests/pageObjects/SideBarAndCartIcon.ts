import {type Page, expect } from '@playwright/test';

export class SideBarAndCartIcon {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async gotoCart(): Promise<void> {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async verifyCartItemNumber(expectedNum:Number): Promise<void> {
        if (expectedNum===0){
            await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
        }
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toContainText(expectedNum.toString());
    }

    async openSideBar(): Promise<void> {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }
    async closeSideBar(): Promise<void> {
        await this.page.getByRole('button', { name: 'Close Menu' }).click();
    }

    async gotoSideBarAllItems(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="inventory-sidebar-link"]').click();
    }
    async gotoSideBarAbout(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="about-sidebar-link"]').click();
    }
    async gotoSideBarLogout(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
    async sideBarReset(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="reset-sidebar-link"]').click();
    }

    async verifyAboutPageTitle(): Promise<void> {
        await expect(this.page.title()).toContainEqual('Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing');
    }

}