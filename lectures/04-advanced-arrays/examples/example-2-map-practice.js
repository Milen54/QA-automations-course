let executionTimes = [1250, 890, 2100, 456];

let formatedTimes = executionTimes.map(function(time){
    return time + "ms";
});
console.log(`Formated execution times: ${formatedTimes}`);

let userIds = [101, 102, 103, 104];

let testEmails = userIds.map(function(id){
    return "testuser" + id + "@example.com"; 
});
console.log(`Generated test emails: ${testEmails}`);

let userNames = ["Milen", "Mario", "Roburt"];

let generatedEmails = userNames.map(function(user) {
    return {
        User: user,
        "Generated Email": user + "@mSolutions.com"
    };
});
console.table(generatedEmails);

let employeeName = ["Milen", "Mario", "Roburt"];
let seniorityLevel = ["Junior", "Mid", "Senior"];
let employeeRole = ["QA", "Backend Engineer", "Fullstack Engineer"]
let newEmails = employeeName.map(function(name, index){
    return {
        Name: name,
        Seniority: seniorityLevel[index],
        Role: employeeRole[index],
        "Generated Email": name + "@company.com",
        "Name length" : name.length
    };
});
console.table(newEmails);

// How map() works:
let names = ["Milen", "Mario", "Roburt"];

let result = names.map(function(name, index, array){
    console.log("Element:", name);
    console.log("Index:", index);
    console.log("Array:", array);
});
console.log(result);