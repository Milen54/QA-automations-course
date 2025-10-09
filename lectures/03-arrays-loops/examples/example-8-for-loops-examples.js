let emailList = ["valid@test.com", "invalid-email", "another@valid.com"];

for (let i = 0; i < emailList.length; i++) {
    let email = emailList[i];
    let isValid = email.includes("@") && email.includes(".");

    console.log(`Email ${email} - ${isValid ? "VALID" : "INVALID"}`);
}

let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
let resultsNumber = results.length;
console.log("Total results:", resultsNumber);
let firstResult = results[0];

if (firstResult === "PASS") {
    console.log("First result:", firstResult);
}

let passCounter = 0;
for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS"){
        passCounter++;
    }
}
console.log("Total passed tests:", passCounter);