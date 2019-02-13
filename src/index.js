import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import * as serviceWorker from './serviceWorker';
import Router from './router';

// render(
//   <Router>
//     <AppRoutes />
//   </Router>,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();