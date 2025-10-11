function analyzeTestResults(testNames, testResults, executionTime) {
  let criticalFailures = [];
  let slowTest = [];
  let quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    const name = testNames[i];
    const result = String(testResults[i]);
    const time = Number(executionTime[i]);

    if (result === "FAIL" && name.includes("login")) {
      criticalFailures.push(name);
      console.log(`CRITICAL: ${name} failed (${time} ms)`);
    } else if (result === "PASS" && time > 2000) {
      slowTest.push(name);
      console.log(`SLOW PASS: ${name} -> ${time} ms`);
    } else if (result === "PASS" && time < 500) {
      quickPasses.push(name);
      console.log(`QUICK PASS: ${name} -> ${time} ms`);
    }
  }
  console.log(
    `Counts -> critical: ${criticalFailures.length}, slow: ${slowTest.length}, quick: ${quickPasses.length}`
  );

  return [criticalFailures, slowTest, quickPasses];
}
let tests = ["login_test", "logout_test", "register_test"];
let results = ["FAIL", "PASS", "PASS"];
let time = [1200, 2500, 100];
analyzeTestResults(tests, results, time);

function processTestEnvironments(testCases, environments) {
  const environmentResults = [];

  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];

    for (let j = 0; j < environments.length; j++) {
      const env = environments[j];

      let failChance;
      if (env === "production") {
        failChance = 0.4; // 40%
      } else {
        failChance = 0.15; // 15%
      }

      const roll = Math.random();
      let status;
      if (roll < failChance) {
        status = "FAIL";
      } else {
        status = "PASS";
      }

      // Use AI to format the results as a table :)
      environmentResults.push({
        test,
        environment: env,
        status,
        roll: Number(roll.toFixed(2)),
        failChance: Math.round(failChance * 100) + "%",
      });
    }
  }

  return environmentResults;
}
const tests1 = ["login_test", "logout_test", "register_test"];
const envs = ["dev", "staging", "production"];

const results1 = processTestEnvironments(tests1, envs);
console.table(results1);

function validateTestDataQuality(emails, passwords, ages) {
  let validUsers = [];
  let invalidUsers = [];
  let fixableUsers = [];

  const validationRows = [];

  for (let i = 0; i < emails.length; i++) {
    const email = String(emails[i]);
    const password = String(passwords[i]);
    const age = Number(ages[i]);

    let validEmail = false;
    if (email.includes("@") && email.includes(".")) {
      validEmail = true;
    }

    let validPass = false;
    if (password.length >= 8) {
      validPass = true;
    }

    let validAge = false;
    if (age >= 18 && age <= 100) {
      validAge = true;
    }

    validationRows.push({
      email,
      validEmail,
      validPass,
      validAge,
    });

    let failCount = 0;
    if (!validEmail) {
      failCount = failCount + 1;
    }
    if (!validAge) {
      failCount = failCount + 1;
    }

    if (failCount === 0) {
      validUsers.push(email);
    } else if (failCount === 1) {
      fixableUsers.push(email);
    } else {
      invalidUsers.push(email);
    }
  }
  console.table(validationRows);

  return [validUsers, invalidUsers, fixableUsers];
}
const emails = [
  "milen@example.com",
  "bademail",
  "valid@example.com",
  "invalid@example",
];
const passwords = ["12345678", "short", "verystrongpass", "12345678"];
const ages = [23, 24, 32, 120];

const result = validateTestDataQuality(emails, passwords, ages);

const validUsers = result[0];
const invalidUsers = result[1];
const fixableUsers = result[2];

console.log("Valid users:", validUsers);
console.log("Invalid users:", invalidUsers);
console.log("Fixable users:", fixableUsers);

function findFirstCriticalError(testResults, errorMessages) {
    let foundIndex = -1;

    for (let i = 0; i < testResults.length; i++) {
        const tResult = String(testResults[i]);
        const eMessage = String(errorMessages[i]);

        if (tResult === "FAIL") {
            if (eMessage.toLowerCase().includes("critical")) {
                console.log(`Critical error at index ${i} --> message: "${eMessage}", result: ${tResult}`);
                foundIndex = i;
                break;
            } else {
                console.log(`Non-critical fail at index ${i} --> message: "${eMessage}"`);
            }
        }
    }

    if (foundIndex === -1) {
        console.log("No critical errors found.");
    }

    return foundIndex;
}
const testResults = ["PASS", "FAIL", "FAIL", "PASS"];
const errorMessages = ["ok", "network_timeout", "CRITICAL: DB unreachable", "n/a"];

