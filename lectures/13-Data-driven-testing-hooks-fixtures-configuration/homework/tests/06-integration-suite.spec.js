import { validUsers } from "../support/userData.js";
import { test, expect } from "../support/fixtures/testData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

validUsers.forEach((user) => {
  test(`login succeeds: ${user.username}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-button").click();

    await expect(page.locator("#success-message")).toBeVisible();
  });
});

test("verify testUser object values", async ({ testUser }) => {
  expect(testUser.email).toContain("@");

  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
