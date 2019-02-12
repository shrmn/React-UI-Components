import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container">

      <CalculatorDisplay />

      <div className="buttons">

        <div className="numbers">

          <ActionButton buttonStyle="number-btn clear-btn long-btn" text="clear" />
          <NumberButton buttonStyle="number-btn" text="7" />
          <NumberButton buttonStyle="number-btn" text="8" />
          <NumberButton buttonStyle="number-btn" text="9" />
          <NumberButton buttonStyle="number-btn" text="4" />
          <NumberButton buttonStyle="number-btn" text="5" />
          <NumberButton buttonStyle="number-btn" text="6" />
          <NumberButton buttonStyle="number-btn" text="1" />
          <NumberButton buttonStyle="number-btn" text="2" />
          <NumberButton buttonStyle="number-btn" text="3" />
          <ActionButton buttonStyle="number-btn long-btn" text="0" />

        </div>

        <div className="operators">

          <ActionButton buttonStyle="action-btn" text="÷"/>
          <ActionButton buttonStyle="action-btn" text="×"/>
          <ActionButton buttonStyle="action-btn" text="—"/>
          <ActionButton buttonStyle="action-btn" text="+"/>
          <ActionButton buttonStyle="action-btn" text="="/>

        </div>
      </div>      
    </div>
  );
};

export default App;
