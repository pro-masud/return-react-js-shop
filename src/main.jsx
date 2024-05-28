import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import MsgProvidar from './providars/MsgProvidar';
import CounterProvider from './providars/CounterProvider';
import NextProvider from './providars/NextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextProvider > 
      <CounterProvider>
        <MsgProvidar >
          <App />
        </MsgProvidar>
      </CounterProvider>
    </NextProvider>
  </React.StrictMode>,
)
