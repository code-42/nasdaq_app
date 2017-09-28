var mongoose = require('mongoose');
var Nasdaq = mongoose.model('Nasdaq');

module.exports.stocksGetOne = function(req, res){

  var id = req.params.stockId;
  // var id = req.query.symbol;
  console.log("GET stockId", id);

  Nasdaq
    .findById(id)
    // .findOne({'Symbol': id})
    .exec(function(err, doc){
      console.log("1.doc == " + doc);
      var response = {
        status : 200,
        message : doc
      };
      if(err){
        console.log("Error finding stock");
        response.status = 500;
        response.message = err;
      } else if (!doc) {
        response.status = 404;
        response.message = {
          "message" : "Stock ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
  });
};

var getStockSymbol = function(req, res){

  var symbol = req.query.symbol;
  console.log("1.getStockSymbol", symbol);

  Nasdaq
    .findOne({'Symbol': symbol})
    .exec(function(err, doc){
      console.log("2A.symbol == " + symbol);
      console.log("2B.doc == " + doc);
      var response = {
        status : 200,
        message : doc
      };
      if(err){
        console.log("Error finding stock");
        response.status = 500;
        response.message = err;
      } else if (!doc) {
        response.status = 404;
        response.message = {
          "message" : "Stock symbol not found "
        };
      }
      console.log("3A.response.status == ", response.status);
      console.log("3B.response.message == ", response.message);
      res
        .status(response.status)
        .json(response.message);
  });
};


module.exports.stocksGetAll = function(req, res){

  console.log('GET all the stocks');
  console.log("req.query == ", req.query);

  if(req.query && req.query.symbol){
    getStockSymbol(req, res);
  return;
  }

  var offset = 0;
  var count = 3;
  var maxCount = 10;

  if (req.query && req.query.offset){
    offset = parseInt(req.query.offset, 10);
  }

	if (req.count && req.query.count){
	 count = parseInt(req.query.count, 10);
	}

	if (isNaN(offset) || isNaN(count)){
		console.log("querystring error");
		res
			.status(400)
			.json({
				"message" : "If supplied count and offset should be numbers."
				});
		return;
	}

	if (count > maxCount){
		res
			.status(400)
			.json({
				"message" : "Count limit of " + maxCount + " exceeded"
			});
		return;
	}

	Nasdaq
	.find()
  .skip(offset)
  .limit(count)
	.exec(function(err, stocks){
    console.log("stocks == " + stocks);
		if(err){
			console.log("Error finding stocks");
			res
				.status(500)
				.json(err);
		} else {
		  console.log("Found " + stocks.length + " stocks");
      res
        .json(stocks);
		}
		console.log("found offset " + offset + " : count " + count + " stocks");
	});
};

var _saveQuery = function(req, res){
// module.exports.saveQuery = function(req, res, nasdaq){

	var queryData = new saveQuery({
    symbol : req.body.symbol,
    Name : req.body.Name,
    LastSale : parseInt(req.body.LastTradePriceOnly, 10),
    MarketCap : parseInt(req.body.MarketCapitalization, 10),
    TimeStamp : req.body.created
	});
  console.log("1.saveQuery.?");
	queryData.save(function(err){
		if(err){
			res
				.status(500)
				.json(err);
		} else {
			res
        .status(201)
        .json(queryData);
		}
	});

};

module.exports.queryAddOne = function(req, res){
  var symbol = req.params.symbol;
  console.log("1.queryAddOne.req.params.symbol.symbol", symbol);

  Nasdaq
    // .findById(id)
    .findOne({'Symbol': symbol})
    .select('symbol')
    .exec(function(err, doc) {
      console.log("doc == " + doc);
      var response = {
        status : 200,
        message : []
      };
      if (err) {
        console.log("Error finding symbol");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("symbol not found in database");
        response.status = 404;
        response.message = {
          "message" : "symbol not found "
        };
      }
      if (doc){
        _saveQuery(req, res, doc);
      } else {
	      res
	        .status(response.status)
	        .json(response.message);
      }
    });
};
