import mongoose from 'mongoose';
import User from '../models/user.js';

export const getProfs = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 20;
        const startIndex = ( Number(page) - 1 ) * LIMIT;
        const total = await User.countDocuments({ doctor: true });

        const profs = await User.find({ doctor: true }).sort({ id: -1 }).limit(LIMIT).skip(startIndex);
        res.status(200).json({ data: profs, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProf = async (req, res) => {
    const { id } = req.params;

    try {
        const prof =  await User.findById(id);
        res.status(200).json(prof);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProfBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const name = new RegExp(searchQuery, 'i');
        const info = new RegExp(searchQuery, 'i');

        const profs = await User.find({ doctor: true , $or: [ { name }, { info } ] });

        res.json({ data: profs });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 