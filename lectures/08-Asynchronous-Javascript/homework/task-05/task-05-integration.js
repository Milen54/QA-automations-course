import { delayedLog, delay } from "../task-01/task-01-sync-vs-async.js";
import { runSafeOperation } from "../task-04/task-04-async-await-try-catch.js";

console.log("Preparing test data...");
delayedLog("Preparation step A done", 500);

const operations = ["login", "profile", "dataProcessing", "broken", "summary"];

const testCases = operations.map((name) => {
  const shouldFail = name.includes("broken") || name.includes("fail");
  return { name, shouldFail };
});
console.log("Prepared test cases:", testCases);

async function run() {
  await delay(700);
  console.log("Preparation step B done");

  const results = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < testCases.length; i++) {
    const { name, shouldFail } = testCases[i];
    const res = await runSafeOperation(name, shouldFail);

    if (res.ok) passed++;
    else failed++;

    results.push({
      name: res.name,
      ok: res.ok,
      status: res.status ?? "N/A",
    });
  }

  const summary = { total: results.length, passed, failed, results };
  console.log("=== SUMMARY ===");
  console.log(summary);
}

run().catch((err) => console.error("Runner fatal error:", err.message));
