import { test, expect } from "@playwright/test";
import { validUsers, invalidUsers } from "../support/userData";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

validUsers.forEach((user) => {
  test(`login succeeds: ${user.username}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-button").click();

    await expect(page.locator("#success-message")).toBeVisible();
  });
});

invalidUsers.forEach((userData) => {
  test(`login fails: ${userData.description}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(userData.username || "");
    await page.locator("#password").fill(userData.password || "");
    await page.locator("#login-button").click();

    await expect(page.locator("#error-message")).toBeVisible();
  });
});
