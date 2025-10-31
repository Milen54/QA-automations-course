// Test Data Processor Exercise

// 1. CREATE TEST DATA ARRAYS
// TODO: Create the following arrays with test data

// Array of test case names
let testCases = [
  // Add 6 test case names like "login_functionality", "user_registration", etc.
  "login_functionality",
  "user_registration",
  "goTo_basket",
  "finish_order",
  "search_product",
  "remove_prodyct"
];

// Array of test results (should match the number of test cases)
let testResults = ["PASS", "PASS", "SKIP", "FAIL", "FAIL", "SKIP"
  // Add results: "PASS", "FAIL", "SKIP" - make sure some fail!
];

// Array of execution times in milliseconds
let executionTimes = [500, 450, 650, 300, 500, 3000
  // Add times like 1200, 850, 2100, etc.
];

// Empty arrays for processing results
let passedTests = [];
let failedTests = [];
let skippedTests = [];
let slowTests = [];

// 2. BASIC ARRAY OPERATIONS
console.log("=== INITIAL TEST DATA ===");
// TODO: Display the total number of tests using .length
console.log(testCases.length);
// TODO: Add one more test case using push() - name it "cleanup_test"
testCases.push("cleanup_test");
// TODO: Add corresponding result "PASS" and time 300 to other arrays
testResults.push("PASS");
executionTimes.push(300);
// TODO: Display the updated total count
console.log(`Updated total count test casses: ${testCases.length}`);
console.log(`Updated total count test results: ${testResults.length}`);
console.log(`Updated total count execution time: ${executionTimes.length}`);


// 3. PROCESS TESTS WITH FOR LOOP
console.log("\n=== PROCESSING TEST RESULTS ===");
// TODO: Create a for loop that goes through all test cases

// For each test case, you should:
// - Display the test name, result, and execution time
// - Use if/else to categorize tests:
//   - If result is "PASS", add to passedTests array
//   - If result is "FAIL", add to failedTests array
//   - If result is "SKIP", add to skippedTests array
// - Additionally, if execution time > 2000ms, add to slowTests array


for (let i = 0; i < testCases.length; i++) {
    const name   = testCases[i];
    const result = testResults[i];
    const time   = executionTimes[i];

    console.log(`Test name: ${name} Test result: ${result}, execution time: ${time}`);
    if (result === "PASS") {
        passedTests.push(result);

    } else if (result === "FAIL"){ 
        failedTests.push(result);
    } else {
        skippedTests.push(result);
    }

    if (time > 2000) {
        slowTests.push(time);
    }
}

// 4. GENERATE SUMMARY REPORT
console.log("\n=== TEST EXECUTION SUMMARY ===");
console.log(`Passed test: ${passedTests.length}`);
console.log(`Failed test: ${failedTests.length}`);
console.log(`Skipped test: ${skippedTests.lenght}`);
console.log(`Slow test: ${slowTests.length}`);
// TODO: Display counts for each category
// TODO: Calculate and display success rate (passed / total * 100)

// 5. DETAILED ANALYSIS WITH WHILE LOOP
console.log("\n=== FAILED TEST ANALYSIS ===");
// TODO: Use a while loop to process failed tests
// While there are failed tests remaining:
// - Remove one test from failedTests using pop()
// - Display detailed analysis for each failed test
// - Check if the test name contains "login" - mark as critical
// - Check if the test name contains "payment" - mark as high priority

let failedTestsCopy = [];
for (let i = 0; i < failedTests.length; i++) {
  failedTestsCopy.push(failedTests[i]);
}
// Your while loop here

// 6. PERFORMANCE ANALYSIS
console.log("\n=== PERFORMANCE ANALYSIS ===");
// TODO: Create a for loop to analyze execution times
// For each test:
// - If time < 500ms: "Fast"
// - If time 500-1500ms: "Normal"
// - If time 1500-3000ms: "Slow"
// - If time > 3000ms: "Very Slow"

// 7. BONUS: RETRY FAILED TESTS SIMULATION
console.log("\n=== RETRY SIMULATION ===");
// TODO: Create a retry system using a while loop
// - Start with a copy of failed tests
// - Use a while loop with max 3 retries per test
// - Simulate random success (you can use testName.length % 3 === 0 for deterministic results)
// - Track which tests pass on retry and which still fail
