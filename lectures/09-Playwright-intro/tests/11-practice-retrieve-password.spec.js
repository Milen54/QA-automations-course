import { test, expect } from "@playwright/test";

test("Retrieve password", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/forgot-password");

    await expect(page).toHaveURL("https://practice.expandtesting.com/forgot-password");

    await page.locator("#email").fill("email@example.com");

    await page.locator("//button[@class='btn btn-bg btn-primary d-block w-100']").click();

    await expect(page.locator("#confirmation-alert")).toContainText("An e-mail has been sent to you which explains how to reset your password.");
    
});