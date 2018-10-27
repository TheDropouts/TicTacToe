module.exports = {

	/* We aren't using validateInput anymore */
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
	/*Take in a string from input in console and return true if it's acceptable*/
	validateString: function(move)
	{
		var validationMask = /[^\d+$]/;
	    if(move > 9	||	move <= 0)
	    {	
	    	
	    	return false;
	    }
	   	else if(validationMask.test(move))
	    {
	    	return false;
	    }
	    else
	    {
	    	return true;
	    }
	},
	/* Take in a counter return the current player, first player is X */
	switchPlayer: function(counter)
	{	
		if(counter % 2 === 0){
			return 'x';
		}
		else{
			return 'o';
		}
	},
	/* Get the current player, specific function for the console game */
	getCurrentPlayer: function(currPlayer)
	{
		if(currPlayer === 'o')
		{
			return 'x';
		}
		else
		{
			return 'o';
		}
		
	},
	/* Make a move on the gameboard */
	makeAMove: function(gameState, move){

		if ( gameState[ parseInt(move[1]) - 1 ]  != 'x' && gameState[ parseInt(move[1]) - 1 ] != 'o' ){
			gameState[ parseInt(move[1]) - 1 ] = move[0];
			return gameState;
		}
		return gameState;
	},
	/* Check if the move is legal, not used anymore */
	checkIfMoveIsLeagal: function( field ){
		if(field == 'x' || field == 'o'){
			return false;
		}
		return true;
	},
	/*Circle through the 3x3 board and if it's a winning codition return true, else return false */
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
