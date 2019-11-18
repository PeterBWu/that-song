const db = require('./../models');

module.exports = {
  getHistoryItems: async (req, res) => {  
    console.log("hit in backend")
    try { 
      const historyItems = await db.User.findById(req.user._id).populate('searchHistory');
      console.log(historyItems.searchHistory)
      res.json(historyItems.searchHistory);
    } catch(err) {
      res.json(err);
    }
  },
  getHistoryItem: async (req, res) => {
    
    const { historyId } = req.params;
    try {
      const historyItem = await db.SearchHistory.findById(historyId).populate('user', 'email');
      if (!historyItem) {
        return res.status(404).json({ error: 'no item by that id' });
      }
      res.json(historyItem)
    } catch(err) {
      res.status(403).json
    }
  },
  createHistoryItem: async (req, res) => {
    console.log("req.body - ", req.body)
    const { searchPhrase, songName } = req.body;
    try {
      const historyItem = await new db.SearchHistory({
        user: req.user._id,
        searchPhrase,
        songName
      });
      await historyItem.save();
      req.user.searchHistory.push(historyItem);
      await req.user.save();
      res.json({ success: true })
    } catch(err) {
      res.status(403).json(err)
    }
  },
  deleteHistoryItem: async (req, res) => {
    const { historyId } = req.params;
    try {
      const historyItem = await db.SearchHistory.findById(historyId);
      if(JSON.stringify(historyItem.user) !== JSON.stringify(req.user._id)) {
        return res.status(401).json({ error: 'Not a valid user history item' });
      }
      await db.SearchHistory.findByIdAndDelete(historyId);
      req.user.searchHistory.pull(historyId);
      await req.user.save();
      // res.json({ success: true });
      res.json(historyItem);
    } catch(err) {
      res.json(err)
    }
  }
};