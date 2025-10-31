let testPromise = new Promise(function (resolve, reject) {
    console.log("Test execution started");

    setTimeout(function () {
        let result = "PASS";

        if (result === "PASS") {
            console.log("Test has passed!");
            resolve(result);
        } else {
            console.log("Test has failed!");
            reject(result);
        }
    }, 4000)
})

console.log("Promise created:", testPromise);
console.log("Ent test suite");