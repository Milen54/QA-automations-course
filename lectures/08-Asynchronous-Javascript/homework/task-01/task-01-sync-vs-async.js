// function logSynchronousFlow() {
//   console.log("Start");
//   console.log("Middle");
//   console.log("End");
// }
// logSynchronousFlow();

export function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}

// console.log("Before delay");
// delayedLog("After 1000ms", 1000);
// console.log("After scheduling delay");

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}
