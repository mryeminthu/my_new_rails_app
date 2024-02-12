import "@hotwired/turbo-rails"
import "./controllers"
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
