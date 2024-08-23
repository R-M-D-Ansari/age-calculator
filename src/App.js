import React from 'react';
import './App.css';
import AgeCalculator from './AgeCalculator';
import logo from './codealphalogo.png'; // Ensure this path is correct for your image file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
      </header>
      <main>
        <AgeCalculator />
      </main>
      <footer className="App-footer">
        &copy; <b>Rizwana Ansari 2024</b>
      </footer>
    </div>
  );
}

export default App;
