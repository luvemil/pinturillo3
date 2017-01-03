// Import config
var config = require('./config');

// Requests/async

var async = require('async');
var request = require('request');

// Babel
require('babel-register');

// React
var swig  = require('swig'); // templating system, use Jade instead?
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

// Express
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser'); // parse body request

var app = express();

var _ = require('underscore');

// Set app
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Put Express stuff before React Middleware
var cryptoRandomString = require('crypto-random-string');
/**
 * GET /api/creategame
 * Create new game
 */
app.get('/api/creategame', function(req, res, next) {
  // TODO: connect these operations to a database
  res.send({room: cryptoRandomString(8)});
});

// React Middleware
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  console.log("There are " + onlineUsers + " users online.");

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });

  // SketchPad management
  socket.on('addItem', function(data) {
    console.log(data);

    socket.broadcast.to(data.room).emit('addItem',data.item);
  });

  socket.on('bindRoom', function(data) {
    console.log(data);
    socket.join(data.room);
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
