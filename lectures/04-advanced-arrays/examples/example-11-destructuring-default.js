let incompleteData = ["api_test", "PASS", 500]; // missing execution time

let [testName, testStatus, executionTime = 100] = incompleteData;

console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime}`);
// ------

