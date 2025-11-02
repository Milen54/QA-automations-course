let testEnvironment = "staging";
let maxRetries = 3;

export function runTest(testName) {
   let testResult = "";
   let attempts = 0;

   if (testEnvironment === "staging" && maxRetries >= 3) {
    testResult = "PASS";
    attempts++;
   } else {
    testResult = "FAIL";
    attempts++;
   }

  return `${testName}: ${testResult} (attempts: ${attempts}/${maxRetries}, env: ${testEnvironment})`;
}
// console.log(runTest("Login test"));
// console.log(runTest("Checkout test"));

export function configureRetries(newMaxRetries) {
    return maxRetries = newMaxRetries;
}
// console.log("New Max Retries =", configureRetries(5));
// console.log(runTest("Retry Config Test"));


// // Demonstration calls

// // 1. Show globals before changing
// console.log("Before configureRetries:");
// console.log("testEnvironment =", testEnvironment);
// console.log("maxRetries =", maxRetries);

// // 2. Change global value
// configureRetries(5);

// // 3. Show globals after changing
// console.log("After configureRetries:");
// console.log("testEnvironment =", testEnvironment);
// console.log("maxRetries =", maxRetries);

// // 4. Call runTest multiple times
// console.log(runTest("Login Test"));
// console.log(runTest("Chekout Test"));

// // 5. Demonstrate scope rule

// // ❌ Uncommenting this line causes an error because 'attempts' is function-scoped
// //console.log(attempts);
