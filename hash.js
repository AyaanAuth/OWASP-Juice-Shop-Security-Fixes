const bcrypt = require('bcrypt');

async function testHash() {
    const password = "p@ssword123";
    // Hash the password with a salt round of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Original Password: " + password);
    console.log("Hashed Password: " + hashedPassword);
}

testHash();