import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const togglerHandler = () => {
    setShowParagraph((prevhowParagraph) => !prevhowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is New !!!</p>}

      <Button onClick={togglerHandler}>Toggle</Button>
    </div>
  );
}

export default App;



