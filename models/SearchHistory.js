const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema({
  searchPhrase: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema)

module.exports = SearchHistory;