const gameLogic = require("./gameLogic.js");


it("Should throw an error with Error code 'notValidInput is not a valid input only acceptable input is on the form x1 or o1'", () => {
	function tryInvalid (){
		gameLogic.valitadeInput('notValidInput');
	}
	expect(tryInvalid).toThrowError("notValidInput is not a valid input only acceptable input is on the form x1 or o1");
});
it("Should throw an error with Error code 'bb is not a valid input only acceptable input is on the form x1 or o1'", () => {
	function tryInvalid (){
		gameLogic.valitadeInput('bb');
	}
	expect(tryInvalid).toThrowError("bb is not a valid input only acceptable input is on the form x1 or o1");
});
it("should return x1", () => {
	expect(gameLogic.valitadeInput("X1")).toBe("x1");
});


it("should return true", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','9'], 'x1' )).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.checkIfMoveIsLeagal('1','x')).toBe(true);
});


