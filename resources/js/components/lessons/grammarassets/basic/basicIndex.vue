<template>
<div class="Hangul-Structure">
    <hangulStructure/>
</div>
<div class="Batchm">
    <batchim/>
</div>
<div class="Numbers-Counters">
    <numbersAndCounters/>
</div>
</template>
<script>
import hangulStructure from './hangulStructure.vue';
import batchim from './batchim.vue';
import numbersAndCounters from './numbersAndCounters.vue';
export default {
    components: { 
    hangulStructure,
    batchim,
    numbersAndCounters,
    }
}
</script>