const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet'); 

const app = express();

// --- NEW: SECURITY HEADERS & CSP ---
// This implements CSP, HSTS, and other headers automatically
app.use(helmet()); 

// Custom CSP (Optional: If you want to show off specific config)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "trusted-scripts.com"],
      "object-src": ["'none'"],
      "upgrade-insecure-requests": [],
    },
  })
);

// --- 1. RATE LIMITING ---
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: "Too many requests! Brute force protection active."
});
app.use('/api/', limiter);

// --- 2. CORS ---
const corsOptions = {
    origin: 'http://trusted-site.com',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// --- 3. API KEY AUTH ---
app.get('/api/data', (req, res) => {
    const apiKey = req.header('x-api-key');
    if (apiKey === 'internship-secret-123') {
        res.json({ status: "Success", data: "You accessed secured API data!" });
    } else {
        res.status(401).json({ status: "Failed", message: "Invalid API Key" });
    }
});

app.listen(3000, () => console.log('Secure API running on port 3000'));