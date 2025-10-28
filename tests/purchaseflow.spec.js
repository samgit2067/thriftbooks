import { test, expect } from '../pageobjects/fixtures';
import shippingAddressData from '../testdata/shipping-address.json' assert { type: 'json' };

test.beforeEach(async ({ page, basePage, loginPage, watchPage }) => {
    await page.goto('/');
    await basePage.loginBtn.click();
    await loginPage.login(process.env.THRIFTBOOKS_EMAIL, process.env.THRIFTBOOKS_PASSWORD);
    await expect(basePage.headerRewardsLink).toBeVisible();

    await watchPage.clearWatchlist();
    await page.goto('/');
});

test('Should add book to watchlist @smoke', async ({ watchPage }) => {
    await watchPage.addBookToWatchlist();
    await watchPage.myListsLink.click();
    
    await expect(watchPage.deleteBookButton).toBeVisible();
});

test('Should purchase a book @smoke', async ({ watchPage, checkoutPage}) => {
    await watchPage.addBookToWatchlist();
    await watchPage.myListsLink.click();
    await watchPage.addToCartButton.click();
    await watchPage.viewCartButton.click();

    await expect(checkoutPage.proceedToCheckoutButton).toBeVisible();
    await expect(checkoutPage.googlePayButton).toBeVisible();

    await checkoutPage.proceedToCheckoutButton.click();

    await checkoutPage.fillShippingAddress(
        shippingAddressData.firstName,
        shippingAddressData.lastName,
        shippingAddressData.address,
        shippingAddressData.city,
        shippingAddressData.state,
        shippingAddressData.postalCode
    );
    await checkoutPage.continueToPayment();
});

