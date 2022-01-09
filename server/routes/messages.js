import express from 'express';

import { createMessage, getMessages } from '../controllers/messages.js'
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/', auth, createMessage);
router.get('/:conversationId', auth, getMessages);

export default router;