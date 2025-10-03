export function checkNodeVersion() {
  const version = process.version;
  //console.log("Node.js version:", version);
  return version;
}

export function checkNpmVersion() {
  const npmVersion = process.env.npm_version || "Not available";
  //console.log("NPM version:", npmVersion);
  return npmVersion;
}

export function displayEnvironmentInfo() {
  const nodeVersion = checkNodeVersion();
  const npmVersion = checkNpmVersion();

  const platform = process.platform;
  const cwd = process.cwd();

  console.log("Node.js version:", nodeVersion);
  console.log("NPM version:", npmVersion);
  console.log("Operating system:", platform);
  console.log("Current Working Directory:", cwd);

  return { nodeVersion, npmVersion, platform, cwd };
}
displayEnvironmentInfo();
