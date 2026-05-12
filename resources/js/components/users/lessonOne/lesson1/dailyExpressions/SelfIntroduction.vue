<template>
    <div class="row align-items-stretch g-4">
        <TipsSidebar
            :Tips="Tips.SelfIntroductionData"
            :TipTitle="TipTitle"
            :TipDescription="TipDescription"
        />

        <div class="col-lg-8">
            <div class="k-card">
                <div
                    class="border-1 position-absolute top-0 start-0 w-100 h-100 z-0"
                ></div>

                <div class="position-relative z-1">
                    <h1 class="text-accent-primary-color fs-2">
                        What is a Self Introduction?
                    </h1>
                    <p class="lead text-primary-color fs-5 lh-base">
                        A self introduction is more than just saying your name
                        it is the first step in creating a connection. In Korean
                        culture, introducing yourself properly shows
                        <span class="fw-semibold">respect</span>,
                        <span class="fw-semibold">confidence</span>, and
                        <span class="fw-semibold">good manners</span>.
                    </p>
                </div>
            </div>
            <div class="col-12 mt-4">
                <GreetingsCard :cardDetails="greetingContent" />

                <div class="usage-container p-4 p-md-5 glass-effect border-0">
                    <div class="text-center mb-5">
                        <h1 class="text-accent-primary-color fs-3">
                            When to Use?
                        </h1>
                        <p class="text-primary-color">
                            Learn when to introduce yourself in Korean during
                            social, school, and formal situations.
                        </p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-danger">
                                    <i
                                        class="bi bi-person-workspace icon-color"
                                    ></i>
                                </div>
                                <h3
                                    class="h6 fw-bold mt-3 text-accent-primary-color"
                                >
                                    Teachers & Elders
                                </h3>
                                <p class="small text-secondary-color mb-0">
                                    Introduce yourself politely using honorifics
                                    and respectful speech.
                                </p>
                                <span
                                    class="badge text-accent-primary-color rounded-pill mt-2"
                                >
                                    Highly Formal
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-primary">
                                    <i class="bi bi-people-fill icon-color"></i>
                                </div>
                                <h3
                                    class="h6 fw-bold mt-3 text-accent-primary-color"
                                >
                                    New People
                                </h3>
                                <p
                                    class="small text-muted mb-0 text-secondary-color"
                                >
                                    Use polite expressions when meeting someone
                                    for the first time.
                                </p>
                                <span
                                    class="badge rounded-pill text-accent-primary-color mt-2"
                                >
                                    Polite (Jondaemal)
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="bg-soft-info">
                                    <i
                                        class="bi bi-briefcase-fill icon-color"
                                    ></i>
                                </div>
                                <h3
                                    class="h6 fw-bold text-accent-primary-color mt-3"
                                >
                                    Business Settings
                                </h3>
                                <p class="small text-secondary-color mb-0">
                                    Introduce yourself professionally with
                                    formal language.
                                </p>
                                <span
                                    class="badge rounded-pill text-accent-primary-color mt-2"
                                >
                                    Professional
                                </span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon">
                                    <i
                                        class="bi bi-chat-heart-fill icon-color"
                                    ></i>
                                </div>
                                <h3
                                    class="h6 fw-bold mt-3 text-accent-primary-color"
                                >
                                    Close Friends
                                </h3>
                                <p class="small mb-0 text-secondary-color">
                                    Casual introductions can be short and
                                    friendly.
                                </p>
                                <span
                                    class="badge rounded-pill text-accent-primary-color mt-2"
                                >
                                    Informal (Banmal)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="practice-section p-4 p-md-5 glass-effect border-0 mt-5"
                >
                    <div class="text-center mb-5">
                        <h2 class="fs-3 fw-bold text-accent-primary-color">
                            How to Practice
                        </h2>
                        <p class="text-secondary-color">
                            Follow these steps to master Korean self
                            introductions naturally.
                        </p>
                    </div>

                    <div class="row g-4 justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">1</div>
                                <div class="practice-icon">
                                    <i class="bi bi-ear-fill icon-color"></i>
                                </div>
                                <h4 class="h5 fw-bold text-primary-color">
                                    Listen First
                                </h4>
                                <p class="small text-secondary-color">
                                    Pay attention to pronunciation and tone
                                    before speaking.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">2</div>
                                <div class="practice-icon">
                                    <i class="bi bi-mic-fill icon-color"></i>
                                </div>
                                <h4 class="h5 fw-bold text-primary-color">
                                    Shadow It
                                </h4>
                                <p class="small text-secondary-color">
                                    Repeat Korean phrases daily to improve
                                    fluency and memory.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">3</div>
                                <div class="practice-icon">
                                    <i
                                        class="bi bi-speedometer2 icon-color"
                                    ></i>
                                </div>
                                <h4 class="h5 fw-bold text-primary-color">
                                    Control Your Pace
                                </h4>
                                <p class="small text-secondary-color">
                                    Start slow for accuracy, then gradually
                                    increase your speaking speed.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">4</div>
                                <div class="practice-icon">
                                    <i
                                        class="bi bi-chat-dots-fill icon-color"
                                    ></i>
                                </div>
                                <h4 class="h5 fw-bold text-primary-color">
                                    Use in Real Life
                                </h4>
                                <p class="small text-secondary-color">
                                    Practice greetings in real conversations to
                                    build confidence.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card h-100">
                                <div class="practice-icon">
                                    <i
                                        class="bi bi-heart-pulse-fill icon-color"
                                    ></i>
                                </div>
                                <h4 class="h5 fw-bold text-primary-color">
                                    Don't Worry!
                                </h4>
                                <p
                                    class="small text-secondary-color opacity-75"
                                >
                                    Mistakes are part of learning. Keep
                                    practicing and improving step by step.
                                </p>
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
import TipsSidebar from "../../../partials/TipsSidebar.vue";
import greetingContent from "../data/LessonOneData/GreetingContent.js";
import GreetingsCard from "../../../partials/cards.vue";

export default {
    components: {
        GreetingsCard,
        TipsSidebar,
    },
    data() {
        return {
            Tips: Tips,
            TipTitle: "Self Introduction",
            TipDescription:
                "Learn how to introduce yourself in Korean, share personal information politely, use formal or casual expressions, and speak with confidence in everyday conversations.",
            greetingContent: greetingContent.SelfIntroduction,
        };
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/lessongreetings.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
