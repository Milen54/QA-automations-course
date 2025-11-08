import { test, expect } from "@playwright/test";
import { SessionFormPage } from "../page-objects/SessionFormPage";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage";
import path from "node:path";

test("Happy path - successful submission and confirmation", async ({
  page,
}) => {
  const sessionFormPage = new SessionFormPage(page);
  await sessionFormPage.navigate();

  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );

  await sessionFormPage.completeSubmission({
    format: "workshop",
    topics: ["testing"],
    level: "intermediate",
    files: [filePath],
  });

  const confirmationPage = new SessionConfirmationPage(page);

  await expect(confirmationPage.headerMessage).toHaveText(
    "Thank you for your submission!"
  );
  await expect(confirmationPage.confirmFormat).toHaveText(
    "Hands-on Workshop (90 mins)"
  );
  await expect(confirmationPage.confirmTopic).toHaveText("Automated Testing");
  await expect(confirmationPage.confirmLevel).toHaveText("Intermediate");
  await expect(confirmationPage.confirmFiles).toHaveText("sample-resume.pdf");
});
