const request = require("supertest");
const app = require("../../app");

describe("GET endpoint with name should return with statuscode", () => {
  it("Should return status code 200", async () => {
    const res = await request(app).get("/api/gamestate");
    expect(res.status).toBe(200);  
  });
  it("Should return current gamestate", async () => {
    const res = await request(app).get("/api/gamestate");
    expect(res.text).toBe('[1,2,3,4,5,6,7,8,9]');  
  });

  it("Should return updated gamestate", async () => {

	await request(app).get("/api/makeAMove/1");
    const res = await request(app).get("/api/gamestate");
    //expect(res.text).toBe('[x,2,3,4,5,6,7,8,9]');  
  });

	
});
