import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test("Login with valid credentials using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Business step 1: Navigate to URL
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  // Business step 2: Login with valid credentials
  await test.step("Login with valid credentials", async () => {
    await loginPage.login("admin", "admin123");
  });

  // Verify
  await expect(loginPage.successMessage).toBeVisible();
  await expect(loginPage.successMessage).toContainText("Login successful");
});

test("Login with invalid credentials using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Business step 1: Navigate to URL
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  // Business step 2: Attempt login with invalid credentials
  await test.step("Attempt login with invalid credentials", async () => {
    await loginPage.login("wronguser", "wrongPass");
  });
  // Verify
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Invalid");
});

test("Login with empty fields using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Business step 1: Navigate to URL
  await test.step("Navigate to login page", async () => {
    await loginPage.navigate();
  });

  // Business step 2: Submit empty login form
  await test.step("Submit emty login form", async () => {
    await loginPage.clickLoginButton();
  });
  // Verify
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("Please enter both");
});