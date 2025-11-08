import { resolve } from "node:path";

export class SessionFormPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/registration-form.html",
      import.meta.url
    ).href;

    this.sessionFormat = this.page.locator("#session-format");
    this.topicType = this.page.locator("#topic-options");
    this.audienceLevel = this.page.locator('[id^="level"]');
    this.choseFileButton = this.page.locator("#materials");
    this.codeOfConductCheckbox = this.page.locator("#code-of-conduct");
    this.submitButton = this.page.locator("#submit-proposal");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async selectFormat(valueOrLabel) {
    await this.sessionFormat.selectOption({ value: valueOrLabel });
  }

  async selectTopics(items, shouldCheck = true) {
    for (const topic of items) {
      const checkbox = this.page.locator(`#topic-${topic}`);

      if (shouldCheck) {
        await checkbox.check();
      } else {
        await checkbox.uncheck();
      }

      const isChecked = await checkbox.isChecked();
      if (isChecked !== shouldCheck) return false;
    }
    return true;
  }
  async selectAudience(level) {
    await this.page.locator(`#level-${level}`).check();
  }

  async acceptCodeOfConduct() {
    await this.codeOfConductCheckbox.check();
  }

  async uploadFiles(paths) {
    await this.choseFileButton.click();
    await this.choseFileButton.setInputFiles(paths);
  }

  async submit() {
    await this.submitButton.click();
  }

  async completeSubmission(data) {
    await this.selectFormat(data.format);
    await this.selectTopics(data.topics);
    await this.selectAudience(data.level);
    await this.uploadFiles(data.files);
    await this.acceptCodeOfConduct();
    await this.submit();
  }
}
