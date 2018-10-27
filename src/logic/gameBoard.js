
/* our access to gameLogic */
var gameLogic = require('./gameLogic');

/* The gameboard  */ 
var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];

/* gameStatus, when the gamestatus = true, the game is over */
var gameStatus = false;

/* The currentPlayer */
var player = 'o';

var gamecount = 0;

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
	/* output function, to greet the player */
	greetGame: function()
	{	
		console.log('\n');
		console.log("Welcome to the game of Tic-Tac-Toe");
		console.log("To make a make input as follow:1 to go to first column");
		console.log("To quit the game at anytime, write exit or ctrl + c");
		console.log("Player x starts");
	},
	/*Draw the inital gameboard */
	drawBoard: function()
	{	
		
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		return '\n' + '' + row1 + '' + row2 + '' + row3 + '\n';
	},
	/* Main controller for game stages */
	upDateGameBoard: function (move){
		
		if(gameStatus === false)
		{	
			console.log('\n');
			console.log("Player " + player + " it's your turn ");
		}
		
		var checkInput = gameLogic.validateString(move);
	    if(checkInput === false)
	    {	
	    	console.log("Illegal move");
	    	return false;
	    }
	   
		
	    move = gameLogic.getCurrentPlayer(player) + move;
		player = gameLogic.getCurrentPlayer(player);
    	
	    gameboard = gameLogic.makeAMove(gameboard, move);
		
		gamecount++;
		
		if(gamecount > 8)
		{
		  console.log("---- Draw! -----");
		  gameStatus = true;
		  return false;
		}
	    
		gameStatus = gameLogic.victoryCheck(gameboard);	
		
		if(gameStatus === true)
	    {	
			console.log("Oh sorry!");
			console.log("---- Gameover! -----");
			console.log("Player " + player + " is the winner ");

	    	return false;
	    }
		
	    
	 
		return true;
	},
	/* Function to end the run of the console */ 
	endGame: function(runningGame)
	{	
		var endGame = gameStatus;
		if(endGame === runningGame)
		{
			return false;
		}
		else
		{
			return true;
		}
		
	},

	
	/* Not using this function */
   	checkGame: function(gameStatus)
	{	
		if(gameStatus === false){
			return false;
		}
		else{
			return true;;
		}
	},
    /* Not using this function */ 
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
	

};
