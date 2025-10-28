import { test as base, expect } from "@playwright/test";
import { BasePage } from "./base.page.js";
import { LoginPage } from "./login.page.js";
import { WatchPage } from "./watch.page.js";
import { CheckoutPage } from "./checkout.page.js";

export const test = base.extend({
  page: async ({ page }, use) => {
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);
    await use(page);
  },

  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  watchPage: async ({ page }, use) => {
    const watchPage = new WatchPage(page);
    await use(watchPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export { expect };