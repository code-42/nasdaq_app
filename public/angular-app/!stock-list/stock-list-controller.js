angular.module('nasdaq').controller('StocksController', StocksController);

function StocksController(stockDataFactory){
    var vm = this;
    vm.title = 'NASDAQ List';
    stockDataFactory.stockList().then(function (response) {
      console.log("2.response == " + response);
	 	  // vm.stocks = response.data;
      vm.stocks = response;
      console.log("3.vm.stocks == " + vm.stocks);
    });

  // vm.findSymbol = function(){
  //   var stockSymbol = {
  //     name: vm.symbol
  //   };
  //   if (vm.symbolForm.$valid){
  //     console.log("inside if (vm.symbolForm.$valid){ ");
  //     stockDataFactory.symbolDisplay(id, stockSymbol).then(function(response){
  //       console.log("inside vm.findSymbol " + id + " " + stockSymbol + " " + response);
  //       // if (response.status === 200){
  //       //   console.log("inside response.status ");
  //       //   $route.reload();
  //       // }
  //     }).catch(function(error){
  //       console.log(error);
  //     });
  //   } else {
  //     vm.isSubmitted = true;
  //   }
  // };
}
