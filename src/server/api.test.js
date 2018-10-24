const request = require("supertest");
const app = require("../../app");

describe("multipe ways to test tic-tac-to", () => {
  it("Should return status code 200", async () => {
    const res = await request(app).get("/api/gamestate");
    expect(res.status).toBe(200);  
  });
  it("Should return current gamestate", async () => {
    const res = await request(app).get("/api/gamestate");
    expect(res.text).toBe('[1,2,3,4,5,6,7,8,9]');  
  });

  it("Should return updated gamestate", async () => {
	
	const res = await request(app).get("/api/makeAMove/1");
    expect(res.text).toBe('["x",2,3,4,5,6,7,8,9]');
    const res2 = await request(app).get("/api/gamestate");
    expect(res2.text).toBe('["x",2,3,4,5,6,7,8,9]');    
  });
	it("Should reset the gamestate", async () => {

	const res = await request(app).get("/api/makeAMove/1");
    expect(res.text).toBe('["x",2,3,4,5,6,7,8,9]');
	const res2 = await request(app).get("/api/makeAMove/2");
    expect(res2.text).toBe('["x","o",3,4,5,6,7,8,9]');
    const res3 = await request(app).get("/api/reset");
    expect(res3.status).toBe(200);
    const res4 = await request(app).get("/api/gamestate");
    expect(res4.text).toBe('[1,2,3,4,5,6,7,8,9]');        
  });
	it("it should return Victory true", async () => {
		var res = await request(app).get("/api/makeAMove/1");
		expect(res.text).toBe('["x",2,3,4,5,6,7,8,9]');
		res = await request(app).get("/api/makeAMove/4");
		expect(res.text).toBe('["x",2,3,"o",5,6,7,8,9]');
		res = await request(app).get("/api/makeAMove/2");
		expect(res.text).toBe('["x","x",3,"o",5,6,7,8,9]');
		res = await request(app).get("/api/makeAMove/5");
		expect(res.text).toBe('["x","x",3,"o","o",6,7,8,9]');
		res = await request(app).get("/api/victoryCheck");
		expect(res.text).toBe("false");
		res = await request(app).get("/api/makeAMove/3");
		expect(res.text).toBe('["x","x","x","o","o",6,7,8,9]');
		res = await request(app).get("/api/victoryCheck");
		expect(res.text).toBe("true");	
	});
	it("i should be able to fill the board",async () => {
		res = await request(app).get("/api/reset");
		
		for(var i = 0; i < 9; i++){
			res = await request(app).get("/api/makeAMove/" + (i+1));
		}
		var res = await request(app).get("/api/gamestate");
		expect(res.text).toBe('["x","o","x","o","x","o","x","o","x"]');


	});
});
