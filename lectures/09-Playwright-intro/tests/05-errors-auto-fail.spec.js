import { test } from "@playwright/test";

test("error are handled automatically", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/");

    await page.locator("#nonexistent").click();

    console.log("This might not execute");
});
