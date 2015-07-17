var Q = require('q');

module.exports = function whileQ(condition, then) {
  var deferred = Q.defer();

  function loop() {
      // When the result of calling `condition` is no longer true, we are
      // done.
      if (!condition()) return deferred.resolve();
      // Use `when`, in case `then` does not return a promise.
      // When it completes loop again otherwise, if it fails, reject the
      // done promise
      Q.when(then(), loop, deferred.reject);
  }

  // Start running the loop in the next tick so that this function is
  // completely async. It would be unexpected if `then` was called
  // synchronously the first time.
  Q.nextTick(loop);

  // The promise
  return deferred.promise;
};
