import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import MsgProvidar from './providars/MsgProvidar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsgProvidar >
      <App />
    </MsgProvidar>
  </React.StrictMode>,
)
