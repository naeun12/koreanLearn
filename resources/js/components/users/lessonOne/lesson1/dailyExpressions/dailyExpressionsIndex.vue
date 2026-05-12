<template>
    <div id="Greetings">
        <Greetings />
    </div>
    <div id="SelfIntroduction">
        <SelfIntroduction />
    </div>
    <div id="basicClassroomExpressions">
        <BasicClassroomExpressions />
    </div>
</template>
<script>
import Greetings from "./Greetings.vue";
import BasicClassroomExpressions from "./BasicClassroomExpressions.vue";
import SelfIntroduction from "./SelfIntroduction.vue";
export default {
    components: {
        Greetings,
        BasicClassroomExpressions,
        SelfIntroduction,
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
