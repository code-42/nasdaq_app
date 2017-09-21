angular.module('nasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
  return {
    stockDisplay: stockDisplay,
    postQuery: postQuery
  };

  function stockDisplay(symbol){
    console.log("1.get.stockDataFactory.stockDisplay(symbol) == " + symbol);
    // bookmark:  http://lekkerlogic.com/2015/04/live-market-data-with-yahoo-finance-api-json-jquery/
    return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + symbol + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(complete).catch(failed);
  }

  // function postQuery(queryData){
  //   console.log("1.post.stockDataFactory.postQuery(queryData) == " + queryData);
  //   return $http.post('/api/stock', queryData).then(complete).catch(failed);
  // }

  function complete(response){
      console.log("2.response.data == " + response.data);
      return response.data;
  }

  function failed(error){
      console.log("3.error.data == " + error.data);
      return response;
  }
}
