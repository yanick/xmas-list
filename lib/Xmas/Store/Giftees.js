import _f from 'lodash/fp';

export default {
    state: [],
    getters: {
        nbr_giftees: function(state) { return state.length }
    },
    mutations: {
        add_giftee( state, name ) {
            state.push( { name, gifts: [] } );
        },
        remove_giftee( state, name ) {
            state.splice( _f.findIndex( { name } )( state ) )
        },
        remove_gift( state, { name, gift } ) {
            let gifts = state.find( g => g.name === name ).gifts;
            state.find( g => g.name === name ).gifts.splice(
                    _f.findIndex({label: gift.label })(gifts), 1
            );
        },
        add_gift( state, { name, gift, price } ) {
            debugger;
            state.find( g => g.name === name ).gifts.push({
                label: gift, price
            });
        }
    }
};

function giftees(state=[], action) {
    switch(action.type) {
        case 'ADD_GIFTEE':    
            return [ { name: action.name, gifts: [] } ].concat( state );

        case 'REMOVE_GIFTEE': 
            return state.filter( g => g.name !== action.name );

        case 'ADD_GIFT':
        case 'REMOVE_GIFT':
            return state.map( g => giftee( g, action ) );

        default:         return state;
    }
}

function giftee(state={},action) {
    if( action.giftee !== state.name ) return state;
     
    switch( action.type ) {
        case 'ADD_GIFT': 
            return { 
                name: state.name, 
                gifts: [ { label: action.gift, price: action.price } ].concat( state.gifts ) 
            };

        case 'REMOVE_GIFT': 
            return { 
                name: state.name, 
                gifts: state.gifts.filter( g => g.label !== action.gift ) 
            };

        default: return state;
    }

}
