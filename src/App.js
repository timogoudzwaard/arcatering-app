import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Box from './components/Box/Box';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Box />
    </div>
  </BrowserRouter>
);

export default App;
