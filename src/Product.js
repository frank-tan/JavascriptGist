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

  return {
    productOfAllOthers: productOfAllOthers
  };
})();