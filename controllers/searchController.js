const axios = require('axios')
const Spotify = require('node-spotify-api');
const keys = require("./../config/keys")

// temporary search parameteres
const artist = "";
// const lyric = "come as you are";
const lyricSearch = "184815021";
const trackName = "Come As You Are (In the Style of Nirvana) [Karaoke Version]"
const artistName = "Ameritz Karaoke Entertainment"

module.exports = {
  getSongs: function (req, res) {
    // console.log(req)
    console.log(req.body)
    console.log(req.params)
    const{lyric} = req.params

    axios.get(`http://api.musixmatch.com/ws/1.1/track.search?f_lyrics_language=en&f_has_lyrics=true&q=${lyric}&q_artist=${artist}&q_lyrics=${lyric}&apikey=${keys.musixmatchAPIkey}`)
      .then(function (response) {
        res.json(response.data.message.body.track_list)
      })
      .catch(err => res.json(err))
  },
  getLyrics: function (req, res) {
    axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${lyricSearch}&apikey=${keys.musixmatchAPIkey}`)
      .then(function (response) {
        res.json(response.data.message.body.lyrics)
      })
      .catch(err => res.json(err))
  },
  getVideoInfo: function (req, res) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${trackName + " " + artistName}&key=${youtubeAPIkey}`)
      .then(function (response) {
        res.json(response.data.items);
      })
      .catch(err => res.json(err));
  },
  getSpotify: function (req, res){
    var spotify = new Spotify(keys.spotify)
    spotify
      .search({ type: 'track', query: 'come as you are' })
      .then(function (response) {
        // external url link to song
        console.log(response.tracks.items[0].album.artists[0].external_urls.spotify)
        res.json(response.tracks.items)
      })
      .catch(err => res.json(err))
  }
}