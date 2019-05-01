import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './context/store/storeContext'
import "./assets/css/main.scss"

import Pannel from "./components/pannel/pannel";
// import { Videos } from "./context/hooks/videos/videos";

render(
  <StoreProvider>
    {/* <Videos> */}
      <Pannel/>
    {/* </Videos> */}
  </StoreProvider>
  ,
  document.getElementById('root')
);

serviceWorker.register();
