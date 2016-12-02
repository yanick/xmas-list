import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

let rootReducer = combineReducers({
    budget,
    giftees
});

export default createStore(
  rootReducer,
  {},
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

function budget(state={available: 0, left: 0}, action) {
    switch(action.type) {
        case 'SET_BUDGET':
            return { available: action.value, left: state.left - state.available + action.value };
        default:         return state;
    }
}

function giftees(state=[], action) {
    switch(action.type) {
        case 'ADD_GIFTEE':    return [ { name: action.name, gifts: [] } ].concat( state );
        case 'REMOVE_GIFTEE': return state.filter( g => g.name !== action.name );
        default:         return state;
    }
}

export function add_giftee(name) {
    return { type: 'ADD_GIFTEE', name }
};

export function remove_giftee(name) {
    return { type: 'REMOVE_GIFTEE', name }
};

export function set_budget(value) {
    return { type: 'SET_BUDGET', value }
};
