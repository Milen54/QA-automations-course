// This file integrates: initialization --> queue --> processing --> analyzing

import { initializeTestData, buildTestQueue } from "./homework/task01/test-data-manager.js";
import { processAllTestUsers } from "./homework/task02/test-processing-engine.js";
import { analyzeTestResults } from "./homework/task03/advanced-test-processor.js";

export function executeFullTestSuite() {
  console.log("=== Step 1: InitializeTestData ===");
  const [testUsers, environments, browsers] = initializeTestData();

  console.log("=== Step 2: buildTestQueue ===");
  const testQueue = buildTestQueue();

  console.log("=== Step 3: processAllTestUsers (simulate execution) ===");
  const processedUsersCount = processAllTestUsers(testUsers);

  const names = ["login_test", "logout_test", "register_test"];
  const statuses = ["PASS", "FAIL", "PASS"];
  const times = [100, 2500, 400];

  console.log("=== Step 4: analyzeTestResults ===");
  const [totalCount, passCount, failCount, slowCount] = analyzeTestResults(names, statuses, times);

  console.log("=== Final summary ===");
  console.log(
    "Processed users:", processedUsersCount,
    "| Total:", totalCount, "| Pass:", passCount, "| Fail:", failCount, "| Slow:", slowCount
  );

  return { processedUsersCount, totalCount, passCount, failCount, slowCount, names, statuses, times };
}

// const summary = executeFullTestSuite();
// console.log("Summary object:", summary);

// === Integration Step 2: Build Complete Demo Workflow ===
export function runTestSuiteDemo() {
  console.log("\n================= DEMO: Test Suite Workflow =================");

  // 1) Sample data (масиви, без сложност)
  console.log("\n--- Phase A: Initialize sample test data ---");
  const sampleUsers = ["anna@example.com", "bob@example.com", "carl@example.com"];
  const sampleCases = ["login_test", "logout_test", "register_test"];
  const sampleEnvs  = ["dev", "staging", "production"];
  console.log("users:", sampleUsers.length, "cases:", sampleCases.length, "envs:", sampleEnvs.length);

  // 2) Process test cases (for loop)
  console.log("\n--- Phase B: Process cases with for loop ---");
  let processed = 0;
  for (let i = 0; i < sampleCases.length; i++) {
    console.log(`processing case ${i + 1}: ${sampleCases[i]}`);
    processed++;
  }
  console.log("processed by for-loop:", processed);

  // 3) Handle retries (while loop)
  console.log("\n--- Phase C: Handle retries with while loop ---");
  let retriesLeft = 2;
  let flakyPassed = false;
  while (!flakyPassed && retriesLeft > 0) {
    console.log(`attempt -> ${3 - retriesLeft + 1}`);
    // много проста симулация: първият опит fail, после pass
    if (retriesLeft === 2) {
      console.log("result: FAIL");
      retriesLeft--;
    } else {
      console.log("result: PASS");
      flakyPassed = true;
    }
  }
  console.log("flaky final:", flakyPassed ? "PASS" : "FAIL");

  // 4) Analyze results (conditionals in loops)
  console.log("\n--- Phase D: Analyze results with if/else ---");
  const demoStatuses = ["PASS", "FAIL", "PASS"];     // толкова ни стига за демото
  const demoTimes    = [120, 2300, 380];             // ms
  let passCount = 0, failCount = 0, slowCount = 0;
  for (let i = 0; i < demoStatuses.length; i++) {
    const s = demoStatuses[i];
    const t = demoTimes[i];
    if (s === "PASS") passCount++;
    else failCount++;
    if (t > 2000) slowCount++;
  }
  console.log(`analysis -> total:${demoStatuses.length} | pass:${passCount} | fail:${failCount} | slow:${slowCount}`);

  // 5) Generate quick “report”
  console.log("\n--- Phase E: Quick report ---");
  console.log("Users:", sampleUsers.join(", "));
  console.log("Cases:", sampleCases.join(", "));
  console.log("Envs :", sampleEnvs.join(", "));
  console.log("Stats:", { passCount, failCount, slowCount });

  // 6) Call your integrated workflow
  console.log("\n--- Phase F: Run executeFullTestSuite() ---");
  const summary = executeFullTestSuite();   // <- използваш вече написаната функция
  console.log("executeFullTestSuite() summary:", summary);

  // 7) Final metrics from demo + integrated
  console.log("\n================= DEMO: Completed =================\n");
  return {
    demoTotals: { total: demoStatuses.length, passCount, failCount, slowCount },
    integratedSummary: summary
  };
}

// В края на файла (както изисква условието):
runTestSuiteDemo();
