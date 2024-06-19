import {type Page, expect } from '@playwright/test';
import {InventoryPage} from './InventoryPage'

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

    async sideBarGotoAllItems(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="inventory-sidebar-link"]').click();
    }
    async sideBarGotoAbout(): Promise<void> {
        this.openSideBar();
        await this.page.locator('[data-test="about-sidebar-link"]').click();
    }
    async sideBarLogout(): Promise<void> {
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

    async verifyReset():Promise<void> {
        this.verifyCartItemNumber(0);
        const inventoryPage = new InventoryPage(this.page);
        inventoryPage.verifyBackpackAddItemButtonIsVisible();
        inventoryPage.verifySorted('AtoZ');
      }

}