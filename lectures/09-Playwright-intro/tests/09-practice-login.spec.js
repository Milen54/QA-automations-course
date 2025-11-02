import { test, expect } from "@playwright/test";

test("Successful login test on public demo site", async ({ page }) => {
  // Step 1: Navigate to the login page URL
  await page.goto("https://practice.expandtesting.com/login");

  // Step 2: Verify that the login page is displayed successfully
  await expect(page).toHaveURL("https://practice.expandtesting.com/login");

  // Step 3: Fill in valid credentials
  await page.locator("#username").fill("practice");
  await page.locator("#password").fill("SuperSecretPassword!");

  // Step 4: Click 'Login' button
  await page.locator("#submit-login").click();

  // Step 5: Verify that user is redirected to /secure endpoint
  await expect(page).toHaveURL("https://practice.expandtesting.com/secure");

  // Step 6: Verify that success message is visible
  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!"
  );

  // Step 7: Verify that 'Logout' button is displayed
  await expect(
    page.locator("//i[@class='icon-2x icon-signout']")
  ).toBeVisible();
});

test("Login with invalid username", async ({ page }) => {
      // Step 1: Navigate to the login page URL

  await page.goto("https://practice.expandtesting.com/login");

  // Step 2: Verify that the login page is displayed successfully
  await expect(page).toHaveURL("https://practice.expandtesting.com/login");

  // Step 3: Fill in wrong username and correct password
  await page.locator("#username").fill("wefwf");
  await page.locator("#password").fill("SuperSecretPassword!");

  // Step 4: Click 'login' button
  await page.locator("#submit-login").click();

  // Step 5: Verify that an error message is displayed
  await expect(page.locator("#flash")).toBeVisible();
  await expect(page.locator("#flash")).toContainText(
    "Your username is invalid!"
  );

  // Step 6: Verify that user remains on the login page
  await expect(page).toHaveURL("https://practice.expandtesting.com/login");

  // IMPORTANT!: There is unexpected behaviour while trying to log in with invalid username
  // Wrong error message is sometimes displayed
});
