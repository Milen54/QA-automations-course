import { test, expect } from "@playwright/test";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage";

test("Count and headers", async ({ page }) => {
  const submissionsTablePage = new SubmissionsTablePage(page);

  await submissionsTablePage.navigate();
  await submissionsTablePage.getTotalCount();
  const total = await submissionsTablePage.getTotalCount();
  expect(total).toBe(5);

  const headers = await submissionsTablePage.getHeaderTexts();
  expect(headers).toEqual([
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ]);
});

test("Approve Session - alert dialog + status update", async ({ page }) => {
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
});

test("Decline Session - confirm dialog + row removal", async ({ page }) => {
  const submissionsTablePage = new SubmissionsTablePage(page);

  await submissionsTablePage.navigate();

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
