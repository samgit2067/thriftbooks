import { test, expect } from '../pageobjects/fixtures';
import userData from '../utils/userData.js';

test.beforeEach(async ({ page, context }) => {
    await page.goto('/');
    await context.clearCookies();
    await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
    });
    await page.goto('/');
});

test('Should be able to login with existing account @smoke', async ({ basePage, loginPage }) => {
    await basePage.loginBtn.click();
    await loginPage.login(process.env.THRIFTBOOKS_EMAIL, process.env.THRIFTBOOKS_PASSWORD);

    await expect(basePage.headerRewardsLink).toBeVisible();
});

test('Should be able to create a new account @smoke', async ({ basePage, loginPage }) => {
    await basePage.loginBtn.click();
    const user = userData.getUser();
    console.log('Generated test user:', user);
    await loginPage.createAccount(user.firstName, user.lastName, user.email, user.password);
    
    await expect(basePage.headerRewardsLink).toBeVisible();
});







