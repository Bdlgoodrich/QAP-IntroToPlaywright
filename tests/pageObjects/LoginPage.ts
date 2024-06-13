import {type Page, expect } from '@playwright/test';


export class LoginPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async gotoLoginPage(): Promise<LoginPage> {
        await this.page.goto('https://saucedemo.com')
        return this;
    }

    async inputLoginInfoAndClickLogin(username: string, password: string): Promise<void> {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login-button').click();
    }

    async logout(): Promise<void> {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('#logout_sidebar_link').click();
    }

    async verifyErrorMessageVisible(): Promise<void> {
        await expect(this.page.locator('#error')).toBeVisible();
    }

    async verifyTitle(): Promise<void> {
        await expect(this.page.locator('.title')).toContainText('Swag Labs');
    }
}