var	gameboard = function(){
	return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

module.exports = {	

	sendGameStatus: function(){
		return gameboard();
	},
	MakeAMove: function(move){
		if( gameLogic.validateString(move) ){
			move = gameLogic.switchPlayer() + move;
			gameBoard = gameLogic.makeAMove( gameBoard, move );	
		}
	},
	resetGameBoard:  function(){
		gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		gameLogic.player = 0;
	},
	victoryCheck: function(){
		return gameLogic.victoryCheck( gameState );
	},
	greetGame: function()
	{	
		console.log('\n');
		console.log("Welcome to the game of Tic-Tac-Toe. first player to start is x");
		console.log("To make a make as follow: 1 to go to first column");
	}
}
