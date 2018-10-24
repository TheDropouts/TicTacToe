var fs = require('fs');
const gameLogic = require('./gameLogic')
var	gameboard = [1,2,3,4,5,6,7,8,9]; 

module.exports = {	

	sendGameStatus: function(){
		return gameboard;
	},
	makeAMove: function(input){
		console.log(input.move);

		if( gameLogic.validateString(input.move) ){
			input = gameLogic.switchPlayer() + input.move;
			gameboard = gameLogic.makeAMove( gameboard, input );	
		}
		return gameboard;
	},
	resetGameBoard:  function(){
		gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		gameLogic.player = 0;
	},
	victoryCheck: function(){
		return gameLogic.victoryCheck( gameState );
	}
}
