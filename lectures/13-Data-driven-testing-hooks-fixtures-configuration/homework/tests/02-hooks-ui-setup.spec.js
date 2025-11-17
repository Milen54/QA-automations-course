import { test, expect } from "@playwright/test";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

test("Login with valid credentials", async ({ page }) => {
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
});

test("Attempt login with invalid credentials", async ({ page }) => {
  await page.locator("#username").fill("wrongusername");
  await page.locator("#password").fill("wrongpass");
  await page.locator("#login-button").click();

  await expect(page.locator("#error-message")).toBeVisible();
});
