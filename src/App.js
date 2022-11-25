import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0)

  const increaseCount = () => {
    setcount( count + 1);
    console.log(count);
  }

  const decreaseCount = () =>{
    setcount(count - 1);
    console.log(count);
  }
  return (
    <div className="App">
      <p>Count value is: {count}</p>
      <button onClick={increaseCount}>Counter++</button>
      <button onClick={decreaseCount}>Counter--</button>
    </div>
  );
}

export default App;
