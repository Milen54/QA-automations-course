import { test, expect } from "@playwright/test";

const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("Check a radio button", async ({page}) => {
    await page.goto(complexFormPageUrl);

    const radioButtonLocator = page.locator("#exp-beginner");
    await radioButtonLocator.check();

    await expect(radioButtonLocator).toBeChecked();

    const intermidiateRadioButtonLocator = page.locator("#exp-intermediate");
    await intermidiateRadioButtonLocator.check();
    await expect(intermidiateRadioButtonLocator).toBeChecked();
});