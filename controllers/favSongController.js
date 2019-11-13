const db = require('../models');

module.exports = {
  getFavSongs: async (req, res) => {
    try {
      const songs = await db.FavoriteSong.find().populate('user', 'email');
      res.json(songs);
    } catch(err) {
      res.json(err);
    }
  },
  getFavSong: async (req, res) => {
    const { favSongId } = req.params;
    try {
      const song = await db.FavoriteSong.findById(favSongId).populate('user', 'email');
      if(!song) {
        res.status(404).json({ error: 'no favorite song found'});
      }
      res.json(song)
    } catch(err) {
      res.status(403).json
    }
  },
  createFavSong: async (req, res) => {
    const {songName, artist, lyrics} = req.body;
    try {
      const song = await new db.FavoriteSong({
        user: req.user._id,
        songName,
        artist,
        lyrics
      });
      await song.save();
      req.user.favoriteSongs.push(song)
      awaitreq.user.save();
      res.json({ success: true })
    } catch(err) {
      res.status(403).json(err);
    }
  },
  deleteFavSong: async (req, res) => {
    // res.json('hit')
    const { favSongId } = req.params;
    try {
      const song = await db.FavoriteSong.findById(favSongId);
      if(JSON.stringify(song.user) !== JSON.stringify(req.user._id)) {
        return res.status(401).json({ error: 'Not a valid user history item' });
      }
      res.json('inside try after if')
      await db.FavoriteSong.findByIdAndDelete(favSongId);
      req.user.favoriteSongs.pull(favSongId);
      await req.user.save();
      // res.json('delete end')
      res.json(song);
    } catch(err) {
      res.json(err)
    }
  }
}