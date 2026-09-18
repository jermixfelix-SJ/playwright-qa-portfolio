const BasePage = require('./BasePage');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.resultsHeading = page.locator('.features_items .title').first();
    this.productCards = page.locator('.features_items .product-image-wrapper');
  }

  async goto() {
    await this.blockAds();
    await this.page.goto('/products');
  }

  async searchFor(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }
}

module.exports = ProductsPage;
