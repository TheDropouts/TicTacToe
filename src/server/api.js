const express = require("express");
const router = express.Router();
const game = require("../gameBoard");
router.get("/gamestate", (req, res) => {
  res.status(200).send( game.sendGameStatus() );
});
router.get("/makeAMove/:move", (req, res) => {
  res.status(200).send( game.makeAMove(move) );
});
router.get("/reset", (req, res) => {
  res.status(200).send( game.resetGameBoard() );
});
module.exports = router;
