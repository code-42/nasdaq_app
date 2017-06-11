angular.module('nasdaq').controller('StocksController', StocksController);

function StocksController(stockDataFactory){
    var vm = this;
    vm.title = 'NASDAQ List';
    stockDataFactory.stockList().then(function (response) {
	 	  vm.stocks = response.data;
    });
}
