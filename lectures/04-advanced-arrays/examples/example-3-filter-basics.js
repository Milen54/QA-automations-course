let allResults = ["PASS", "FAIL", "PASS", "SKIP", "FAIL", "PASS"];

// Get only the failed tests
let failedResults = allResults.filter(function(result){
    return result === "FAIL";
});

console.log("All results:", allResults);
console.log(`Failed results: ${failedResults}`);
console.log(`Total failed tests: ${failedResults.length}`);

// Get only passed or failed (exclude skipped)
let completedTests = allResults.filter(function(result){
    //return result != "SKIP";
    return result === "PASS" || result === "FAIL";
});
console.log(`Completed tests: ${completedTests}`);

let employeeRoles = ["Backend Engineer", "QA", "QA", "Backend Engineer"];
let sameRoles = employeeRoles.filter(function(roles){
    return roles === "QA";
})
console.log(`All roles ${employeeRoles}`);
console.log(`Same roles: ${sameRoles}`);
console.log(`Number of similiar roles: ${sameRoles.length}`);


let employeeName = ["Mario", "Milen", "Roburt", "Valio"];
let employeeRoles1 = ["Backend Engineer", "QA", "QA", "Backend Engineer"];
let sameRoles1 = employeeName.map(function(name, index){
    return {
        employeeName: name,
        currentRole: employeeRoles1[index]
    };
})
.filter(function(employee){
    return employee.currentRole === "QA";
});
console.table(sameRoles1);

let numbers = [9, 10, 15, 200];
let greaterThan10 = numbers.filter(function(number){
    return number > 10;
});
console.log(`The input of numbers: ${numbers}`);
console.log(`Numbers greater than 10: ${greaterThan10}`);

let names = ["Anna", "Mariya", "Alex", "Milen"];
let namesWithM = names.filter(function(name){
    return name.startsWith("M");
});
console.log(`Names input: ${names}`);
console.log(`Names starts with "M": ${namesWithM}`);

let names1 = ["Anna", "Mariya", "Alex", "Milen"];
let namesWithEmails = names1.map(function(name1){
    return {
        Name: name1,
        Email: name1.toLowerCase() + "@company.com"
    };
});
let namesM = namesWithEmails.filter(function(person){
    return person.Name.startsWith("M");
});
console.table(namesM);