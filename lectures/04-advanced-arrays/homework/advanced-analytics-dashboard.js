// === Task 1: Map Utilities ===
import {
  buildVisualStatuses,
  formatExecutionTimes,
  generateTestEmails,
  ratePerformance
} from "./task01/map-transformation.js"

// === Task 2: Filter Utilities ===
import {
  getFailedResults,
  getHighPriority,
  getSlowTests,
  findTestByKeyword
} from "./task02/filter-views.js";

// === Task 3: Reduce Utilities ===
import {
  countResultsByType,
  averageTimeForPassed,
  findSlowestTest
} from "./task03/reduce-metrics.js";

// === Task 4: Sort Utilities ===
import {
  sortIndicesByTime,
  sortNamesByLength,
  sortByPriority,
  sortFailedByPriorityThenTime
} from "./task04/sort-report.js";

// === Task 5: Destructuring Utilities ===
import {
  readTestRow,
  extractFirstLast,
  quickPassedAlphabetical
} from "./task05/destructuring-utils.js";

// === 1) Dataset ========
const rawTestData = [
  ["login_test",      "PASS",  220,  "HIGH"],
  ["register_test",   "FAIL",  1450, "HIGH"],
  ["payment_test",    "PASS",   95,  "MEDIUM"],
  ["profile_test",    "SKIP",   10,  "LOW"],
  ["search_test",     "FAIL",   480, "LOW"],
  ["orders_test",     "PASS",  520,  "MEDIUM"],
  ["admin_panel",     "PASS",  130,  "HIGH"],
  ["notifications",   "FAIL",  2000, "MEDIUM"],
];

// === Parallel arrays
const names = [];
const results = [];
const times = [];
const priorities = [];

for (let i = 0; i < rawTestData.length; i++) {
    const test = rawTestData[i];
    names.push(test[0]);
    results.push((test[1]));
    times.push(test[2]);
    priorities.push(test[3]);
}

console.log("=== Formatted reports ===");

const visual = buildVisualStatuses(results);
const formatedTimes = formatExecutionTimes(times);

const table = [];
for (let i = 0; i < names.length; i++) {
    table.push({
        name: names[i],
        visualStatus: visual[i],
        formattedTime: formatedTimes[i]
    });
}

console.table(table);

console.log("=== Filtered views ===");

const failedCount = getFailedResults(results).length;
const highPriorityCount = getHighPriority(rawTestData).length;
const slowCount = getSlowTests(rawTestData).length;

console.log("Failed count:", failedCount);
console.log("High-priority count:", highPriorityCount);
console.log("Slow tests (time > 1000ms):", slowCount);

console.log("=== Metrics ===");

const counts = countResultsByType(results);
const passCount = counts[0];
const failCount = counts[2];
const skipCount = counts[3];

const avgPass = averageTimeForPassed(results, times);
const slowestName = findSlowestTest(names, times);

console.log("Counts [PASS, FAIL, SKIP]:", [passCount, failCount, skipCount]);
console.log("Average time for PASSED (ms):", avgPass.toFixed(1));
console.log("Slowest test:", slowestName);

console.log("=== Sorted ===");

const idxBySpeed = sortIndicesByTime(names, times);
const fastestTop3 = [];

for (let i = 0; i < 3 && i < idxBySpeed.length; i++) {
    const index = idxBySpeed[i];
    fastestTop3.push({
        name: names[index],
        time: times[index]
    });
}

console.log("Top 3 fastest by time:");
console.log(fastestTop3);

const failedOnly = [];
for (let i = 0; i < rawTestData.length; i++) {
    if (rawTestData[i][1] === "FAIL") {
        failedOnly.push(rawTestData[i]);
    }
}

const failedSorted = sortFailedByPriorityThenTime(failedOnly);
const display = [];

for (let i = 0; i < failedSorted.length; i++) {
    const test = failedSorted[i];
    display.push({
        name: test[0],
        status: test[1],
        time: test[2],
        priority: test[3]
    });
}

console.log("Failed test by priority then time (slower first within same priority):");
console.table(display);

console.log("=== Quick Passed === (A-Z)");

const quickAZ = quickPassedAlphabetical(rawTestData);
console.log(quickAZ);