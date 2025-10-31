import { expect, test } from "@playwright/test";

test("Understanding expect", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com");

  const expectedTitle = "Automation Testing Practice Website for QA and Developers | UI and API";
  await expect(page).toHaveTitle(expectedTitle);

  await expect(page.locator("#main-title")).toBeVisible();

  await expect(page.locator("#main-title")).toContainText("Automation Testing Practice");
});
