<template>
    <soundQuiz ref="gameSounds" />

    <div v-if="isOpenQuiz" class="quiz-overlay">
        <div class="modal-dialog modal-dialog-centered quiz-modal modal-lg">
            <div class="modal-content quiz-card">
                <!-- Subtle Gradient Glows -->
                <div class="glow-top"></div>

                <!-- Header -->
                <div class="quiz-header">
                    <div class="header-main">
                        <div class="icon-wrapper">
                            <i class="bi bi-puzzle-fill"></i>
                        </div>
                        <div class="title-group">
                            <h5 class="game-title text-primary">
                                {{ gameTitle }}
                            </h5>
                            <p class="game-desc">{{ gameDescription }}</p>
                        </div>
                    </div>
                    <button @click="isOpenQuiz = false" class="close-circle">
                        <i class="bi bi-x"></i>
                    </button>
                </div>

                <div class="modal-body quiz-body">
                    <!-- Progress Tracking -->
                    <div class="progress-info">
                        <span class="q-count"
                            >QUESTION {{ currentIndex + 1 }} / 10</span
                        >
                        <span class="q-percent"
                            >{{ (currentIndex / 10) * 100 }}%</span
                        >
                    </div>

                    <div class="progress-track">
                        <div
                            class="progress-thumb"
                            :style="{ width: (currentIndex / 10) * 100 + '%' }"
                        ></div>
                    </div>
                    <div
                        class="d-flex justify-content-center align-items-center text-center"
                    >
                        <div
                            v-if="isExplanation"
                            class="feedback-card mb-3 d-flex justify-content-center align-items-center"
                            :class="
                                correctAnswer ? 'success-mode' : 'error-mode'
                            "
                        >
                            <div
                                class="feedback-content p-3 d-flex justify-content-center align-items-center"
                                v-if="correctAnswer === 'correct'"
                            >
                                <div class="text-section">
                                    <h2 class="feedback-title text-white">
                                        Your Answer is correct!
                                    </h2>
                                    <div class="explanation-container">
                                        <label>Explanation</label>
                                        <p>{{ currentQuestion.explanation }}</p>
                                    </div>
                                </div>

                                <div class="image-section">
                                    <div class="image-wrapper">
                                        <img
                                            src="../../../../../../public/characters/thumbsupchibby.png"
                                            alt="Great job!"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="feedback-content p-3"
                                v-if="correctAnswer === 'wrong'"
                            >
                                <div class="text-section">
                                    <h2 class="feedback-title text-white">
                                        Your Answer is wrong!
                                    </h2>
                                    <div class="explanation-container">
                                        <label>Explanation</label>
                                        <p>{{ currentQuestion.explanation }}</p>
                                    </div>
                                </div>

                                <div class="image-section">
                                    <div class="image-wrapper">
                                        <img
                                            src="../../../../../../public/characters/thumbsdownchibby.png"
                                            alt="Great job!"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Question Text -->
                    <div class="question-wrapper">
                        <h2 class="question-text">
                            {{ currentQuestion?.question || "Loading..." }}
                        </h2>
                    </div>

                    <!-- Feedback Toast (Appears after answer) -->

                    <!-- Options Area -->
                    <div class="interaction-zone">
                        <!-- Multiple Choice -->
                        <div
                            v-if="currentQuestion?.type === 'multiple_choice'"
                            class="choices-list"
                        >
                            <button
                                v-for="choice in currentQuestion.choices"
                                :key="choice"
                                class="choice-node"
                                :class="{
                                    selected: selectedAnswer === choice,
                                    'is-correct':
                                        showExplanation &&
                                        choice === currentQuestion.answer,
                                    'is-wrong':
                                        showExplanation &&
                                        selectedAnswer === choice &&
                                        selectedAnswer !==
                                            currentQuestion.answer,
                                }"
                                :disabled="showExplanation"
                                @click="Getanswer(choice)"
                            >
                                {{ choice }}
                            </button>
                        </div>

                        <!-- Short Answer -->
                        <div v-else class="input-container">
                            <input
                                type="text"
                                class="modern-field"
                                placeholder="Enter answer here..."
                                v-model="selectedAnswer"
                                :disabled="showExplanation"
                            />
                        </div>
                    </div>
                </div>

                <!-- Single Primary Action -->
                <div class="quiz-footer">
                    <button
                        v-if="!showExplanation"
                        class="action-trigger primary-trigger"
                        :disabled="!selectedAnswer"
                        @click="checkAnswer"
                    >
                        Check Answer
                    </button>
                    <button
                        v-else
                        class="action-trigger next-trigger pulse-animation"
                        @click="nextQuestion"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>

    <GameResult
        :OpenResult="isQuizFinished"
        @retry="restartQuiz"
        :score="score"
    />
</template>
<script>
import soundQuiz from "../../../gamesounds/sounds.vue";
import GameResult from "./gameResult.vue";
export default {
    components: {
        soundQuiz,
        GameResult,
    },
    props: {
        modelValue: Boolean,
        questions: {
            type: Array,
            default: () => [],
        },
        gameDescription: {
            type: String,
            default: "",
        },
        gameTitle: {
            type: String,
            default: "",
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
            isDisable: false,
        };
    },
    mounted() {
        this.shuffleQuestions();
    },
    computed: {
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

        // WITH THIS
        progress() {
            return this.questions.length
                ? ((this.currentIndex + 1) / this.questions.length) * 100
                : 0;
        },
    },

    methods: {
        // WITH THIS
        shuffleQuestions() {
            if (!this.questions || !this.questions.length) return;

            this.localQuestions = [...this.questions].sort(
                () => Math.random() - 0.5,
            );
        },
        closeModal() {
            this.isOpenQuiz = false;
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
        restartQuiz() {
            this.currentIndex = 0;
            this.score = 0;
            this.isQuizFinished = false;
            this.shuffleQuestions();
        },
    },
};
</script>
<style src="../../../../../css/users/partials/game/gameFooter.css"></style>
<style src="../../../../../css/users/partials/game/gameModal.css"></style>
