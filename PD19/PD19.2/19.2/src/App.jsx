import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('Pirmas tekstas');

  const changeText = () => {
    setText('naujas tekstas');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Button</button>
    </div>
  )
}

export default App
