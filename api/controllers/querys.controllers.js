var mongoose = require('mongoose');
var Query = mongoose.model('Query');

module.exports.query = function(req, res){
  console.log('inside query.controllers.js.query()');

  var symbol = req.body.symbol;
  var Name = req.body.Name;
  var LastTradePriceOnly = parseInt(req.body.LastTradePriceOnly, 10);
  var MarketCapitalization = parseInt(req.body.MarketCapitalization, 10);
  var created = req.body.created;

  Query.create({
    symbol: symbol,
    Name: Name,
    LastTradePriceOnly: LastTradePriceOnly,
    MarketCapitalization: MarketCapitalization,
    created: created
  }, function(err, query){
    if(err){
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('query created', query);
      res.status(201).json(query);
    }
  });
};
