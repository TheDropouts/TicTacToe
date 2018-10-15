const gameLogic = require("./gameLogic.js");


it("Should throw an error with Error code 'notValidInput is not a valid input only acceptable input is on the form x1 or o1'", () => {
	function tryInvalid (){
		gameLogic('notValidInput');
	}
	expect(tryInvalid).toThrowError("notValidInput is not a valid input only acceptable input is on the form x1 or o1");
});
it("Should throw an error with Error code 'bb is not a valid input only acceptable input is on the form x1 or o1'", () => {
	function tryInvalid (){
		gameLogic('bb');
	}
	expect(tryInvalid).toThrowError("bb is not a valid input only acceptable input is on the form x1 or o1");
});
it("should return x1", () => {
	expect(gameLogic("X1")).toBe("x1");
});
