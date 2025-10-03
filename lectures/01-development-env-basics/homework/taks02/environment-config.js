const defaultEnvironmentConfig = {
  baseUrl: "https://demo-qa-site.com/development",
  timeout: 15000,
  debugMode: true,
};

function loadEnvironmentConfig() {
  console.log("Loading default environment configuration...");
  console.log(defaultEnvironmentConfig);

  return defaultEnvironmentConfig;
}
loadEnvironmentConfig();
