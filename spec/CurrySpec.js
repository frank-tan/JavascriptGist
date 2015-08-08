describe('Curry function implementation', function () {
  'use strict';

  var randomFunction;

  beforeEach(function () {
    randomFunction = function (stringA, stringB, stringC, stringD) {
      return stringA + stringB + stringC + stringD;
    };
  });

  it('Works when all arguments are provided', function () {
    var actual = Curry.invoke(randomFunction, 'a', 'b', 'c', 'd');
    expect(actual).toEqual('abcd');
  });

  it('Works when arguments are provided one by one', function () {
    var tempFunc1, tempFunc2, tempFunc3, tempFunc4, result;
    tempFunc1 = Curry.invoke(randomFunction);
    expect(typeof tempFunc1).toEqual('function');

    tempFunc2 = tempFunc1('a');
    expect(typeof tempFunc2).toEqual('function');

    tempFunc3 = tempFunc2('b');
    expect(typeof tempFunc3).toEqual('function');

    tempFunc4 = tempFunc3('c');
    expect(typeof tempFunc4).toEqual('function');

    result = tempFunc4('d');
    expect(result).toEqual('abcd');

  });

  it('Works when arguments are provided 2 and then 3', function () {
    var tempFunc1, tempFunc2, tempFunc3, tempFunc4, result;
    tempFunc1 = Curry.invoke(randomFunction, 'a');
    expect(typeof tempFunc1).toEqual('function');

    result = tempFunc1('b', 'c', 'd');
    expect(result).toEqual('abcd');
  });
});