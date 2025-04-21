const express = require('express');
const Expenditure = require('../models/Expenditure');
const router = express.Router();

// Route to create an expenditure
router.post('/', async (req, res) => {
    const { userId, amount, description } = req.body;
    const expenditure = new Expenditure({ userId, amount, description });
    
    try {
        await expenditure.save();
        res.status(201).json({ message: 'Expenditure added!' });
    } catch (error) {
        res.status(400).json({ message: 'Error adding expenditure' });
    }
});

module.exports = router;