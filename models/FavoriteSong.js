const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoriteSongSchema = new Schema({
  songName: {
    type: String,
    required: true,
  },
  artist: String,
  lyrics: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const FavoriteSong = mongoose.model('FavoriteSong', FavoriteSongSchema)

module.exports = FavoriteSong;