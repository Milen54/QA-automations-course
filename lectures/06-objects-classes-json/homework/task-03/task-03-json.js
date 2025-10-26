let userProfile = {
    username: "Milen",
    email: "Milen@qacompany.com",
    role: "QA Engineer",
};

let caseList = [
{
    testName: "loginTest",
    status: "PASS",
    duration: 1200,
},
{
    testName: "registerTest",
    status: "FAIL",
    duration: 800,
},
{
    testName: "addToCartTest",
    status: "PASS",
    duration: 900,
},
];

export function toJson(value) {
    return JSON.stringify(value);
}

export function fromJson(jsonString) {
    return JSON.parse(jsonString);
}

// Convert userProfile to JSON and log types
console.log("Before conversion:", typeof userProfile);
let userJson = toJson(userProfile);
console.log("After conversion:", typeof userJson);
console.log("User JSON string:", userJson);

// Parse back and confirm property access
let parsedUser = fromJson(userJson);
console.log("Parsed user object:", parsedUser);
console.log("User email:", parsedUser.email);
console.log("User role:", parsedUser.role);

// Convert caseList to JSON
let casesJson = toJson(caseList);
console.log("Case list JSON string:", casesJson);

// Parse back and confirm properties
let parsedCases = fromJson(casesJson);
console.log("Parsed case list:", parsedCases);
console.log("Number of test cases:", parsedCases.length);
console.log("First test name:", parsedCases[0].testName);