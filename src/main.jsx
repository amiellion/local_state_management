//@dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './App';

//styles
import './index.css';


//store
import MainStore from './Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MainStore>
            <App />
        </MainStore>
    </React.StrictMode>
);
