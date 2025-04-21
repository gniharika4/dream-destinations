const express = require('express');
const Destination = require('../models/Destination');
const router = express.Router();

// Sample destinations to mimic database
const destinationsData = [
    {
        name: 'Goa',
        bestSeasons: ['Winter'],
        activities: ['Beach', 'Water Sports'],
        hotels: [{ name: 'Hotel A', priceRange: 'Low' }],
        transportOptions: [{ mode: 'Flight', cost: 5000, time: '1h 30m' }],
        restaurants: [
            { name: 'Seafood Place', popularFood: 'Fish Curry' }
        ]
    }
];

// Route to suggest destinations
router.post('/suggest', async (req, res) => {
    const { startDate, endDate, startLocation, endLocation, budget } = req.body;

    // Here, normally you’d perform some database querying.
    // For the purpose of this example, we'll return mock data:
    res.json(destinationsData);
});

module.exports = router;