const winston = require('winston');

// 1. Setup the Logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(), // This shows logs in your black CMD window
        new winston.transports.File({ filename: 'security.log' }) // This SAVES logs to a file
    ]
});

// 2. Simulate the Application Starting
logger.info('Application started');

// 3. Simulate a Security Event (Penetration Test Result)
const maliciousInput = "admin'--"; 
logger.warn(`SECURITY ALERT: Blocked SQL Injection attempt: ${maliciousInput}`);

console.log("\n--- TASK COMPLETE: Check your folder for security.log ---");