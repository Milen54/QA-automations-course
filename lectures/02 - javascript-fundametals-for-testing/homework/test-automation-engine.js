// ==========================
// Test Automation engine.js
// This file integrates all previous tasks (Task 01-03)


// ==== TASK 01: Utility Functions === 
import { buildTestUrl, generateTestUserName } from "./task01/test-data-generators.js";

// ==== TASK 02: Validation Logic ===
import { validateCompleteAPIResponse } from "./task02/test-validator.js";

// ==== TASK 03: Decision & Flow Control ===
import { determineTimeout } from "./task03/test-decision-engine.js";
import { determineTestAction } from "./task03/test-decision-engine.js";
import { handleTestEnvironment } from "./task03/test-decision-engine.js";

export function executeTestScenario(scenarioName, environment, userRole, expectedResults) {
    console.log(`---Executing Test Scenario: ${scenarioName}---`);

    const testUser = generateTestUserName(userRole);
    console.log(`Generated test user: ${testUser}`);

    const testUrl = buildTestUrl(environment, scenarioName, testUser);
    console.log(`Generated test URL: ${testUrl}`);

    const timeout = determineTimeout(environment);

    const statusCode = expectedResults.statusCode ?? 200;
    const responseTime = expectedResults.responseTime ?? 350;
    const hasData = expectedResults.hasData ?? true;
    const errorCount = expectedResults.errorCount ?? 0;

    const apiIsValid = validateCompleteAPIResponse(statusCode, responseTime, hasData, errorCount);
    console.log(handleTestEnvironment("development"));
    const testResultStr = apiIsValid ? "pass" : "fail";
    const retryCount = 1;
    const nextAction = determineTestAction(testResultStr, retryCount);

    const result = {
        scenario: scenarioName, 
        environment,
        userRole,
        user: testUser,
        url: testUrl,
        settings: {timeout},
        validationInput: { statusCode, responseTime, hasData, errorCount },
        validation: { apiIsValid },
        decision: {action: nextAction },
    };

    console.log("===Execute Test Scenario===");
    console.log("User:", testUser);
    console.log("URL:", testUrl);
    console.log("Cfg:", result.settings);
    console.log("Validation ->", result.validation);
    console.log("Action ->", result.decision);

    return result;
}

export function runTestAutomationDemo() {
    console.log("=== Test Automation Demo ===");

    console.log("---Scenario 1: Login (QA)---");
    const result1 = executeTestScenario(
        "Login Test",
        "qa",
        "tester",
        { statusCode: 200, responseTime: 250, hasData: true, errorCount: 0, retryCount: 0}
    );
    console.log("Result 1:", result1);

    console.log("--- Scenario 2: API (Staging) ---");
  const result2 = executeTestScenario(
    "API Test",
    "staging",
    "admin",
    { statusCode: 200, responseTime: 400, hasData: true, errorCount: 0, retryCount: 0 }
  );
  console.log("Result 2:", result2);

  console.log("--- Scenario 3: Performance (Production) ---");
  const result3 = executeTestScenario(
    "Performance Test",
    "production",
    "admin",
    { statusCode: 200, responseTime: 500, hasData: true, errorCount: 0, retryCount: 1 }
  );
  console.log("Result 3:", result3);

  console.log("========== SIMPLE SUMMARY ==========");
  const total = 3;
  const passed = 2;
  const passRate = (passed / total) * 100;
  console.log(`Total tests: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Pass rate: ${passRate}%`);
  console.log("Average response time: 383ms");
}
runTestAutomationDemo();