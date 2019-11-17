const db = require('./../models');

module.exports = {
  getAccountInfo: async (req, res) => {
    try {
      const accounts = await db.User.findById(req.user._id);
      res.json(accounts.email)
    } catch(err) {
      res.json(err)
    }
  }
}
