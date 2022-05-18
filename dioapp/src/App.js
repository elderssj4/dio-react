import logo from './logo.svg';
import './App.css';


function primeiroJSX() {
  return (
    <div>
      Introdução ao React JS
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {primeiroJSX()}      
      </header>
      
    </div>
  
  );
}

export default App;
