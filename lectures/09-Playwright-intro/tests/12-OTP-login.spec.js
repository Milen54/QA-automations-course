import { test, expect } from "@playwright/test";
// Objective: Verify that a user can log in successfully using a valid OTP code

test("OTP Login test", async ({ page }) => {
  // Step 1: Navigate to website endpoint /otp-login
  await page.goto("https://practice.expandtesting.com/otp-login");

  // Step 2: Verify that the URL is valid
  await expect(page).toHaveURL("https://practice.expandtesting.com/otp-login");

  // Step 3: Fill in email adress and click 'Send OTP Code' button
  await page.locator("#email").fill("practice@expandtesting.com");
  await page.locator("#btn-send-otp").click();

  // Step 4: Verify success message for sending OTP code is displayed
  await expect(page.locator("#otp-message")).toContainText(
    "We've sent an OTP code to your email:"
  );

  // Step 5: Fill in OTP code and click 'Verify OTP Code' button
  await page.locator("#otp").fill("214365");
  await page.locator("#btn-send-verify").click();

  // Step 6: Verify that success message is displayed
  await expect(page.locator("#flash")).toContainText(
    "You logged into a secure area!"
  );

  // Step 7: Verify endpoint is /secure
  await expect(page).toHaveURL("https://practice.expandtesting.com/secure");
});

// OTP Code: 214365
