const router = require('express').Router();
const authRoutes = require('./authRoutes');
const blogRoutes = require('./blogRoutes');
const favSongRoutes = require('./favSongRoutes');
const historyRoutes = require('./historyRoutes');
const lyricsRoutes = require('./lyricsRoutes');



// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/blogs', blogRoutes);
router.use('/favsongs', favSongRoutes);
router.use('/history', historyRoutes);
router.use('/lyrics', lyricsRoutes);

module.exports = router;