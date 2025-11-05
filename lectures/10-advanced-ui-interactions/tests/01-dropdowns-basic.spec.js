import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;


test("Select option from dropdown by value", async ({page}) => {
    await page.goto(complexFormPageUrl);

    const  dropdown = page.locator("#country");
    await dropdown.selectOption("usa");
    await expect(dropdown).toHaveValue("usa");
});

test("Select option from dropdown by label text", async ({page}) => {
    await page.goto(complexFormPageUrl);

    const  dropdown = page.locator("#country");
    await dropdown.selectOption({label: "Canada"});
    await expect(dropdown).toHaveValue("canada");
});

test("select option from dropdown by index", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  // Select by index (0 = first option, 1 = second option, etc.)
  // Index 1 would be "United States" (index 0 is the placeholder)
  await page.locator("#country").selectOption({ index: 1 });

  // Verify the selection
  await expect(page.locator("#country")).toHaveValue("usa");

  console.log("✓ Selected by index");
});