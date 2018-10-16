module.exports = gameBoard {	
	
	var inputParameter = require('./src/gameLogic.js');
	var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];			/* Array of size 9 */ 
	var turnCount = 1;
	var gameStatus = false;
	var player === 'x';
	
	function switchPlayer()	
	{
			if(player === 'x')
			{
			   return(player === 'o');
			}
			else
			{
				return(player === 'x');
			}
	}
   
	function checkGame()
	{	
		if(gameStatus === true)
		{
			return "Game over!";
		}
		else
		{
			return drawBoard();
		}
	}

	function drawBoard(input)
	{	
		checkGame(gameStatus);
			
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
			
		console.log(row1	+ '\n');
		console.log(row2	+ '\n');
		console.log(row3	+ '\n');
				
		return drawMove(input);
	}

	function drawMove(player)
	{	
		console.log('Player ' + player  ' turn' );
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

	}

	function victory(inputParameter)
	{	
		// victoryCheck
		if(inputParameter === true)
		{
			console.log('Winner is' + player);
			gameOver = true;
			return refreshBoard();
		}
	}

	function refreshBoard()
	{
		gameboard =	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
		turnCount = 1;
		gameStatus = false;
	}
};
