# Week 4: Strengthening Infrastructure & API Security

## 📌 Overview
This week focused on advanced security hardening, covering intrusion detection, API protection, and the implementation of secure browser policies. The goal was to protect both the server (SSH) and the application layer (Express API) from common attack vectors like brute-force and script injections.

---

## 🛡️ Task 1: Intrusion Detection & Monitoring
To protect the server from unauthorized access at the system level, I implemented real-time monitoring and automated banning.

* **Fail2Ban Integration:** Configured Fail2Ban to monitor authentication logs for suspicious activity.
* **Brute-Force Prevention:** Set up a custom configuration in `sshd-jail.conf` to detect multiple failed login attempts.
* **Alert & Ban Policy:**
    * **Max Retries:** 3 failed attempts.
    * **Ban Duration:** 1 hour (3600 seconds).
    * **Action:** Automated IP blocking via IPTables.

---

## 🚀 Task 2: API Security Hardening
I hardened the User Management System API using several industry-standard defense mechanisms.

### 1. Rate Limiting (`express-rate-limit`)
* Prevented brute-force and Denial of Service (DoS) attacks.
* **Policy:** Each IP address is limited to 5 requests per 15-minute window.

### 2. CORS Configuration
* Restricted API access to authorized origins only.
* Ensures that malicious third-party websites cannot make unauthorized requests on behalf of users.

### 3. API Key Authentication
* Implemented a secure header-based authentication system.
* Requests must include a valid `x-api-key` to access protected data.

---

## 🔒 Task 3: Security Headers & CSP Implementation
Using **Helmet.js**, I implemented critical security headers to protect users and enforce secure communication.

* **Content Security Policy (CSP):** Configured to prevent Cross-Site Scripting (XSS) by restricting where scripts and resources can be loaded from.
* **HSTS (Strict-Transport-Security):** Enforced HTTPS connections to prevent man-in-the-middle attacks and protocol downgrades.
* **X-Frame-Options:** Set to `DENY` to protect the application from Clickjacking.

---

## 📦 Deliverables in this Folder
1.  **`server.js`**: The secured Node.js API containing the Rate-Limiter, CORS, CSP, and HSTS implementations.
2.  **`sshd-jail.conf`**: The custom Fail2Ban configuration file for SSH monitoring.
3.  **`package.json`**: Contains the necessary security dependencies (`helmet`, `cors`, `express-rate-limit`).

---
**Prepared by:** Ayaan Ahmad Farooqi
**Role:** Cybersecurity Intern at DevHub