const idx = findFirstCriticalError(testResults, errorMessages);
console.log("First critical index:", idx);

function processValidTestsOnly(testNames, testStatuses) {
    let processedTests = [];

    for (let i = 0; i < testNames.length; i++) {
        const name = String(testNames[i]);
        const status = String(testStatuses[i]).toUpperCase();

        if (status === "SKIP" || status === "INVALID") {
            console.log(`Skipping ${name} - status: ${status}`);
            continue;
        }

        console.log(`Processed ${name} - status: ${status}`);
        processedTests.push(name);
    }

    return processedTests;
}
const testNames = ["login_test", "register_test", "logout_test", "profile_test"];
const testStatuses = ["PASS", "SKIP", "INVALID", "FAIL"];

const processed = processValidTestsOnly(testNames, testStatuses);
console.log("Processed tests:", processed);

function monitorTestExecutionWithLimits(testQueue, maxFailures) {
    let failureCount = 0;
    let processedCount = 0;

    while (testQueue.length > 0) {
        const currentTest = testQueue.pop();

        const roll = Math.random();
        let isFail = false;
        if (roll < 0.3) {
            isFail = true;
        }

        processedCount++;

        if (isFail) {
            failureCount++;
            console.log(
                `FAIL --> ${currentTest} | roll = ${roll.toFixed(2)} | failures = ${failureCount}/${maxFailures} | left ${testQueue.length}`
                );

                if (failureCount >= maxFailures) {
                    console.log("Stopping: failure limit reached.");
                    break;
                }
        } else {
            console.log(
                `PASS --> ${currentTest} | roll = ${roll.toFixed(2)} | failures ${failureCount}/${maxFailures} | left ${testQueue.length}`
            );
        }
    }
    return [processedCount, failureCount, testQueue.length];
}
const queue = ["login_test", "logout_test", "registration_test", "profile_update"];
const res = monitorTestExecutionWithLimits(queue, 2);

console.log("Processed:", res[0]);
console.log("Failures:",  res[1]);
console.log("Remaining in queue:", res[2]);


