# OWASP Juice Shop - Security Hardening Project

This repository contains the security implementation and monitoring tools developed during my 3-week cybersecurity internship. The goal was to identify vulnerabilities in the OWASP Juice Shop and implement industry-standard defenses.

## 🛠️ Implemented Security Features
* **Input Validation**: Uses the `validator` library to sanitize user inputs and block SQL Injection/XSS payloads.
* **Password Security**: Implemented `bcrypt` for secure password hashing and salting to protect user credentials.
* **Session Management**: Configured JSON Web Tokens (JWT) for secure, signed user authentication.
* **Security Headers**: Integrated `Helmet.js` to protect against browser-based attacks like Clickjacking.

## 📊 Monitoring & Logging
* **Winston Logger**: Developed a logging system that records security events into a `security.log` file for auditing.
* **Penetration Testing**: Verified that malicious inputs now trigger a **Status 400 (Invalid Email)** response.

## 🚀 How to Run the Project
1. Clone this repository to your local machine.
2. Ensure you have Node.js installed.
3. Run `npm install` in the terminal to install the configurations from **package.json**.
4. Run `node validate.js` to test the input validation.
5. Check `security.log` to see the recorded security alerts.

