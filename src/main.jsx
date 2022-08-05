import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
  urlBase: 'https://lkhibra.alwaysdata.net',
  siteId: 2,
  linkTracking: false
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MatomoProvider value={instance}>
      <Router>
        <App />
      </Router>
    </MatomoProvider>
  </React.StrictMode>
);
