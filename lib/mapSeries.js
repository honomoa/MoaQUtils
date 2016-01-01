var Q = require('q');
var MoaLog = require('MoaLog');

module.exports = function mapSeries(arr, iterator){
  // create a empty promise to start our series (so we can use `then`)
  var currentPromise = Q();
  var promises = arr.map(function(el, idx, arr){
    return currentPromise = currentPromise.then(function(){
      // execute the next function after the previous has resolved successfully
      return iterator(el, idx, arr);
    }).fail(function(err){
      MoaLog.error('mapSeries', err);
    });
  });
  // group the results and return the group promise
  return Q.all(promises);
};
