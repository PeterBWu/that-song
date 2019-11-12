const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema({
  searchPhrase: {
    type: String,
    required: true
  }
});

const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema)

module.exports = SearchHistory;