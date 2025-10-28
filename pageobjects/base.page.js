import {} from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator('div.mb4.u-inline-block', { hasText: 'Log In' });
    this.headerRewardsLink = page.locator('a[href="/account/yourrewards/"] svg.header-user-star-icon');
  }
};