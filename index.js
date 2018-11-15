var express = require('express')
	, path = require('path')
	, mongoose = require('mongoose')
	, bodyParser = require('body-parser')
	, http = require('http')
	, crypto = require('crypto')
	, passport = require('passport')
	, LocalStrategy = require('passport-local')
	, flash = require('express-flash')
	, session = require('express-session')
	, cookieParser = require('cookie-parser')
	, async = require('async')
	, MongoDBStore = require('connect-mongodb-session')
	, fs = require('fs')
;

var server = http.createServer(app)
var app = express()
	, dbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/ontrack'
	, port = parseInt(process.env.PORT || '8080')
	, iterations = 10000
;

app.get('/home', (req, res, next) => {
	var filePath = path.join(__dirname, './home.html')
	res.sendFile(filePath);
});

console.log('Listening to port');
	server.on('listening', () => {
		console.log('testing');
		var addr = server.address()
			, bind = typeof addr === 'string'
				? 'pipe ' + addr
				: 'port ' + addr.port
		;
	console.log('Listening on ' + bind);
	});
	server.listen(port);
