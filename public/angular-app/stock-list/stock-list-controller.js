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
}
