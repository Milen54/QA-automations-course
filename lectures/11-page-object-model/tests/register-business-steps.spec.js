import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../page-objects/RegistrationPage";
import path from "node:path";

test("Complete registration with all fields", async ({page}) => {
    const registerPage = new RegistrationPage(page);

    const filePath = path.resolve(
        "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
      );

    // Business Step 1: Navigate to URL
    await test.step("Navigate to register page", async () => {
        await registerPage.navigate();
    });

    // Business Step 2: Complete registration with data
    await test.step("Complete registration with data", async () => {
        await registerPage.completeRegistration({
            fullName: "Milen Denkov",
            country: "canada",
            interests: ["coding", "testing"],
            experience: "intermediate",
            files: filePath,
        });
    });
    // Verify
    await expect(registerPage.resultSection).toBeVisible();
    await expect(registerPage.resultCountry).toContainText("Canada");
    await expect(registerPage.resultInterests).toContainText("coding", "testing");
    await expect(registerPage.resultExperience).toContainText("intermediate");
})