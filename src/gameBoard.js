
var gameLogic = require('./gameLogic');


var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];			
var turnCount = 1;
var gameStatus = false;
var player = 'x'; 


module.exports = {	
	sendGameStatus: function(){
		return gameboard;
	},
	/* This function works,  */	
	drawBoard: function()
	{	
	

		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		return '\n' + '' + row1 + '' + row2 + '' + row3;
	},
	upDateGameBoard: function (move){
	    gameboard = gameLogic.makeAMove( gameboard, move );	
		return true;
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
   	
   	checkGame: function(gameStatus)
	{	
		if(gameStatus === true){
			return "Game over!";
		}
		else{
			return false; //drawBoard();
		}
	},


	getInput: function()
	{	
	
		var move = 0;
		console.log('Player ' + player + 'your move, enter your row column:');
		
		//gameLogic.valitadeInput(move);
		/// input move example x1 
		
		return drawMove(player, move);
		

	},
	drawMove: function(player, move)
	{	
	
		gameLogic.checkIfMoveIsLeagal(move);
		gameLogic.makeAMove(gameboard, move);

		/// makeAMove: function(gameState, move)
		turnCount++;
		/// checkIfMoveIsLeagal
		if(player === 'x')
		{	
			//makeAMove: function(gameState, move){
			switchPlayer(player);
			return drawMove('o');
		}
		else(player === 'o')
		{	
			// makeAMove: function(gameState, move){
			switchPlayer(player);
			return drawMove('x');		
		}	
		//victoryCheck
		if(turnCount > 9)
		{
			console.log("Stalemate");
			return refreshBoard();
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
