// 1. Function declaration - classic way
// hoisting available

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Milen"));

// 2. Function expression   function --> variable

let greet1 = function (name1) {
  return "Hello, " + name1 + "!";
};
console.log(greet1("Ivan"));

// 3. Arrow function - quick and simple
let greet2 = (name2) => {
  return "Hello, " + name2 + "!";
};
console.log(greet2("Mario"));

// shorter arrow syntax
let greet3 = (name3) => "Hello, " + name3 + "!";
console.log(greet3("Roburt"));

// EXAMPLES
function square(number) {
  return number * number;
}
console.log("Declaration:", square(4));

let square1 = function (number1) {
  return number1 * number1;
};
console.log("Expression:", square1(8));

let square2 = (number2) => number2 * number2;
console.log("Arrow:", square2(5));

// EXAMPLES 2

function sumOfNums(num1, num2) {
  return num1 + num2;
}
console.log("Declariton:", sumOfNums(5, 4));

let sumOfNums2 = function (num3, num4) {
  return num3 + num4;
};
console.log("Expression:", sumOfNums2(10, 10));

let sumOfNums3 = (number5, number6) => number5 + number6;
console.log("Arrow:", sumOfNums3(5, 10));

// EXAMPLES 3
function isEven(num7) {
  return num7 % 2 === 0 ? "Even" : "Odd";
}
console.log("Declaration:", isEven(6));

let isEven1 = function (num8) {
  return num8 % 2 === 0 ? "Even" : "Odd";
};
console.log("Expression:", isEven1(7));

let isEven2 = (num9) => (num9 % 2 === 0 ? "Even" : "Odd");

console.log("Arrow:", isEven2(6));

// EXAMPLES 4
// Declaration with if else

function grade(gradeNum) {
  if (gradeNum > 90 && gradeNum <= 100) {
    return "Execellent";
  } else if (gradeNum <= 89 && gradeNum >= 70) {
    return "Good";
  } else if (gradeNum <= 69 && gradeNum >= 50) {
    return "Average";
  } else if (gradeNum < 50) {
    return "Fail";
  }
}
console.log("Declaration:", grade(49));

// Declaration with ternary operator
function grade1(gradeNum1) {
  return gradeNum1 >= 90
    ? "Excellent"
    : gradeNum1 >= 70
      ? "Good"
      : gradeNum1 >= 50
        ? "Average"
        : "Fail";
}
console.log("Declaration with ternary:", grade1(5));

// Expression with ternary
let grade2 = function (gradeNum2) {
  return gradeNum2 >= 90
    ? "Excellent"
    : gradeNum2 >= 70
      ? "Good"
      : gradeNum2 >= 50
        ? "Average"
        : "Fail";
};
console.log("Expression with ternary:", grade2(95));

// Arrow with ternary
let grade3 = (gradeNum3) =>
  gradeNum3 >= 90
    ? "Excellent"
    : gradeNum3 >= 70
      ? "Good"
      : gradeNum3 >= 50
        ? "Average"
        : "Fail";

console.log("Arrow with ternary:", grade3(51));


// ЕXAMPLES 5 / filter, map, reduce + Arrow functions

// A. numbers > 600
const times = [200, 800, 1200, 450];
const slow = times.filter(t => t > 600);
console.log("A slow >", slow);

// B. even numbers
const nums = [1,2,3,4,5,6];
const evens = nums.filter(n => n % 2 === 0);
console.log("B evens:", evens);


// C. string.length >= 4
const names = ["Anna", "Ivan", "George", "Li"];
const longNames = names.filter(n => n.length >= 4);
console.log("String length >=4:", longNames);

// D. objects "failed" OR > 1000ms
const tests = [
  { id: 1, status: "pass", time: 450 },
  { id: 2, status: "fail", time: 1300 },
  { id: 3, status: "pass", time: 900 },
];
const failedOrSlow = tests.filter(t => t.status === "fail" || t.time > 1000);
console.table(failedOrSlow);