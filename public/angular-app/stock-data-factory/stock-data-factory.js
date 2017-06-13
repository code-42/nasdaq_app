angular.module('nasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
  return {
    stockDisplay: stockDisplay
  };

  function stockDisplay(symbol){
    console.log("1.stockDataFactory.stockDisplay(symbol) == " + symbol);
    return $http.get('/api/stock?symbol=' + symbol).then(complete).catch(failed);
  }

  function complete(response){
      console.log("2.response.data == " + response.data);
      return response.data;
  }

  function failed(error){
      console.log("error.data == " + error.data);
  }
}
