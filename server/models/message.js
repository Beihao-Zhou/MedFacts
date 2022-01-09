import mongoose from 'mongoose';

const messageScheme = mongoose.Schema({
    conversationId: String, 
    sender: String, 
    text: String, 
}, { timestamps: true });

const Message = mongoose.model("Message", messageScheme);

export default Message;