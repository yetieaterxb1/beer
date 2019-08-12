const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
	name: String,
	brewery: String,
	rating: String
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
