import React from 'react';
import './App.css';
import SearchBy from './components/SearchBy'

function App() {
  return (
    <div>
      <header className="App-header">
        What To Eat?
        <p className="App-Description">Random Restaurant Generator</p>
        
      </header>
      <body>
        <hr style={{width: '65%', marginTop: '1%', height: '1px', backgroundColor: 'black'}}></hr>
        <SearchBy/>
      </body>
      
    </div>
  );
}

export default App;
