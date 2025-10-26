class TestUser {
    constructor(username, email, password, phone) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.isActive = true;
        this.phone = phone;
    }

    validate() {
        return this.email.includes("@") && this.password.length >= 6;
    }
    
    getInfo() {
        return `User: ${this.username} (${this.email}) phone number: ${this.phone}`;
    }
}

let user1 = new TestUser("testuser1", "user1@test.com", "pasword123", "06634634");
let user2 = new TestUser("testuser2", "user2@test.com", "password123", "030250230");

console.log("User 1:", user1.getInfo());
console.log("User 2:", user2.getInfo());
console.log("User 1 valid:", user1.validate());
console.log("User 2 valid:", user2.validate());
