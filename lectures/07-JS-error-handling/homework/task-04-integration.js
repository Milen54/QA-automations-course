import { safeParse, safeSuccessRate } from "./task-01/task-01-try-catch.js";
import {
  validateRequired,
  validateArray,
  validateRange,
  validateTestResults,
} from "./task-02/task-02-throw.js";

import { runWithCleanup } from "./task-03/task-03-finally.js";

const configJson = JSON.stringify({
  environment: "staging",
  baseUrl: "https://example.test",
  retries: 1,
});

const rawResults = [
  { name: "Login valid user", status: "PASS", duration: 120 },
  { name: "Login invalid pass", status: "FAIL", duration: 45 },
  { name: "Forgot password link", status: "SKIP", duration: 0 },
];

console.log("configJson:", configJson);
console.log("rawResults:", rawResults);

const parsed = safeParse(configJson);

if (!parsed.ok) {
  console.log("Config parse error:", parsed.error);
  process.exit(1);
}

const config = parsed.data;

validateRequired(config.environment, "environment");
validateRequired(config.baseUrl, "baseUrl");
validateRequired(config.retries, 0, 3, "retries");

console.log("Config OK:", config);

// --- Step 5: Validate config ---
try {
  validateRequired(config.environment, "environment");
  if (
    typeof config.environment !== "string" ||
    config.environment.trim() === ""
  ) {
    throw new Error("environment must be a non-empty string");
  }

  validateRequired(config.baseUrl, "baseUrl");
  if (!config.baseUrl.includes("http")) {
    throw new Error("baseUrl must include 'http'");
  }

  validateRange(config.retries, 0, 5, "retries");

  console.log("✅ Config validated successfully:", config);
} catch (error) {
  console.log("❌ Config validation failed:", error.message);
  process.exit(1);
}

// --- Step 6: Validate test results array ---
try {
    validateArray(rawResults, "rawResults");
    
    validateTestResults(rawResults);
    console.log("✅ Test results validated successfully");
} catch (error) {
    console.log("❌ Test results validation failed:", error.message);
    process.exit(1);
}

// --- Step 7: Execute each item safely ---
let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;

for (let i = 0; i < rawResults.length; i++) {
    const test = rawResults[i];
    try {
        if(test.status === "FAIL") {
            throw new Error(`Test failed: ${test.name}`);
        } else if (test.status === "SKIP") {
            skipped ++;
            console.log(`⚠️ Skipped: ${test.name}`);
        } else {
            passed++;
            console.log(`✅ Passed: ${test.name}`);
        }
        totalDuration += test.duration;
    } catch (error) {
        failed++;
        console.log("❌ Error during test:", error.message);
    }
}

// --- Step 8: Compute and log basic metrics ---
const totalCases = rawResults.length;
const failedCount = failed;
const successRate = safeSuccessRate(passed, totalCases);
const duration = totalDuration;

console.log("=== Test Summary ===");
console.log("Total cases:", totalCases);
console.log("✅ Passed:", passed);
console.log("❌ Failed:", failedCount);
console.log("⚠️ Skipped:", skipped);
console.log("⏱️ Total duration:", duration, "ms");
console.log("📊 Success rate:", successRate);

// --- Step 9: Build report object ---
const report = {
    environment: config.environment,
    totalCases,
    failedCount,
    passed,
    skipped,
    successRate,
    totalDuration
};

// --- Step 10: Convert to JSON and log ---
const reportJson = JSON.stringify(report);
console.log("REPORT JSON:", reportJson);

// --- Step 11: Cleanup demo with runWithCleanup ---
console.log("--- Cleanup demo ---");
runWithCleanup({ name: "finalize", shouldFail: false});
