<template>
    <div class="row align-items-stretch g-4">
        <div class="col-lg-4">
            <div
                class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden"
            >
                <div class="card-body p-4 position-relative">
                    <div
                        class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3"
                    >
                        🗣️
                    </div>

                    <h3 class="fw-bold mb-3">
                        <i class="bi bi-hand-index-thumb"></i> Basic Classroom
                        Expressions
                    </h3>

                    <p class="small opacity-75">
                        Learn useful Korean classroom phrases for answering,
                        asking questions, requesting help, and speaking
                        naturally during class.
                    </p>
                    <ul class="list-unstyled mt-4 d-flex flex-column gap-3">
                        <li
                            class="d-flex align-items-start gap-3"
                            v-for="classroomTips in classroomsTips"
                        >
                            <div>
                                <i :class="classroomTips.icon"></i>
                                <span class="ms-2">{{
                                    classroomTips.text
                                }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="k-card">
                <div
                    class="border-1 position-absolute top-0 start-0 w-100 h-100 z-0"
                ></div>

                <div class="position-relative z-1">
                    <h1 class="display-5 fw-bold mb-3 text-gradient">
                        What are Basic Classroom Expressions?
                    </h1>

                    <p class="lead text-secondary lh-base">
                        Basic classroom expressions are common Korean phrases
                        used during lessons and school activities. They help
                        students communicate clearly, show
                        <span class="fw-semibold">respect</span>, ask questions
                        with <span class="fw-semibold">politeness</span>, and
                        participate with
                        <span class="fw-semibold">confidence</span>.
                    </p>
                </div>
            </div>
            <div class="col-12 mt-4">
                <GreetingsCard :cardDetails="greetingContent" />
                <div class="usage-container p-4 p-md-5 glass-effect border-0">
                    <div class="text-center mb-5">
                        <h1 class="display-6 fw-bold text-gradient mb-2">
                            When to Use?
                        </h1>
                        <p class="text-secondary">
                            Understanding common classroom situations and proper
                            expressions
                        </p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-danger">
                                    <i class="bi bi-person-workspace"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">
                                    Talking to Teacher
                                </h3>
                                <p class="small text-muted mb-0">
                                    Use polite expressions like
                                    <strong>네</strong> and
                                    <strong>선생님</strong>.
                                </p>
                                <span class="badge rounded-pill bg-danger mt-2"
                                    >Respectful</span
                                >
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-primary">
                                    <i class="bi bi-question-circle-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">
                                    Asking Questions
                                </h3>
                                <p class="small text-muted mb-0">
                                    Say <strong>질문 있어요</strong> when you
                                    need help.
                                </p>
                                <span class="badge rounded-pill bg-primary mt-2"
                                    >Participation</span
                                >
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-info">
                                    <i class="bi bi-briefcase-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">
                                    Business Settings
                                </h3>
                                <p class="small text-muted mb-0">
                                    Use formal endings even with colleagues.
                                </p>
                                <span class="badge rounded-pill bg-info mt-2"
                                    >Professional</span
                                >
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-success">
                                    <i class="bi bi-chat-heart-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">Need Repetition</h3>
                                <p class="small text-muted mb-0">
                                    Use <strong>다시 말씀해 주세요</strong> if
                                    you did not hear clearly.
                                </p>
                                <span class="badge rounded-pill bg-success mt-2"
                                    >Listening</span
                                >
                            </div>
                        </div>
                        <div
                            class="d-flex justify-content-center align-items-center"
                        >
                            <div class="col-md-6 col-lg-3">
                                <div class="usage-card shadow-sm h-100">
                                    <div class="usage-icon bg-soft-success">
                                        <i class="bi bi-chat-heart-fill"></i>
                                    </div>
                                    <h3 class="h6 fw-bold mt-3">
                                        Daily Class Use
                                    </h3>
                                    <p class="small text-muted mb-0">
                                        Use simple answers like
                                        <strong>네</strong> and
                                        <strong>아니요</strong>.
                                    </p>
                                    <span
                                        class="badge rounded-pill bg-success mt-2"
                                    >
                                        Basic Use
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GreetingsTip from "../data/greetingstip.js";
import GreetingsCard from "../../../partials/cards.vue";
import GreetingContent from "../data/greetingscontent";
export default {
    components: {
        GreetingsCard,
    },
    data() {
        return {
            greetingContent: GreetingContent.ClassroomGreetings,
            classroomsTips: GreetingsTip.BasicClassroom,
        };
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"
></style>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/lessongreetings.css"
></style>
