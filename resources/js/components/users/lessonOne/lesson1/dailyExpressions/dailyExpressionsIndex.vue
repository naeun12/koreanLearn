<template>
    <div id="greetings">
        <lessonGreetings />
    </div>
    <div id="basicClassroomExpressions">
        <basicClassroomExpressions />
    </div>
</template>
<script>
import lessonGreetings from "./lessonGreetings.vue";
import basicClassroomExpressions from "./basicClassroomExpressions.vue";
export default {
    components: {
        lessonGreetings,
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
