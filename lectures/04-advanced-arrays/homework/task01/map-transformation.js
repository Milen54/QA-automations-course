function buildVisualStatuses(results) {
    let visualStatuses = results.map(function(result){
        if (result === "PASS"){
            return "✔️ PASSED";
        } else if (result === "FAIL") {
            return "❌ FAILED";
        } else {
            return "⏭️ SKIPPED";
        }
    });
    return visualStatuses;
}
// let testResults = ["PASS", "FAIL", "SKIP"]
// let visual = buildVisualStatuses(testResults);

// console.log("Input:", testResults);
// console.log("Output:", visual);

function formatExecutionTimes(times) {
    let formatedTimes = times.map(function(time){
        return time + "ms";
    });
    return formatedTimes;
}
// let arrayTimes = [100, 200, 350];
// let formatExecTime = formatExecutionTimes(arrayTimes);

// console.log(`Array times: ${arrayTimes}`);
// console.log(`Formated times: ${formatExecTime}`);

function generateTestEmails(ids) {
    let generatedEmails = ids.map(function(id){
        return "testuser" + id + "@example.com";
    });
    return generatedEmails;
}
// let idArray = [2, 22, 34, 35];
// let newEmails = generateTestEmails(idArray);

// console.log(`User ids: ${idArray}`);
// console.log(`Generated emails: ${newEmails}`);

function ratePerformance(times) {
    let convertLabel = times.map(function(time){
        if (time < 300) {
            return  "Fast";
        } else if (time < 1000) {
            return "Normal";
        } else {
            return "Slow";
        }
    });
    return convertLabel;
}
// let testTimes = [150, 500, 1200];
// let performanceLabels = ratePerformance(testTimes);

// console.log(`Input times: ${testTimes}`);
// console.log(`Performance labels: ${performanceLabels}`);

// === Demonstration calls ===

// 1. buildVisualStatuses
let testResults = ["PASS", "FAIL", "SKIP"];
console.log("Visual statuses:", buildVisualStatuses(testResults));

// 2. formatExecutionTimes
let times = [100, 200, 350];
console.log("Formated times:", formatExecutionTimes(times));

// 3. generateTestEmails
let ids = [2, 22, 34, 35];
console.log("Generated emails:", generateTestEmails(ids));

// 4. ratePerformance
let perfTimes = [150, 500, 1200];
console.log("Performance labels:", ratePerformance(perfTimes));