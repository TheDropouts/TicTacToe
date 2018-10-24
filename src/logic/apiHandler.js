var fs = require('fs');
const gameLogic = require('./gameLogic')
var	gameboard = [1,2,3,4,5,6,7,8,9];
var moveCounter = function(){	
	var xoro = 0;
	for(var i = 0; i < 9; i++){
		if( gameboard[i] == 'x' || gameboard[i] == 'o' ){
			xoro++;
		}
	}
	return xoro;
}; 

module.exports = {	

	sendGameStatus: function(){
		return gameboard;
	},
	makeAMove: function(input){

		if( gameLogic.validateString(input.move) ){
			input = gameLogic.switchPlayer(moveCounter()) + input.move;
			gameboard = gameLogic.makeAMove( gameboard, input );	
		}
		return gameboard;
	},
	resetGameBoard:  function(){
		gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		gameLogic.player = 0;
	},
	victoryCheck: function(){
		return gameLogic.victoryCheck( gameboard );
	}
}
