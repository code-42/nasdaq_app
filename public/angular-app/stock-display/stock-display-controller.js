angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){
  var vm = this;
  vm.title = 'NASDAQ stock app';
  // var symbol = $routeParams.symbol;
  // console.log("1.vm.symbol == " + symbol);
  vm.isSubmitted = false;

  // stockDataFactory.stockDisplay(symbol).then(function (response) {
  //   console.log("1.response == " + response);
 // 	 //  vm.stock = response.data;
  //  vm.stock = response;
  // });

  // var stockSymbol = vm.symbol;
  // stockDataFactory.stockDisplay(stockSymbol).then(function(response){
  //   vm.stock = response;

  vm.getStock = function(){

    var stockSymbol = vm.symbol;

    console.log("1.vm.symbol.name == " + vm.symbol);
    if (vm.stockForm.$valid){
      console.log("2.inside if (vm.stockForm.$valid){ " + stockSymbol);
      stockDataFactory.stockDisplay(stockSymbol).then(function(response){
        vm.stock = response;
        console.log("3.vm.Stock == " + vm.stock.Name);
        if (response.status === 200){
          $route.reload();
        }
      }).catch(function(error){
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };
}
