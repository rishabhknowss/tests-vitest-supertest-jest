import request from "supertest";
import { app } from "..";
import { describe, it, expect } from "vitest";
import resetDb from "./helpers/resetdb";

describe("POST/sum", () => {
  it("should return the sum of two numbers ", async () => {
    const { status, body } = await request(app).post("/sum").send({
      a: 5,
      b: 10,
    });
    expect(status).toBe(200);
    expect(body).toEqual({
      answer: 15,
      id: expect.any(Number),
    });
  });
});
