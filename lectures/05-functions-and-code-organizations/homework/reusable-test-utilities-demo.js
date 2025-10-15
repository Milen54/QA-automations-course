import {
  countPassedTests,
  formatExecutionTime,
  findFailedTests,
} from "./task01/functions-declaration-basics.js";

import {
  isValidEmail,
  formatDuration,
} from "./task02/parameters-and-returns.js";

import {
  testResultArrow,
  calculateAverageArrow,
} from "./task03/function-types.js";

import { runTest, configureRetries } from "./task04/scope-experiments.js";

let names = [
  "login_test",
  "logout_test",
  "checkout_test",
  "register_test",
  "finishOrder_test",
  "verify_test",
];
let results = ["PASS", "PASS", "FAIL", "SKIP", "SKIP", "FAIL"];
let times = [1000, 1200, 800, 600, 400, 150];

console.log("==== BASIC METRICS ====");

let total = results.length;
let passed = countPassedTests(results);
let successRate = ((passed / total) * 100).toFixed(1);

console.log("Total tests:", total);
console.log("Passed tests:", passed);
console.log("Success rate:", successRate + "%");

console.log("==== FAILURES ====");
console.log("Failed tests:", findFailedTests(names, results));

console.log("==== FORMATED TIMES ====");
times.forEach((t) => {
  console.log(formatExecutionTime(t));
});

console.log("==== EMAIL VALIDATION (SAMPLE)");
console.log(isValidEmail("qa@testcompany.com"));
console.log(isValidEmail("invalid-email"));
console.log(isValidEmail("milen.demo.org"));

console.log("==== AVERAGE EXECUTION TIME ====");
console.log("Average:", calculateAverageArrow(times).toFixed(1) + "ms");

console.log("==== SCOPE DEMO ====");
console.log(runTest("Login Test"));
configureRetries(5);
console.log(runTest("Checkout Test"));