export function simulateApiCall(name, shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         if (shouldFail === true) {
            reject(new Error("Request failed:" + name));
         } else {
            resolve({ name: name, status: "OK"});
         }   
        }, 800);
    });
}
// // === Demonstrate handling a success ====
// simulateApiCall("login", false)
// .then((result) => {
//     console.log("Success:", result.name, "-", result.status);
// })
// .catch((error) => {
//     console.log("Error:", error.message);
// });

// // === Demonstrate handling an error ===
// simulateApiCall("broken", true)
// .then((result) => {
//     console.log("Unexpected success:", result);
// })
// .catch((error) => {
//     console.log(error.message);
// });

// // === Demonstrate a simple chain that transforms data ===
// simulateApiCall("dataProcessing", false)
// .then((result) => {
//     console.log("Step 1:", result);
//     return { ...result, processed: true };
// })
// .then((transformed) => {
//     console.log("Step 2 (Transformed):", transformed);
// })
// .catch((error) => {
//     console.error("Error:", error.message)
// });