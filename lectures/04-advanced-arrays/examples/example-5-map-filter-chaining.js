let results = ["PASS", "FAIL", "SKIPPED", "PASS", "FAIL"];

let formatedFailures = results
.filter(function(result){
    return result === "FAIL";
})
.map(function(result){
    return " ⚠️ " + result + " - Needs Investigation";
});
console.log(`Formatted failures: ${formatedFailures}`);

// MAP - когато се налага да трансформираме всеки елемент
// Filter - когато искаме да избираме елемент според критерии