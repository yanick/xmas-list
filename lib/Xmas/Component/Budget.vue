<template>
    <div>
        <label>Overall budget: 
                <input type="number" v-model="budget_available" />
            </label>
            <div> Money left: {{ budget_left }} </div>
        </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default { 
        computed: {
            budget_available: {
                get()      { return this.$store.state.budget.available; },
                set(value) { this.$store.dispatch( 'set_budget', value ) }
            },
            ...mapState({
                budget_left: state => state.budget.left,
            }),
        }
    };
</script>

