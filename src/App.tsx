import React from 'react';
import logo from './logo.svg';
import './App.css';
import { baseTheme } from '@chakra-ui/theme'
import { Provider } from '@chakra-ui/react';
import { HomePage } from './components/HomePage';


function App() {
  return (
      <Provider theme={baseTheme}>
        <HomePage />
    
    </Provider>
  );
}

export default App;
