const axios = require('axios')



// temporary search parameteres
const artist = "";
const lyric = "come as you are";
const lyricSearch = "63189290";
const trackName = "Come As You Are (In the Style of Nirvana) [Karaoke Version]"
const artistName = "Ameritz Karaoke Entertainment"

module.exports = {
  getSongs: function (req, res) {
    axios.get(`http://api.musixmatch.com/ws/1.1/track.search?f_lyrics_language=en&f_has_lyrics=true&q=${lyric}&q_artist=${artist}&q_lyrics=${lyric}&apikey=${musixmatchAPIkey}`)
      .then(function (response) {
        for (let i = 0; i < response.data.message.body.track_list.length; i++) {
          console.log("Artist Name - " + response.data.message.body.track_list[i].track.artist_name)
          console.log("Album Name - " + response.data.message.body.track_list[i].track.album_name)
          console.log("Track Name - " + response.data.message.body.track_list[i].track.track_name + "\n\n")
        }
        res.json(response.data.message.body.track_list)
      })
      .catch(err => res.json(err))
  },
  getLyrics: function (req, res) {
    axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${lyricSearch}&apikey=${musixmatchAPIkey}`)
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
  }
}