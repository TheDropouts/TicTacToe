const request = require("supertest");
const app = require("../../app");

describe("GET endpoint with name should return with statuscode", () => {
  it("Should return status code 200", async () => {
    const res = await request(app).get("PlayGame");
    expect(res.status).toBe(200);  
  });
});
