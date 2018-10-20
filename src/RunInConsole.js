const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

exports.Run = function(){
	RecursiveReadUserInput();
};

function RecursiveReadUserInput(){
	readline.question( /* Here comes current game state */ "Please enter youre move \n" ,
	function (line){
		
		// A valid imput
		if( line.length === 2){

		}
		else if ( line == "exit" ){
			return readline.close();
		}
		else {
			console.log("invalid input");
		}
		RecursiveReadUserInput();
	})
}
