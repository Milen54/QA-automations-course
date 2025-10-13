// Sort test results by execution time
let testNames = ["login_test", "logout_test", "register_test", "delete_test"];
let executionTimes = [250, 100, 1200, 800];

// Create paired data for sorting
let testIndices = [0, 1, 2, 3];

let sortedByTime = testIndices.slice().sort(function (indexA, indexB){
    return executionTimes[indexA] - executionTimes[indexB];
});

console.log("Test sorted by execution time:");
sortedByTime.forEach(function(index){
    console.log(`${testNames[index]}: ${executionTimes[index]} ms`);
});
