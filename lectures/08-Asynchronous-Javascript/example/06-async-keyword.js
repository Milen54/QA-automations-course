function regularFunction() {
    return "Hello";
}
console.log("Regular function:", regularFunction());

async function asyncFunction () {
    return "Hello from async";
}
const promiseFromAsync = asyncFunction();
console.log("Assync function return", promiseFromAsync);
const promiseValue = await asyncFunction();
console.log("Value from promise:", promiseValue);