import { test, expect } from "@playwright/test";

test("sanity check for Skillo demo site", async ({ page }) => {
  // Step 1: Navigate to skillo demo website
  await page.goto("http://training.skillo-bg.com:4300/posts/all");

  // Step 2: Verify the URL matches the expected
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all");

  // Step 3: Click the "Login" button in the top navigation bar
  await page.locator("#nav-link-login").click();

  // Step 4: Verify that the user is redirected to the login page
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );
});
