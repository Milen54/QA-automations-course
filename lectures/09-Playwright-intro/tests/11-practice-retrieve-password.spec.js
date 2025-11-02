import { test, expect } from "@playwright/test";

test("Retrieve password", async ({ page }) => {
  // Step 1: Navigate to website /forgot-password endpoint
  await page.goto("https://practice.expandtesting.com/forgot-password");

  // Step 2: Verify that URL is valid
  await expect(page).toHaveURL(
    "https://practice.expandtesting.com/forgot-password"
  );

  // Step 3: Fill in email address
  await page.locator("#email").fill("email@example.com");

  // Step 4: Click 'register button'
  await page
    .locator("//button[@class='btn btn-bg btn-primary d-block w-100']")
    .click();

  // Step 5: Verify password reset message is displayed
  await expect(page.locator("#confirmation-alert")).toContainText(
    "An e-mail has been sent to you which explains how to reset your password."
  );
});