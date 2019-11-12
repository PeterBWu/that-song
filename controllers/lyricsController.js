const axios = require('axios')
const musixmatchAPIkey = 'a4306ba05d007abcb3b5f60b158e97ed'
const youtubeAPIkey = 'AIzaSyBTjPLKLgOGpfHDC9mVQm6MeUOTskX2jik'
const artist = "";
const lyric = "come as you are";


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
  }
}