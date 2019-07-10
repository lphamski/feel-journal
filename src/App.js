import React from 'react';
import Feelbar from './components/navigation/Feelbar';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Feelbar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
