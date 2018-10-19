const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

exports.Run = function(){
	var isGameOver = false;
	while(!isGameOver) {
		var input = ReadUserInput();
		isGameOver = sendInUserInput(input);
	}
};

function ReadUserInput(){
		readline.question('Write in youre move ', (move) => { readline.close(); })
		return "move";

}
function sendInUserInput(){
		return false;
}

