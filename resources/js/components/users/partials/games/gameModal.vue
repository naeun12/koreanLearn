<template>
    <soundQuiz ref="gameSounds" />

    <div
        v-if="isOpenQuiz"
        class="modal fade show d-block"
        tabindex="-1"
        style="background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px)"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div
                class="modal-content border-0 shadow-lg rounded-5 overflow-hidden animate-pop"
            >
                <div class="modal-header border-0 p-4 pb-0">
                    <div class="d-flex align-items-center">
                        <div
                            class="p-2 bg-primary-subtle rounded-3 me-3 text-primary shadow-sm"
                        >
                            <i class="bi bi-puzzle-fill fs-4"></i>
                        </div>
                        <div>
                            <h5 class="modal-title fw-bold mt-2">
                                Korean Batchim Quiz
                            </h5>
                            <p class="text-muted mb-0">
                                Test your understanding of Korean Batchim (final
                                consonants) through simple and interactive quiz
                                questions.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn-close shadow-none bg-light rounded-circle"
                        @click="isOpenQuiz = false"
                    ></button>
                </div>
                <div class="modal-body p-4">
                    <div
                        class="d-flex justify-content-between align-items-end mb-1"
                    >
                        <span
                            class="badge rounded-pill bg-primary px-3 py-2 fs-6"
                        >
                            Question {{ currentIndex }} of 10
                        </span>
                        <span class="text-muted small fw-bold">
                            {{ (currentIndex / 10) * 100 }}% Complete
                        </span>
                    </div>
                    <div
                        class="progress"
                        style="height: 10px; border-radius: 50px"
                    >
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar"
                            :style="{ width: (currentIndex / 10) * 100 + '%' }"
                            :aria-valuenow="currentIndex"
                            aria-valuemin="0"
                            aria-valuemax="10"
                        ></div>
                    </div>
                    <div class="question-container">
                        <span class="question-label">QUESTION</span>
                        <h2 class="question-text">
                            {{
                                currentQuestion?.question ||
                                "Loading question..."
                            }}
                        </h2>
                    </div>
                </div>
                <div
                    v-if="isExplanation"
                    :class="iscorrectAnswer"
                    class="feedback-card animate__animated animate__fadeIn"
                >
                    <div class="card-content d-flex align-items-center">
                        <div class="feedback-icon me-3">
                            <i
                                :class="{
                                    'bi bi-check-circle-fill text-success':
                                        correctAnswer === 'correct',
                                    'bi bi-x-circle-fill text-danger':
                                        correctAnswer === 'wrong',
                                }"
                            ></i>
                        </div>
                        <div class="feedback-text">
                            <strong class="d-block mb-1">
                                {{
                                    correctAnswer === "correct"
                                        ? "Great Job!"
                                        : correctAnswer === "wrong"
                                          ? "Not Quite!"
                                          : "No Answer Selected"
                                }}
                            </strong>
                            <p class="mb-0">{{ explanation }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="choices-container mb-4"
                    v-if="currentQuestion?.type === 'multiple_choice'"
                >
                    <div class="text-center mb-3">
                        <small
                            class="text-uppercase fw-bold text-muted"
                            style="letter-spacing: 2px"
                            >Select the correct answer</small
                        >
                    </div>
                    <div class="d-grid gap-3 col-md-10 mx-auto">
                        <button
                            v-for="choice in currentQuestion.choices"
                            :key="choice"
                            class="btn choice-card shadow-sm mb-3"
                            @click="Getanswer(choice)"
                            :disabled="showExplanation"
                            :class="{
                                active: selectedAnswer === choice,
                                correct:
                                    showExplanation &&
                                    choice === currentQuestion.answer,
                                wrong:
                                    showExplanation &&
                                    selectedAnswer === choice &&
                                    selectedAnswer !== currentQuestion.answer,
                            }"
                        >
                            <span class="choice-text">{{ choice }}</span>
                            <div class="check-circle"></div>
                        </button>
                    </div>
                </div>
                <div
                    class="question-container w-100 p-3"
                    v-if="
                        currentQuestion?.type === 'identification' ||
                        currentQuestion?.type === 'short_answer'
                    "
                >
                    <input
                        type="text"
                        placeholder="Type your answer here..."
                        v-model="selectedAnswer"
                        :disabled="isDisable === true"
                    />

                    <div class="error-container" v-if="isEmpty">
                        <span class="error-icon">⚠️</span>
                        <div class="error-content">
                            <strong>Answer Required</strong>
                            <p>Please enter your answer before continuing.</p>
                        </div>
                    </div>
                </div>
                <div class=""></div>
                <div class="text-center">
                    <button
                        class="btn btn-lg rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button mb-4 mt-2"
                        :disabled="selectedAnswer === ''"
                        @click="checkAnswer"
                    >
                        Check Answer
                        <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                    <div class="action-footer mt-4 pt-4 border-top">
                        <p class="text-muted small mb-3">Ready to move on?</p>

                        <div class="text-center mb-3">
                            <button
                                class="btn btn-lg rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button"
                                :disabled="isContinue === false"
                                @click="nextQuestion"
                            >
                                <span>Continue</span>
                                <i
                                    class="bi bi-arrow-right-circle-fill ms-2"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import soundQuiz from "../../../gamesounds/sounds.vue";
