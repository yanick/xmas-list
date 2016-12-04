<template>
<div>
    <h2>Peeps</h2>
    <ul>
        <li><input placeholder="new giftee" v-model="name" @change="add_giftee" /></li>

        <li v-for="giftee in giftees">
            {{ giftee.name }}
            <input type="button" value="remove" @click="remove_giftee( giftee.name )" />
        </li>
    </ul>
</div> 
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({ name: '' }),
    computed: {
        ...mapState({
            giftees: state => state.giftees
        })
    },
    methods: {
        add_giftee: function(value) {
            this.$store.dispatch('add_giftee',value.target.value);
            this.name = '';
        },
        remove_giftee: function(name) {
            this.$store.dispatch('remove_giftee',name);
        }
    }
};
</script>
