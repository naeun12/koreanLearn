<template>
    <div id="BasicVowelConsonantSounds">
        <koreanVowelAndConsonants />
    </div>
    <div id="pronunciationRules">
        <pronunciationRule />
    </div>

    <div id="Batchim">
        <batchim />
    </div>
    <div id="soundChange">
        <basicSoundsChange />
    </div>
    <div id="lesson-pronounce">
        <lessonPronounce />
    </div>
</template>
<script>
import koreanVowelAndConsonants from "./koreanVowelAndConsonants.vue";
import pronunciationRule from "./pronunciationRule.vue";
import pronunciationsGuide from "./lessonPronounce.vue";
import batchim from "./batchim.vue";
import basicSoundsChange from "./basicSoundsChange.vue";
import lessonPronounce from "./lessonPronounce.vue";

export default {
    components: {
        batchim,
        pronunciationsGuide,
        koreanVowelAndConsonants,
        basicSoundsChange,
        pronunciationRule,
        lessonPronounce,
    },
    watch: {
        "$parent.activeMainSection"(newVal) {
            this.scrollToSection(newVal);
        },
    },

    methods: {
        scrollToSection(section) {
            if (!section) return;

            this.$nextTick(() => {
                const el = document.getElementById(section);

                if (el) {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        },
    },
};
</script>
