export class TestUser {
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
}

export class TestCase {
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
    const durationFormatted = 
    this.duration >= 1000
    ? (this.duration / 1000).toFixed(1) + "s"
    : this.duration + "ms";

    return `Test: ${this.name}
    Status: ${this.status}
    Duration: ${durationFormatted}`;
  }
}

// Demonstration calls
// -- Test Users --
const user1 = new TestUser("Milen", "milen@test.com", "pass1234", "QA Engineer", true);
const user2 = new TestUser("Roburt", "robut@test.com", "securePass", "Backend Engineer", false);

console.log("=== User Info ===");
console.log(user1.getInfo());
console.log("User 1 valid:", user1.validate());
console.log(user2.getInfo());
console.log("User 2 valid:", user2.validate());

// -- Test Cases --
const loginTest = new TestCase("Login Test", "Verify that user can log in successfully");
loginTest.start();
loginTest.complete("PASS", 1500);

const registerTest = new TestCase("Register Test", "Verify that new user registration works");
registerTest.start();
registerTest.complete("FAIL", 700);

console.log("=== Test Summaries");
console.log(loginTest.getSummary());
console.log(registerTest.getSummary());