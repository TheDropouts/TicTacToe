
var gameLogic = require('./gameLogic');
var RunInConsole = require('./runinconsole');
var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];			
var turnCount = 1;
var gameStatus = false;
var player = 'x'; 


module.exports = {	

	/* This function works,  */	
	drawBoard: function()
	{		
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		return (console.log('\n' + '' + row1 + '' + row2 + '' + row3));
	},
	/* This function works */	
	switchPlayer: function(player)	
	{		
		if(player === 'x'){
			return(player = 'o');
		}
		else{
			return(player = 'x');
		}
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

	greetGame: function()
	{	
		console.log("Welcome to the game of Tic-Tac-Toe. first player to start is x");
		console.log("To make a make as follow: x1 to go to first column");
	},

	getInput: function()
	{	
		var move = 0;
		
		console.log('Player ' + player + 'your move, enter your move:');
		
		gameLogic.valitadeInput(move);
		
		return drawMove(player, move);	
	},

	drawMove: function(player, move)
	{	
		
		gameLogic.checkIfMoveIsLeagal(move);
		if(gameLogic.victoryCheck(gameboard) === true)
		{
			gameStatus = true;
			console.log("Congrats!" + player + "you win the game");
		}
		
		checkGame(gameStatus);
		gameLogic.makeAMove(gameboard, move);
		
		turnCount++;
	
		if(player === 'x')
		{	
			switchPlayer(player);
			return drawMove('o', move);
		}
		else(player === 'o')
		{	
			switchPlayer(player);
			return drawMove('x', move);		
		}	
		//victoryCheck
		if(turnCount > 9)
		{
			console.log("Stalemate");
			checkGame(gameStatus);
		}

	},

	endGame: function(inputParameter)
	{	
		// victoryCheck
		if(inputParameter === true)
		{
			console.log('Winner is' + player);
			gameOver = true;
			return refreshBoard();
		}
	},

	refreshBoard: function()
	{
		gameboard =	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
		turnCount = 1;
		gameStatus = false;
	}
};
