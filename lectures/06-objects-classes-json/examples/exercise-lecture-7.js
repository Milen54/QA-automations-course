let testUser = {
    username: "Milen",
    email: "example.com",
    password: "pass12345",
    role: "QA",
    isActive: true,

    isValid: function() {
        return this.email.includes("@") && this.password.length >= 8;
    }
}
console.log("Test User:",testUser);
console.log("Email is valid: ", testUser.isValid());

class TestCase {
constructor(name, description, priority, status = "PENDING")

    this.name = name;
    this.description = description;
    this.priority = priority;
    this.status = status;
}
