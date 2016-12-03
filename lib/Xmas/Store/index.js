import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import budget  from './Budget';
import giftees from './Giftees';

let rootReducer = combineReducers({ budget, giftees });

// before we remove a giftee, we have to remove all their gifts
let MW_remove_giftee = store => next => action => {
    if ( action.type !== 'REMOVE_GIFTEE' ) return next(action);

    store.getState().giftees.find( g => g.name === action.name ).gifts.forEach(
        g => store.dispatch( remove_gift( action.name, g.label, g.price ) )
    );

    return next(action);
};

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware( MW_remove_giftee ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


