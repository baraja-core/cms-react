import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import App from './App';

initializeIcons();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
