const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: String,
    bestSeasons: [String],
    activities: [String],
    hotels: [{ name: String, priceRange: String }],
    transportOptions: [{ mode: String, cost: Number, time: String }],
    restaurants: [{ name: String, popularFood: String }]
});

module.exports = mongoose.model('Destination', destinationSchema);