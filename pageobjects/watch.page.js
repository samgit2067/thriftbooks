import {} from '@playwright/test';

export class WatchPage {
  constructor(page) {
    this.page = page;
    this.myListsLink = page.locator('.wishlist-heart a.header-icon-link:has-text("My Lists")');
    this.deleteBookButton = page.locator('button.ListFlatButtonModal[aria-label^="Delete"]');
    this.deleteItemButton = page.locator('button:has-text("Delete Item")');
    this.addToCartButton = page.locator('button[aria-label^="Add"][aria-label$="to cart"]');
    this.viewCartButton = page.getByRole('link', { name: 'View Cart & Checkout' }); 
  }

  async clearWatchlist() {
    await this.myListsLink.click();

    if (await this.deleteBookButton.isVisible()) {
      await this.deleteBookButton.click();
      await this.deleteItemButton.click();
    } else {
      console.log('Watchlist is already empty');
    }
  }
  
  async addBookToWatchlist() { 
    await this.page.goto('/b/kids-summer-book-fair/');
    const firstBook = this.page.locator('.LandingPage-bookCard').first(); 
    await firstBook.click();
    const addToWishListButton = this.page.getByRole('button', { name: 'Add to Wish List' });
    await addToWishListButton.click();
  }
};