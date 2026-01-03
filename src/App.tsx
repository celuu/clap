import React from 'react';
import './styles/App.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './config/theme';

import { HomePage } from './pages/HomePage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
