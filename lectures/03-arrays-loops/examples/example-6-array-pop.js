let testQueue = ["test1", "test2", "test3", "test4"];
console.log("Test queue:", testQueue);

let currentTest = testQueue.pop();

console.log("Running test:",currentTest);
console.log("Remaining tests:", testQueue);

let nextTest = testQueue.pop();
console.log("Next test:", nextTest);
console.log("Queue after running 2 tests:", testQueue );

