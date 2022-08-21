const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('../src/server');
const data = require('../data/data');

describe("/api/chat", () => {
    it("returns 200 and data", async () => {
        const res = await request(app).get("/api/chat")

        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal(data);
    });
});