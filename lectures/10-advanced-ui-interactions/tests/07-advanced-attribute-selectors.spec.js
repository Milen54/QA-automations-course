import { test } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("Advanced attribute selectors", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Attribute exists
  await page.locator("[type]").first().click();

  // Attribute starts with
  await page.locator('[id^="interest"]').first().check();

  // Attribute end with
  await page.locator('[id$="button"]').click();

  // Attribute contains
  await page.locator('[id*="exp"]').first().check();

  console.log("Advanced attribute selectors work");
});
