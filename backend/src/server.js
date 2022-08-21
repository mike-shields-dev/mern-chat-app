const express = require("express");
const app = express();
const data = require("../data/data")

app.get("/api/chat", (req, res) => {
    res.status(200).json(data);
})

module.exports = app;