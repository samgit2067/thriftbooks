import {} from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#ExistingAccount_EmailAddress');
    this.passwordInput = page.locator('#ExistingAccount_Password');
    this.loginBtn = page.locator('input.Button[onclick*="LoginBox-submitButton--existingUser"]');
    this.createAccountLink = page.locator('#NewAccountLink');
    this.firstNameInput = page.locator('#NewAccount_FirstName'); 
    this.lastNameInput = page.locator('#NewAccount_LastName');
    this.emailInputForNewAccount = page.locator('#NewAccount_EmailAddress');
    this.confirmEmailInputForNewAccount = page.locator('#NewAccount_ConfirmEmail');
    this.passwordInputForNewAccount = page.locator('#NewAccount_Password');
    this.createAccountBtn = page.locator('input.Button[onclick*="LoginBox-submitButton--newUser"]');

  }
  
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
  
  async createAccount(firstName, lastName, email, password) {
    await this.createAccountLink.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInputForNewAccount.fill(email);
    await this.confirmEmailInputForNewAccount.fill(email);
    await this.passwordInputForNewAccount.fill(password);
    await this.createAccountBtn.click();
  }
};