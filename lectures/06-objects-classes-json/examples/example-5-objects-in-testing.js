let testUser = { 
    userName: "testuser123",
    email: "testuser@example.com",
    password: "securedPassword123",
    role: "admin",
    isActive: true,

    isValidEmail: function() {
        return this.email.includes("@") && this.email.includes(".");
    },

    isValidPassword: function() {
        return this.password.length >= 8;
    },
}
console.log("My user:", testUser);
console.log("Password valid:", testUser.isValidPassword());
console.log("Email valid:", testUser.isValidEmail());