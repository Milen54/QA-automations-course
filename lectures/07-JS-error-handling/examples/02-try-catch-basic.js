function parseTestData(jsonString) {
  try {
    let data = JSON.parse(jsonString);
    console.log("Succsessfully parsed test data");
    return data;
  } catch (error) {
    console.log("Failed to parse test data:", error.message);
    return null;
  }
}
// let valiData = parseTestData(`{"testName":, "login", "status" : "PASS"}`);
// console.log("Validate data result", validate);

// let invalidData = parseTestData(`{"invalid": json}`);
// console.log("Invalid data result:", invalidData);

// Example 2

function parseTestData2(jsonString) {
  try {
    let data = JSON.parse(jsonString);
    console.log("Successfully parsed test data:", data);
    return data;
  } catch (error) {
    console.log("Failed to parse test data:", error.message);
    return null;
  }
}

let valid = parseTestData2('{"testName": "login", "status": "PASS"}');
let invalid = parseTestData2('{"invalid": json');

console.log("Valid result:", valid);
console.log("Invalid result:", invalid);

// Example 3

function runUiTest() {
  console.log("Starting UI test...");

  try {
    console.log("Looking for login button...");
    throw new Error("Login button not found!");

    console.log("Clicked the login button successfully.");
  } catch (error) {
    console.log("Test failed:", error.message);
  } finally {
    console.log("Closing browser and cleaning up...");
  }
  console.log("Test execution finished.");
}
runUiTest();

// Example 4 - Analyze login results
function analyzeLoginResults(resultsArray) {
  try {
    if (!Array.isArray(resultsArray)) {
      throw new Error("Input is not an array");
    }

    let totalTests = resultsArray.length;
    let failedTests = resultsArray.filter(
      (result) => result.status === "FAIL"
    ).length;

    let failRate = ((failedTests / totalTests) * 100).toFixed(1);

    return {
      total: totalTests,
      failed: failedTests,
      failRate: failRate + "%",
    };
  } catch (error) {
    console.log(`Error analyzing login results: ${error.message}`);
    return {
      error: "Could not analyze login test results",
    };
  }
}

let results = [
  { testName: "Login with valid credentials", status: "PASS" },
  { testName: "Login with invalid password", status: "FAIL" },
  { testName: "Login with empty username", status: "FAIL" },
];

console.log("Valid input:", analyzeLoginResults(results));

console.log("Invalid input:", analyzeLoginResults("Not an array"));