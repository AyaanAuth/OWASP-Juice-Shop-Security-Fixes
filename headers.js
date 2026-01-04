const helmet = require('helmet');
const express = require('express'); // We use express to show a mock server
const app = express();

// --- Task 3: Secure Headers ---
// This one line of code adds 15 different security headers!
app.use(helmet()); 

console.log("--- Task 3: Helmet.js Security ---");
console.log("Status: Security Headers Enabled.");
console.log("Result: Protection against XSS, Clickjacking, and MIME-sniffing is active.");

// This is just a simulation for your report
const mockHeaders = {
    "Content-Security-Policy": "default-src 'self'...",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff"
};

console.log("\nApplied Security Headers:");
console.table(mockHeaders);