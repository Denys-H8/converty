import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChakraContext from './contexts/ChakraContext';
import CurrencyContext from './contexts/currencyContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraContext>
      <CurrencyContext>
        <App />
      </CurrencyContext>
    </ChakraContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
