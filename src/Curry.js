var Curry = (function () {
  'use strict';

  var invoke;

  invoke = function (fn) {
    var args, fnArgs;

    args = Array.prototype.slice.call(arguments, 0);

    if (fn.length + 1 === arguments.length) {
      fnArgs = args.slice(1);
      return fn.apply(undefined, fnArgs);
    } else {
      return function () {
        var newArgs = Array.prototype.slice.call(arguments, 0);
        return invoke.apply(undefined, args.concat(newArgs));
      };
    }
  };

  return {
    invoke: invoke
  };
}());