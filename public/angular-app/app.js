angular.module('nasdaq', ['ngRoute']).config(config);

function config($locationProvider, $routeProvider){
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider.when('/', {
      templateUrl: 'angular-app/stock-display/stock.html',
      controller: StockController,
      controllerAs: 'vm'
    }).when('/stock?symbol=:symbol', {
      templateUrl: 'angular-app/stock-display/stock.html',
      controller: StockController,
      controllerAs: 'vm'
    }).when('/stock/:id', {
      templateUrl: 'angular-app/stock-display/stock.html',
      controller: StockController,
      controllerAs: 'vm'
    }).otherwise({
      redirectTo: '/'
    });
}

// EA 593c62246ab59ede4d8f0e8f

function changeToUpperCase(t) {
   var eleVal = document.getElementById(t.id);
   eleVal.value= eleVal.value.toUpperCase().replace(/ /g,'');
}
