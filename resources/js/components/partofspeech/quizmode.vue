<template>
    <div class="quiz-page min-vh-100 bg-light">
        <navigation />

        <nav class="nav-container">
            <div class="button-group">
                <a href="/nouns" class="nav-btn"><i class="ph-bold ph-cube"></i> Nouns</a>
                <a href="/adjectives" class="nav-btn"><i class="ph-bold ph-palette"></i> Adjectives</a>
                <a href="/pronouns" class="nav-btn"><i class="ph-bold ph-users-three"></i> Pronouns</a>
                <a href="/verbs" class="nav-btn"><i class="ph-bold ph-running"></i> Verbs</a>
                <a href="/adverbs" class="nav-btn"><i class="ph-bold ph-lightning"></i> Adverbs</a>
                <a href="/particles" class="nav-btn"><i class="ph-bold ph-gear"></i> Particles</a>
                <a href="/quiz" class="nav-btn active"><i class="ph-bold ph-quiz"></i> Quiz Mode</a>
            </div>
        </nav>

        <div class="container py-5">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-lg-6">

                    <div class="d-flex justify-content-between align-items-center mb-4 px-3">
                        <div class="hearts-display fs-4">
                            <span v-for="i in 3" :key="i" class="me-1">
                                <i
                                    :class="i <= lives ? 'bi bi-heart-fill text-danger' : 'bi bi-heart text-muted opacity-50'"></i>
                            </span>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <button @click="isMuted = !isMuted" class="btn btn-sm btn-light rounded-circle shadow-sm">
                                <i :class="isMuted ? 'bi bi-volume-mute-fill' : 'bi bi-volume-up-fill'"></i>
                            </button>

                            <div class="timer-box shadow-sm"
                                :class="{ 'text-danger shake border-danger bg-danger bg-opacity-10': timer <= 3 }">
                                <i class="bi bi-stopwatch-fill me-2"></i>
                                <span class="fw-bold font-monospace">{{ timer }}s</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="lives <= 0" class="card border-0 shadow-lg quiz-card animate-slide-up">
                        <div class="card-body p-5">
                            <div class="display-1 mb-3">💀</div>
                            <h2 class="fw-bold">Game Over!</h2>
                            <p class="text-muted mb-4">Final Score: {{ score }}</p>
                            <button @click="resetGame" class="btn btn-primary btn-lg rounded-pill px-5 shadow">Try
                                Again</button>
                        </div>
                    </div>

                    <div v-else-if="questionData.id" class="card border-0 shadow-lg quiz-card">
                        <div class="card-body p-4 p-lg-5">

                            <div class="d-flex justify-content-between mb-4">
                                <span
                                    class="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 fw-bold">
                                    {{ questionData.difficulty || 'Normal' }}
                                </span>
                                <div class="text-primary fw-bold">Score: {{ score }}</div>
                            </div>

                            <div class="text-center mb-5">
                                <h1 class="display-1 fw-bold text-dark mb-0">{{ questionData.korean }}</h1>
                                <p class="text-muted fs-4 mb-4">{{ questionData.romanization }}</p>
                                <div class="bg-light p-4 rounded-4 border">
                                    <h4 class="mb-0 text-secondary fw-normal">{{ questionData.question }}</h4>
                                </div>
                            </div>

                            <div class="row g-3">
                                <div v-for="choiceLetter in ['a', 'b', 'c', 'd']" :key="choiceLetter" class="col-12">
                                    <button @click="checkAnswer(choiceLetter)" :disabled="isAnswered"
                                        class="btn choice-btn w-100 d-flex align-items-center p-3 shadow-sm"
                                        :class="getButtonClass(choiceLetter)">
                                        <div class="choice-circle me-3">{{ choiceLetter.toUpperCase() }}</div>
                                        <div class="fs-5 flex-grow-1 text-start">
                                            {{ questionData['choice_' + choiceLetter] }}
                                        </div>
                                        <i v-if="isAnswered && (questionData['choice_' + choiceLetter].toLowerCase() === questionData.correct_answer.toLowerCase())"
                                            class="bi bi-check-circle-fill ms-2"></i>
                                    </button>
                                </div>
                            </div>

                            <div v-if="isAnswered" class="mt-5 animate-slide-up">
                                <div :class="isCorrect ? 'alert-success-custom' : 'alert-danger-custom'"
                                    class="p-3 rounded-4 mb-3 border-start border-4 shadow-sm">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 fs-3">
                                            <i v-if="isCorrect" class="bi bi-stars text-success"></i>
                                            <i v-else class="bi bi-exclamation-circle-fill text-danger"></i>
                                        </div>
                                        <div class="text-start">
                                            <h6 class="mb-0 fw-bold">{{ isCorrect ? 'Maayo! Sakto ka!' : 'Sayop, pero padayon!' }}</h6>
                                            <small class="text-muted">The correct answer: <strong>{{
                                                    questionData.correct_answer }}</strong></small>
                                        </div>
                                    </div>
                                </div>

                                <button @click="fetchNewQuestion"
                                    class="btn btn-dark btn-lg w-100 py-3 rounded-4 shadow hover-lift">
                                    Continue <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div v-else class="text-center p-5">
                        <div class="spinner-border text-primary" role="status"></div>
                        <p class="mt-3 text-muted">Loading question...</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../partials/navigation.vue';
