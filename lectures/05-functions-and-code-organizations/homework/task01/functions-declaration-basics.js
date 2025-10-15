function countPassedTests(results) {
    let passedCount = 0;

    for (let i = 0; i < results.length; i++) {
        if(results[i] === "PASS") {
            passedCount++;
        }
    }
    return passedCount;
}
// let testResults = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
// console.log("Passed tests:", countPassedTests(testResults));

function formatExecutionTime(milliseconds) {

    if (milliseconds < 1000) {
        return milliseconds + "ms";
    } else {
        let seconds = milliseconds / 1000;
        return seconds.toFixed(1) + "s";
    }
}
// let timeResults = [1100, 800];
// console.log("Formatted execution time:", formatExecutionTime(timeResults[0]));
// console.log("Formatted execution time:", formatExecutionTime(timeResults[1]));

function findFailedTests(testNames, testResults) {
    let failedNames = [];

    for (let i = 0; i < testNames.length; i++) {
        if (testResults[i] === "FAIL") {
           failedNames.push(testNames[i]);
        }
    }
    return failedNames;
}
// let tests = ["login_test", "logout_test", "checkout_test"];
// let results = ["PASS", "FAIL", "SKIP"];
// console.log("Failed tests:", findFailedTests(tests, results)); 

// Demonstration calls

// 1. countPassedTests
let testResults = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
console.log("Passed tests:", countPassedTests(testResults));

// 2. formatExecutionTime
let timeResults = [1100, 800];
console.log("Formatted execution time:", formatExecutionTime(timeResults[0]));
console.log("Formatted execution time:", formatExecutionTime(timeResults[1]));

// 3. findFailedTests
let tests = ["login_test", "logout_test", "checkout_test"];
let results = ["PASS", "FAIL", "SKIP"];
console.log("Failed tests:", findFailedTests(tests, results)); 