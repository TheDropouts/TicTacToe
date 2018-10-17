module.exports = {
	valitadeInput: function(input){
		if(input.length != 2){
			throw input + " is not a valid input only acceptable input is on the form x1 or o1";
		}
		var validationMask = /([xXoO(\d)])([(\d)xXoO])/;
		if( !validationMask.exec(input) ){		
			throw input + " is not a valid input only acceptable input is on the form x1 or o1";
		}
		if ( input.includes("0") ){
			throw input + " is not a valid input only acceptable input is on the form x1 or o1";
		}
		return input.toLowerCase();
	},
	makeAMove: function(gameState, move){

		if ( gameState[ parseInt(move[1]) - 1 ]  != 'x' && gameState[ parseInt(move[1]) - 1 ] != 'o' ){
			gameState[ parseInt(move[1]) - 1 ] = move[0];
			return gameState;
		}
		return false;
	},
	checkIfMoveIsLeagal: function( field ){
		if(field == 'x' || field == 'o'){
			return false;
		}
		return true;
	},
	victoryCheck : function( gameState ){
		if( gameState[0] === gameState[1] && gameState[1] === gameState[2] ){
			return true;
		}
		else if(gameState[0] === gameState[1] && gameState[1] === gameState[2]){
			return true;
		}	
		else if(gameState[3] === gameState[4] && gameState[4] === gameState[5]){
			return true;
		}
		else if(gameState[6] === gameState[7] && gameState[7] === gameState[8]){
			return true;
		}
		else if(gameState[0] === gameState[3] && gameState[3] === gameState[6]){
			return true;
		}
		else if(gameState[1] === gameState[4] && gameState[4] === gameState[7]){
			return true;
		}
		else if(gameState[2] === gameState[5] && gameState[5] === gameState[8]){
			return true;
		}
		else if(gameState[0] === gameState[4] && gameState[4] === gameState[8]){
			return true;
		}
		else if(gameState[2] === gameState[4] && gameState[4] === gameState[6]){
			return true;
		}

		return false;
	}
};