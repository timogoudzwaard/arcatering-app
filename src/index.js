import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Style
import './style/base.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
