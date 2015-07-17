var Q = require('q');
var utilQ = require('../index');
var MoaLog = require('MoaLog');

var arr = [
  {k: {k: '1'}},
  {k: {k: '2'}},
  {k: null},
  {k: {k: '4'}},
  {k: {k: '5'}},
];
utilQ.mapSeries(arr, function(obj){
  return Q.delay(Math.random()*1000).then(function(){MoaLog.debug('mapSeries', obj.k.k); return obj.k.k});
})
.then(function(res){
  MoaLog.info('mapSeries', 'res: '+res);
});
