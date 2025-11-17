import { test, expect } from "../support/fixtures/testData.js";

test("Fill registration form - using testUser", async ({ page, testUser }) => {
  await page.goto(
    new URL("../../pages/registration.html", import.meta.url).href
  );

  await page.locator("#email").fill(testUser.email);
  await page.locator("#password").fill(testUser.password);
  await page.locator("#age").fill(testUser.age.toString());
  await page.locator("#submit").click();

  await expect(page.locator("#success-message")).toBeVisible();
});

test("verify testUser object values", async ({ testUser }) => {
  expect(testUser.email).toContain("@");

  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
