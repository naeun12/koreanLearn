<template>
    <div class="verb-and-sentence-index">
        <sentenceCoreAssets></sentenceCoreAssets>
    </div>
    <div class="past-presents-and-future-tense">
            <pastPresentsAndFutureTense></pastPresentsAndFutureTense>
    </div>
</template>
<script>
import sentenceCoreAssets from '../sentenceCore.vue';
import pastPresentsAndFutureTense from './pastPresentAndFutureTense.vue';
export default {
    name: "verbAndSentenceIndex",
    components: {
        sentenceCoreAssets,
        pastPresentsAndFutureTense
    },
}  
</script>
