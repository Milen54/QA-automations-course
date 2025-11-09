export class HomePage {
    constructor(page) {
        this.page = page;
        this.url = new URL("../pages/home.html", import.meta.url).href;

        this.pageTitle = this.page.locator("#page-title");
        this.loginLink = this.page.locator("#login-link");
        this.aboutLink = this.page.locator("#about-link");
        this.contactLink = this.page.locator("#contact-link");
        this.welcomeText = this.page.locator("#welcome-text");
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async clickAbout() {
        await this.aboutLink.click();
    }

    async clickContact() {
        await this.contactLink.click();
    }
    
}