import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DestinationSuggestionsComponent = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        // Fetch destinations from the API upon component mount
        const fetchDestinations = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/destinations/suggest', {
                    // Replace below with dynamic data passed from state
                    startDate: "2021-09-01",
                    endDate: "2021-09-15",
                    startLocation: "Delhi",
                    endLocation: "Goa",
                    budget: 20000
                });
                setDestinations(response.data);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            }
        };

        fetchDestinations();
    }, []);

    return (
        <div>
            <h2>Suggested Destinations</h2>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>{destination.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DestinationSuggestionsComponent;