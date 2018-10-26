const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const GameLogic = require('./gameLogic');
const GameBoard = require('./gameBoard');

exports.Run = function(){
 	GameBoard.greetGame();
	RecursiveReadUserInput();
};
/*Ask for input Recursively, wait for input and continue in the gamestate */
function RecursiveReadUserInput() {
	readline.question( GameBoard.drawBoard() + "Please enter your move \n" ,
	function (line) {
	
		try {	
			if ( line == "exit" ){
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
