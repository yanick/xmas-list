<template>
    <div>
        <label>Overall budget: 
                <input type="number" :value="budget_available" />
            </label>
            <div> Money left: {{ budget_left }} </div>
        </div>
</template>

<script>
    export default { 
        props: [ 'budget_available', 'budget_left' ]
    };
</script>