export default {
    components: {
        soundQuiz,
    },
    props: {
        modelValue: Boolean,
        questions: {
            // Ensure this matches the parent's :questions
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            localQuestions: [],
            currentIndex: 0,
            score: 0,
            selectedAnswer: "",
            iscorrectAnswer: false,
            correctAnswer: "",
            isExplanation: false,
            explanation: "",
            showExplanation: false,
            isQuizFinished: false,
            isContinue: false,
        };
    },
    mounted() {
        this.shuffleQuestions();
    },
    computed: {
        // We use a setter to support v-model properly
        isOpenQuiz: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit("update:modelValue", val);
            },
        },

        currentQuestion() {
            return this.localQuestions?.[this.currentIndex] ?? {};
        },

        progress() {
            return this.questions?.questions?.length
                ? (this.currentIndex / this.questions.questions.length) * 100
                : 0;
        },
    },

    methods: {
        shuffleQuestions() {
            if (!this.questions?.questions) return;

            this.localQuestions = [...this.questions.questions].sort(
                () => Math.random() - 0.5,
            );
        },
        closeModal() {
            this.isOpenQuiz = false;
            // Optional: reset quiz when closing
            // this.currentIndex = 0;
            // this.resetState();
        },

        // Renamed to match your template @click="Getanswer"
        Getanswer(choice) {
            this.selectedAnswer = choice;
        },

        checkAnswer() {
            // ✅ CORRECT ANSWER
            if (this.selectedAnswer === this.currentQuestion?.answer) {
                this.iscorrectAnswer = true;
                this.isContinue = true;
                this.correctAnswer = "correct";
                this.score++;
                this.$refs.gameSounds.playSound("correct");
            }
            // ❌ WRONG ANSWER
            else {
                this.iscorrectAnswer = false;
                this.correctAnswer = "wrong";
                this.$refs.gameSounds.playSound("wrong");
                this.isContinue = true;
            }
            this.isExplanation = true;
            this.explanation = this.currentQuestion?.explanation;
            this.currentQuestion?.explanation;
            this.showExplanation = true;
        },
        nextQuestion() {
            this.currentIndex++;
            if (this.currentIndex >= 10) {
                this.currentIndex = 0;
                this.$refs.gameSounds.playSound("finalscores");
                this.isQuizFinished = true;
                this.isOpenQuiz = false;
            }
            this.selectedAnswer = "";
            this.isExplanation = false;
            this.explanation = "";
            this.showExplanation = false;
            this.isContinue = false;
        },

        resetState() {
            this.selectedAnswer = "";
            this.showExplanation = false;
            this.isCorrect = false;
        },
    },
};
</script>
<style
    scoped
    src="../../../../../css/users/partials/game/gameFooter.css"
></style>
<style
    scoped
    src="../../../../../css/users/partials/game/gameModal.css"
></style>
