describe('StockPrice', function () {
  'use strict';

  beforeEach(function () {

  });

  it('Throw an exception when price array is not provided', function () {
    expect(function () {
      StockPrice.getMaxProfit();
    }).toThrow('Array must be provided');
  });

  it('Throw an exception when price array is null', function () {
    expect(function () {
      StockPrice.getMaxProfit(null);
    }).toThrow('Array must not be null');
  });

  it('Throw an exception when price array has less than two elements', function () {
    expect(function () {
      StockPrice.getMaxProfit([1]);
    }).toThrow('Array must have at least two elements');
  });

  it('Throw an exception when price array is not of Array type', function () {
    expect(function () {
      StockPrice.getMaxProfit('random');
    }).toThrow('Array must be a Javascript array');
  });

  it('Works when highest price occurs after lowest', function () {
    var stockPriceArray = [10, 7, 5, 8, 11, 9];
    var calculatedMaxGain = StockPrice.getMaxProfit(stockPriceArray);
    expect(calculatedMaxGain).toEqual(6);
  });

  it('Works when highest price occurs before lowest', function () {
    var stockPriceArray = [10, 12, 5, 8, 11, 9];
    var calculatedMaxGain = StockPrice.getMaxProfit(stockPriceArray);
    expect(calculatedMaxGain).toEqual(6);
  });

  it('Works when price is flat all day', function () {
    var stockPriceArray = [10, 10, 10, 10, 10, 10];
    var calculatedMaxGain = StockPrice.getMaxProfit(stockPriceArray);
    expect(calculatedMaxGain).toEqual(0);
  });

  it('Works when price is falling all day', function () {
    var stockPriceArray = [10, 9, 8, 7, 6, 5];
    var calculatedMaxGain = StockPrice.getMaxProfit(stockPriceArray);
    expect(calculatedMaxGain).toEqual(-1);
  });

  it('Works when highest price occurs at the end', function () {
    var stockPriceArray = [10, 12, 5, 8, 11, 12];
    var calculatedMaxGain = StockPrice.getMaxProfit(stockPriceArray);
    expect(calculatedMaxGain).toEqual(7);
  });

});