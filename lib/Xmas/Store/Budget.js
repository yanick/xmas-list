export default {
    state: { available: 0, left: 0 },
    mutations: {
        set_budget(state,budget) {
            budget = parseInt(budget);
            state.left = parseInt(state.left) - parseInt(state.available) + budget;
            state.available = budget;
        },
        add_gift( state, {price} ) {
            state.left = state.left - parseInt(price);
        },
        remove_gift( state, {  gift } ) {
            state.left = parseInt(state.left) + parseInt(gift.price);
        },

    }
}

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
