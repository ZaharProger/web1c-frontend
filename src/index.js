import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

import { Authentication } from './components/authentication.js'
import store from './state-manager/store.js';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={ store }>
        </Provider>
        <Authentication></Authentication>
    </Router>
)