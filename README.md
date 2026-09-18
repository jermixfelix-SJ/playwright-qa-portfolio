# Playwright QA Portfolio

A small, public Playwright + JavaScript test automation suite, built to show the same approach used to build a production QA framework from scratch at a previous employer — without exposing anything proprietary from that codebase.

Every push runs the full suite in GitHub Actions. **[See the latest run →](../../actions)**

## What it covers

Target site: [automationexercise.com](https://automationexercise.com), a public site built for exactly this kind of test-automation practice.

- **Login** — verifies an invalid credential pair is rejected with the correct error message.
- **Registration** — verifies a new, unique signup proceeds to the account-details step, and that an invalid email format never gets past the login page.
- **Product search** — verifies a search term returns matching results.

## Why it's built this way

- **Page Object Model** — each page's locators and actions live in one place under `page-objects/`, so a selector change is a one-line fix instead of a find-and-replace across every test.
- **Stable selectors** — tests target the site's own `data-qa` attributes and element IDs rather than CSS classes or text that a redesign would break first.
- **CI-hardened** — the site is ad-supported, and its ad network occasionally shows a full-page interstitial that can steal a click mid-test. `page-objects/BasePage.js` blocks those ad domains before each test navigates, so runs stay deterministic instead of occasionally failing on something the test was never trying to check.
- **Unique test data** — the registration test generates a timestamped email on every run, so re-running the suite never collides with a previous run's data.

## Stack

Playwright, JavaScript, GitHub Actions.

## Running it locally

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

View the HTML report after a run with `npm run report`.
