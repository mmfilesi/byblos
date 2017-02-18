'use strict';

// http://www.codekitchen.ca/guide-to-structuring-and-building-a-restful-api-using-express-4/
// https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
// https://carlosazaustre.es/blog/autenticacion-con-token-en-node-js/
// https://carlosazaustre.es/blog/como-crear-una-api-rest-usando-node-js/

const express   = require('express');
const app       = express();

const rest      = require('./server-app/rest');


/**
 * @namespace bootstrap
 * @description Start server
 */
const bootstrap = (function() {

  const module    = {};
  const self      = module;

  module.initAll = ()=> {
    self.defineRoutes();
    self.launchServer();
  };

  module.defineRoutes = ()=> {

    app.use('/', rest);

    app.use(express.static('public'));    

    app.use(function(req, res) {
      res.status(404).sendFile(__dirname +'/public/404.html');
    });

    app.use(function(err, req, res, next) {
      // todo :: 500
      res.status(500).send('server crash!');
    });
  };

  module.launchServer = ()=> {
    app.listen(3000, function () {
      console.log('Server listening on port 3000!')
    }); 
  };

  return {
    initAll: module.initAll
  };

})();

bootstrap.initAll();



