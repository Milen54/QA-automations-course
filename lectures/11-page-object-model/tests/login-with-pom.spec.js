import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  await loginPage.login("admin", "admin123");
  await expect(loginPage.successMessage).toBeVisible();
  await expect(loginPage.successMessage).toContainText("Login successful");
});

test("Login with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  await loginPage.login("invalidUser", "invalidPass");
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(
    "Invalid username or password"
  );
});

test("Login with empty credential fields", async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.clickLoginButton();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText("Please enter both username and password");
    
})