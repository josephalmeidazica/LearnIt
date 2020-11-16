const express = require('express');
const morgan =  require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
}));

//settings
app.use(morgan('dev'));
app.unsubscribe(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes
app.use(require('./routes/index.js'))

//static files

module.exports = app