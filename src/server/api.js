const express = require("express");
const router = express.Router();
const game = require("../logic/apiHandler");
router.get("/gamestate", (req, res) => {
  res.status(200).send( game.sendGameStatus() );
});
router.get("/makeAMove/:move", (req, res) => {
  res.status(200).send( game.makeAMove(req.params) );
});
router.get("/reset", (req, res) => {
  res.status(200).send( game.resetGameBoard() );
});
router.get("/victoryCheck", (req, res) => {
  res.status(200).send( game.victoryCheck() );
});

module.exports = router;
