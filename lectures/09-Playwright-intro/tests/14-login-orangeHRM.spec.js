import { test, expect } from "@playwright/test";

test("Successful login test on demo Orange HRM website", async ({ page }) => {
  // Step 1: Navigate to demo OrangeHRM website
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Step 2: Verify that you are on the login page
  await expect(page.locator("#app h5")).toBeVisible();

  // Step 3: Fill in valid credentials
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");

  // Step 4: Click on 'Login' button
  await page.locator('[type="submit"]').click();

  // Step 5: Verify that user is successfully logged in & redirected to /dashboard/index endpoint
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  // Step 6: Verify that 'Dashboard' button is visible
  await expect(
    page.locator('a[href="/web/index.php/dashboard/index"]')
  ).toBeVisible();
});
