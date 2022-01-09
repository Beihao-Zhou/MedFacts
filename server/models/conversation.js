import mongoose from 'mongoose';

const conversationScheme = mongoose.Schema(
    {
        members: [String], 
    }, 
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationScheme);

export default Conversation;