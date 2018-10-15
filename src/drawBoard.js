
/* Array of size 9 */ 


function gameBoard()
{

	function gameStart(checkGame)
	{	
			var gamestart = true;
			if(gamestart = true)
			{
				return drawBoard();
			}
			else
			{
				return "Game over!";
			}
	}


	function drawBoard(inputParameter)
	{	
		var gamestart = true;

		var	gameboard =	[1, 2, 3, 4, 5, 6, 7, 8, 9];
		var row1 = gameboard[0]	+ ' | ' + gameboard[1] + ' | ' + gameboard[2] + '\n';
		var row2 = gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\n';
		var row3 = gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\n';
		console.log(row1	+ '\n');
		console.log(row2	+ '\n');
		console.log(row3	+ '\n');

		checkGame(gamestart);

	}



	const winningConditions = [
	    [0,1,2], [3,4,5], [6,7,8], 
	    [0,3,6], [1,4,7], [2,5,8], 
	    [0,4,8], [2,4,6]
	  ]



}


gameBoard();