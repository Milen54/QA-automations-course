function getFailedResults(results) {
  let failEntries = results.filter(function (entry) {
    if (entry === "FAIL") {
      return entry;
    }
  });
  return failEntries;
}
// let testResults = ["PASS", "FAIL", "SKIP", "FAIL"];
// let failedTests = getFailedResults(testResults);

// console.log(`Test results: ${testResults}`);
// console.log(`Failed entries: ${failedTests}`);

function getHighPriority(tests) {
  let highPriority = tests.filter(function ([name, status, time, priority]) {
    return priority === "HIGH";
  });
  return highPriority;
}
let tests = [
  ["logout_test", "procesing", 150, "HIGH"],
  ["register_test", "done", 90, "LOW"],
  ["payment_test", "running", 400, "HIGH"],
];

let allTests = tests.map(function ([testName, status, time, priority]) {
  return {
    testName: testName,
    status: status,
    time: time,
    priority: priority,
  };
});
let highPriorityRaw = getHighPriority(tests);
let highPriorityForTable = highPriorityRaw.map(function ([
  testName,
  status,
  time,
  priority,
]) {
  return {
    testName: testName,
    status: status,
    time: time,
    priority: priority,
  };
});

// console.log("All tests:");
// console.table(allTests);

// console.log("High priority tests:");
// console.table(highPriorityForTable);

function getSlowTests(tests1) {
  let slowTests = tests1.filter(function ([name, status, time, priority]) {
    return time > 1000;
  });
  return slowTests;
}

let tests1 = [
  ["login_test", "processing", 1300, "HIGH"],
  ["register_test", "done", 900, "LOW"],
  ["payment_test", "running", 1400, "HIGH"],
];

let slowTests = getSlowTests(tests1);

let allTests1 = tests1.map(function([name, status, time, priority]) {
    return {
        testName: name,
        status: status,
        time: time,
        priority: priority
    }
});

let slowTestsForTable = slowTests.map(function([name, status, time, priority]){
    return {
        testName: name,
        status: status,
        time: time,
        priority: priority
    }
});

// console.log("All tests");
// console.table(allTests1);

// console.log("Slow tests");
// console.table(slowTestsForTable);

function findTestByKeyword(names, keyword) {
    let keywordContains = names.filter(function(name){
        return name.includes(keyword);

    })
    return keywordContains;
}
// let names = ["login_test", "logout_test", "payment_test", "user_login_check"];
// let keyword = "login";

// let matchingTests = findTestByKeyWord(names, keyword);

// console.log("All tests:", names);
// console.log(`Tests containing "${keyword}":`, matchingTests);

// === Demonstration calls ===

// 1. getFailedResults
let testResults = ["PASS", "FAIL", "SKIP", "FAIL"];
console.log("Fail entries:", getFailedResults(testResults));

// 2. getHighPriority
console.log("High priority tests:");
console.table(highPriorityForTable);

// 3. getSlowTests
console.log("Slow tests: time > 1000 ms");
console.table(slowTestsForTable);

// 4. findTestByKeyword
let names1 = ["login_test", "logout_test", "payment_test", "user_login_check"];
let keyword1 = "login";
console.log(`Keyword = ${keyword1}`);
console.log("Find test by keyword:", findTestByKeyword(names1, keyword1));