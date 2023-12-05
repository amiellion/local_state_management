//@dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//components
import App from './App';

//store
import { store } from './store/store';

//styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
