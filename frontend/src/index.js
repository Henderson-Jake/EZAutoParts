import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Ensure that the root element exists in the DOM before rendering
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
});

