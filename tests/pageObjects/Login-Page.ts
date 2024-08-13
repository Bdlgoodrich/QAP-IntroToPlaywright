import {type Page, Locator, expect } from '@playwright/test';


export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error');
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://saucedemo.com')
    }

    async inputLoginInfoAndClickLogin(username: string, password: string): Promise<void> {  
        await this.usernameInput.fill(username);  
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyErrorMessageVisible(): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
    }

    async verifyTitle(): Promise<void> {
        await expect(this.page.getByText('Swag Labs')).toBeVisible();
    }
}