var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');

router
  .route('/')
  .get(ctrlStocks.stocksGetAll)
  // .get(ctrlStocks.getStockSymbol);

  router
    .route('/stock')
    .get(ctrlStocks.stocksGetAll);

router
  .route('/stock/:stockId')
  .get(ctrlStocks.stocksGetOne);

// router
//   .route('/stock?symbol=')
//   // .post(ctrlStocks.getStockSymbol);
//   .get(ctrlStocks.stocksGetOne);

module.exports = router;

// EA 593c62246ab59ede4d8f0e8f
