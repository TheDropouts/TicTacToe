const express = require("express");
const router = express.Router();

router.get("/playGame", (req, res) => {
  res.status(200).send('Hello i work');
});

module.exports = router;
