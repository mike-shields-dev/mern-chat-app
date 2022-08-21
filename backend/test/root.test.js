const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('../src/server');

describe("/", () => {
    it("returns 200 and Hello World", async () => {
        const res = await request(app).get("/")

        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal("Hello World");
    });
});