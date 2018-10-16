
/* Array of size 9 */ 


function gameBoard()
{	

	var turnCount = 1;
    var winner;
    var gameOver = false;



	function checkGame()
	{		
			if(gameOver === true)
			{
				
				return "Game over!";
			}
			else
			{
				return drawBoard();
			}
	}


	function drawBoard(inputParameter)
	{	

		checkGame(gamestart);
		
		var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];

		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
		
		console.log(row1	+ '\n');
		console.log(row2	+ '\n');
		console.log(row3	+ '\n');

		drawMove();
	
	}


	function drawMove(inputParameter)
	{	

		turnCount++;
		
		var move = inputParameter;



		if(turnCount > 9)
		{
			console.log("Stalemate");
			return refreshBoard();
		}



	}

	function Victory(inputParameter)
	{
		if(inputParameter === true)
		{
			console.log("Winner");
			gameOver = true;
			return refreshBoard();
		}
	}


	function refreshBoard()
	{
		gameboard =	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
		turnCount = 1;
		gameOver = false;
	}


/*
	const winningConditions = [
	    [0,1,2], [3,4,5], [6,7,8], 
	    [0,3,6], [1,4,7], [2,5,8], 
	    [0,4,8], [2,4,6]
	  ]
*/


}


gameBoard();