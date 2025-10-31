function executeTestCase(testName) {
    return new Promise((resolve) => {
        setTimeout(() => resolve (`Result of ${testName}`), 7000)
    })
}

function oldStyleAsync() {
    executeTestCase("test1")
    .then((result) => {
        console.log("Old style success:", result);
    })
    .catch((error) => {
        console.log("Old style error:", error);
    })
}
console.log("Running old style:");
oldStyleAsync();

async function newStyleAsync() {
    try {
        const result = await executeTestCase("test2");
        console.log("New style success:", result);
    } catch (error) {
        console.log("New style error:", error);
    }
}

setTimeout( () => {
    console.log('Running new style:');
    newStyleAsync();
}, 7000)
