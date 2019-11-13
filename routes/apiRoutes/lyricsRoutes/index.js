const router            = require('express').Router();
const searchController    = require('../../../controllers/searchController');


// api/blogs prepended to every route declared in here

const authMiddlewares = require('./../../../middlewares/authMiddlewares');


// /api/blogs
router.route('/search')
    .get(searchController.getSongs)

router.route('/display')
    .get(searchController.getLyrics)

router.route('/videoInfo')
    .get(searchController.getVideoInfo)

router.route('/spotify')
    .get(searchController.getSpotify)

module.exports = router