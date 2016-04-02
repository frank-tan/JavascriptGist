var StockPrice = (function () {
  var getMaxProfit;

  // Providing the stock price of a day, return the max profit you can gain.
  // Selling point must be after the buying point
  getMaxProfit = function (stockPricesYesterday) {
    var minPriceSoFar, currentPrice, maxGainSoFar, currentMaxGain;

    // handle edge cases
    if (typeof stockPricesYesterday === 'undefined') {
      throw 'Price array must be provided';
    }
    if (stockPricesYesterday === null) {
      throw 'Price array must not be null';
    }
    if (stockPricesYesterday.length < 2) {
      throw 'Price array must have at least two elements';
    }
    if (Object.prototype.toString.call(stockPricesYesterday) !== '[object Array]') {
      throw 'Price array must be a Javascript array';
    }

    // use greedy algorithm to find max gain with O(n) complexity
    minPriceSoFar = stockPricesYesterday[0];
    maxGainSoFar = stockPricesYesterday[1] - stockPricesYesterday[0];
    for (var i = 1; i <= stockPricesYesterday.length; i++) {
      currentPrice = stockPricesYesterday[i];
      currentMaxGain = currentPrice - minPriceSoFar;
      if (currentMaxGain > maxGainSoFar) {
        maxGainSoFar = currentMaxGain;
      }
      if (currentPrice < minPriceSoFar) {
        minPriceSoFar = currentPrice;
      }
    }
    return maxGainSoFar;
  };

  return {
    getMaxProfit: getMaxProfit
  };
})();