angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){

  var vm = this;
  vm.title = 'NASDAQ app';
  vm.isSubmitted = false;

  vm.getStock = function(){
    var stockSymbol = vm.symbol;
    console.log("1A.vm.symbol == " + vm.symbol);
    console.log("1B.stockSymbol == " + stockSymbol);
    if (vm.stockForm.$valid){
      console.log("2.inside getStock.if(vm.stockForm.$valid){... " + stockSymbol);
      stockDataFactory.stockDisplay(stockSymbol).then(function(response){
        vm.stock = response;
        console.log("4.after retruning from dataFactory vm.Stock == " + vm.stock);
        // _query();
      })
      .catch(function(error){
        console.log("6.getStock.error == " + error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };
}

// var _query = function(req, res){
//   console.log('inside query.controllers.js.query()');
//
//   var symbol = req.body.symbol;
//   var Name = req.body.Name;
//   var LastTradePriceOnly = parseInt(req.body.LastTradePriceOnly, 10);
//   var MarketCapitalization = parseInt(req.body.MarketCapitalization, 10);
//   var created = req.body.created;
//
//   Query.create({
//     symbol: symbol,
//     Name: Name,
//     LastTradePriceOnly: LastTradePriceOnly,
//     MarketCapitalization: MarketCapitalization,
//     created: created
//   }, function(err, query){
//     if(err){
//       console.log(err);
//       res.status(400).json(err);
//     } else {
//       console.log('query created', query);
//       res.status(201).json(query);
//     }
//   });
// };
