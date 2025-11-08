import { test, expect } from "@playwright/test";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage";
import { SessionFormPage } from "../page-objects/SessionFormPage";
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

test("Test B", async ({ page }) => {
  const submissionsTablePage = new SubmissionsTablePage(page);

  await submissionsTablePage.navigate();

  await submissionsTablePage.getRowBySpeaker("John Doe");

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe.");

    await dialog.accept();
  });

  await submissionsTablePage.approve("John Doe");
  expect(await submissionsTablePage.getStatus("John Doe")).toBe("Approved");
  expect(await submissionsTablePage.getTotalCount()).toBe(5);

  // Decline Jane Smith

  const janeRow = await submissionsTablePage.getRowBySpeaker("Jane Smith");
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain(
      "Are you sure you want to decline the submission for Jane Smith?"
    );

    await dialog.accept();
  });
  await submissionsTablePage.decline("Jane Smith");
  await expect(janeRow).not.toBeVisible();
  expect(await submissionsTablePage.getTotalCount()).toBe(4);
});