function executeComprehensiveTestSuite(testCases, environments, userRoles) {
  const passed   = [];
  const failed   = [];
  const critical = [];
  const skipped  = [];
  const all      = [];

  for (let i = 0; i < testCases.length; i++) {
    const tCase = testCases[i];

    for (let j = 0; j < environments.length; j++) {
      const env = environments[j];

      let failuresInEnv = 0;

      for (let k = 0; k < userRoles.length; k++) {
        const role = userRoles[k];

        if (role === "guest" && env === "production") {
          const entry = `${tCase}|${env}|${role}|SKIP`;
          skipped.push(entry); all.push(entry);
          console.log("Skipping:", entry, "- guest не пускаме на production");
          continue; 
        }
        if (tCase.indexOf("legacy") >= 0 && env !== "dev") {
          const entry = `${tCase}|${env}|${role}|SKIP`;
          skipped.push(entry); all.push(entry);
          console.log("Skipping:", entry, "- legacy върви само на dev");
          continue;
        }

        let failRate;
        if (env === "dev") {
          failRate = 0.10;
        } else if (env === "staging") {
          failRate = 0.20;
        } else if (env === "production") {
          failRate = 0.30;
        } else {
          failRate = 0.15;
        }

        if (role === "admin") {
          failRate = failRate + 0.10; 
        } else if (role === "guest") {
          failRate = failRate - 0.05; 
        }
        if (failRate < 0) failRate = 0;
        if (failRate > 1) failRate = 1;

        const roll = Math.random(); // 0..1
        let status;
        if (roll < failRate) {
          status = "FAIL";
        } else {
          status = "PASS";
        }

    
        let isCriticalCase = false;
        if (
          tCase.indexOf("payment") >= 0 ||
          tCase.indexOf("delete") >= 0 ||
          tCase.indexOf("security") >= 0
        ) {
          isCriticalCase = true;
        }
        if (status === "FAIL" && isCriticalCase && env === "production" && role === "admin") {
          status = "CRITICAL_FAIL";
        }

        const entry = `${tCase}|${env}|${role}|${status}`;
        all.push(entry);
        if (status === "PASS") {
          passed.push(entry);
        } else if (status === "FAIL") {
          failed.push(entry);
        } else if (status === "CRITICAL_FAIL") {
          critical.push(entry);
        } else if (status === "SKIP") {
          skipped.push(entry);
        }
        console.log("Processed:", entry);

        if (status === "FAIL" || status === "CRITICAL_FAIL") {
          failuresInEnv = failuresInEnv + 1;
        }
        if (status === "CRITICAL_FAIL") {
          console.log("Stop roles loop (CRITICAL):", tCase, "@", env);
          break; 
        }
        if (failuresInEnv >= 3) {
          console.log("Stop roles loop (many FAILs):", tCase, "@", env);
          break;
        }
      }
    }
  }

  console.log(
    "Summary ->",
    "PASS:", passed.length,
    "FAIL:", failed.length,
    "CRITICAL:", critical.length,
    "SKIP:", skipped.length
  );

  return { passed, failed, critical, skipped, all };
}
const tests2 = ["login_test", "register_test", "payment_test", "delete_user_legacy"];
const envs1  = ["dev", "staging", "production"];
const roles = ["guest", "member", "admin"];
const res1 = executeComprehensiveTestSuite(tests2, envs1, roles);
console.log(res1);

function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes,
  resultEnvironments 
) {
  let totalCount = 0;
  let passCount = 0;
  let failCount = 0;
  let slowCount = 0;

  let failedNames = [];
  let slowNames = [];

  let envNames = [];
  let envPassCounts = [];
  let envFailCounts = [];

  const SLOW_MS = 2000;

  for (let i = 0; i < resultNames.length; i++) {
    const name = String(resultNames[i]);                 
    const status = String(resultStatuses[i]).toUpperCase();
    const time = Number(resultTimes[i]);
    const env = resultEnvironments ? String(resultEnvironments[i] || "") : "";

    totalCount++;

    if (status === "PASS") {
      passCount++;
    } else if (status === "FAIL") {
      failCount++;
      failedNames.push(name);
    }

    if (time > SLOW_MS) {
      slowCount++;
      slowNames.push(name);
    }

    if (resultEnvironments) {
      let idx = -1;
      for (let j = 0; j < envNames.length; j++) {
        if (envNames[j] === env) { idx = j; break; }
      }
      if (idx === -1) {
        envNames.push(env);
        envPassCounts.push(0);
        envFailCounts.push(0);
        idx = envNames.length - 1;
      }
      if (status === "PASS") envPassCounts[idx] = envPassCounts[idx] + 1;
      else if (status === "FAIL") envFailCounts[idx] = envFailCounts[idx] + 1;
    }
  }

  console.log("=== Detailed Test Report ===");
  console.log("Total:", totalCount, "| Pass:", passCount, "| Fail:", failCount, "| Slow:", slowCount);
  if (failedNames.length) console.log("Failed tests:", failedNames.join(", "));
  if (slowNames.length)   console.log("Slow tests:", slowNames.join(", "));

  if (resultEnvironments) {
    console.log("--- By environment ---");
    for (let k = 0; k < envNames.length; k++) {
      console.log(envNames[k] + " -> PASS:", envPassCounts[k], "| FAIL:", envFailCounts[k]);
    }
  }

  return [totalCount, passCount, failCount, slowCount];
}

const names = ["login_test", "logout_test", "profile_test", "payments_test"];
const statuses = ["PASS", "FAIL", "PASS", "FAIL"];
const times = [500, 2500, 300, 2800];
const envs2 = ["dev", "staging", "dev", "production"];

const metrics = generateDetailedTestReport(names, statuses, times, envs2);
console.log("Returned metrics:", metrics);
