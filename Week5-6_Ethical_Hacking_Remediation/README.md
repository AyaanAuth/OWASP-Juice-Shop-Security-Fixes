📝 Project Overview
This repository contains the security enhancements and audit reports for a Node.js web application. The goal was to transition the application from a vulnerable state to a hardened, production-ready environment compliant with OWASP standards.

⚔️ Week 5: Ethical Hacking & Remediation

SQL Injection (SQLi): Conducted reconnaissance using Nmap and identified vulnerabilities via SQLMap.


Remediation: Replaced dynamic SQL strings with Prepared Statements to eliminate injection risks.

CSRF Protection: Integrated middleware to protect state-changing requests from forgery attacks.

🔍 Week 6: Advanced Audits & Compliance

OWASP ZAP: Conducted an automated scan identifying 5 key alerts, including missing CSP directives.


Nikto: Performed a web server audit to verify header configurations.


Lynis: Conducted a system-level audit, achieving a Hardening Index of 62.


Dependency Scanning: Patched a low-severity vulnerability in the qs library, resulting in 0 vulnerabilities for final deployment.
