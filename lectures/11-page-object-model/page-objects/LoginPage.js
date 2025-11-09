export class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = new URL("../pages/login.html", import.meta.url).href;

        this.username = this.page.locator("#username");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
        this.successMessage = this.page.locator("#success-message");
        this.errorMessage = this.page.locator("#error-message");
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async fillUsername(username) {
        await this.username.fill(username);
    }

    async fillPassword(password){
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}