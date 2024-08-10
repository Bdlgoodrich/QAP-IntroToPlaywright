import { test as base } from '@playwright/test'


type Fixtures = {
    auth: any,
}

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<Fixtures>({
    // page => builtin page fixture from Playwright
    // use => builtin function from Playwright to use or "pass" the fixture to the test
    // workerInfo => builtin fixture from Playwright to get info from playwright.config.ts (and more)
    auth: async ({ page }, use/*data to pass to test*/, workerInfo) => {

        const BASE_URL = workerInfo.project.use.baseURL ?? "not set in project"

        await page.goto(BASE_URL)

        // 2. Use the fixture in the test
        await use({ page })
    },
})
