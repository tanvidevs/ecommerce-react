import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import {app} from './firebase.config'
import './index.css';
import App from './App';
import { store } from './redux/store';



const root = ReactDOM.createRoot (document.getElementById('root'));
root.render(
    <Provider store={store} app={app} >
        <App />
    </Provider>
);



