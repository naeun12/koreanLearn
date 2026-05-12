<template>
    <div id="SelfIntroduction">
        <SelfIntroduction />
    </div>
    <div id="basicClassroomExpressions">
        <basicClassroomExpressions />
    </div>
</template>
<script>
import SelfIntroduction from "./SelfIntroduction.vue";
import basicClassroomExpressions from "./basicClassroomExpressions.vue";
export default {
    components: {
        SelfIntroduction,
        basicClassroomExpressions,
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
