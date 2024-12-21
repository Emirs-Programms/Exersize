import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
        <button>
            <h1>Счетчик: {count}</h1>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </button>
    </div>
  );
}

export default App;
