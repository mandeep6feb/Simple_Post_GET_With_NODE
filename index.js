const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router({mergeParams: true});
let http = require('http');
let core = require('cors');
let server = http.Server(app);
let detailControlers = require('../server/controller/detailsController');
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(core());
const { mongoose } = require('./config/config');
app.use('/', detailControlers);

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
