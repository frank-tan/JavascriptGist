var Product = (function () {

  var productOfAllOthers, highestProductOfThree;

  // For a given array, eg, [1,2,3], return an array with each element being
  // the product of all other elements. Eg, [6,3,2]
  // No division is allowed
  // Time compexity O(n)
  // Space complexity O(n)
  productOfAllOthers = function (array) {
    var length, arrayProductOthers, productSofar;

    ArrayValidation.notUndefined(array);
    ArrayValidation.notNull(array);
    ArrayValidation.mustBeArrayType(array);
    ArrayValidation.atLeastXElements(array, 2);

    length = array.length;
    arrayProductOthers = [];

    // calculate an array of product before each element
    productSofar = 1;
    for (var i = 0; i < length; i++) {
      arrayProductOthers[i] = productSofar;
      productSofar *= array[i];
    }

    // calculate an array of product after each element 
    // and multiply to the result array
    productSofar = 1;
    for (var j = length - 1; j >= 0; j--) {
      arrayProductOthers[j] *= productSofar;
      productSofar *= array[j];
    }

    return arrayProductOthers;
  };

  /*
   * Given an array of integers, find the highest product from 3 elements
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  highestProductOfThree = function (array) {
    var current, highest, lowest, highestTwoProduct, lowestTwoProduct, highestThreeProduct;

    ArrayValidation.notUndefined(array);
    ArrayValidation.notNull(array);
    ArrayValidation.mustBeArrayType(array);
    ArrayValidation.atLeastXElements(array, 3);

    highest = Math.max(array[0], array[1]);
    lowest = Math.min(array[0], array[1]);
    highestTwoProduct = array[0] * array[1];
    lowestTwoProduct = array[0] * array[1];
    highestThreeProduct = array[0] * array[1] * array[2];

    // use greedy algorithm to find 
    for (var i = 2; i < array.length; i++) {
      current = array[i];

      // the highest product of three so far
      highestThreeProduct = Math.max(
        highestThreeProduct,
        highestTwoProduct * current,
        lowestTwoProduct * current);

      // the highest and lowest product of two so far
      highestTwoProduct = Math.max(
        highestTwoProduct,
        highest * current,
        lowest * current);

      lowestTwoProduct = Math.min(
        lowest,
        highest * current,
        lowest * current);

      // the highest and lowest element so far
      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    }

    return highestThreeProduct;
  };

  return {
    productOfAllOthers: productOfAllOthers,
    highestProductOfThree: highestProductOfThree
  };
})();