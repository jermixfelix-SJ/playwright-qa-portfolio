const BasePage = require('./BasePage');

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.accountInfoHeading = page.getByText('Enter Account Information', { exact: false });
  }

  async goto() {
    await this.blockAds();
    await this.page.goto('/login');
  }

  async signup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}

module.exports = SignupPage;
