import express from 'express';
import auth from '../middleware/auth.js';
import { getProfs, getProf, getProfBySearch } from '../controllers/profs.js';

const router = express.Router();

router.get('/search', getProfBySearch)
router.get('/:id', auth, getProf);
router.get('/', getProfs);

export default router;