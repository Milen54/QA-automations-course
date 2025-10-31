import { test } from "@playwright/test";

test("Understanding the page object", async ({page}) => {
    await page.goto("https://practice.expandtesting.com/login");

    const userNameInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const submitButton = page.locator("#submit-login");

    await userNameInput.fill("practice");
    await passwordInput.fill("SuperSecretPassword!");

    await page.pause(2000);
    await submitButton.click();
});
