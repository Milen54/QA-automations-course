let baseTimeOut = 5000; 
let additionalTime = 2000;
let totalTimeout = baseTimeOut + additionalTime;
console.log("Total timeout:", totalTimeout + "ms");

// Calculating test execution times
let testStartTime = 1000;
let testEndTime = 3500;
let executionTime = testEndTime - testStartTime;
console.log("Test executed in:", executionTime + "ms");

// Working with counts and iterations
let totalTest = 20;
let failedTests = 3;
let passedTest = totalTest - failedTests;
let successRate = (passedTest / totalTest) * 100;
console.log("Success rate:", successRate + "%");

// Modulo operator
let testDataSets = 4; 
let currentIteration = 7;
let dataSetToUse = currentIteration % testDataSets; 
console.log("Using test data set:", dataSetToUse);

// Incremeting counters (common in loop)
let attemptCount = 0;
attemptCount++;
//attemptCount--;
console.log("Attempt number:", attemptCount);