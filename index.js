const express = require('express');
const bodyparser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents/index'); 

const app = express();

const port = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyparser.urlencoded({extend: true}));
app.use(bodyparser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));