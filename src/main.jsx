import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from './store/store';
import { Provider } from 'react-redux';
import MainStore from './Provider';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <MainStore>
                <App />
            </MainStore>
        </Provider>
    </React.StrictMode>,
);
