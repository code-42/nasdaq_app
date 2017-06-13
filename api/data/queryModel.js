var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
	Symbol : {
		type : String,
		required : true
	},
	Name : {
		type : String,
		required : true
	},
	LastSale : {
		type : Number,
		min : 0,
		required : true
	},
	MarketCap : {
		type : Number,
		min : 0,
		required : true
	},
	TimeStamp : {
		type : String,
		required : true
	}
});


mongoose.model('Nasdaq', stockSchema, 'storeQueries');
