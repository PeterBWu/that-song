const router            = require('express').Router();
const historyController    = require('../../../controllers/historyController');

const authMiddlewares = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(historyController.getHistoryItems)
  .post(authMiddlewares.requireAuth, historyController.createHistoryItem)

router.route('/:historyId')
  .get(historyController.getHistoryItem)
  .delete(authMiddlewares.requireAuth, historyController.deleteHistoryItem)

module.exports = router;