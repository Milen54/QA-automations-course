import { test } from "@playwright/test";

test("Understanding the page object", async ({page}) => {
    await page.goto("https://practice.expandtesting.com");

    let url = page.url();
    console.log("Current URL:", url);

    let title = await page.title();
    console.log("Page title:", title);

    await page.reload();
    await page.goBack();
    await page.goForward();
});