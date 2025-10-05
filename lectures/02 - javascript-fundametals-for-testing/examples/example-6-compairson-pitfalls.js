console.log("String vs Number:", "5" == 5); // true (loose equality)
console.log("String vs Number:", "5" === 5); // false (strict equality)

let userId = "123";
let expectedId = 123;
console.log("Loose:", userId == expectedId); // true
console.log("Strict:", userId === expectedId); // false