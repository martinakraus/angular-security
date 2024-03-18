const express = require("express");
const crypto = require('crypto');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3000;
const app = express();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200', // Erlaube Anfragen von diesem Origin
    credentials: true, // Erlaube Cookies
}))

// Eine Testroute
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/csp', function (req, res) {
    const nonce = crypto.randomBytes(24).toString('hex')
    const csp= `script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline';`
    res.send({value: csp, nonce });
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
