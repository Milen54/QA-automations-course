import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../page-objects/RegistrationPage";
import path from "node:path";

test("Happy path – successful registration", async ({ page }) => {
  const registerPage = new RegistrationPage(page);
  await registerPage.navigate();

  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );

  await registerPage.completeRegistration({
    fullName: "Milen Denkov",
    country: "canada",
    interest: ["coding", "testing"],
    level: "intermediate",
    files: filePath,
  });
  await expect(page.locator("h2")).toHaveText("Registration Successful!");

  // Verify
  await expect(registerPage.resultSection).toBeVisible();
  await expect(registerPage.resultCountry).toContainText("Canada");
  await expect(registerPage.resultInterests).toContainText("coding", "testing");
  await expect(registerPage.resultExperience).toContainText("intermediate");
  await expect(registerPage.resultFile).toContainText("sample-resume");
});
