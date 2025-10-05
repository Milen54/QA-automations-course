// Test validation examples
let expectedStatusCode = 200;
let actualStatusCode = 200;
let expectedMessage = "Welcome";
let actualMessage = "Welcome";

console.log("Status code match:", expectedStatusCode == actualStatusCode);
console.log("Message match:", expectedMessage == actualMessage);

console.log("Strict Status check:", expectedStatusCode === actualStatusCode);
console.log("Tpe-safe:", expectedMessage == actualMessage);

let errorCount = 0;
console.log("No errors:", errorCount == 0);
console.log("Has errors:", errorCount != 0);

// Numeric comparison for validation
let responseTime = 250;
let maxAllowedTime = 500;

console.log("Performance OK:", responseTime < maxAllowedTime);
console.log("Withing limits:", responseTime <= maxAllowedTime);

// Range validation 
let userAge = 25;
let minAge = 18;
let maxAge = 65;

console.log("Age valid:", userAge >= minAge && userAge <= maxAge);