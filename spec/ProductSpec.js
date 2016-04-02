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