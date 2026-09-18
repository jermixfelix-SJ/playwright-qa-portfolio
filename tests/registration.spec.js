const { test, expect } = require('@playwright/test');
const SignupPage = require('../page-objects/SignupPage');

test('a unique signup proceeds to the account information step', async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.goto();
  const uniqueEmail = `qa.portfolio.${Date.now()}@example.com`;
  await signupPage.signup('QA Portfolio', uniqueEmail);
  await expect(signupPage.accountInfoHeading).toBeVisible();
});

test('an invalid email format keeps the user on the login page', async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.goto();
  await signupPage.signup('QA Portfolio', 'not-an-email');
  await expect(page).toHaveURL(/\/login/);
});
