import budget  from './Budget';
import giftees from './Giftees';

export default {
    strict: true,
    modules: { budget, giftees },
    actions: {
        set_budget({commit},budget) { commit( 'set_budget', budget ) },
        add_giftee( { commit }, name ) {
            commit( 'add_giftee', name );
        },
        remove_giftee({ commit, state }, name ) {
            let giftee = state.giftees.find( g => g.name === name );
            giftee.gifts.forEach( g => commit( 'remove_gift', { name, gift: g } ) );
            commit( 'remove_giftee', name );
        },
        add_gift( { commit }, {name, gift, price} ) {
            commit( 'add_gift', { name, gift, price } );
        },
        remove_gift( { commit }, { name, gift } ) {
            commit( 'remove_gift', { name, gift } );
        }
    },
};
