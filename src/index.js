import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import App from './App';

// Reducers
import reducers from './reducers';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// Style
import './style/base.css';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <div>
      <App />
    </div>
  </Provider>,
  document.querySelector('#root'),
);
registerServiceWorker();
