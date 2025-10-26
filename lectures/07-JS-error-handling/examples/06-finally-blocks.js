function executeTestWithCleanUp(testName, shouldFail = false) {
  let testStartTime = Date.now();
  let testStatus = "UNKNOWN";

  try {
    console.log(`Starting test: ${testName}`);

    if (shouldFail) {
      throw new Error("Simulated test feilure");
    }
    console.log("Test logic completed successfully");
    testStatus = "PASS";
  } catch (error) {
    console.log("Test failed:", error.message);
    testStatus = "FAIL";
  } finally {
    let testEndTime = Date.now();
    let duration = testEndTime - testStartTime;

    console.log(
      `Cleanup: Test ${testName} completed in ${duration}ms with status: ${testStatus}`
    );

    console.log("Cleanup: Resources released");
    console.log("Cleanup: Logs saved");
  }
}
executeTestWithCleanUp("successfull_test", false);
console.log();
executeTestWithCleanUp("failing_test", true);
