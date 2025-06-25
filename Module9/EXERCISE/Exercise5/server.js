const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static("public"));

let onlineUsers = new Map(); // socket.id -> nickname

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // When a new user sets their nickname
  socket.on("set nickname", (nickname) => {
    onlineUsers.set(socket.id, nickname);
    // Notify everyone about new user
    io.emit("user connected", nickname);
    io.emit("online users", Array.from(onlineUsers.values()));
  });

  // Broadcast messages to everyone except sender
  socket.on("chat message", (msg) => {
    const sender = onlineUsers.get(socket.id) || "Anonymous";
    socket.broadcast.emit("chat message", { sender, msg });
  });

  // Typing indicator
  socket.on("typing", () => {
    const sender = onlineUsers.get(socket.id) || "Anonymous";
    socket.broadcast.emit("typing", sender);
  });

  socket.on("stop typing", () => {
    const sender = onlineUsers.get(socket.id) || "Anonymous";
    socket.broadcast.emit("stop typing", sender);
  });

  socket.on("disconnect", () => {
    const nickname = onlineUsers.get(socket.id);
    if (nickname) {
      onlineUsers.delete(socket.id);
      io.emit("user disconnected", nickname);
      io.emit("online users", Array.from(onlineUsers.values()));
    }
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});