angular.module('nasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
  return {
    stockDisplay: stockDisplay,
    postQuery: postQuery
  };

  function stockDisplay(symbol){
   console.log("1.get.stockDataFactory.stockDisplay(symbol) == " + symbol);
   return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + symbol + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(complete).catch(failed);
 }

  function postQuery(queryData){
    console.log("2.stockDataFactory.postQuery(queryData) == " + queryData.StockName);
    return $http.post('/api/querys', queryData).then(complete).catch(failed);
  }

  function complete(response){
      console.log("3.stockDataFactory.response.data == " + response.data);
      return response.data;
  }

  function failed(error){
      console.log("4.stockDataFactory.error == " + error);
      return response;
  }
}
