import {test, expect} from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";

test("Verify home page title", async ({ page })=>{
    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.pageTitle).toHaveText("Welcome to Our Application");

});

test("Navigate to login page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.loginLink).toBeVisible();
    await homePage.clickLogin();
    await expect(page).toHaveURL(/login.html/);

});
