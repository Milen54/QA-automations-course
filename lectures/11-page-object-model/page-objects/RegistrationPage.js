export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.url = new URL("../pages/registration-form.html", import.meta.url).href;

    this.fullName = this.page.locator("#full-name");
    this.selectCountry = this.page.locator("#country");
    this.interestsGroup = this.page.locator(".checkbox-group");
    this.levelGroup = this.page.locator(".radio-group");
    this.chooseFile = this.page.locator("#resume");
    this.termsAndConditions = this.page.locator("#terms");
    this.submitBtn = this.page.locator("#submit-button");

    this.resultSection = this.page.locator("#result");
    this.resultCountry = this.page.locator("#result-country");
    this.resultInterests = this.page.locator("#result-interests");
    this.resultExperience = this.page.locator("#result-experience");
    this.resultFile = this.page.locator("#result-resume");

  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async fillName(fullName) {
    await this.fullName.fill(fullName);
  }

  async chooseCountry(countyLabel) {
    await this.selectCountry.selectOption({ value: countyLabel });
  }

  async chooseInterests(values) {
    for (const value of values) {
      await this.page
        .locator(`input[name="interests"][value="${value}"]`)
        .check();
    }
  }

  // level: "beginner" | "intermediate" | "advanced"
  async chooseLevel(level) {
    await this.page.locator(`#exp-${level}`).check();
  }

  async uploadFile(path) {
    await this.chooseFile.click();
    await this.chooseFile.setInputFiles(path);
  }

  async acceptTerms() {
    await this.termsAndConditions.check();
  }

  async submitForm() {
    await this.submitBtn.click();
  }

  async completeRegistration(data) {
    await this.fillName(data.fullName);
    await this.chooseCountry(data.country);
    await this.chooseInterests(data.interest);
    await this.chooseLevel(data.level);
    await this.uploadFile(data.files);
    await this.acceptTerms();
    await this.submitForm();
  }

}
