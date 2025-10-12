let testResults = ["login_test", "PASS", 250];
// let testName = testResults[0];
// let testStatus = testResults[1];
// let executionTime = testResults[2];

// console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime}`);

// Destructuring assigment
let [testName, testStatus, executionTime] = testResults;
console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime} ms`);

// --------

let testData = ["api_test", "POST", 200, "success", 340];
let [testType, , statusCode, , responseTime] = testData;
console.log(`Test Type: ${testType}, Status: ${statusCode}, Time: ${responseTime} ms`);
