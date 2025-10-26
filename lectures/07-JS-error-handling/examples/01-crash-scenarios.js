// JSON parsing with invalid data
// let badJson = `{"name": "test", "invalid": "valid"}`;
// let parsed = JSON.parse(badJson);
// console.log("Parsed JSON:", parsed);
// console.log("Type of Parsed", typeof parsed);

let testUser = {
    email: "mail@example.com",

}
console.log(testUser.email);

let testResults = [];
testResults.push("PASS");
console.log(testResults);

let totalTests = 0;
let passedTest = 10;
let successRate = passedTest / totalTests;
console.log(successRate);