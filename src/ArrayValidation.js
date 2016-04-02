var ArrayValidation = (function () {
  var notUndefined, notNull, atLeastXElements, mustBeArrayType;

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

  atLeastXElements = function (array, x) {
    if (array.length < x) {
      throw 'Array must have at least ' + x + ' elements';
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
    atLeastXElements: atLeastXElements,
    mustBeArrayType: mustBeArrayType
  };
})();