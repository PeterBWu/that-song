const router            = require('express').Router();
const lyricsController    = require('./../../../controllers/lyricsController');


// api/blogs prepended to every route declared in here

const authMiddlewares = require('./../../../middlewares/authMiddlewares');


// /api/blogs
router.route('/search')
    .get(lyricsController.getSongs)

module.exports = router