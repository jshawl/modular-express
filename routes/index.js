var mod = require('../functions');

exports.index = function(req, res){
  res.render('index', { title: mod.getSomething() });
};
