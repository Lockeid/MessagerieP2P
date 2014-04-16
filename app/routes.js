var UserHandler = require('./UserHandler.js').UserHandler;
var userHandler = new UserHandler();

module.exports = function(app) {

	
	// Récupération des utilisateurs	
	app.get('/api/get_users', function(req, res) {
		userHandler.getAll(function(error, users){
      		res.json(users);
      	})
	});
	app.post('/api/add_user', function(req, res) {
		userHandler.add([{name : req.body.name}],function(error, user){
			console.log("I sware on me mom, I'll rek you %s",req.body.name);
		}); 
	});
	// Création d'un groupe
	app.post('/api/create_group',function(req, res) {

	});
	//Récupérer les id des utilisateurs à qui envoyer les messages
	app.get('/api/get_group_users', function(req,res){

	});
		
	// Frontend //	
	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html'); 
	});
	app.get('/dashboard', function(req, res) {
		res.sendfile('./public/views/dash.html'); 
	});
};