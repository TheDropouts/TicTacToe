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
it("Should throw an error with Error code 'bb is not a valid input only acceptable input is on the form x1 or o1'", () => {
	function tryInvalid (){
		gameLogic.valitadeInput('0x');
	}
	expect(tryInvalid).toThrowError("0x is not a valid input only acceptable input is on the form x1 or o1");
});
it("should return x1", () => {
	expect(gameLogic.valitadeInput("X1")).toBe("x1");
});

it("should return ['x','2','3','4','5','6','7','8','9']", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','9'], 'x1' )).toEqual(['x','2','3','4','5','6','7','8','9']);
});

it("should return ['o','2','3','4','5','6','7','8','9']", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','9'], 'o1' )).toEqual(['o','2','3','4','5','6','7','8','9']);
});

it("should return ['1','2','3','4','5','6','7','8','x']", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','9'], 'x9' )).toEqual(['1','2','3','4','5','6','7','8','x']);
});

it("should return false", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','x'], 'o9' )).toEqual(false);
});

it("should return false", () => {
	expect(gameLogic.makeAMove(['1','2','3','4','5','6','7','8','x'], 'x9' )).toEqual(false);
});

it("should return true", () => {
	expect(gameLogic.checkIfMoveIsLeagal('1')).toBe(true);
});

it("should return false", () => {
	expect(gameLogic.checkIfMoveIsLeagal('x')).toBe(false);
});

it("should return false", () => {
	expect(gameLogic.checkIfMoveIsLeagal('o')).toBe(false);
});

it("should return false", () => {
	expect(gameLogic.victoryCheck([ '1','2','3',
									'4','5','6',
									'7','8','9'])).toBe(false);
});

it("should return false", () => {
	expect(gameLogic.victoryCheck([ 'x','x','o',
									'x','o','o',
									'7','x','x'])).toBe(false);
});

it("should return false", () => {
	expect(gameLogic.victoryCheck([ 'o','o','x',
									'x','o','o',
									'o','x','x'])).toBe(false);
});


it("should return true", () => {
	expect(gameLogic.victoryCheck([	'x','x','x',
									'4','5','6',
									'7','8','9'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'1','2','3',
									'x','x','x',
									'7','8','9'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'1','2','3',
									'4','5','6',
									'o','o','o'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'x','2','3',
									'x','5','6',
									'x','8','9'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'1','x','3',
									'4','x','6',
									'7','x','9'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'1','2','o',
									'4','5','o',
									'7','8','o'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'x','2','3',
									'4','x','6',
									'7','8','x'])).toBe(true);
});

it("should return true", () => {
	expect(gameLogic.victoryCheck([	'1','2','o',
									'4','o','6',
									'o','8','9'])).toBe(true);
});


