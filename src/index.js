import React from 'react';
import ReactDOM from 'react-dom';

import './scss/reset.sass';
import './scss/app.sass';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
