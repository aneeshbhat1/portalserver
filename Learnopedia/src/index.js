import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components';
import './css/index.css';
import { Provider } from 'react-redux';  
import { store } from './redux';

ReactDOM.render(
	<Provider store={store}>
  	 <App />
  	</Provider>,
  document.getElementById('root')
);
