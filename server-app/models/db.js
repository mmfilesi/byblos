'use strict';

const mongoose 		= require('mongoose');
const bookSchema 	= require('./books');

// todo: coger del archivo de configuración
const pathDB 		= '//localhost:27017/br';

const db = ( ()=> {

	const module  	= {};
 	const self    	= module;
 	
 	var burkom,
 		burkomModel;

 	module.closeConexion = ()=> {
		process.on('SIGINT', function() {
			mongoose.connection.close(function () {
				msg.info('Mongoose disconnected through app termination');
				process.exit(0);
			});
		});
 	},

 	module.initConexion = (callback)=> {
		mongoose.connect('mongodb:' + pathDB, (err, res)=> {  
			if ( err ) {
				// todo, pasar a api msg
				msg.error('ERROR: connecting to Database. ' + err);
				return false;
			}

			bookModel = mongoose.model('Book', bookSchema);
			bookModel.findById('5723d25cafde9f1403a916d0', (err, doc)=> {
				bookModel = doc;			  
				callback(doc);
			});
			
			self.closeConexion();
			return bookModel;
		});
	};

	module.init = (callback)=> {
		self.initConexion(callback)
	};

	return {
    	init: module.init
	};

} )();

module.exports = db;