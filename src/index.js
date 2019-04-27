import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Pannel from "./components/pannel/pannel"

import { StateProvider } from './state';
import {reducer} from "./reducers/index"

const App = () => {
  const initialState = {
    theme: { primary: 'green' }
  };
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <Pannel />
    </StateProvider>
  );
}

render(
  <App/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
