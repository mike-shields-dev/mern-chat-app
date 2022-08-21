const app = require("express")();
const chats = require("../data/data");

app.use(require("cors")());

app.get("/api/chat", (req, res) => {
  res.status(200).json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const chat = chats.find((chat) => chat._id === req.params.id);
  if (chat) {
    res.status(200).json(chat);
  } else {
    res.status(404).json({ message: "Chat not found" });
  }
});

module.exports = app;
