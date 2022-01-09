import express from 'express';
import { createConversation, getOneUserConversation, getTwoUserConversation } from '../controllers/conversations.js';

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/:firstUserId/:secondUserId', auth, getTwoUserConversation);
router.get('/:userId', auth, getOneUserConversation);
router.post('/', auth, createConversation);

export default router;