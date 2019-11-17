const router            = require('express').Router();
const favSongController = require('../../../controllers/favSongController');
const passportService   = require('./../../../services/passport');
const passport          = require('passport');

const authMiddlewares = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(authMiddlewares.requireAuth, favSongController.getFavSongs)
  .post(authMiddlewares.requireAuth, favSongController.createFavSong)

router.route('/:favSongId')
  .get(authMiddlewares.requireAuth, favSongController.getFavSong)
  .delete(authMiddlewares.requireAuth, favSongController.deleteFavSong)

module.exports = router;