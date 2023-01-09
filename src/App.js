import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const togglerHandler = () => {
    setShowParagraph((prevhowParagraph) => !prevhowParagraph);
  };

  return (
    <div className="app">

      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is New !!!</p>} */}

      <DemoOutput show={false}/>
      <Button onClick={togglerHandler}>Toggle</Button>
    </div>
  );
}

export default App;



// 153 Component Updates In Action
// 154 A Closer Look At Child Component Re-Evaluation

// 155 Preventing Unnecessary Re-Evaluations with React.memo()