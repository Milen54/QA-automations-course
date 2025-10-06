let actualStatusCode = 200;
let expectedStatusCode = 200;

if (actualStatusCode === expectedStatusCode) {
    console.log("API test passed");
} else {
    console.log("API test failed");
}

let responseTime = 200;
let statusCode = 200;
let hasData = false;

if (statusCode == 200 && responseTime < 500 && hasData) {
    console.log("All API checks passed");
} else if (statusCode !== 200) {
    console.log("Wrong status code:", statusCode);
} else if ( responseTime >= 500) {
    console.log("Response too slow:", responseTime + "ms");
} else if (!hasData) {
    console.log("Response missing date");
} else {
    console.log("Unknown API failure");
}