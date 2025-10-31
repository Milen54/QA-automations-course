import { test, expect } from "@playwright/test";

test("Negative path, invalid credentials", async ({ page }) => {
  // Step 1: Navigate to skillo website /login
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  // Step 2: Fill in wrong credentials
  await page.locator("#defaultLoginFormUsername").fill("wrongName");
  await page.locator("#defaultLoginFormPassword").fill("badpassword");

  // Step 3: Click 'sign in' button
  await page.locator("#sign-in-button").click();

  // Step 4: Verify that you remain on the login page
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );

  // Step 5: Verify 'sign in' button is visible &
  // 'profile' link is not visible
  await expect(page.locator("#sign-in-button")).toBeVisible();
  await expect(page.locator("#nav-link-profile")).toBeHidden();

  // Step 6: Locate and verify error message
  const toastMessage = page.locator("#toast-container");
  await expect(toastMessage).toContainText("Wrong username or password!");
});

test("Negative path, empty fields", async ({ page }) => {
  // Step 1: Navigate to skillo website /login
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  // Step 2: Verify that you remain on the login page
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );

  // Step 3: Verify that 'sign in' button is disabled
  await expect(page.locator("#sign-in-button")).toBeDisabled();

  // Step 4: Verify 'profile' link is not visible
  await expect(page.locator("#nav-link-profile")).toBeHidden();
});
