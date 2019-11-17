const router  = require('express').Router();
const account = require('../../../controllers/accountController');

const authMiddlewares = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(authMiddlewares.requireAuth, account.getAccountInfo)


module.exports = router;