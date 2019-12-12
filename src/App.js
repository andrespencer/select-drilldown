import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img className ="Header__Logo" src={process.env.PUBLIC_URL + "/img/logo.png"} />
      </header>
    </div>
  );
}

export default App;
