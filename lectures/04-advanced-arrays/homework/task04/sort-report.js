export function sortIndicesByTime(names, times) {
    let indices = Array.from(names.keys());

    indices.sort(function(a, b) {
        return times[a] - times[b];
    });
    return indices;
}
// let names = ["login_test", "payment_test", "profile_test"];
// let times = [300, 150, 400];

// let sortedIndices = sortIndicesByTime(names, times);
// console.log("Sorted indices (fastest --> slowest)", sortedIndices);

export function sortNamesByLength(names1) {
    return names1
    .slice()
    .sort(function(a, b) {
        return a.length - b.length;
    });
}
// let testNames = ["login", "user_profile", "payment", "register"];
// console.log("Sorted by length:", sortNamesByLength(testNames));

export function sortByPriority(priorities) {
    let mapping = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3
    };

    return priorities
    .slice()
    .sort(function(a, b) {
        return mapping[a] - mapping[b];
    });
}
// let testPriorities = ["LOW", "HIGH", "MEDIUM", "HIGH", "LOW"];
// console.log("Sorted by priority:", sortByPriority(testPriorities));

export function sortFailedByPriorityThenTime(tests) {
    let mapping = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3
    };

    return tests.slice().sort(function(a, b) {
        let priorityA = mapping[a[3]];
        let priorityB = mapping[b[3]];
        let timeA = a[2];
        let timeB = b[2];

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        return timeB - timeA;
    });
}
// let failedTests = [
//   ["logout_test", "FAIL", 300, "HIGH"],
//   ["register_test", "FAIL", 150, "MEDIUM"],
//   ["payment_test", "FAIL", 400, "HIGH"],
//   ["profile_test", "FAIL", 200, "LOW"],
//   ["login_test", "FAIL", 500, "HIGH"]];

// console.table(sortFailedByPriorityThenTime(failedTests));


// === Demonstration calls ===

// 1. sortIndicesByTime
let names = ["login_test", "payment_test", "profile_test"];
let times = [300, 150, 400];

let sortedIndices = sortIndicesByTime(names, times);
console.log("Sorted indices (fastest --> slowest)", sortedIndices);

// 2. sortNamesByLength
let testNames = ["login", "user_profile", "payment", "register"];
console.log("Sorted by length:", sortNamesByLength(testNames));

// 3. sortByPriority
let testPriorities = ["LOW", "HIGH", "MEDIUM", "HIGH", "LOW"];
console.log("Sorted by priority:", sortByPriority(testPriorities));

// 4. sortFailedByPriorityThenTime
let failedTests = [
["logout_test", "FAIL", 300, "HIGH"],
["register_test", "FAIL", 150, "MEDIUM"],
["payment_test", "FAIL", 400, "HIGH"],
["profile_test", "FAIL", 200, "LOW"],
["login_test", "FAIL", 500, "HIGH"]];

console.table(sortFailedByPriorityThenTime(failedTests));

