let connected = false;

function connect() {
  if (connected) {
    console.log("Already conncted");
  } else {
    connected = true;
    console.log("Connected");
  }
  return connected;
}
// connect();

function disconnect() {
  if (connected) {
    connected = false;
    console.log("Disconnected");
  } else {
    console.log("Already disconnected");
  }
  return connected;
}
// connect();
// disconnect();
// disconnect();

function runOperation(config) {
  if (!connected) {
    throw new Error("Not connected");
  }

  if (config.shouldFail) {
    throw new Error("Operation failed:", +config.name);
  }

  return { ok: true, name: config.name };
}
// connect();

// try {
//   console.log(runOperation({ shouldFail: false, name: "Upload data" }));
//   console.log(runOperation({ shouldFail: true, name: "Download data" }));
// } catch (error) {
//   console.log(error.name + ":", error.message);
// }

// disconnect();

export function runWithCleanup(config) {
  connect();

  try {
    const result = runOperation(config);
    console.log("Operation succeeded:", result);
    return result;
  } catch (error) {
    console.log("Error:", error.message);
    return { ok: false };
  } finally {
    disconnect();
  }
}
// Demonstration calls

// a. One config that succeeds
console.log("--- Demo 1: Successful operation ---");
runWithCleanup({ shouldFail: false, name: "Upload file" });

// b. One config that fails
console.log("--- Demo 2: Failing operation ---");
runWithCleanup({ shouldFail: true, name: "Download Report" });
