//@dependencies
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './App';

//styles
import './index.css';

//store
import { store } from './store/store';
import MainStore from './Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
