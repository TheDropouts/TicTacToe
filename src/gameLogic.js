module.exports = {
	valitadeInput: function(input){
		if(input.length != 2){
			throw input + " is not a valid input only acceptable input is on the form x1 or o1";
		}
		var validationMask = /([xXoO(\d)])([(\d)xXoO])/;
		if( !validationMask.exec(input) ){		
			throw input + " is not a valid input only acceptable input is on the form x1 or o1";
		}
		return input.toLowerCase();
	}
};
