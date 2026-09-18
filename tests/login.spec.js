const { test, expect } = require('@playwright/test');
const LoginPage = require('../page-objects/LoginPage');

test('shows an error message for invalid login credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('not-a-real-user@example.com', 'wrongpassword123');
  await expect(loginPage.errorMessage).toBeVisible();
});
