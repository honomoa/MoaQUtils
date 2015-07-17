var Q = require('q');
var utilQ = require('../index');
var MoaLog = require('MoaLog');

var times = 5;
var it = 0;
utilQ.whileQ(function(){
  return it<5;
}, function(){
  return Q.delay(Math.random()*1000).then(function(){MoaLog.debug('whileQ', it++)});
});
