const mongoose = require('mongoose');

const expenditureSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    description: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expenditure', expenditureSchema);