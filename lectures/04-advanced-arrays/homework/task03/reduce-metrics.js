export function countResultsByType(results) {
    let counts = results.reduce(function(acc, result){
        if (result === "PASS") {
            acc[0]++;
        } else if (result === "FAIL") {
            acc[1]++;
        } else if (result === "SKIP") {
            acc[2]++;
        }
        return acc; 
    }, [0,0,0]);

    return counts;
}
// let testResults = ["PASS", "FAIL", "SKIP", "PASS", "FAIL"];
// let finalCounts = countResultsByType(testResults);

// console.log("Test results:", testResults);
// console.log("Counted results [PASS, FAIL, SKIP]:", finalCounts);

export function averageTimeForPassed(results, times) {
    let [totalTime, passedCount] = results.reduce(function([total, count], result, index){
        if (result === "PASS") {
            total += times[index];
            count++;
        }
        return [total, count];
    }, [0, 0]);

    let averageTime = passedCount > 0 ? totalTime / passedCount : 0;
    return averageTime;
}
// let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
// let times = [200, 400, 300, 150, 100];

// console.log("Average time for PASS:", averageTimeForPassed(results, times));

export function findSlowestTest(names1, times1) {
    if (names1.length === 0 || times1.length === 0) {
        return "";
    }

    let slowestIndex = times1.reduce(function(acc, currentTime, index) {
        if (currentTime > times1[acc]) {
            return index;
        }
        return acc;
    }, 0);

    return names1[slowestIndex];
}
// let testNames = ["login_test", "register_test", "payment_test", "user_profile_test"];
// let testTimes = [350, 800, 200, 700];

// console.log("Slowest test:", findSlowestTest(testNames, testTimes));

// === Demonstration calls ===

// 1. countResultsByType
let testResults = ["PASS", "FAIL", "SKIP", "PASS", "FAIL"];
let finalCounts = countResultsByType(testResults);

console.log("Test results:", testResults);
console.log("Counted results [PASS, FAIL, SKIP]:", finalCounts);

// 2. averageTimeForPassed
let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
let times = [200, 400, 300, 150, 100];

console.log("Average time for PASS:", averageTimeForPassed(results, times));

// 3. findSlowestTest
let testNames = ["login_test", "register_test", "payment_test", "user_profile_test"];
let testTimes = [350, 800, 200, 700];

console.log("Slowest test:", findSlowestTest(testNames, testTimes));