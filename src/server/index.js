const dotenv = require('dotenv');
dotenv.config();
const mockAPIResponse = require('./mockAPI.js');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const API_KEY = "7f211de7afb645d9993690e8e03ff8b6";


const app = express();
app.use(express.static("dist"))
const cors = require('cors');

app.use(cors());
app.use(bodyParser.text());

const apiURL = "https://api.meaningcloud.com/sentiment-2.1";

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/call', callApi);

async function callApi(req, res) {
    const url = `${apiURL}?key=${API_KEY}&lang=auto&url=${req.body}`;
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'API endpoint error' })
    }
}

app.listen(8000, function () {
    console.log('My server is running on port number 8000 :)');
});
