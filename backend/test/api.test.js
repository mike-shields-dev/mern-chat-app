const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('../src/server');
const chats = require('../data/data');

describe("GET /api/chat", () => {
    it("returns 200 and all chats", async () => {
        const res = await request(app).get("/api/chat")

        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal(chats);
    });
});

describe("GET /api/chat/:id", () => {
    it("returns 200 and chat by id", async () => {
        const res = await request(app).get("/api/chat/1")
        const dataChat = chats.find(chat => chat._id === "1");
        const resChat = res.body;
        
        expect(res.statusCode).to.equal(200);
        expect(dataChat).to.deep.equal(resChat);
    })
});