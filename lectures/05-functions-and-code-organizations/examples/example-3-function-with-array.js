let names = ["login_test", "logout_test", "register_test"];
let results = ["PASS", "FAIL", "PASS"];

function findFailedTests(testName, testResults) {
    let failedTests = [];
    for (let i = 0; i < testResults.length; i++) {
        let names = testName[i];
        if (testResults[i] === "FAIL") {
            failedTests.push(names);
        }
    }
    return failedTests;
}
let failures = findFailedTests(names, results);
console.log(`Failed tests: ${failures}`);