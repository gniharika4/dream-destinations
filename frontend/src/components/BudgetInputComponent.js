import React, { useState } from 'react';

const BudgetInputComponent = () => {
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle budget submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget"
                required
            />
            <button type="submit">Set Budget</button>
        </form>
    );
};

export default BudgetInputComponent;