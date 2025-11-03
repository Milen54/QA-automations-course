import { test, expect } from "@playwright/test";

test("Verify job status shows 'Full-Time Permanent' in Job Details", async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Step 2: Verify that URL matches login endpoint
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Step 3: Fill in valid credentials
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");

  // Step 4: Click on 'Login' button
  await page.locator('[type="submit"]').click();

  // Step 5: Click on 'My Info'
  await page.locator('a[href="/web/index.php/pim/viewMyDetails"]').click();

  // Step 6: Click on 'Job'
  await page
    .locator('a[href="/web/index.php/pim/viewJobDetails/empNumber/7"]')
    .click();

  // Verify that employee status is "Full-Time Permanent"
  const status = page
    .locator(".oxd-select-text-input")
    .filter({ hasText: "Full-Time Permanent" });

  await expect(status).toBeVisible();
  await expect(status).toHaveText(/Full-Time Permanent/i);

});
