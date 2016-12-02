import React     from 'react';
import ReactDOM  from 'react-dom';
import store from './Store';
import { Provider } from 'react-redux';

import MainComponent from './Component/Main';

ReactDOM.render(
        <Provider store={store}>
            <MainComponent />
        </Provider>,
  window.document.getElementById('xmas')
);
