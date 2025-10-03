export const BASE_URL = "https://demo-qa-site.com";
export const DEFAULT_TIMEOUT = 30000;
export const API_ENDPOINTS = {
  login: `${BASE_URL}/login`,
  users: `${BASE_URL}/users`,
  products: `${BASE_URL}/products`,
};

export const testUserEmail = "test@example.com";
export const testUserPassword = "12345";
export const adminUserEmail = "admin@example.com";
export const expectedWelcomeMessage = "Welcome to your dashboard";

export const debugMode = true;
export const runSlowTests = false;
export const useTestData = true;

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  return password.length >= 8;
}

function generateUniqueEmail(testUser) {
  return testUser + Date.now() + "@testmail.com";
}

function logTestConfiguration() {
  const currentTime = new Date().toLocaleString();

  console.log("=== Test Configuration ===");
  console.log("BASE_URL:", BASE_URL);
  console.log("DEFAULT_TIMEOUT:", DEFAULT_TIMEOUT);
  console.log("API_ENDPOINTS:", API_ENDPOINTS);

  console.log("testUserEmail:", testUserEmail);
  console.log("testUserPassword:", testUserPassword);
  console.log("adminUserEmail:", adminUserEmail);
  console.log("expectedWelcomeMessage:", expectedWelcomeMessage);

  console.log("debugMode:", debugMode);
  console.log("runSlowTests:", runSlowTests);
  console.log("useTestData:", useTestData);

  console.log("Configuration loaded at:", currentTime);
  console.log("======================");
}
logTestConfiguration();
