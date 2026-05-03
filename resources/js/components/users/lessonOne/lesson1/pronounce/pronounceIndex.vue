<template>
    <div class="korean-vowel-consonants">
        <koreanVowelAndConsonants />
    </div>
    <div class="pronounciation-rule">
        <pronunciationRule />
    </div>

    <div class="batchim">
        <batchim />
    </div>
    <div class="basic-sound-change">
        <basicSoundsChange />
    </div>
</template>
<script>
import koreanVowelAndConsonants from "./koreanVowelAndConsonants.vue";
import pronunciationRule from "./pronunciationRule.vue";
import pronunciationsGuide from "./lessonPronounce.vue";
import batchim from "./batchim.vue";
import basicSoundsChange from "./basicSoundsChange.vue";

export default {
    components: {
        batchim,
        pronunciationsGuide,
        koreanVowelAndConsonants,
        basicSoundsChange,
        pronunciationRule,
    },
};
</script>
