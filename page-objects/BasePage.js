const AD_DOMAINS = /doubleclick\.net|googlesyndication\.com|google_vignette|pagead2\.googlesyndication\.com|adservice\.google\.com/;

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async blockAds() {
    await this.page.route(AD_DOMAINS, (route) => route.abort());
  }
}

module.exports = BasePage;
