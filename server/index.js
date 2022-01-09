import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import profRoutes from './routes/profs.js';
import conRoutes from './routes/conversations.js';
import messageRoutes from './routes/messages.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/profs', profRoutes);
app.use('/conversations', conRoutes);
app.use('/messages', messageRoutes);

app.get('/', (req,res) => {
    res.send('Hello to Memories API');
})

// connect to mongodb atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( err => console.log(err.message));