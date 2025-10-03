import { verifySetup } from "./task01/verify-setup.js";
import { generateUniqueEmail, validateEmail } from "./taks02/test-data-config.js";
import { startTestSuite, endTestSuite, logTestStep, generateTestReport } from "./task03/test-execution-helper.js";

function runFoundationDemo() {
    console.log("=== Running Foundation Demo ===");

    // Task01
    console.log("--- Task01: Environment Verification ---");
    verifySetup();

    // Task02
    console.log("--- Taks02: Test Data Validation ---");
    const email = generateUniqueEmail();
    console.log(`Generated email: ${email}`);
    console.log(`Is valid? ${validateEmail(email)}`);

    // Task03
    console.log("--- Task03: Test Execution Helper ---");
    logTestStep("Environment verified", true);
    logTestStep("Email validation successful", true);

    console.log("=== Demo Completed ===");
}
runFoundationDemo();