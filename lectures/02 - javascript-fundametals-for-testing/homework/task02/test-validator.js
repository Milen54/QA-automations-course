export function validateStatusCode(expectedCode, actualCode) {
  console.log(`Expected code: ${expectedCode}`);
  console.log(`Actual code: ${actualCode}`);

  if (expectedCode === actualCode) {
    console.log(`Strict (===) match: ${actualCode}`);
    return true;
  } else if (expectedCode == actualCode) {
    console.log(`Loose (==) match: ${expectedCode}`);
    return true;
  } else {
    console.log(`No match`);
    return false;
  }
}
// validateStatusCode(200, "200");

export function validateResponseTime(actualTime, maxAllowedTime) {
  let result = actualTime <= maxAllowedTime;

  console.log(
    `Response time ${actualTime}ms is within limit ${maxAllowedTime}ms: ${result}`
  );
  return result;
}
// validateResponseTime(200, 500);
// validateResponseTime(600, 500);

export function validatePerformanceRange(responseTime, minTime, maxTime) {
  const result = responseTime >= minTime && responseTime <= maxTime;

  console.log(
    `Response ${responseTime}ms is within range ${minTime}-${maxTime}ms: ${result}`
  );
  return result;
}
// validatePerformanceRange(150, 100, 200);

export function compareVersions(currentVersion, requiredVersion) {
  const result = currentVersion !== requiredVersion;

  console.log(
    `The versions are different: Current version: ${currentVersion} and ${requiredVersion} // ${result}`
  );
}
// compareVersions("5.5", "6.5");

export function validateErrorMessage(errorMessage) {
  const message = errorMessage.toLowerCase();
  const hasError = message.includes("error");
  const position = message.indexOf("error");

  console.log(`Message: "${errorMessage}"`);
  console.log(`Contains "error": ${hasError}`);

  if (hasError) {
    console.log(`Position of "error": ${position}`);
  } else {
    console.log(`No "error" found in message.`);
  }

  return hasError;
}
// validateErrorMessage("PageError");
// validateErrorMessage("None");

export function extractUserIdFromResponse(responseText) {
  const idPosition = responseText.indexOf("ID:");

  if (idPosition === -1) {
    console.log("No ID found in response");
    return null;
  }

  const extracted = responseText.slice(idPosition + 3).trim();

  console.log(`Response: "${responseText}"`);
  console.log(`Extracted ID: "${extracted}"`);

  return extracted;
}
// extractUserIdFromResponse("User created successfully with ID:12345");

export function validateEmailFormat(email) {
  const monkeyLetter = email.includes("@");
  const dot = email.includes(".");
  const positionOfMonkey = email.indexOf("@");
  const lastDot = email.lastIndexOf(".");

  const isValid = monkeyLetter && dot && positionOfMonkey < lastDot;

  console.log(`Email includes "@" // ${monkeyLetter}`);
  console.log(`Email includes "." // ${dot}`);
  console.log(`The position of "@" is: ${positionOfMonkey}`);
  console.log(`The last dot index is: ${lastDot}`);
  console.log(`Is email valid: // ${isValid}`);

  return isValid;
}
// validateEmailFormat("milen@gmail.com");

export function processTestDataCSV(csvString) {
  let array = csvString.split(",");

  console.log(`Original csvString: ${csvString}`);
  console.log("Array of test names:", array);

  return array;
}
// processTestDataCSV("test1,test2,test3,test4");

export function normalizeTestName(testName) {
  const nameTrim = testName.trim();
  const nameLower = nameTrim.toLowerCase();
  const replaced = nameLower.replace(/\s+/g, "_");

  const sliced = replaced.slice(0, 20);

  console.log(`Original: ${testName}`);
  console.log(`Trimmed : ${nameTrim}`);
  console.log(`Lower   : ${nameLower}`);
  console.log(`Replaced: ${replaced}`);
  console.log(`Final   : ${sliced}`);

  return sliced;
}
// normalizeTestName("Account verification");

export function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  const check =
    statusCode === 200 &&
    responseTime < 1000 &&
    hasData === true &&
    errorCount === 0;

  console.log(`Status code: ${statusCode}`);
  console.log(`Response time: ${responseTime}`);
  console.log(`Has Data: ${hasData}`);
  console.log(`Error count: ${errorCount}`);
  console.log(`Final result: ${check}`);

  return check;
}
// validateCompleteAPIResponse(200, 1100, true, 0);

export function checkTestEnvironmentAccess(userRole, isAuthenticated, environment) {
  const isRolleAllowed = userRole === "admin" || userRole === "tester";
  const isAuthOk = isAuthenticated === true;
  const isEnvAllowed = environment === "dev" || environment === "staging";

  const allowAccess = isRolleAllowed && isAuthOk && isEnvAllowed;

  console.log(`Role allowed: ${isRolleAllowed}`);
  console.log(`Authenticated: ${isAuthOk}`);
  console.log(`Environment allowed: ${isEnvAllowed}`);
  console.log(`Final access: ${allowAccess}`);

  return allowAccess;
}
// checkTestEnvironmentAccess("admin", true, "dev");

export function validateTestNotFailed(hasErrors, isCancelled, isTimeOut) {
  const noErrors = !hasErrors;
  const notCancelled = !isCancelled;
  const noTimeOut = !isTimeOut;

  const testPassed = !hasErrors && !isCancelled && !isTimeOut;

  console.log(`No errors: ${noErrors}`);
  console.log(`Not cancelled: ${notCancelled}`);
  console.log(`No timeout: ${noTimeOut}`);
  console.log(`Validate test not failed: ${testPassed}`);

  return testPassed;
}
// validateTestNotFailed(true, false, true);
// validateTestNotFailed(1, "No", "yes");

export function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  environment
) {
  const okStatus = statusCode === 200;
  const okLatency = responseTime < 500;
  const hasData = Number(dataCount) > 0;
  const adminInDev = userRole === "admin" && environment === "dev";

  const primaryRule = okStatus && okLatency;
  const fallBackRule = adminInDev;
  const final = primaryRule || fallBackRule;

  console.log(`Is status code 200: ${okStatus}`);
  console.log(`Is latency under 500: ${okLatency}`);
  console.log(`Has data (>0): ${hasData} (dataCount=${dataCount})`);
  console.log(`Is role admin and environment dev: ${adminInDev}`);

  console.log(`Result of primary rule: ${primaryRule}`);
  console.log(`Result of fallback rule: ${fallBackRule}`);
  console.log(`Final result: ${final}`);

  return final;
}
//complexValidationScenario(200, 450, "admin", 10, "prod");