var UserHandler = require('./UserHandler.js').UserHandler;
var userHandler = new UserHandler();

module.exports = function(app) {

	
	// Récupération des utilisateurs	
	app.get('/api/get_users', function(req, res) {
		userHandler.getAll(function(error, users){
      		res.json(users);
      	})
	});
	// Ajout d'un utilisateur en ligne
	app.post('/api/add_user', function(req, res) {
		userHandler.add([{name : req.body.name}],function(error, user){
			console.log("Added user %s",req.body.name);
		}); 
	});
	// Récupération de l'utilisateur 
	app.get('/api/get_username', function(req, res){
		res.json(app.locals.username);
	});
	// Récupération du destinataire
	app.get('/api/get_conv', function(req,res) {
		console.log(app.locals.conv);
		res.send(app.locals.conv);
	})
		
	// Frontend	
	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html'); 
	});
	//No username set
	app.get('/dashboard', function(req, res) {
		res.redirect('/');
	});
	//Username set
	app.get('/dashboard/:username', function(req, res) {
		app.locals.username = req.params.username;
		res.sendfile('./public/views/dash.html'); 
	});
	//Forward to the conv
	app.get('/sconv/:username/:dest',function(req, res){		
		app.locals.conv = 
			{
				username : req.params.username	,
				dest : req.params.dest
			}
		;
		res.sendfile('./public/views/sconv.html');
	})
	app.get('/sconv/:username/:dest/:c',function(req, res){		
		app.locals.conv = 
			{
				username : req.params.username	,
				dest : req.params.dest
			}
		;
		res.sendfile('./public/views/sconv.html');
	})

};