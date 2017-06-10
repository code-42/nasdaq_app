var mongoose = require('mongoose');
var NASDAQ = mongoose.model('NASDAQ');

module.exports.stocksGetOne = function(req, res){

  var id = req.params.stockId;
  console.log("GET stockId", id);

  NASDAQ
    .findById(id)
    .exec(function(err, doc){
      console.log("doc == " + doc);
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
