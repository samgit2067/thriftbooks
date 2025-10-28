import {} from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutButton = page.getByText('Proceed to Checkout').nth(1);
    this.googlePayButton = page.locator('#gpay-button-online-api-id'); 
    this.firstNameInput = page.locator('#firstName'); 
    this.lastNameInput = page.locator('#lastName'); 
    this.addressInput = page.locator('#addressLine1'); 
    this.cityInput = page.locator('#city'); 
    this.stateDropdown = page.locator('#state');
    this.postalCodeInput = page.locator('#postalCode');
    this.continueToPaymentButton = page.locator('button.Button:has-text("Continue to Payment")');

  }

  async fillShippingAddress(firstName, lastName, address, city, state, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.addressInput.fill(address);
    await this.page.keyboard.press('tab');
    await this.cityInput.fill(city);
    await this.stateDropdown.click();
    await this.stateDropdown.fill(state);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToPayment() {
    await this.continueToPaymentButton.click();
  }
};