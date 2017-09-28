var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
	symbol : {
		type : String,
		required : true
	},
	Name : {
		type : String,
		required : true
	},
	LastTradePriceOnly : {
		type : Number,
		min : 0,
		required : true
	},
	MarketCapitalization : {
		type : Number,
		min : 0,
		required : true
	},
	created : {
		type : String,
		required : true
	}
});


mongoose.model('Query', querySchema);
