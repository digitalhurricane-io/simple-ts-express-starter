const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = 3000;

app.use(helmet());

app.use(cors());
app.options('*', cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mount api v1 routes
app.use('/v1', require('./v1/routes')); 

app.use(function (req, res, next) {
    res.status(404).send("Route doesn't exist");
})

app.listen(port, () => console.log(`App listening on port ${port}!`));