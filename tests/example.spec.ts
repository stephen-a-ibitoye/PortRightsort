import { test, expect } from '@playwright/test';

test('homepage has title and screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Reino Studio/);

  // Take a screenshot of the page.
  await page.screenshot({ path: '/home/jules/verification/verification.png', fullPage: true });
});
