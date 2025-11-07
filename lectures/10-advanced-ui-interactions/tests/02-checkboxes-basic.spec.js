import { test, expect } from "@playwright/test";

const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("Check and uncheck checkboxes", async ({page}) => {
    await page.goto(complexFormPageUrl);
    const codingCheckBox = page.locator("#interest-coding");
    await codingCheckBox.check();
    await expect(codingCheckBox).toBeChecked();

    const designCheckBox = page.locator("#interest-design");
    await designCheckBox.check();
    await expect(designCheckBox).toBeChecked();

    await codingCheckBox.uncheck();
    await expect(codingCheckBox).not.toBeChecked();
});

test("Check multiple checkboxes", async ({page}) => {
    await page.goto(complexFormPageUrl);
    const checkboxes = [
        "#interest-design",
        "#interest-testing",
        "#interest-devops",
    ]
    for (const checkbox of checkboxes) {
        await page.locator(checkbox).check();
        await expect(page.locator(checkbox)).toBeChecked();
    }
});