# ThriftBooks Automation Framework

This project automates UI testing for the **ThriftBooks** website using **Playwright** with the **Page Object Model (POM)** design pattern and **fixtures** for reusable test setup.  

It ensures consistent, maintainable, and scalable test automation for core ThriftBooks functionalities like adding items to the wishlist, searching for books, and verifying cart interactions.

---

## ⚙️ Tech Stack
- **Playwright** (JavaScript)
- **Node.js**
- **Page Object Model (POM)**
- **Fixtures** (for shared setup and teardown)
- **VS Code** for development
- **GitHub Actions** (optional for CI/CD)

---

## 🧱 Fixtures and POM Design

This framework uses **fixtures** to initialize browser context and page objects before each test.  
Fixtures provide a consistent environment for every test case — avoiding repetitive code and improving stability.

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login.page';
import { HomePage } from '../pageobjects/home.page';

test('user can log in', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();
  await login.login('user', 'password');
  await home.verifyLoginSuccess();
});

With fixtures, you only define your page objects once — and they’re automatically injected into every test.
This improves readability, reduces duplication, and makes the framework more scalable.


## 💻 Running Tests Locally

### 1. Clone the Repository
```bash
git clone https://github.com/samgit2067/thriftbooks.git
cd thriftbooks

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Install Playwright Browsers
npx playwright install

# 4️⃣ Run All Tests in Headed Mode (browser visible)
npx playwright test --headed

# 5️⃣ Run All Tests in Headless Mode (no browser UI)
npx playwright test

# 6️⃣ View Test Report After a Run
npx playwright show-report

# 7️⃣ Optional Commands
# Run a specific test file
npx playwright test tests/purchaseflow.spec.js

# Run tests by title keyword (e.g., "wishlist")
npx playwright test -g "login"
