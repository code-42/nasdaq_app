angular.module('nasdaq', ['ngRoute']).config(config);

function config($locationProvider, $routeProvider){
    // $locationProvider.html5Mode(false).hashPrefix('');
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: 'angular-app/stock-list/stocks.html',
        controller: StocksController,
        controllerAs: 'vm'
      }).when('/stocks', {
          templateUrl: 'angular-app/stock-list/stocks.html',
          controller: StocksController,
          controllerAs: 'vm'
      }).when('/stocks/:id', {
        templateUrl: 'angular-app/stock-display/stock.html',
        controller: StockController,
        controllerAs: 'vm'
      }).otherwise({
        redirectTo: '/'
    });
}
