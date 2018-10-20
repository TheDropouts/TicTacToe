const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const GameLogic = require('./gameLogic')


exports.Run = function(){
	RecursiveReadUserInput();
};

function RecursiveReadUserInput(){
	readline.question( /* Here comes current game state */ "Please enter youre move \n" ,
	function (line){
	
		try{	
			if ( line == "exit" ){
				return readline.close();
			}
			// A valid imput
			else{
				GameLogic.valitadeInput(line);
			}
		}
		catch (e){
			console.log(e);
		}

		RecursiveReadUserInput();
	})
}
