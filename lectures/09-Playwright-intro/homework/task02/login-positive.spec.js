import { test, expect } from "@playwright/test";

test("Verify login functionality works as expected", async ({ page }) => {
  // Step 1: Navigato to skillo website /posts
  await page.goto("http://training.skillo-bg.com:4300/posts/all");

  // Step 2: Click the "Login" link in the top navigation bar
  await page.locator("#nav-link-login").click();

  // Step 3: Assert URL equals
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );

  // Step 4: Verify 'sign in' button is visible
  await expect(page.locator("#sign-in-button")).toBeVisible();

  // Step 5: Fill in valid credentials
  await page.locator("#defaultLoginFormUsername").fill("milen541");
  await page.locator("#defaultLoginFormPassword").fill("StrongPass123");

  // Step 6: Click 'sign in' button
  await page.locator("#sign-in-button").click();

  // Step 7: Assert profile link is visible, then click it
  await expect(page.locator("#nav-link-profile")).toBeVisible();
  await page.locator("#nav-link-profile").click();

  // Step 8: Verify profile URL matches
  await expect(page).toHaveURL(/\/users\/\d+$/);

  // Step 9: Verify profile heading h2 is visible and contains your username
  await expect(page.locator("h2")).toHaveText("milen541");
});
