function demoErrorProperties() {
    let testData = null;

    try {
        // throw a TypeError
        testData.someMethod()
    } catch (error) {
        console.log("Error name:", error.name);
        console.log("Error message:", error.message);
        console.log("Error stack:", error.stack);
    }
}
demoErrorProperties();