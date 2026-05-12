<template>
    <div class="row align-items-stretch g-4">
        <TipsSidebar
            :Tips="Tips.GreetingsData"
            :TipTitle="TipTitle"
            :TipDescription="TipDescription"
        />

        <div class="col-lg-8">
            <div class="k-card">
                <div
                    class="border-1 position-absolute top-0 start-0 w-100 h-100 z-0"
                ></div>

                <div class="position-relative z-1">
                    <h1
                        class="display-5 fw-bold mb-3 text-accent-primary-color fs-2"
                    >
                        What are Basic Classroom Expressions?
                    </h1>

                    <p class="lead text-primary-color fs-5">
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
                        <h1
                            class="display-6 fw-bold text-accent-primary-color fs-3 mb-2"
                        >
                            When to Use?
                        </h1>
                        <p class="text-primary-color fs-4">
                            Understanding common classroom situations and proper
                            expressions
                        </p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">1</div>

                                <div class="practice-icon">
                                    <i
                                        class="bi bi-person-workspace icon-color"
                                    ></i>
                                </div>
                                <h3 class="h5 fw-bold text-primary-color">
                                    Talking to Teacher
                                </h3>
                                <p class="small text-secondary-color">
                                    Use polite expressions like
                                    <strong>네</strong> and
                                    <strong>선생님</strong>.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">2</div>

                                <div class="practice-icon">
                                    <i
                                        class="bi bi-question-circle-fill fs-1 text-secondary-color"
                                    ></i>
                                </div>
                                <h3 class="h5 fw-bold text-primary-color">
                                    Asking Questions
                                </h3>
                                <p
                                    class="small text-muted text-secondary-color"
                                >
                                    Say <strong>질문 있어요</strong> when you
                                    need help.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">3</div>

                                <div class="practice-icon">
                                    <i
                                        class="bi bi-briefcase-fill icon-color"
                                    ></i>
                                </div>
                                <h3 class="h5 fw-bold text-primary-color">
                                    Business Settings
                                </h3>
                                <p class="small text-secondary-color">
                                    Use formal endings even with colleagues.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">3</div>

                                <div class="practice-icon">
                                    <i
                                        class="bi bi-chat-heart-fill icon-color"
                                    ></i>
                                </div>
                                <h3 class="h5 fw-bold text-primary-color">
                                    Need Repetition
                                </h3>
                                <p class="small text-secondary-color">
                                    Use <strong>다시 말씀해 주세요</strong> if
                                    you did not hear clearly.
                                </p>
                            </div>
                        </div>
                        <div
                            class="d-flex justify-content-center align-items-center"
                        >
                            <div class="col-md-6 col-lg-3">
                                <div class="practice-card shadow-sm">
                                    <div class="step-badge">3</div>

                                    <div class="practice-icon">
                                        <i
                                            class="bi bi-chat-heart-fill icon-color"
                                        ></i>
                                    </div>
                                    <h3 class="text-primary-color">
                                        Daily Class Use
                                    </h3>
                                    <p class="small text-secondary-color">
                                        Use simple answers like
                                        <strong>네</strong> and
                                        <strong>아니요</strong>.
                                    </p>
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
import Tips from "../data/LessonOneData/TipsData.js";
import GreetingsCard from "../../../partials/cards.vue";
import GreetingContent from "../data/greetingscontent";
import TipsSidebar from "../../../partials/TipsSidebar.vue";

export default {
    components: {
        GreetingsCard,
        TipsSidebar,
    },
    data() {
        return {
            Tips: Tips,
            greetingContent: GreetingContent.ClassroomGreetings,
            TipTitle: "Basic Classroom Expressions",
            TipDescription:
                "Learn useful Korean classroom phrases for answering, asking questions, requesting help, and speaking naturally during class.",
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
