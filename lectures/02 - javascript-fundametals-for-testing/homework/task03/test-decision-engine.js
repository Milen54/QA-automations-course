export function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    console.log("Test passed!");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log("Try again");
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log("Failed!");
    return "abort";
  } else {
    console.log("Unknown result message!");
    return "investigate";
  }
}
// determineTestAction("pass", 1);
// determineTestAction("fail", 2);
// determineTestAction("Milen", -145);

export function validateTestData(email, password, age) {
  if (email != null && email.includes("@")) {
    console.log("Email is not null and includes @");
    if (password.length >= 8) {
      console.log("Password length is valid (>=8)");
      if (age >= 18 && age <= 100) {
        console.log("Age is between 18 and 100");
        console.log("Successful");
        return "valid";
      }
      return "invalid age";
    }
    return "invalid password";
  }
  return "invalid email";
}
// validateTestData("milen@abv.bg", "12345678", 23);

export function processTestResults(totalTests, passedTests, environment) {
  let failedTests = totalTests - passedTests;
  let successRate = (passedTests / totalTests) * 100;
  let grade;

  if (successRate >= 95) {
    grade = "excellent";
  } else if (successRate >= 85) {
    grade = "good";
  } else if (successRate >= 70) {
    grade = "acceptable";
  } else {
    grade = "needs improvement";
  }

  if (environment === "production") {
    if (successRate >= 99.75) {
      grade = "excellent";
    } else if (successRate >= 89.25) {
      grade = "good";
    } else if (successRate >= 73.5) {
      grade = "acceptable";
    } else {
      grade = "needs improvement";
    }
  }

  console.log(`Success rate is: ${successRate}% and grade is: ${grade}`);

  return { totalTests, passedTests, failedTests, successRate, grade };
}
// processTestResults(10, 5, "production");

export function getTestStatus(isPassed) {
  let status = isPassed ? "PASSED" : "FAILED";
  console.log(`Test status: ${status}`);
  return status;
}
// getTestStatus(false);
// getTestStatus(true);

export function determineTimeout(environment) {
  let timeout = environment === "production" ? 30000 : 1000;
  console.log(`Timeout: ${timeout}`);
  return timeout;
}
//determineTimeout("qa");

export function formatTestDuration(durationMs) {
  let originalDuration = durationMs;
  let testDuration =
    durationMs < 1000 ? durationMs + "ms" : durationMs / 1000 + "s";

  console.log(`Original duration: ${originalDuration}`);
  console.log(`Test duration: ${testDuration}`);

  return testDuration;
}
// formatTestDuration(1000);

export function getTestPriority(errorCount, responseTime) {
  let testPriority =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";
  console.log(`Number of errors: ${errorCount}`);
  console.log(`Response time: ${responseTime}`);
  console.log(`Test priority: ${testPriority}`);

  return testPriority;
}
// getTestPriority(10, 2000);
// getTestPriority(0, 500);

export function handleTestEnvironment(environment) {

  let message;

  switch (environment) {
    case "development":
      message = "Using dev settings";
      break;
    case "staging":
      message = "Using staging settings";
      break;
    case "production":
      message = "Using production settings";
      break;
    default:
      message = "Unknown environment" ;      
  }
    
  // console.log(message);

  return message;

}
// handleTestEnvironment("development");

export function processHTTPStatusCode(statusCode) {
  let message;

  switch (statusCode) {
    case 200:
      message = "Success - Request completed";
      break;
    case 201:
      message = "Created - Resource created successfully";
      break;
    case 400:
      message = "Bad Request - Check your data";
      break;
    case 401:
      message = "Unauthorized - Authentication required";
      break;
    case 404:
      message = "Not Found - Resource doesn't exist";
      break;
    case 500:
      message = "Server Error - Internal server error";
      break;
    default:
      message = "Unexpected status code: " + statusCode;
  }

  console.log(message);
  return message;
}
// processHTTPStatusCode(200);
// processHTTPStatusCode(404);
// processHTTPStatusCode(418);

export function selectTestDataSet(testType) {
  let dataSet;

  switch (testType) {
    case "login":
      dataSet = [
        { username: "user1", password: "1234" },
        { username: "user2", password: "abcd" },
      ];
      break;

    case "registration":
      dataSet = [
        { email: "test1@mail.com", age: 25 },
        { email: "test2@mail.com", age: 30 },
      ];
      break;

    case "api":
      dataSet = [
        { endpoint: "/users", method: "GET" },
        { endpoint: "/items", method: "POST" },
      ];
      break;
    case "performance":
      dataSet = [
        { scenario: "load test", duration: "60s" },
        { scenario: "stress test", duration: "120s" },
      ];
      break;
    default:
      dataSet = [];
      break;
  }

  console.log(`Selected test type: ${testType}`);
  console.log(`Data set count: ${dataSet.length}`);

  return dataSet;
}
// selectTestDataSet("api");

export function complexTestDecision(userRole, environment, testType, hasPermission) {
  let allowed = false;
  let reason = "";
  let logLevel = "";

  console.log(
    `User role: ${userRole}, Environment: ${environment}, Test type: ${testType}, Permission: ${hasPermission}`
  );

  if (userRole === "admin") {
    console.log("Level 1: Admin access");

    if (environment === "production") {
      console.log("Level 2: Admin in production");

      if (testType === "critical") {
        allowed = true;
        reason = "Admin in production running critical test";
        logLevel = "extra logging";
      } else {
        allowed = true;
        reason = "Admin in production running standard test";
        logLevel = "standard logging";
      }
    } else {
      allowed = true;
      reason = "Admin in non-production - all tests allowed";
      logLevel = "standard logging";
    }
  } else if (userRole === "tester") {
    console.log("Level 1: Tester access");

    if (hasPermission === true) {
      console.log("Level 2: Tester has permission");

      if (environment !== "production") {
        allowed = true;
        reason = "Tester with permission in non-production";
        logLevel = "standard logging";
      } else {
        allowed = false;
        reason = "Tester cannot run tests in production";
        logLevel = "restricted";
      }
    } else {
      allowed = false;
      reason = "Tester has no permission";
      logLevel = "none";
    }
  } else {
    allowed = false;
    reason = "Access denied - unknown role";
    logLevel = "none";
  }

  console.log(
    `Decision -> Allowed: ${allowed}, Reason: ${reason}, Log level: ${logLevel}`
  );

  return { allowed, reason, logLevel };
}
// complexTestDecision("admin", "production", "critical", true);
// complexTestDecision("tester", "qa", "performance", true);
// complexTestDecision("tester", "production", "login", true);
// complexTestDecision("guest", "qa", "login", false);
