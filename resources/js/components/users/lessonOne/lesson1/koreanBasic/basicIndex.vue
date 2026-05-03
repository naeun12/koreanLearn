<template>
    <div class="hangul-Alphabet">
        <hangulAlphabet />
    </div>
    <div class="Hangul-Structure">
        <hangulStructure />
    </div>
</template>
<script>
import hangulStructure from "./hangulStructure.vue";
import hangulAlphabet from "./hangulAlphabet.vue";
export default {
    components: {
        hangulStructure,
        hangulAlphabet,
    },
};
</script>
