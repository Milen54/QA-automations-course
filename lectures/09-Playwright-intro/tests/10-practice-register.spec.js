import { test, expect } from "@playwright/test";

test("Successful registration", async ({ page }) => {
  // Step 1: Navigate to website /register endpoint
  await page.goto("https://practice.expandtesting.com/register");

  // Step 2: Verify the link is valid
  await expect(page).toHaveURL("https://practice.expandtesting.com/register");

  // Step 3: Fill in NEW credentials
  await page.locator("#username").fill("milen1313");
  await page.locator("#password").fill("12345678910");
  await page.locator("#confirmPassword").fill("12345678910");

  // Step 4: Click 'Register' button
  await page
    .locator("//button[@class='btn btn-bg btn-primary d-block w-100']")
    .click();

  // Step 5: Verify that successful registration message appears
  await expect(page.locator("#flash")).toContainText(
    "Successfully registered, you can log in now."
  );

  // IMPORTANT! Always enter new credentials when trying to register
});
