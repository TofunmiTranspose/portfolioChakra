// src/main.jsx (or main.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme'; // Import 'system' from your custom theme file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={system}> {/* Pass 'system' as value */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);