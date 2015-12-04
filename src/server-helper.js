var serverState = function(options) {
  var app = options.app;
  // var dbclient = options.dbclient;
  
  // routes
  app.get('/landing', function (req, res, next) {
    res.end("todo");
  });

  app.get('/login', function (req, res, next) {
    res.end("todo");
  });

  app.get('/petition', function (req, res, next) {
    res.end("todo");
  });
  
}

  
module.exports = serverState;