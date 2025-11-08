export class SessionConfirmationPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../10-advanced-ui-interactions/homework/pages/session-confirmation.html",
      import.meta.url
    ).href;

    this.headerMessage = this.page.locator("h1");
    this.confirmFormat = this.page.locator("#confirm-format");
    this.confirmTopic = this.page.locator("#confirm-topics");
    this.confirmLevel = this.page.locator("#confirm-level");
    this.confirmFiles = this.page.locator("#confirm-files");
  }

  async getHeaderText() {
    return await this.headerMessage.textContent();
  }

  async getSelectedFormat() {
    return await this.confirmFormat.textContent();
  }

  async getSelectedTopics() {
    return await this.confirmTopic.textContent();
  }

  async getSelectedLevel() {
    return await this.confirmLevel.textContent();
  }

  async getUploadFiles() {
    return await this.confirmFiles.textContent();
  }

  async readConfirmationDetails() {
    return {
      header: await this.getHeaderText(),
      format: await this.getSelectedFormat(),
      topics: await this.getSelectedTopics(),
      level: await this.getSelectedLevel(),
      files: await this.getUploadFiles(),
    };
  }
}
