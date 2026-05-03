<template>
    <div class="verb-and-sentence-index">
        <sentenceCoreAssets></sentenceCoreAssets>
    </div>
    <div class="past-presents-and-future-tense">
            <pastPresentsAndFutureTense></pastPresentsAndFutureTense>
    </div>
    <div class="negation">
        <negation></negation>
    </div>
</template>
<script>
import sentenceCoreAssets from './sentenceCore.vue';
import pastPresentsAndFutureTense from './pastPresentAndFutureTense.vue';
import negation from './negation.vue';
export default {
    name: "verbAndSentenceIndex",
    components: {
        sentenceCoreAssets,
        pastPresentsAndFutureTense,
        negation
    },
}  
</script>
