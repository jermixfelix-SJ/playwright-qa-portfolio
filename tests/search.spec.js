const { test, expect } = require('@playwright/test');
const ProductsPage = require('../page-objects/ProductsPage');

test('searching for a product returns matching results', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchFor('Dress');
  await expect(productsPage.resultsHeading).toHaveText('Searched Products');
  await expect(productsPage.productCards).not.toHaveCount(0);
});
