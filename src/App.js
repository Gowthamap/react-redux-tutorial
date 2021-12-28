import './App.css';
import './pages/test';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <div>
          <button id="increment">Increment</button>
          <label id="value">--</label>
          <button id="decrement">Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
