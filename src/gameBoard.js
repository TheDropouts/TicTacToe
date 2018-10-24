
var gameLogic = require('./gameLogic');
//var RunInConsole = require('./runinconsole');
var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];			
var turnCount = 1;
var gameStatus = false;
var player = 'x'; 


module.exports = {	

	/* This function works,  */	
	greetGame: function()
	{	
		console.log('\n');
		console.log("Welcome to the game of Tic-Tac-Toe. first player to start is x");
		console.log("To make a make as follow: x1 to go to first column");
	},

	drawBoard: function()
	{	
		console.log("--------------------------------------");
		console.log("Player " + player + " It's your turn ");	
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		return '\n' + '' + row1 + '' + row2 + '' + row3 + '\n';
	},

	upDateGameBoard: function (move){
	    gameboard = gameLogic.makeAMove( gameboard, move );	
	    turnCount++;
		return true;
	},
	/* This function works */	
	switchPlayer: function(player)	
	{		
		if(player === 'x'){
			
			player = 'o';	
		}
		else{
			
			player = 'x';	
		}
		return player;
	},

	getPlayer:function()
	{
		return player;
	},
   	/* This function works */
   	checkGame: function(gameStatus)
	{	
		if(gameStatus === true){
		
			return "Game over!";
		}
		else{
			return false;
		}
	},


	getWinner: function(player, gameboard)
	{	
		if(gameLogic.victoryCheck(gameboard) === true)
		{
			gameStatus = true;
			return console.log("Congrats!" + player + "you win the game");
		}
		else if(turnCount > 9)
		{
			
			gameStatus = true;
			return console.log("Stalemate");
		}

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
