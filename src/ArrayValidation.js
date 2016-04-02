var ArrayValidation = (function () {
  var notUndefined, notNull, atLeastTwoElements, mustBeArrayType;

  notUndefined = function (array) {
    if (typeof array === 'undefined') {
      throw 'Array must be provided';
    }
  };

  notNull = function (array) {
    if (array === null) {
      throw 'Array must not be null';
    }
  };

  atLeastTwoElements = function (array) {
    if (array.length < 2) {
      throw 'Array must have at least two elements';
    }
  };

  mustBeArrayType = function (array) {
    if (Object.prototype.toString.call(array) !== '[object Array]') {
      throw 'Array must be a Javascript array';
    }
  };

  return {
    notUndefined: notUndefined,
    notNull: notNull,
    atLeastTwoElements: atLeastTwoElements,
    mustBeArrayType: mustBeArrayType
  };
})();