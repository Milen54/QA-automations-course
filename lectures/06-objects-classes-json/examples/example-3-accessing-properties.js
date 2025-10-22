let apiResponse = {
    statusCode: 200,
    message: "Success",
    data: "User created",
    responseTime: 245,
}
// Dot notation
console.log("Status code:", apiResponse.statusCode);
console.log("Message:", apiResponse.message);

// Bracket notation
console.log("Status code:", apiResponse["statusCode"]);
console.log("Message:", apiResponse["message"]);

let properties = ["statusCode", "message"];

for (let i = 0; i < properties.length; i++) {
    console.log("Property value:", apiResponse[properties[i]]);
}

let user = {
    name: "Milen",
    email: "Milen@example.com",
    role: "IT Recruiter"
};

// Dot notation
console.log("User name:", user.name);
console.log("Email adress:", user.email);
console.log("Current position:", user.role);

// Bracket notation
console.log("----Bracket notation----");
console.log("User name:", user["name"]);
console.log("Email adress:", user["email"]);
console.log("Current position:", user["role"]);

// Objects in Testing Scenarios

let testUser = {
    username: "testuser123",
    email: "testuser@example.com",
    password: "securePass123",
    role: "admin",

    isValidEmail: function() {
        return this.email.includes("@") && this.email.includes(".");
    },

    isValidPass: function() {
        return this.password.length >= 6;
    },
};

console.log("Email valid:", testUser.isValidEmail());
console.log("Valid pass:", testUser.isValidPass());