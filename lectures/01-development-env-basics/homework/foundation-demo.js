import { displayEnvironmentInfo } from "./task01/verify-setup.js";
import {
  generateUniqueEmail,
  validateEmail,
} from "./taks02/test-data-config.js";
import {
  startTestSuite,
  endTestSuite,
  logTestStep,
  generateTestReport,
} from "./task03/test-execution-helper.js";

function runFoundationDemo() {
  console.log("=== Running Foundation Demo ===");

  // Task01
  console.log("--- Task01: Environment Verification ---");
  displayEnvironmentInfo();

  // Task02
  console.log("--- Taks02: Test Data Validation ---");
  const email = generateUniqueEmail();
  console.log(`Generated email: ${email}`);
  console.log(`Is valid? ${validateEmail(email)}`);

  // Task03
  console.log("--- Task03: Test Execution Helper ---");
  logTestStep(2, "Open logi page", "pass");

  console.log("-------");
  logTestStep(5, "Open dashboard", "fail");

  console.log("=== Demo Completed ===");
}

function simulateLoginTest() {
  startTestSuite("TestLoginEmail");
  let testEmail = generateUniqueEmail("Milen");
  console.log(validateEmail(testEmail));

  logTestStep(3, "Successful login", "pass");
  logTestStep(4, "Failed to login", "fail");
  logTestStep(5, "Unknown status", "error");

  endTestSuite("Test Login Email", startTestSuite("Milen"));

  let test = {
    passed: 1,
    failed: 2,
    skipped: 3,
  };
  generateTestReport(test);
}
simulateLoginTest();
runFoundationDemo();
