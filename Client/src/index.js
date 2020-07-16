import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configure from '../src/Store/Config';
import {Provider} from 'react-redux';
const store = configure();
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
