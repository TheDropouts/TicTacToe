
var gameLogic = require('./gameLogic');
//var Ru1nInConsole = require('./runinconsole');
var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];

var runningGame = require('./gameBoard');			
var gameStatus = false;


module.exports = {	

	sendGameStatus: function(){
		return gameboard;
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
	},
	
	drawBoard: function()
	{	
		
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		return '\n' + '' + row1 + '' + row2 + '' + row3 + '\n';
	},

	upDateGameBoard: function (move){
		
		//runningGame.checkGame(gameStatus);
		
		var checkInput = gameLogic.validateString(move);
	    if(checkInput === false)
	    {	
	    	//console.log("Illegal move");
	    	return false;
	    }
	    else if(gameStatus === true)
	    {	
	    	console.log("Winner");
	    	//runningGame.checkGame(gameStatus);
	    	return false;
	    }
	    
	    move = gameLogic.switchPlayer() + move;
    	
    	console.log("Player " + move[0]  +	"	It's your turn");

	    gameboard = gameLogic.makeAMove(gameboard, move);
	    gameStatus = gameLogic.victoryCheck(gameboard);	
	    
	 
		return true;
	},

   	checkGame: function(gameStatus)
	{	
		if(gameStatus === true){
			console.log("Game over!");
			return runningGame.getWinner(gameboard);
		}
		else{
			return false;
		}
	},

	getWinner: function(gameboard)
	{	
		if(gameLogic.victoryCheck(gameboard) === true)
		{
			gameStatus = true;
			return console.log("Congrats!" + gameboard[0] + "you win the game");
		}
		/*else if(turnCount > 9)
		{
			
			gameStatus = true;
			return console.log("Stalemate");
		}*/

	},

	endGame: function(gameStatus)
	{	
		// victoryCheck
		if(gameStatus === true)
		{
			console.log("Game is being restarted");
			gameStatus = false;
			gameboard =	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
			turnCount = 1;
			Player = 'x';
			
			return true;
		}
		else{
			return false; 
		}
	},

};
