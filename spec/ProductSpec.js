describe('Product of all others', function () {
  'use strict';

  it('Works for simple two element array', function () {
    var productArray = Product.productOfAllOthers([1, 2]);
    expect(productArray).toEqual([2, 1]);
  });

  it('Works for normal array', function () {
    var productArray = Product.productOfAllOthers([1, 7, 3, 4]);
    expect(productArray).toEqual([84, 12, 28, 21]);
  });
});

describe('Highest product of three', function () {
  'use strict';

  it('Works for simple three element array', function () {
    var product = Product.highestProductOfThree([1, 2, 3]);
    expect(product).toEqual(6);
  });

  it('Works for normal array', function () {
    var product = Product.highestProductOfThree([4, 3, 5, 3, 8, 5, 4, 6]);
    expect(product).toEqual(240);
  });

  it('Works for array with negative elements', function () {
    var product = Product.highestProductOfThree([-4, 3, 5, 3, -8, 5, 4, 6]);
    expect(product).toEqual(192);
  });

  it('Works for array with negative elements again', function () {
    var product = Product.highestProductOfThree([-10, -10, 1, 3, 2]);
    expect(product).toEqual(300);
  });

});