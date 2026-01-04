const validator = require('validator');

// This is the variable we are testing
const email = "student@example.com";
console.log("Testing email validation for: " + email);

if (!validator.isEmail(email)) {
    console.log("Status: 400");
    console.log("Response: Invalid email");
} else {
    console.log("Status: 200");
    console.log("Response: Success");
}