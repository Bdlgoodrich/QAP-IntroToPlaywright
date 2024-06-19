import {type Page, Locator, expect } from '@playwright/test';


export class LoginPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://saucedemo.com')
    }

    async inputLoginInfoAndClickLogin(username: string, password: string): Promise<void> {
        await this.page.getByTestId('username').click();
        await this.page.getByTestId('username').fill(username);
        await this.page.getByTestId('password').click();      
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-button').click();
    }

    async verifyErrorMessageVisible(): Promise<void> {
        await expect(this.page.getByTestId('error')).toBeVisible();
    }

    async verifyTitle(): Promise<void> {
        expect(this.page.getByText('Swag Labs')).toBeTruthy();
        await expect(this.page.locator('.title')).toContainText('Swag Labs');
    }
}