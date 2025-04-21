import React, { useState } from 'react';

const DestinationInputComponent = () => {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle destination submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                placeholder="Start Location"
                required
            />
            <input
                type="text"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                placeholder="End Location"
                required
            />
            <button type="submit">Set Destinations</button>
        </form>
    );
};

export default DestinationInputComponent;