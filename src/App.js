import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState([]);
  
  const addItemToList = () => {
    setCount([...count, 1]);
    console.log(count);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
        <button onClick={addItemToList}>lalala</button>
        <ul>
          {count.map(item => (
            <li>{item}</li>

          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
