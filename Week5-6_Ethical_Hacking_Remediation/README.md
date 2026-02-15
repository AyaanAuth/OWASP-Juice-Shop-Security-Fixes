⚔️ Week 5: Ethical Hacking & Exploiting Vulnerabilities


📌 Overview
Utilized penetration testing toolkits to identify, exploit, and remediate application-level flaws.


Reconnaissance: Conducted service detection using Nmap, identifying port 80/tcp as the primary entry point.


SQL Injection (SQLi): Used SQLMap to successfully extract database names such as acuart and information_schema.


Remediation: Neutralized threats by replacing vulnerable dynamic strings with Prepared Statements.


CSRF Protection: Implemented and verified protection against forgery attacks using Burp Suite.

🔍 Week 6: Advanced Security Audits & Final Deployment


📌 Overview
Conducted final automated auditing and verified dependency integrity to certify the application for deployment.


OWASP ZAP Audit: Identified 5 key alerts, allowing for final refinement of CSP directives.


Nikto Scan: Verified header configurations and identified information leakage via the X-Powered-By header.


System Audit (Lynis): Achieved a system Hardening Index of 62 on the host environment.


Dependency Remediation: Patched a vulnerability in the qs library via npm audit fix, achieving 0 vulnerabilities for final deployment.

📦 Deliverables in this Repository


server.js: Secured Node.js API with Rate-Limiting, CORS, and Security Headers.


sshd-jail.conf: Custom Fail2Ban configuration for SSH monitoring.

package.json: Contains security dependencies (helmet, cors, express-rate-limit).
