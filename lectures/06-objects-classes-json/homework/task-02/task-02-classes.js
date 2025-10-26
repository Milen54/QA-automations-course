class TestUser {
    constructor(username, email, password, role, active) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.active = active;
    }

    isValidEmail() {
        return this.email.includes("@") && this.email.length >= 5;
    }

    isValidPassword() {
        return this.password.length >= 8;
    }

    validate() {
        return this.isValidEmail() && this.isValidPassword();
    }

    getInfo() {
        return `
        User: ${this.username}
        Role: ${this.role}
        Active: ${this.active}`;
    }
};

class TestCase {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.status = "PENDING";
        this.duration = 0;
    }

    start() {
        this.status = "RUNNING";
    }

    complete(status, durationMs) {
        this.status = status;
        this.duration = durationMs;
    }

    getSummary() {
        
    }

}
 


