export class SubmissionsTablePage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/table-page.html",
      import.meta.url
    ).href;

    this.speakerRows = this.page.locator("#submissions-table tbody tr");
    this.headers = this.page.locator("#submissions-table thead th");
    this.totalCountEl = this.page.locator("#total-count");
    this.approveBtn = this.page.locator(".btn-approve");
    this.declineBtn = this.page.locator(".btn-decline");
    this.statusField = this.page.locator('td[data-label="Status"] span');
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async getRowBySpeaker(name) {
    return this.speakerRows.filter({
      has: this.page.locator('td[data-label="Speaker"]'),
      hasText: name,
    });
  }
  async getHeaderTexts() {
  const texts = await this.headers.allTextContents();
  return texts.map(t => t.trim());
}
  async getTotalCount() {
    return await this.speakerRows.count();
  }
  async approve(name) {
    const row = await this.getRowBySpeaker(name);
    const approveBtn = row.locator(this.approveBtn);
    await approveBtn.click();
  }
  async decline(name) {
    const row = await this.getRowBySpeaker(name);
    const declineBtn = row.locator(this.declineBtn);
    await declineBtn.click();
  }

  async getStatus(name) {
    const row = await this.getRowBySpeaker(name);
    const status = row.locator(this.statusField);
    return await status.textContent();
  }
}
