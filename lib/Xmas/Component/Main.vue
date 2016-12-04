<template>
    <div>
        <h1>Xmas list</h1>

        <Budget />

        <div v-if="budget_per_person">
            <label>budget per person: {{ budget_per_person }} </label>
        </div>

        <ListOfPeeps />

    </div> 
</template>
    
<script>
    import Budget      from './Budget.vue';
    import ListOfPeeps from './ListOfPeeps.vue';

    import { mapState, mapGetters } from 'vuex';

    export default {
        components: { Budget, ListOfPeeps },
        computed: {
            budget_per_person: function() {
                if( ! this.nbr_giftees )  return false;

                return this.budget_available / this.nbr_giftees;
            },
            ...mapGetters([ 'nbr_giftees' ]),
            ...mapState({ budget_available: state => state.budget.available })
        }
    };
</script>
