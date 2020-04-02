const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const fs = require('fs');
const { exec } = require("child_process");

const save = require('./models/save.js');


const port = 8181;

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = {
    language: "python",
    assignment: "Write code that prints Hello World"
};

app.get("/load/:hash", (req, res) => res.json(data));



app.post("/save", (req, res) => save.runCode(req, res));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
