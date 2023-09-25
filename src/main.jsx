// DEPENDENCIES AND HOOKS
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
// COMPONENTS
import App from './App.jsx';
// FILES
import './main.css';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
