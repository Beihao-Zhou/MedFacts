import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5100;
const ORIGIN = process.env.ORIGIN || 'http://localhost:3000';

const io = require('socket.io')(PORT, {
    cors: {
        origin: ORIGIN, 
    },
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
};

io.on("connection", (socket) => {
    console.log("A user connected!");
    socket.on("adddUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    socket.on('sendMessagee', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId, 
            receiverId, 
            text
        });
    });

    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});
