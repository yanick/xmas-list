import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

let rootReducer = combineReducers({
    budget,
    giftees
});

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

function budget(state={available: 0, left: 0}, action) {
    switch(action.type) {
        case 'SET_BUDGET':
            let x =  parseInt(action.value);
            if(! x ) x = 0;
            return { available: x, left: state.left - state.available + x };

        case 'ADD_GIFT':
            return { ...state, left: state.left - action.price }
        case 'REMOVE_GIFT':
            return { ...state, left: state.left + action.price }

        default:         return state;
    }
}

function giftees(state=[], action) {
    switch(action.type) {
        case 'ADD_GIFTEE':    return [ { name: action.name, gifts: [] } ].concat( state );
        case 'REMOVE_GIFTEE': return state.filter( g => g.name !== action.name );

        case 'ADD_GIFT':
        case 'REMOVE_GIFT':
            return state.map( g => giftee( g, action ) );

        default:         return state;
    }
}

function giftee(state={},action) {
    if( action.giftee !== state.name ) return state;
     
    switch( action.type ) {
        case 'ADD_GIFT': return { 
            name: state.name, 
            gifts: [ { label: action.gift, price: action.price } ].concat( state.gifts ) 
        };

        case 'REMOVE_GIFT': return { 
            name: state.name, 
                gifts: state.gifts.filter( g => g.label !== action.gift ) };

        default: return state;
    }

}

export function add_giftee(name) {
    return { type: 'ADD_GIFTEE', name }
};

export function remove_giftee(name) {
    return { type: 'REMOVE_GIFTEE', name }
};

export function add_gift(giftee,gift,price) {
    return { type: 'ADD_GIFT', giftee, gift, price: parseInt(price) }
};

export function remove_gift(giftee,gift, price) {
    return { type: 'REMOVE_GIFT', giftee, gift, price }
};

export function set_budget(value) {
    return { type: 'SET_BUDGET', value: parseInt(value) }
};
