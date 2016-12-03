<template>
    <div>
        <h1>Xmas list</h1>

        <Budget :budget_left="budget_left" :budget_available="budget_available" />

    </div> 
</template>
    
<script>
    import Budget from './Budget.vue';

    export default {
        components: { Budget },
        data: () => ({ budget_left: 100, budget_available: 100 })
    };
</script>
