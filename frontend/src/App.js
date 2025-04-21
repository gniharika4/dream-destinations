import React from 'react';
import './App.css';
import DateInputComponent from './components/DateInputComponent';
import BudgetInputComponent from './components/BudgetInputComponent';
import DestinationInputComponent from './components/DestinationInputComponent';
import DestinationSuggestionsComponent from './components/DestinationSuggestionsComponent';

function App() {
    return (
        <div className="App">
            <h1>DreamDestinations</h1>
            <DateInputComponent />
            <BudgetInputComponent />
            <DestinationInputComponent />
            <DestinationSuggestionsComponent />
        </div>
    );
}

export default App;