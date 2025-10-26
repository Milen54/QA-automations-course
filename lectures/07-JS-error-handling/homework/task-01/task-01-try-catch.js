export function safeParse(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return {
            ok: true,
            data: parsed,
        };
    } catch (error) {
        return {
            ok: false,
            error: error.message,
        };
    }
}

function safeGetEmail(user) {
    try {
        return user.email;
    } catch (error) {
        console.log("Failed to get email:", error.message);
        return "<no-email>";
    }
}

function safePush(resultsArray, value) {
    try {
        resultsArray.push(value);
        return true;
    } catch (error) {
        console.log("Failed to push value:", error.message);
        return false;
    }
}

export function safeSuccessRate(passed, total) {
    try {
        if (total === 0) {
            return "0.00%";
        }

        let rate = (passed / total) * 100;
        return rate.toFixed(2) + "%";
    } catch (error) {
        console.log("Failed to calculate success rate:", error.message);
        return "N/A";
    }
}

// Demonstration calls

// 1. safeParse
console.log("---safeParse---");
console.log("Valid JSON:", safeParse('{"name": "QA Tester", "level": "Advanced"}'));
console.log("Invalid JSON:", safeParse('{"invalid": json}'));

// 2. safeGetEmail
console.log("--- safeGetEmail ---");
console.log("Valid user:", safeGetEmail({email: "qa@example.com"}));
console.log("User without email:", safeGetEmail({ name: "Milen"}));
console.log("Null user:", safeGetEmail(null));

// 3. safePush
console.log("--- safePush ---");
let results = [{ test: "login", status: "PASS"}];
console.log("Valid push:", safePush(results, { tets: "logout", status: "FAIL"}));
console.log("Invalid push (undefined):", safePush(undefined, { test: "Crash", status:"FAIL"}));

// 4. safeSuccessRate
console.log("--- safeSuccessRate ---");
console.log("Normal case:", safeSuccessRate(8, 10));
console.log("Zero total:", safeSuccessRate(0, 0));
console.log("Invalid input:", safeSuccessRate("five", 10));