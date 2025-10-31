import test from "@playwright/test";

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Операцията мина успешно!")
    } else {
        reject("Нещо се обърка!");
    }
});

// console.log(myPromise);

let delayedMessage = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("2 секунди по-късно: Готово!");
    }, 2000);
});
// console.log("Starting...");
// delayedMessage.then((msg) => console.log(msg));
// console.log("Този ред се изпълнява преди resolve");

let randomPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;

    setTimeout(() => {
        if (success) resolve("Всичко мина успешно!");
        else reject ("Грешка, нещо се обърка!"); 
    }, 1500);
});

// randomPromise
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

let testPromise = new Promise((resolve, reject) => {
    console.log("Test Execution started");

    setTimeout(function() {
        let testPassed = true;

        if (testPassed) {
            resolve("Test PASSED");
        } else {
            reject("Test FAILED")
        }
    }, 2000);
});
console.log(testPromise);