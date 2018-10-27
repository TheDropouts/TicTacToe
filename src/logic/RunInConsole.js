const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const GameLogic = require('./gameLogic');
const GameBoard = require('./gameBoard');
/*A variable that holds the current running console */
var runningConsole = false;
exports.Run = function(){
 	GameBoard.greetGame();
	RecursiveReadUserInput();
};
/*Ask for input Recursively, wait for input and continue in the gamestate */
function RecursiveReadUserInput() {
	readline.question( GameBoard.drawBoard() + "Input: " ,
	function (line) {
		
		runningConsole = GameBoard.endGame(runningConsole);
		try {	
			if ( line == "exit"){
				return readline.close();
			}
			// Could try to impliment a line = restart to start the game over
			else if(runningConsole === true)
			{	
				console.log("Were sorry the game is now over");
				console.log("....exiting....");
				console.log("press CTRL + C to quit the the console");
				return readline.close();
			}

			// A valid imput
			else{
				
				
				// We don't use valitadeInput anymore, validation is done in another function*/
				//GameLogic.valitadeInput(line);
		
				GameBoard.upDateGameBoard(line);
			
				
			}
		}
		catch (e) {
			console.log(e);
		}
		
		
		RecursiveReadUserInput();
		
	
	})
}
