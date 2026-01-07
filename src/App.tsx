import React from 'react';
import './styles/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/theme';

import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HabitTracker } from './pages/HabitTracker';
import { AppLayout } from './components/AppLayout';
import { HighLow } from './pages/HighLow';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/habit-tracker" element={<HabitTracker />} />
            <Route path="/high-low" element={<HighLow />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
