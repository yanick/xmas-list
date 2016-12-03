export default
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
