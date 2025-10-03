function startTestSuite(suiteName) {
  console.log("Starting Test Suite:", suiteName);

  let startTime = new Date().toISOString();
  console.log("Start Time:", startTime);

  return startTime;
}
// startTestSuite("Milen");

function endTestSuite(suiteName, startTime) {
  let endTime = new Date();

  let duration = endTime - new Date(startTime);

  console.log(`Test Suite "${suiteName}" completed`);
  console.log(`Duration: ${duration} ms`);

  return duration;
}
let startTime = startTestSuite("Milen");

endTestSuite("Milen", startTime);

function logTestStep(stepNumber, description, status) {
  const timestamp = new Date().toISOString();

  let message = `[${timestamp}] Step ${stepNumber}: ${description} => ${status.toUpperCase()}`;

  if (status.toLowerCase() === "pass") {
    console.log(message);
  } else if (status.toLowerCase() === "fail") {
    console.error(message);
  } else {
    console.warn(message);
  }
}
logTestStep(2, "Open login page", "pass");

function generateTestReport(testResults) {
  let totalTest = testResults.passed + testResults.failed + testResults.skipped;
  let passPercentage = (testResults.passed / totalTest) * 100;
  console.log("Total tests:", totalTest);
  console.log("Passed percentage:", passPercentage.toFixed(2) + "%");
  console.log("Total result:", testResults);
}
let testResults = {
  passed: 1,
  failed: 2,
  skipped: 3,
};
generateTestReport(testResults);

function debugVariable(variableName, variableValue) {
  const type = typeof variableValue;
  console.log(
    `Variable: ${variableName} | Value: ${variableValue} | Type: ${type}`
  );
}

let age = 25;
let isActive = true;
let name = "Milen";

debugVariable("age", age);
debugVariable("isActive", isActive);
debugVariable("Milen", name);
