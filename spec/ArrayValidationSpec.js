describe('ArrayValidation', function () {
  'use strict';

  it('Throw an exception when price array is not provided', function () {
    expect(function () {
      ArrayValidation.notUndefined();
    }).toThrow('Array must be provided');
  });

  it('Throw an exception when price array is null', function () {
    expect(function () {
      ArrayValidation.notNull(null);
    }).toThrow('Array must not be null');
  });

  it('Throw an exception when price array has less than two elements', function () {
    expect(function () {
      ArrayValidation.atLeastXElements([1], 2);
    }).toThrow('Array must have at least 2 elements');
  });

  it('Throw an exception when price array is not of Array type', function () {
    expect(function () {
      ArrayValidation.mustBeArrayType('random');
    }).toThrow('Array must be a Javascript array');
  });
});