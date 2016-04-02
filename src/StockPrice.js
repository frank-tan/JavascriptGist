var StockPrice = (function () {
  var getMaxProfit;

  // Providing the stock price of a day, return the max profit you can gain.
  // Selling point must be after the buying point
  // Time complexity O(n)
  // Space complexity O(1)
  getMaxProfit = function (stockPricesYesterday) {
    var minPriceSoFar, currentPrice, maxGainSoFar, currentMaxGain;

    // handle edge cases
    ArrayValidation.notUndefined(stockPricesYesterday);
    ArrayValidation.notNull(stockPricesYesterday);
    ArrayValidation.mustBeArrayType(stockPricesYesterday);
    ArrayValidation.atLeastXElements(stockPricesYesterday, 2);

    // use greedy algorithm to find max gain with O(n) time complexity
    minPriceSoFar = stockPricesYesterday[0];
    maxGainSoFar = stockPricesYesterday[1] - stockPricesYesterday[0];
    for (var i = 1; i < stockPricesYesterday.length; i++) {
      currentPrice = stockPricesYesterday[i];
      currentMaxGain = currentPrice - minPriceSoFar;
      maxGainSoFar = Math.max(currentMaxGain, maxGainSoFar);
      minPriceSoFar = Math.min(currentPrice, minPriceSoFar);
    }
    return maxGainSoFar;
  };

  return {
    getMaxProfit: getMaxProfit
  };
})();