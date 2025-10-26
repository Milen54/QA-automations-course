export function validateRequired(value, fieldName) {
  if (!value) {
    throw new Error(fieldName + " is required");
  }
  return true;
}
// Demonstration calls
console.log("--- validateRequiered ---");

try {
  const res = validateRequired("Milen", "Name");
  console.log("[OK]", res);
} catch (error) {
  console.log("[ERROR]", error.name, "-", error.message);
}

try {
  const res = validateRequired("", "Email");
  console.log("[OK]", res);
} catch (error) {
  console.log("[ERROR]", error.name, "-", error.message);
}

export function validateArray(data, fieldName) {
  if (!Array.isArray(data)) {
    throw new TypeError(fieldName + " must be an array");
  }
  return true;
}
// Demonstration calls
console.log("--- validateArray ---");

try {
    const res = validateArray([1, 2, 3], "Numbers");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

try {
    const res = validateArray("notAnArray", "Users");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}


export function validateRange(value, min, max, fieldName) {
  if (value < min || value > max) {
    throw new RangeError(fieldName + " must be between " + min + " and " + max);
  }
  return true;
}
// Demonstration calls
console.log("--- validateRange ---");

try {
    const res = validateRange(5, 0, 10, "Score");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

try {
    const res = validateRange(-3, 0, 10, "Score");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

try {
    const res = validateRange(15, 0, 10, "Score");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

function validateEmail(email) {
  let isValidEmail =
    email.includes("@") && email.includes(".") && email.length >= 5;
  if (!isValidEmail) {
    throw new Error("Invalid email format");
  }
  return true;
}

// Demonstration calls
console.log("--- validateEmail ---");
try {
    const res = validateEmail("qa@example.com");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

try {
    const res = validateEmail("milen.example.com");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

try {
    const res = validateEmail("a@b");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

function validatePassword(password) {
  const hasMinLength = password.length >= 8;

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const hasNumber = digits.some((digit) => password.includes(digit));

  if (!hasMinLength || !hasNumber) {
    throw new Error("Password does not meet minimum requirements");
  }
  return true;
}
// Demonstration calls
console.log("--- validatePassword ---");

// Valid password
try {
    const res = validatePassword("QAstudent1");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}
// Too short password
try {
    const res = validatePassword("Test1");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}
// Password without numbers
try {
    const res = validatePassword("Milenqaengineer");
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

export function validateTestResults(results) {
  validateArray(results, "Test results");

  const allowed = ["PASS", "FAIL", "SKIP"];

  for (let i = 0; i < results.length; i++) {
    const item = results[i];

    if (typeof item !== "object" || item === null) {
      throw new Error("Invalid test result at index " + i + ": not an object");
    }

    let isValidStatus = false;
    for (let j = 0; j < allowed.length; j++) {
      if (item.status === allowed[j]) {
        isValidStatus = true;
        break;
      }
    }
    if (!isValidStatus) {
      throw new Error(
        "Invalid test result at index " +
          i +
          ": invalid status (" +
          item.status +
          ")"
      );
    }

    if (typeof item.duration !== "number" || item.duration < 0) {
      throw new Error(
        "Invalid test result at index " +
          i +
          ": invalid duration (" +
          item.duration +
          ")"
      );
    }
  }

  return true;
}
// Demonstration calls
console.log("--- validateTestResults ---");

// valid array of results
try {
    const ok = [
        { status: "PASS", duration: 120 },
        { status: "FAIL", duration: 45 },
        { status: "SKIP", duration: 0 },
    ];
    const res = validateTestResults(ok);
    console.log("[OK]", res);
} catch (error) {
        console.log("[ERROR]", error.name, "-", error.message);

}
// Invalid element : not an object
try {
    const bad1 = ["PASS"];
    const res = validateTestResults(bad1);
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

// Invalid status
try {
    const bad2 = [
        { status: "PASSED", duration: 10}
    ];
    const res = validateTestResults(bad2);
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}

// Invalid duration (<0)
try {
    const bad3 = [
        { status: "PASS", duration: -5 }
    ];
    const res = validateTestResults(bad3);
    console.log("[OK]", res);
} catch (error) {
    console.log("[ERROR]", error.name, "-", error.message);
}