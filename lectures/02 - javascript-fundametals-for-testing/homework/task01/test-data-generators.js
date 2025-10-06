export function generateTestUserName(basePrefix) {
  const timestamp = Date.now();

  const username = basePrefix + "_" + timestamp;

  console.log(username);
  return username;
}
// generateTestUserName("testuser");

export function buildTestUrl(environment, endpoint, userid) {
  const URL = `https://${environment}.testsite.com/${endpoint}?user=${userid}`;
  console.log(URL);
}
// buildTestUrl("Quality Assurance", "tests", "22");

function createTestMessage(testName, status, duration) {
  const testMessage = `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`;
  console.log(testMessage);
}
createTestMessage("Add to cart", "approved", "5");

export function calculateResponseTime(startTime, endTime) {
  let duration = endTime - startTime;
  console.log(`Response time: ${duration}ms`);

  return duration;
}
// calculateResponseTime(15, 16);

export function calculateSuccessRate(totalTests, passedTests) {
  let failedTests = totalTests - passedTests;
  let successRate = (passedTests / totalTests) * 100;

  console.log(`Total tests: ${totalTests}`);
  console.log(`Passed tests: ${passedTests}`);
  console.log(`Failed tests: ${failedTests}`);
  console.log(`Success rate: ${successRate}%`);

  return { totalTests, passedTests, failedTests, successRate };
}
// calculateSuccessRate(10, 5);

function adjustTimeout(baseTimeout, multiplier) {
  let timeout = baseTimeout * multiplier;
  if (timeout > 3000) {
    timeout = timeout % 30000;
  }

  console.log(`Original timeout: ${baseTimeout}ms`);
  console.log(`Adjusted timeout: ${timeout}ms`);

  return timeout;
}
adjustTimeout(12000, 3);
adjustTimeout(15000, 3);

function incrementTestCounter(currentCount) {
  console.log(`Original: ${currentCount}`);

  currentCount++;
  console.log(`After +1: ${currentCount}`);

  currentCount += 5;
  console.log(`After +5: ${currentCount}`);

  console.log(`Final: ${currentCount}`);
  return currentCount;
}
incrementTestCounter(10);

function processTestEnvironment(environmentName = "") {
  const originalName = String(environmentName);

  const normalizedName = originalName.trim().toLowerCase().replace(/\s+/g, "-"); // Research for this, because of edge cases such as Qa Dev
  // if not using it will result in invailid URL, because of whitespaces

  const baseURL = `https://${normalizedName}.example.com`;
  const displayName = environmentName.toUpperCase();

  console.log(`Original name: ${originalName}`);
  console.log(`Normalized name: ${normalizedName}`);
  console.log(`Base URL: ${baseURL}`);
  console.log(`Display name: ${displayName}`);

  return { originalName, normalizedName, baseURL, displayName };
}
processTestEnvironment("Qa Dev");

function extractTestInfo(testResultString) {
  const parts = testResultString.split(":");

  const testName = parts[0];
  const status = parts[1];
  const durationString = parts[2];

  const duration = Number(durationString.replace("ms", ""));

  console.log(`Test Name: ${testName}`);
  console.log(`Status: ${status}`);
  console.log(`Duration: ${duration}ms`);

  return { testName, status, duration };
}
extractTestInfo("AddToCart:PASSED:250ms");

function buildTestSummary(testName, environment, userCount, avgResponseTime) {
  let totalExecutionTime = userCount * avgResponseTime;
  const summary = `
    Test Name: ${testName}
    Environment: ${environment}
    User Count: ${userCount}
    Average Response Time: ${avgResponseTime}ms
    Total Execution Time: ${totalExecutionTime}ms`;

  console.log(summary);
  return summary;
}
buildTestSummary("Add to Cart", "QA", 5, 230);
