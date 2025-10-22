let testResults = {
    testName: "login_test",
    status: "RUNNING",
}
console.log("Initial:", testResults);

// Adding new properties
testResults.executionTime = 800;
testResults.environment = "staging";

// Modifying
testResults.status = "PASS";

console.log("After modification:", testResults);

testResults["retry-count"] = 0;

// Deleting properties
delete testResults["testName"];

console.log("Final result:", testResults);