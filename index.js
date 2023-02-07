const express = require("express");
const router = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config()

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app