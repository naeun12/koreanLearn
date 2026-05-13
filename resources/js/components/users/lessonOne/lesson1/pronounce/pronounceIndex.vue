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
    <Sidebar
        :modules="Modules"
        :ModuleTitle="ModuleTitle"
        @navigate="scrollToSection"
    />
</template>
<script>
import koreanVowelAndConsonants from "./koreanVowelAndConsonants.vue";
import pronunciationRule from "./pronunciationRule.vue";
import pronunciationsGuide from "./lessonPronounce.vue";
import batchim from "./batchim.vue";
import basicSoundsChange from "./basicSoundsChange.vue";
import lessonPronounce from "./lessonPronounce.vue";
import Sidebar from "../../../partials/Sidebar.vue";

export default {
    components: {
        batchim,
        pronunciationsGuide,
        koreanVowelAndConsonants,
        basicSoundsChange,
        pronunciationRule,
        lessonPronounce,
        Sidebar,
    },
    data() {
        return {
            ModuleTitle: "PRONUNCIATION MODULES",
            Modules: [
                {
                    name: "Basic Vowel Consonant Sounds",
                    target: "BasicVowelConsonantSounds",
                    char: "ㄱ", // Represents the first consonant 'Giyok'
                },
                {
                    name: "Pronunciation Rules",
                    target: "pronunciationRules",
                    icon: "bi-megaphone", // More distinct for 'rules' or speaking out loud
                },
                {
                    name: "Batchim",
                    target: "Batchim",
                    char: "안", // 'Batchim' refers to final consonants; 'ㄴ' in '안' is a perfect example
                },
                {
                    name: "Sound Change",
                    target: "soundChange",
                    icon: "bi-arrow-repeat", // Represents the transformation/change of sound
                },
                {
                    name: "Lesson Pronounce",
                    target: "lesson-pronounce",
                    icon: "bi-translate", // Reflects the practical application of language
                },
            ],
        };
    },
    watch: {
        "$parent.activeMainSection"(newVal) {
            this.scrollToSection(newVal);
        },
    },

    methods: {
        scrollToSection(targetId) {
            const el = document.getElementById(targetId);

            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                console.error(`Target ID "${targetId}" not found in DOM.`);
            }
        },
    },
};
</script>
