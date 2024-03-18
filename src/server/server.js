const express = require("express");
const crypto = require('crypto');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3000;
const app = express();
let views = 0;

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200', // Erlaube Anfragen von diesem Origin
    credentials: true, // Erlaube Cookies
}))


app.use((req, res, next) => {
    if (!req.cookies['XSRF-TOKEN']) {
        // Erzeugung eines zufälligen Tokens
        const token = crypto.randomBytes(24).toString('hex');
        // Speicherung des Tokens in einem Cookie
        res.cookie('XSRF-TOKEN', token);
    }
    next();
});

// Eine Testroute
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/view', function (req, res) {
    views++;
    res.send({views});
});

app.post('/login', function (req, res) {
    res.send({ text: `Login Successfully`});
});


app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
