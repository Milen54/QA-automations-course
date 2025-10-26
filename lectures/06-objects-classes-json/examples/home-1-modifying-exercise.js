// Modifying objects, adding, deleting

// Example with Dot notation
let user = { name: "Milen", age: 30 };
console.log("User before modifications:", user);

user.age = 31; // modifying
user.role = "QA"; // add
delete user.age; // delete

console.log("User after modifications:",user);

// Example with bracket notation
let user1 = { "first-name": "Milen", age: 30 };
let prop = "age";

user1["age"] = 31;
user1["retry-count"] = 5;

delete user1[prop];

console.log(user1);