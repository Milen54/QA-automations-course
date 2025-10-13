let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(accumulator, currentNumber){
    console.log(`Adding ${currentNumber} to ${accumulator}`);
    return accumulator + currentNumber;
}, 0) // Starting with 0

console.log(`Total: ${total}`);

let nums = [5, 10, 15, 20];
let sum = nums.reduce(function(acc, current){
    console.log("Acc:", acc, " | current:", current);
    console.log("Sum = ", acc + current);
    return acc + current;

}, 0);

let fruits = ["apple", "banana", "apple", "orane"];
let appleCount = fruits.reduce(function(acc, current){
    if (current === "apple") {
        return acc + 1;
    }
    return acc;
}, 0);
console.log(`Inputed fruits: ${fruits}`);
console.log("Apple count:", appleCount);

let randomNums = [5, 8, 11, 20, 7, 2];
let evenSum = randomNums.reduce(function(acc, n){
    if (n % 2 === 0) {
        acc += n;
    }
    return acc;
}, 0);
console.log(`Inputed numbers: ${randomNums}`);
console.log(`Sum of even numbers: ${evenSum}`);

let words = ["I", "love", "JavaScript"];
let sentance = words.reduce(function(acc, word){
    return acc + " " + word;
});
console.log(sentance);

function countResultsByType(results) {
    let counts = results.reduce(function(acc, result){

        if (result === "PASS") {
            acc[0]++;
        } else if (result === "FAIL") {
            acc[2]++;
        } else if (result === "SKIP") {
            acc[2]++;
        }
        return acc;

    }, [0, 0, 0]);

    return counts;
}
let typeResults = ["PASS", "FAIL", "SKIP"];
console.log(`Types of result: ${typeResults}`);
console.log(countResultsByType(typeResults));

function countOrderByStatus(statuses) {

    let countOrder = statuses.reduce(function(acc, status) {
        if (status === "DELIVERED") {
            acc[0]++;
        } else if (status === "PENDING") {
            acc[1]++;
        } else if (status === "CANCELLED") {
            acc[2]++;
        }
        return acc;

    },[0, 0, 0]);
    return countOrder;
}
let inputStatuses = ["DELIVERED", "PENDING", "DELIVERED", "CANCELLED", "DELIVERED", "PENDING"];
console.log(`Inputed statuses: ${inputStatuses}`);
console.log(countOrderByStatus(inputStatuses));

function countVotesByCandidate(candidates) {
    let countVotes = candidates.reduce(function(acc, name){
        if (name === "Alice") {
            acc[0]++;
        } else if (name === "Bob") {
            acc[1]++;
        } else if (name === "Charlie") {
            acc[2]++;
        }
        return acc;
    }, [0, 0, 0]);

    return countVotes
}
let candidates = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];
console.log(`Inputed names: ${candidates}`);
console.log(countVotesByCandidate(candidates));

function countGamesByOutcome(outcomes) {
    let countOutcomes = outcomes.reduce(function(acc, type){
        if (type === "WIN") {
            acc[0]++;
        } else if (type === "DRAW") {
            acc[1]++;
        } else if (type === "LOSS") {
            acc[2]++;
        }
        return acc;

    }, [0, 0, 0]);

    return countOutcomes;
}
let outcome = ["WIN", "LOSS", "DRAW", "WIN", "DRAW", "WIN"];
console.log(`Inputed outcomes: ${outcome}`);
console.log(countGamesByOutcome(outcome));

function countShipmentsByStatus(shipmentStatus) {
    let countStatus = shipmentStatus.reduce(function(acc, shipStatus) {
        if (shipStatus === "SHIPPED") {
            acc[0]++;
        } else if (shipStatus === "IN_TRANSIT") {
            acc[1]++;
        } else if (shipStatus === "DELIVERED") {
            acc[2]++;
        }
        return acc;

    }, [0, 0, 0]);

    return countStatus;

}
let shipStatuses = ["SHIPPED", "IN_TRANSIT", "DELIVERED", "DELIVERED", "IN_TRANSIT"];
console.log(`Input ship statuses: ${shipStatuses}`);
console.log(countShipmentsByStatus(shipStatuses));

function averageTimeForPassed(results, times) {
    let [totalTime, passedCound] = results.reduce(function([total, count], result, index) {
        if (result === "PASS") {
            total += times[index];
            count++;
        }
        return [total, count];
    }, [0, 0]);

    let averageTime = passedCound > 0 ? totalTime / passedCound : 0;
    return averageTime;
}
let results = ["PASS", "FAIL", "SKIP", "PASS"];
let times = [200, 400, 150, 100];

console.log("Average time for PASS:", averageTimeForPassed(results, times));

// Destructuring examples

let fruitsArray = ["apple", "banna", "orange"];

let [first, second, third] = fruitsArray;

console.log(first);
console.log(second);
console.log(third);

// skip an element
let colors = ["red", "green", "blue"];
let [, secondColor, thirdColor] = colors;  // <-- we can also remove the third by not including it.
console.log(secondColor, thirdColor);


// destructuring with (...) - rest operator ; good to use as (...rest)
let numbers1 = [10, 20, 30, 40, 50];
let [first1, second1, ...rest] = numbers1;
console.log(first1);
console.log(second1);
console.log(rest);

// destructuring in .map()
let tests = [
    ["Login_test", "PASS", 150],
    ["Profile_test", "FAIL", 200],
    ["Checkout_test", "PASS",  120]
];

let summaries = tests.map(function([name1, status1, time1]) {
    return `${name1}: ${status1} (${time1}ms)`;
});
console.log(summaries);

let times2 = tests.map(function([name2, status2, time2]){
    return `${name2} ran in ${time2} ms` 
});
console.log(times2);

// ------------------

let people = [
    ["Ivan", 25],
    ["Milen", 23],
    ["Georgi", 17],
    ["Maria", 15]
];

let averageAge = people.reduce(function([total, count], [name, age]){
    if (age >= 18) {
        total += age;
        count++;
    }
    return [total, count];
}, [0, 0]);

let [totalAge, adultCount] = averageAge;

let average = adultCount > 0 ? totalAge / adultCount : 0;

console.log(`Input of people: ${people}`);
console.log(`Average age for adults: ${average}`);

let numbers2 = [2, 7, 4, 9, 10];

let [sumEven, countEven] = numbers2.reduce(function([sum1, count1], num) {
    if (num % 2 === 0) {
        sum1 += num;
        count1++;
    }
    return [sum1, count1];

}, [0, 0]);

let average1 = countEven > 0 ? sumEven / countEven : 0;
console.log(`Input of numbers: ${numbers1}`);
console.log(`Average even number: ${average1.toFixed(2)}`); 