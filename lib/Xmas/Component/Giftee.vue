<template>
<div>
            <h2>{{ this.$route.params.giftee }}</h2>

            <div><router-link to="/">Go back</Link></div>

            <div>Money left: {{ budget_left }}</div>

            <div v-if="above_fair">over budget</div>
            <div v-if="!above_fair">under budget</div>

            <ul>
                <li>
                    <form @submit='add_gift'>

                        <input 
                            placeholder="Thingy"
                            v-model="thing"
                            />

                        <input 
                            placeholder="price"
                            v-model="price"
                            />

                        <input type="submit" value="submit" />

                    </form>
                </li>

                <li v-for="gift in gifts">
                    {{ gift.label }} - ${{ gift.price }}
                            <input type="button" value="remove" @click="remove_gift(gift)"/>
                </li>

            </ul>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({ thing: '', price: 0 }),
    methods: {
        remove_gift(gift) {
            this.$store.dispatch('remove_gift', { name: this.$route.params.giftee, gift } ) 
        },
        add_gift(e) {
            this.$store.dispatch( 'add_gift', { name: this.$route.params.giftee, gift: this.thing, price: this.price }  );
            this.thing = '';
            this.price = 0;
            e.preventDefault();
        }
    },
    computed: { ...mapState({
        fair_share: state => state.budget.available /  ( state.giftees.length || 1 ),
        budget_left: state => state.budget.left,
        gifts: function(state) { 
            let x = state.giftees.find( g => g.name === this.$route.params.giftee );
            return x  ? x.gifts : [];
        }
    }),
        above_fair: function() { return this.gifts.map( g => g.price ).reduce( (a,b) => a + b, 0 ) > this.fair_share }
    }
};
</script>
