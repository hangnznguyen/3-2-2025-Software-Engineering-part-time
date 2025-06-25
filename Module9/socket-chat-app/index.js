const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

// Serve static files (like CSS, client-side JS, etc.)
app.use(express.static(__dirname));

// Serve the chat HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle socket connection
io.on('connection', (socket) => {
  console.log('a user connected');

  // Broadcast message to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

// Start server
server.listen(3000, () => {
  console.log('listening on *:3000');
});