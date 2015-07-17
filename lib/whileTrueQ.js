var Q = require('q');
var whileQ = require('./whileQ');

module.exports = function whileTrueQ(then) {
  return whileQ(function(){
    return true;
  }, then);
};
