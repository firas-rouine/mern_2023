import { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { FormColor } from './components/FormColor';

function App() {
  const [colors, setColors] = useState(["red", "blue", "purple"])
  const [number, setNumber] = useState('200');
  return (
    <div className="App">
      <FormColor colors={colors} setColors={setColors} number={number} setNumber={setNumber} />
      {colors.map((color, idx) => {
        return <Display key={idx} color={color} number={number} />
      })}

    </div>

  );
}

export default App;
