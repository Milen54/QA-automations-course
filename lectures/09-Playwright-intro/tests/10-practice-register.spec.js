import { test, expect } from "@playwright/test";

test("Successful registration", async ({ page }) => {
  // Step 1: Navigate to website /register endpoint
  await page.goto("https://practice.expandtesting.com/register");

  // Step 2: Verify the you are on the registration page
  await expect(
    page.locator("#contentbody h1", {
      hasText: "Test Register page for Automation Testing Practice",
    })
  ).toBeVisible();

  // Step 3: Fill in NEW credentials
  await page.locator("#username").fill("milen1312");
  await page.locator("#password").fill("987654");
  await page.locator("#confirmPassword").fill("987654");

  // Step 4: Click 'Register' button
  await page
    .locator("//button[@class='btn btn-bg btn-primary d-block w-100']")
    .click();

  // Step 5: Verify that successful registration message appears
  await expect(
    page.locator("#flash", {
      hasText: "Successfully registered, you can log in now.",
    })
  ).toBeVisible();

  // IMPORTANT! Always enter new credentials when trying to register
});
