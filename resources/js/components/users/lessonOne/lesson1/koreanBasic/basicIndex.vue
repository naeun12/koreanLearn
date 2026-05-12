<template>
    <div id="Hangul">
        <hangulAlphabet />
    </div>
    <div id="Hangul-Structure">
        <hangulStructure />
    </div>
    <Sidebar
        :modules="Modules"
        :ModuleTitle="ModuleTitle"
        @navigate="scrollToSection"
    />
</template>
<script>
import hangulStructure from "./hangulStructure.vue";
import hangulAlphabet from "./hangulAlphabet.vue";
import Sidebar from "../../../partials/Sidebar.vue";
export default {
    components: {
        hangulStructure,
        hangulAlphabet,
        Sidebar,
    },
    data() {
        return {
            ModuleTitle: "Basic Modules",
            Modules: [
                {
                    name: "Hangul Alphabet",
                    target: "Hangul",
                    char: "한", // Or "bi-translate"
                },
                {
                    name: "Hangul Structure",
                    target: "Hangul-Structure",
                    icon: "bi-stack", // Or "bi-grid-3x3-gap-fill"
                },
            ],
        };
    },
    methods: {
        scrollToSection(targetId) {
            // targetId comes from the $emit in Sidebar.vue
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
