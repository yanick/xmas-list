import React     from 'react';
import ReactDOM  from 'react-dom';
import store from './Store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';


import MainComponent from './Component/Main';
import Giftee from './Component/Giftee';

ReactDOM.render(
        <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MainComponent} />
            <Route path="/giftee/:giftee" component={Giftee} />
        </Router>
        </Provider>,
  window.document.getElementById('xmas')
);
