angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){

  var vm = this;
  vm.title = 'NASDAQ app';
  vm.isSubmitted = false;

  vm.getStock = function(){
    var stockSymbol = vm.symbol;
    console.log("1.vm.symbol.name == " + vm.symbol);
    if (vm.stockForm.$valid){
      console.log("2.inside if (vm.stockForm.$valid){ " + stockSymbol);
      stockDataFactory.stockDisplay(stockSymbol).then(function(response){
        vm.stock = response;
        console.log("3.vm.Stock == " + vm.stock);
        if (response.status === 200){
          // vm.addQuery();
          // _addQuery(req, res, vm.stock);
          $route.reload();
        }
      });
      // var queryData = vm.stock;
      // console.log("4.queryData == " + queryData);
      // stockDataFactory.postQuery(stockSymbol).then(function(response){
      //   vm.stock = response;
      //   console.log("3.vm.Stock == " + vm.stock);
      //   // _addQuery(req, res, vm.stock);
      //   if (response.status === 200){
      //     // _addQuery(req, res, vm.stock);
      //     $route.reload();
      //   }
      // })
      .catch(function(error){
        console.log("4.error == " + error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };

  // var _addQuery = function(req, res){
  //   console.log("1.inside _addQuery");

  //   queryData = {
  //     Symbol : req.body.symbol,
  //     Name : req.body.Name,
  //     LastSale : parseInt(req.body.LastTradePriceOnly, 10),
  //     MarketCap : parseInt(req.body.MarketCapitalization, 10),
  //     TimeStamp : req.body.created
  //   }
  //   console.log("2.queryData == " + queryData);
  // 	nasdaq.save(function(err, queryData){
  //     console.log("2.inside nasdaq.save()");
  // 		if(err){
  // 			res
  // 				.status(500)
  // 				.json(err);
  // 		} else {
  // 			res
  //         .status(201)
  //         .json(nasdaqUpdated.storeQueries[nasdaqUpdated.storeQueries.length-1]);
  // 		}
  //     console.log("3.fin.");
  // 	});
  // };

  // vm.addQuery = function(){
  //   console.log("1.inside vm.addQuery");
  //
  //   var queryData = {
  //     Symbol : req.body.symbol,
  //     Name : req.body.Name,
  //     LastSale : parseInt(req.body.LastTradePriceOnly, 10),
  //     MarketCap : parseInt(req.body.MarketCapitalization, 10),
  //     TimeStamp : req.body.created
  //   };
  //   console.log("1.vm.symbol.name == " + vm.symbol);
  //   if (vm.stockForm.$valid){
  //     console.log("2.inside if (vm.stockForm.$valid){ " + stockSymbol);
  //     stockDataFactory.postQuery(queryData).then(function(response){
  //       vm.stock = response;
  //       console.log("3.vm.Stock == " + vm.stock.Name);
  //       _addQuery(req, res, queryData);
  //       if (response.status === 200){
  //         _addQuery(req, res, queryData);
  //         $route.reload();
  //       }
  //     }).catch(function(error){
  //       console.log("4.error == " + error);
  //     });
  //   } else {
  //     vm.isSubmitted = true;
  //   }
  // };
}