import axios from 'axios';

const SOUND_URLS = {
    tick: '/sounds/gamevisualsound/freesound_community-short-beep-countdown-81121.mp3',
    correct: '/sounds/gamevisualsound/chrisiex1-correct-156911.mp3',
    wrong: '/sounds/gamevisualsound/wrong.mp3',
    timeout: '/sounds/gamevisualsound/correct.mp3',
    gameover: '/sounds/gamevisualsound/audley_fergine-game-over-classic-206486.mp3'
};

export default {
    components: { navigation },
    data() {
        return {
            questionData: {},
            isAnswered: false,
            isCorrect: false,
            selectedChoice: null,
            lives: 3,
            timer: 15,
            timerInterval: null,
            score: 0,
            isMuted: false,
            audioCache: {}
        };
    },
    mounted() {
        document.title = "Korean Learning Platform - Quiz Mode";
        this.preloadSounds();
        this.fetchNewQuestion();
    },
    methods: {
        preloadSounds() {
            Object.keys(SOUND_URLS).forEach(key => {
                this.audioCache[key] = new Audio(SOUND_URLS[key]);
                this.audioCache[key].preload = 'auto';
            });
        },

        playSound(type) {
            if (this.isMuted || !this.audioCache[type]) return;
            const sound = this.audioCache[type];
            sound.currentTime = 0;
            sound.play().catch(error => console.warn("Audio error:", error));
        },

        startTimer() {
            this.timer = 15;
            clearInterval(this.timerInterval);
            this.timerInterval = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                    if (this.timer <= 5 && this.timer >= 0) this.playSound('tick');
                } else {
                    this.handleTimeout();
                }
            }, 1000);
        },

        handleTimeout() {
            if (this.isAnswered) return;
            clearInterval(this.timerInterval);
            this.isAnswered = true;
            this.lives--;
            this.playSound('timeout');
            if (this.lives === 0) this.playSound('gameover');
        },

        async fetchNewQuestion() {
            if (this.lives <= 0) return;
            this.isAnswered = false;
            this.isCorrect = false;
            this.selectedChoice = null;

            try {
                const response = await axios.get('/fetch-quiz-question');
                if (response.data.success) {
                    // Store the raw data from the database
                    this.questionData = response.data.question;
                    this.startTimer();
                }
            } catch (e) {
                console.error("Fetch error:", e);
            }
        },

        checkAnswer(choiceLetter) {
            if (this.isAnswered) return;

            clearInterval(this.timerInterval);
            this.isAnswered = true;

            const selected = choiceLetter.toLowerCase();
            this.selectedChoice = selected;
            // ✅ FIXED MAP (IMPORTANT CHANGE HERE)
            const map = {
                a: this.questionData.choice_a,
                b: this.questionData.choice_b,
                c: this.questionData.choice_c,
                d: this.questionData.choice_d,
            };

            const selectedText = map[selected];

            // safety check
            if (!selectedText) {
                console.error("❌ selectedText is null. Check DB fields or mapping.");
                return;
            }

            this.isCorrect =
                selectedText.toLowerCase() ===
                this.questionData.correct_answer.toLowerCase();

            if (this.isCorrect) {
                this.score += (this.questionData.points || 1);
                this.playSound('correct');
            } else {
                this.lives--;
                this.playSound(this.lives > 0 ? 'wrong' : 'gameover');
            }
        },
        resetGame() {
            this.lives = 3;
            this.score = 0;
            this.fetchNewQuestion();
        },

        getButtonClass(choiceLetter) {
            if (!this.isAnswered) return 'btn-outline-primary bg-white text-dark shadow-sm';

            // Extract letter from DB answer for highlighting logic
            const correctLetter = this.questionData.correct_answer.replace('choice_', '');

            // 1. Highlight the correct choice in green
            if (choiceLetter === correctLetter) {
                return 'btn-success text-white border-0 scale-up shadow';
            }

            // 2. Highlight the user's wrong choice in red
            if (choiceLetter === this.selectedChoice && !this.isCorrect) {
                return 'btn-danger text-white border-0 shadow';
            }

            // 3. Dim the other choices
            return 'btn-light text-muted border-0 opacity-50';
        }
    },
    beforeUnmount() {
        clearInterval(this.timerInterval);
    }
}
</script>
<style scoped src="../../../css/users/partofspeech/quiz.css">
/* Same styles as before, with a slight tweak for the timer danger state */

</style>