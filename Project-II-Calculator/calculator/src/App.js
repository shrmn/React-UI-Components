import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div classNam="container">
      <CalculatorDisplay />
      <div className="buttons">
        <NumberButtons />
        <ActionButtons />
      </div>
    </div>
  );
};

export default App;
