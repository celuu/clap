import React from 'react';
import './styles/App.css';
import { baseTheme } from '@chakra-ui/theme'
import { ChakraProvider } from "@chakra-ui/react";

import { HomePage } from './pages/HomePage';


function App() {
  return (
    <ChakraProvider theme={baseTheme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
