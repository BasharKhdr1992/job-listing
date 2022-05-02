import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { JobProvider } from './context/JobContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <JobProvider>
    <App />
  </JobProvider>
);
