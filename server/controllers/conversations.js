import Conversation from '../models/conversation.js';

export const createConversation = async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });
    
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.body.senderId, req.body.receiverId] },
        });

        if (!conversation) {
            const savedConversation = await newConversation.save();
            res.status(201).json(savedConversation);
        } else {
            res.status(201).json({ message: "The conversation has been created."});
        }
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getOneUserConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({
          members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTwoUserConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
          members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

