var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
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
	"ADR TSO" : {
		type : String,
		required : true
	},
	IPOyear : {
		type : Date,
		"default" : Date
	},
	Sector : {
		type : String,
		required : true
	},
	Industry : {
		type : String,
		required : true
	},
	"Summary Quote" : {
		type : String,
		required : true
	},
	field10 : {
		type : String,
		required : true
	}
});


mongoose.model('Nasdaq', stockSchema, 'stocks');
