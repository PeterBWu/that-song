const router = require('express').Router();
const authRoutes = require('./authRoutes');
const favSongRoutes = require('./favSongRoutes');
const historyRoutes = require('./historyRoutes');
const lyricsRoutes = require('./lyricsRoutes');
const accountRoutes = require('./accountRoutes');



// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/favsongs', favSongRoutes);
router.use('/history', historyRoutes);
router.use('/lyrics', lyricsRoutes);
router.use('/account', accountRoutes);

module.exports = router;