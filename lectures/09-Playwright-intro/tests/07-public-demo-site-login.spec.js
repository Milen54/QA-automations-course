import { test, expect } from "@playwright/test";

test("login test on public demo site", async ({ page })=> {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");

    await page.locator("#submit").click();

    await expect(page.locator(".post-title")).toContainText(
        "Logged In Successfully"
    );

    await expect(page.locator(".wp-block-button")).toBeVisible();
});
