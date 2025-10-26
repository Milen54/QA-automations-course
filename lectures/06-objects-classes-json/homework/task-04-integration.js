import { getFailedTests, getHighPriorityNames, getTotalDuration } from "./task-01/task-01-objects.js";
import { toJson, fromJson } from "./task-03/task-03-json.js";
import { TestUser, TestCase } from "./task-02/task-02-classes.js";

const user1 = new TestUser("Milen", "milen@test.com", "pass1234", "QA Engineer", true);
const user2 = new TestUser("Roburt", "roburt@test.com", "securePass", "Backend Engineer", false);

const cases = [
    new TestCase("register_test", "Verify user can register"),
    new TestCase("login_test", "Verify user can login"),
    new TestCase("payment_test", "Verify payment gateway"),
    new TestCase("chekout_test", "Verify checkout flow"),
    new TestCase("search_product_test", "Verify search works"),
];

cases[0].priority = "high";
cases[1].priority = "high";
cases[2].priority = "medium";
cases[3].priority = "low";
cases[4].priority = "low";

cases[0].start(); cases[0].complete("FAIL", 1300);
cases[1].start(); cases[1].complete("SKIP", 800);
cases[2].start(); cases[2].complete("PASS", 200);
cases[3].start(); cases[3].complete("PASS", 350);

// === BASIC METRICS ===
const totalCases = cases.length;
const totalDuration = getTotalDuration(cases);
const failedCount = getFailedTests(cases).length;

console.log("=== BASIC METRICS ===");
console.log("Total cases:", totalCases);
console.log("Total duration (ms):", totalDuration);
console.log("Number of FAILs:", failedCount);

// === PRIORITY HIGHLIGHTS ===
const highPriorityNames = getHighPriorityNames(cases);

console.log("=== PRIORITY HIGHLIGHTS ===");
console.log("High priority test names:", highPriorityNames);

// === USER VALIDATION ===
console.log("=== USER VALIDATION ===");

console.log("User 1 info:", user1.getInfo());
console.log("Valid:", user1.validate());

console.log("User 2 info:", user2.getInfo());
console.log("Valid:", user2.validate());

// === JSON SUMMARY ===
const report = {
    suiteName: "Mini Suite",
    environment: "staging",
    totalCases,
    totalDuration,
    failedCount,
    highPriorityNames
};

const jsonSummary = toJson(report);
console.log("JSON summary:", jsonSummary);

const parsed = fromJson(jsonSummary);
console.log("Parsed back -> suiteName:", parsed.suiteName);
console.log("Parsed back -> failedCount:", parsed.failedCount);