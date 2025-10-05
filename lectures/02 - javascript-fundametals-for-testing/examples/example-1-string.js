let testUserEmail = "john.doe@testcompany.com";
let expectedSuccessMessage = "Login successful";
let baseUrl = "https://staging-app.com";

// String concatenation
let testMessage = "Testing user: " + testUserEmail;
console.log(testMessage);

// Template literals
let loginAttempt = `Attempting login for ${testUserEmail} on ${baseUrl}`;
console.log(loginAttempt);

// Multi-line strings
let testScenario = `
Test Case: User Login
User: ${testUserEmail}
Expected: ${expectedSuccessMessage}
Environmnet: ${baseUrl}
`;
console.log(testScenario);

