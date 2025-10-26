function processTestResults(resultsArray) {
    try {
        let totalTests = resultsArray.length;
        let passedTests = resultsArray.filter((result) => result.status === "PASS").length;
        let successRate = ((passedTests / totalTests) * 100).toFixed(1);

        return {
            total: totalTests,
            passed: passedTests,
            successRate: successRate + "%",
        }
    } catch (error) {
        console.log(`Error processing test results: ${error.name} - ${error.message}`);

        if(error.name === "TypeError") {
            console.log("Hint: Check if results data is properly formatted");
        }

        return {error: "Failed to process results"};
    }
}
    let validArrayData = [
        { status: "PASS"},
        { status: "FAIL"},
        { status: "PASS"},
    ];

console.log("Valid data:", processTestResults(validArrayData));

console.log("Invalid data:", processTestResults("I love greek party!"));