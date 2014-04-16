var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db error:'));

// Schéma utilisateurs
var userSchema = mongoose.Schema({
   	name: String
})
// Modèle utilisateur
var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/example');

UserHandler = function() {};

//Récupération de tous les utilisateurs
UserHandler.prototype.getAll = function(callback) {
		User.find({},function (err, users) {
			if (err) return console.error(err);
			for(i=0;i<users.length;i++) {
				console.log("Request : %s with key %s", users[i].name, users[i].id);
			};
			callback(null,users);
		});
		
};

//Ajout des utilisateurs
UserHandler.prototype.add = function(users, callback) {
	
	for(var i=0;i< users.length;i++ ) {
	    user = new User({
	    	name: users[i].name
	    });

	    user.save(function (err, user) {
		if (err) return console.error(err);
		});
	}
	callback(null, users);
};

//Suppression des utilisateurs
//Sauvegarde des utilisateurs
UserHandler.prototype.remove = function(username, callback) {
	User.findOne({name : username}, function(err, doc) {
		if(doc) {doc.remove(); }
	})
	callback(null, user);
};

// // Utilisateurs fictifs
// new UserHandler().add([
//   {name : "Jill", key:123},
//   {name : "Jack", key:456},
//   {name : "John", key:789},
//   {name : "Jane", key:789}
// ], function(error, users){
// 	console.log("Utilisateurs ajoutés");
// });


exports.UserHandler = UserHandler;