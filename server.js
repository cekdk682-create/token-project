const express = require('express');
const crypto = require('crypto');

const app = express();
const PORT = 8000;

const tokensStorage = [];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

app.use(express.json());

app.post('/generate-token', (req, res) => {
    const uniqueId = crypto.randomBytes(8).toString('hex');
    const newToken = `token_gemini_${uniqueId}`;

    tokensStorage.push({
        token: newToken,
        requests_count: 0
    });

    console.log(`New token in database: ${newToken}`);
    res.json({ token: newToken });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is on port ${PORT}`);
});
