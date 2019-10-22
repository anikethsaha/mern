const express = require('express');
const bodyParser = require('body-parser');

var expressControllers = require('express-controller');
var session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const { port, sessionSecretKey } = require('../../config');
const path = require('path');
var csrf = require('csurf');
const mongoose = require('mongoose');
// var RateLimit = require('express-rate-limit')

// SSR method importing from ./controller/ssr
const { renderSSRcomponent } = require('./controller/ssr');

const { MONGO_URL } = require('../../config/index');

console.log('MONGO_URl :', MONGO_URL);
mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: process.env.NODE_ENV === 'production' ? true : false
});

// M
// Middlewares
const app = express();
app.use(helmet());

// session Middleware
app.use(
	session({
		secret: sessionSecretKey,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true }
	})
);
app.use(csrf());
app.set('port', process.env.PORT || port);

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
// use this middleware in authentications routes or post method routes
/* var authAPILimiter = new RateLimit({
    windowMs: 5*60*1000, // 5 minutes
    max: 1000,
    delayMs: 0 // disabled
  });
*/

// V
// static files and views
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// C
//controller settings
//setting up the controller
expressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);

// routes

app.get('/', renderSSRcomponent);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/public')));
}

app.listen(app.get('port'), () => {
	console.log(`> Server is running on PORT ${app.get('port')} `);
});

module.exports = app;
