var Q = require('q');
var utilQ = require('../index');
var MoaLog = require('MoaLog');

var it = 0;
utilQ.whileTrueQ(function(){
  return Q.delay(Math.random()*1000).then(function(){MoaLog.debug('whileTrueQ nerver stop', it++)});
});
