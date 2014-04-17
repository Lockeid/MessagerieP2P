// modules
var express = require('express');
var app     = express();
var mongoose= require('mongoose');
var port = process.env.PORT || 8080;
var UserHandler = require('./app/UserHandler.js').UserHandler;
var userHandler = new UserHandler();

// configuration
var io = require('socket.io');
var server = require('http').createServer(app);
var socket = io.listen(8081);
	


// PeerServer
var PeerServer = require('peer').PeerServer;
var peer = new PeerServer({port: 9000}); 


app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	
	app.use(express.logger('dev')); 					
	app.use(express.bodyParser()); 						
	app.use(express.methodOverride()); 					
});

// socket.io
socket.sockets.on('connection', function (client) {
	console.log('socket.io : Connected');
	//Ajnout de l'utilisateur à la db
	client.on('newUser', function (data) {
	    console.log("Adding %s ",data.name);
	    userHandler.add([{name : data.name}],function(error, user){}); 
	  });

	client.on('removeUser', function (data) {
	    console.log("Removing %s",data.name);
	    userHandler.remove(data.name,function(error, user){
	    });

	  });
});


// routes 
require('./app/routes')(app); // configure our routes

// start app 
app.listen(port);										
console.log('Server de messagerie sur le port  ' + port); 			
exports = module.exports = app; 						
