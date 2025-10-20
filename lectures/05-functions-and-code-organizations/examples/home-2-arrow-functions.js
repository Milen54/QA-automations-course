
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulatr, element) => accumulatr + element);


// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);

const doubled = numbers.map(num => num * 2);
const incremented = numbers.map(num => num + 1);
const asStrings = numbers.map(num => `Number: ${num}`)

// console.log(doubled);
// console.log(incremented);
// console.log(asStrings);

const fruits = ["apple", "banana", "kiwi"];

const capitalized = fruits.map(fruits => fruits.toUpperCase());
// console.log(capitalized);

// const users = [
//     { name: "Milen", age: 25},
//     { name: "Roburt", age: 29},
//     { name: "Valio", age: 29}
// ];

// const names = users.map(user => user.name);

// console.log("Names:", names);

const tests = ["Login", "Logout", "Register"];

const results = tests.map((test) => test + " Test Passed");
console.log(results);

const usersOnline = [
    { name: "Milen", isOnline: true},
    { name: "Roburt", isOnline: false}
];

const messages = usersOnline.map(user =>
    user.isOnline
    ? `${user.name} is online`
    : `${user.name} is offline`
);
console.log(messages);