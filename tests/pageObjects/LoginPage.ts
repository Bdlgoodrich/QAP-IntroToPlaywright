import { Locator, type Page } from '@playwright/test';


export class LoginPage {
    private readonly _page: Page

    constructor(page: Page) {
        this._page = page
    }

    async gotoLoginPage(): Promise<LoginPage> {
        await this._page.goto('https://saucedemo.com')
        return this
    }

    async inputLoginInfo(username: string, password: string): Promise<void> {
        await this._page.locator('#user-name').fill(username)
        await this._page.locator('#password').fill(password)
        await this._page.locator('#login-button').click()
    }

    async logout(): Promise<void> {
        await this._page.locator('#react-burger-menu-btn').click()
        await this._page.locator('#logout_sidebar_link').click()
    }

    error(): Locator {
        return this._page.locator('[data-test=error]')
    }
}/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
//go to inventory page
}*/