angular.module('nasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
  return {
    stockList: stockList,
    stockDisplay: stockDisplay
  };

  function stockList(){
    return $http.get('/api/stocks').then(complete).catch(failed);
  }

  function stockDisplay(id){
    return $http.get('/api/stocks/' + id).then(complete).catch(failed);
  }

  function complete(response){
      console.log("response.data.name == " + response.data);
      return response.data;
  }

  function failed(error){
      console.log("error.data == " + error.data);
  }
}
