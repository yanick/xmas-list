import React     from 'react';
import ReactDOM  from 'react-dom';
//import store from './Store';
import { Provider } from 'react-redux';

import MainComponent from './Component/Main';

const store = {};

ReactDOM.render(
            <MainComponent />,
  window.document.getElementById('xmas')
);
