import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChakraContext from './contexts/ChakraContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraContext>
      <App />
    </ChakraContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
