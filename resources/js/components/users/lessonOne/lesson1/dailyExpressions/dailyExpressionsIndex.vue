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
    <Sidebar
        :modules="Modules"
        :ModuleTitle="ModuleTitle"
        @navigate="scrollToSection"
    />
</template>
<script>
import Greetings from "./Greetings.vue";
import BasicClassroomExpressions from "./BasicClassroomExpressions.vue";
import SelfIntroduction from "./SelfIntroduction.vue";
import Sidebar from "../../../partials/Sidebar.vue";

export default {
    components: {
        Greetings,
        BasicClassroomExpressions,
        SelfIntroduction,
        Sidebar,
    },
    data() {
        return {
            ModuleTitle: "PRONUNCIATION MODULES",
            Modules: [
                {
                    name: "Greetings",
                    target: "Greetings",
                    char: "안", // Short for "안녕하세요" (An-nyeong-ha-se-yo)
                },
                {
                    name: "Self Introduction",
                    target: "SelfIntroduction",
                    icon: "bi-person-badge", // Represents identity/introductions
                },
                {
                    name: "Basic Classroom Expressions",
                    target: "basicClassroomExpressions",
                    icon: "bi-pencil-square", // Represents classroom work and learning
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
