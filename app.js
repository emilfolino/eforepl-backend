const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


const port = 8181;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = {
    language: "python",
    assignment: "Write code that print Hello World"
};



app.get('/load/:hash', (req, res) => res.json(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
