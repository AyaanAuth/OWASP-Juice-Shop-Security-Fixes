const jwt = require('jsonwebtoken');

// 1. We simulate a user found in the database
const user = { id: 'user_12345', email: 'admin@juice-sh.op' };

// 2. We define a 'Secret Key' (In a real app, this is kept very safe)
const secretKey = 'your-secret-key';

// 3. We 'Sign' the token
// This creates a secure, encoded string containing the user's ID
const token = jwt.sign({ id: user.id }, secretKey);

console.log("--- Task 2: JWT Authentication ---");
console.log("User successfully logged in.");
console.log("Generated Secure Token: \n" + token);