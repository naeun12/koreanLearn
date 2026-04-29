<template>
    <div class="app-layout">
        <div class="dashboard-container">
            <aside class="modern-sidebar">
                <div class="sidebar-brand">
                    <div class="logo-box">🇰🇷</div>
                    <span class="brand-text">
                        K-LEARN.
                    </span>
                </div>

                <div class="sidebar-header">
                    <h5 class="sidebar-title">Categories</h5>
                </div>

         <nav class="sidebar-nav">
            <button
                v-for="cat in categories"
                :key="cat"
                @click="changeCategory(cat)"
                :class="['nav-item-btn', { active: activeFilter === cat }]">

            

                <span class="nav-label">{{ cat }}</span>
            </button>
        </nav>

                <div class="sidebar-footer">
                    <button @click="startGame" class="game-btn-vertical shadow-sm">
                        <i class="bi bi-controller"></i>
                        <span>Game Mode</span>
                    </button>
                </div>
            </aside>

            <main class="main-content">
                <navigation />

                <div class="container-fluid px-lg-5 py-4">
                   <loading v-if="isLoading" :message="loadingMessage" />
                    <header class="dashboard-header mb-5">
                        <h1 class="display-4 fw-900 mb-2">
                            <span class="text-dark">Essential</span>
                            <span class="gradient-blue">Korean</span>
                        </h1>
                        <p class="text-muted fs-5">Interactive visual cards for fast learning.</p>
                       <div class="glass-card">
                            <p class="card-label">Select Communication Tone</p>

                           <div class="minimal-nav">
                                <nav class="nav-group">
                                    <a href="#" @click.prevent="ChangeTone('All')"
                                        :class="['nav-item', { active: currentTone === 'All' }]">
                                        <i class="bi bi-grid-fill"></i>
                                        All
                                    </a>

                                    <a href="#" @click.prevent="ChangeTone('Formal')"
                                        :class="['nav-item', { active: currentTone === 'Formal' }]">
                                        <i class="bi bi-briefcase"></i>
                                        Formal
                                    </a>

                                    <a href="#" @click.prevent="ChangeTone('Polite')"
                                        :class="['nav-item', { active: currentTone === 'Polite' }]">
                                        <i class="bi bi-stars"></i>
                                        Polite
                                    </a>

                                    <a href="#" @click.prevent="ChangeTone('Casual')"
                                        :class="['nav-item', { active: currentTone === 'Casual' }]">
                                        <i class="bi bi-chat-dots"></i>
                                        Casual
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </header>

                    <transition-group name="list" tag="div" class="vocab-grid">
                        <div v-for="vocab in filteredVocab" :key="vocab.kr" class="vocab-item">
                            <div class="premium-card">
                                <div class="card-visual">
                                    <div class="image-overlay"></div>
                                    <img :src="vocab.image" :alt="vocab.en" class="main-img" loading="lazy">

                                    <div class="badge-stack">
                                        <span :class="['level-badge', getLevelClass(vocab.level)]">
                                            {{ vocab.level }}
                                        </span>
                                        <span class="type-pill">{{ vocab.part_of_speech }}</span>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <div class="header-row">
                                        <div class="word-info">
                                            <h2 class="kr-title">{{ vocab.kr }}</h2>
                                            <span class="phonetic">/ {{ vocab.romanization }} /</span>
                                        </div>
                                        <button @click="playSound(vocab.kr)" class="audio-fab" title="Listen">
                                            <i class="bi bi-volume-up-fill"></i>
                                        </button>
                                    </div>

                                    <h3 class="en-meaning">{{ vocab.en }}</h3>

                                    <div class="learning-drawer">
                                        <div class="context-item">
                                            <div class="context-label">USAGE</div>
                                            <p class="context-text">{{ vocab.usage }}</p>
                                        </div>

                                        <div class="example-box">
                                            <div class="context-label text-primary">EXAMPLE</div>
                                            <p class="ex-kr">{{ vocab.example }}</p>
                                            <p class="ex-en">{{ vocab.example_en }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                   <nav v-if="lastPage > 1" class="pg-container">
                        <button class="pg-btn" :disabled="currentPage === 1" @click="fetchVocabulary(currentPage - 1)">
                            <i class="bi bi-chevron-left"></i>
                            <span>Prev</span>
                        </button>

                        <div class="pg-indicator">
                            <span class="current">{{ currentPage }}</span>
                            <span class="divider">/</span>
                            <span class="total">{{ lastPage }}</span>
                        </div>

                        <button class="pg-btn" :disabled="currentPage === lastPage"
                            @click="fetchVocabulary(currentPage + 1)">
                            <span>Next</span>
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </nav>
                </div>
            </main>
        </div>

        <div class="app-layout">
            <transition name="premium-fade">
                <div v-if="isGameActive" class="game-viewport">
                    <button @click="exitGame" class="game-exit-btn">
                        <i class="bi bi-x-lg"></i>
                        <span>Esc</span>
                    </button>

                    <div class="game-container">
                        <div class="game-stats-row d-flex justify-content-between align-items-center mb-4">
                            <div class="lives-pill">
                                <i v-for="n in 3" :key="n"
                                    :class="['bi', n <= lives ? 'bi-heart-fill text-danger' : 'bi-heart text-muted']"
                                    class="mx-1"></i>
                            </div>
                            <div class="score-pill">
                                <span class="label">SCORE:</span>
                                <span class="value">{{ score }}</span>
                            </div>
                            <div class="timer-track flex-grow-1 mx-3">
                                <div class="timer-fill" :style="{ width: timer + '%' }"></div>
                            </div>
                        </div>

                        <div v-if="currentQuestion" class="id-question-card shadow-lg">
                            <div class="card-header text-center">
                                <span class="badge bg-soft-primary text-primary mb-2">
                                    {{ currentQuestion.level }} • {{ currentQuestion.category }}
                                </span>
                                <h2 class="title text-muted fs-6">How do you say in Korean:</h2>
                            </div>

                          <div class="question-box text-center my-4">
                                <h1 class="korean-word ">{{ currentQuestion.question }}</h1>

                                <p class="english-clue text-info fs-5">"{{ currentQuestion.english }}"</p>

                                <p class="instruction small text-muted">Type the Romanization:</p>

                                <transition name="fade">
                                    <div v-if="isWrong" class="correction-box mt-3 p-3 text-center shadow-sm">
                                        <p class="text-danger small fw-bold mb-2">TRY AGAIN! THE ANSWER IS:</p>

                                        <div class="d-flex justify-content-center align-items-center gap-4">
                                            <div>
                                                <span class="d-block text-muted x-small">Hangeul</span>
                                                <h3 class="text-success fw-bold mb-0">{{ currentQuestion.question }}
                                                </h3>
                                            </div>

                                            <div class="vr"></div>
                                            <div>
                                                <span class="d-block text-muted x-small">Romanization</span>
                                                <h3 class="text-warning fw-bold mb-0">{{ currentQuestion.romanization }}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                           <div class="input-section mt-4">
                                <div class="input-group">
                                    <input ref="hangeulInput" v-model="userAnswer" type="text"
                                        class="answer-input form-control text-center" placeholder="Type or Speak..."
                                        @keyup.enter="checkAnswer" />
                                    <button @click="toggleMic" :class="['btn-mic', { 'is-listening': isListening }]"
                                        type="button">
                                        <i :class="['bi', isListening ? 'bi-mic-fill' : 'bi-mic']"></i>
                                    </button>
                                </div>

                                <button class="submit-btn btn btn-primary w-100 mt-3 py-3 fw-bold" @click="checkAnswer"
                                    :disabled="isProcessing || !userAnswer">
                                    SUBMIT ANSWER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="modal-zoom">
                <div v-if="showResultModal" class="modal-overlay">
                    <div class="result-modal text-center p-5 shadow-lg">
                        <div class="modal-header-icon fs-1">🏆</div>
                        <h2 class="fw-bold my-3">Game Over!</h2>
                        <div class="result-score-box p-3 bg-light rounded mb-4">
                            <p class="mb-0 text-muted">FINAL SCORE</p>
                            <h1 class="display-4 fw-bold text-primary">{{ score }}</h1>
                        </div>
                        <div class="modal-actions d-grid gap-2">
                            <button @click="startGame" class="btn btn-primary btn-lg">Try Again</button>
                            <button @click="showResultModal = false" class="btn btn-outline-secondary">Back to
                                Dashboard</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import navigation from './partials/navigation.vue';
import loading from './loading.vue';
import axios from 'axios'; // Ensure axios is imported

export default {
    components: { navigation, loading },

    data() {
        return {
            // --- Dashboard States ---
            vocabList: [],      // Used for the gallery/list
            activeFilter: 'All',
            categories: [],
            currentTone: 'All',
            currentPage: 1,
            lastPage: 1,
            isLoading: true,
            loadingMessage: 'Loading vocabulary...',

            // --- Game States ---
            isGameActive: false,
            showResultModal: false,
            quizList: [],
            currentIndex: 0,
            currentQuestion: null,

            // Interaction State
            userAnswer: '',
            score: 0,
            lives: 3,
            timer: 200,
            timerInterval: null,
            isProcessing: false,
            isWrong: false,
            isListening: false,
            recognition: null,
        }
    },

    computed: {
        filteredVocab() {
            if (!this.vocabList) return [];
            if (this.activeFilter === 'All') return this.vocabList;
            return this.vocabList.filter(item => item.category === this.activeFilter);
        }
    },

    mounted() {
        document.title = "Korean Learning Platform - Korean Vocabulary";
        this.fetchVocabulary();
        this.fetchCategories();
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;

            // KANI ANG IMPORTANTE: I-set sa Korean
            // Sa sulod sa imong mic initialization:
            this.recognition.lang = 'ko-KR';
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                // Ang makuha ani kay Hangeul na (e.g. "죄송합니다")
                this.userAnswer = transcript.trim().normalize('NFC');
            };
        }
    },

    methods: {
        // --- DATA FETCHING ---
        async fetchVocabulary(page = 1) {
            try {
                this.isLoading = true;
                const tone = this.currentTone.toLowerCase();
                const category = this.activeFilter.toLowerCase();
                const response = await fetch(`/fetch-vocabulary?page=${page}&tone=${tone}&category=${category}`);
                const result = await response.json();

                const paginated = result.data;
                this.vocabList = paginated?.data ?? [];
                this.currentPage = paginated?.current_page ?? 1;
                this.lastPage = paginated?.last_page ?? 1;
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                this.isLoading = false;
            }
        },

        async ChangeTone(filter) {
            this.currentTone = filter;
            await this.fetchVocabulary(1);
        },

        async fetchCategories() {
            const res = await fetch('/categories');
            const data = await res.json();
            this.categories = ['All', ...data];
        },

        async changeCategory(category) {
            this.activeFilter = category;
            await this.fetchVocabulary(1);
        },

        // --- AUDIO ENGINE ---
        getLevelClass(level) {
            if (!level) return 'text-muted';

            // Match these strings to whatever is in your database 'level' column
            const lvl = level.toLowerCase();
            if (lvl.includes('easy') || lvl.includes('beginner')) {
                return 'text-success'; // Green
            } else if (lvl.includes('normal') || lvl.includes('intermediate')) {
                return 'text-primary'; // Blue
            } else if (lvl.includes('hard') || lvl.includes('formal')) {
                return 'text-danger';  // Red
            }
            return 'text-warning';     // Default Yellow
        },
        async startGame() {
            try {
                const response = await axios.get('/QuizVocabularyFetch');
                if (response.data.status === 200) {
                    this.quizList = response.data.data;
                    this.currentIndex = 0;
                    this.score = 0;
                    this.lives = 3;
                    this.showResultModal = false;
                    this.isGameActive = true;
                    this.nextQuestion();
                }
            } catch (error) {
                console.error("Quiz load failed", error);
                alert("Failed to load quiz. Please try again.");
            }
        },

        nextQuestion() {
            if (this.currentIndex >= this.quizList.length || this.lives <= 0) {
                this.endGame();
                return;
            }

            this.isProcessing = false;
            this.isWrong = false;
            this.userAnswer = '';
            this.currentQuestion = this.quizList[this.currentIndex];
            this.resetTimer();

            // Speak the Korean word for reinforcement
            setTimeout(() => {
                if (this.currentQuestion) this.playSound(this.currentQuestion.question);
                this.$nextTick(() => this.$refs.hangeulInput?.focus());
            }, 400);

            this.startTimer();
        },

        checkAnswer() {
            if (this.isProcessing || !this.userAnswer) return;

            this.isProcessing = true;
            this.resetTimer();

            // 1. Limpyohan ang input sa user
            const input = this.userAnswer.trim().toLowerCase().normalize('NFC');

            // 2. Kuhaon ang data gikan sa imong model (Siguroha nga naay 'answer' field sa DB)
            const dbHangeul = this.currentQuestion.question?.trim().toLowerCase().normalize('NFC') || '';
            const dbRoman = this.currentQuestion.romanization?.trim().toLowerCase() || '';
            const dbEnglish = this.currentQuestion.english?.trim().toLowerCase() || '';

            // Gi-fix nako ang variable name gikan sa 'answer' ngadto sa 'dbAnswer'
            const dbAnswer = this.currentQuestion.answer?.trim().toLowerCase() || '';

            // Fix sa console.log (gi-remove ang undefined currentAnswer reference)
            console.log("Your Input:", input);
            console.log("DB Options:", { hangeul: dbHangeul, roman: dbRoman, answer: dbAnswer, english: dbEnglish });

            // 3. I-check kung ni-match ba sa BISAG ASA ani nga upat ka fields
            if (
                input === dbHangeul ||
                input === dbRoman ||
                input === dbEnglish ||
                input === dbAnswer
            ) {
                this.playEffect('correct');
                this.score += 10;
                this.isWrong = false;

                setTimeout(() => {
                    this.currentIndex++;
                    this.nextQuestion();
                }, 800);
            } else {
                this.playEffect('wrong');
                this.lives--;
                this.isWrong = true;

                setTimeout(() => {
                    if (this.lives > 0) {
                        this.currentIndex++;
                        this.nextQuestion();
                    } else {
                        this.endGame();
                    }
                }, 3000);
            }
        },
        // --- Audio & Helpers ---
        playSound(text) {
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = "ko-KR";
            window.speechSynthesis.speak(msg);
        },

        playEffect(type) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(type === 'correct' ? 880 : 220, ctx.currentTime);
            osc.start(); osc.stop(ctx.currentTime + 0.2);
        },

        startTimer() {
            this.timer = 100;
            this.timerInterval = setInterval(() => {
                this.timer -= 1;
                if (this.timer <= 0) {
                    this.userAnswer = "TIMEOUT"; // Force wrong answer
                    this.checkAnswer();
                }
            }, 150); // Adjust speed of timer
        },

        resetTimer() {
            clearInterval(this.timerInterval);
            this.timer = 100;
        },

        endGame() {
            this.resetTimer();
            this.isGameActive = false;
            this.showResultModal = true;
        },

        exitGame() {
            if (confirm("Exit current game?")) {
                this.isGameActive = false;
                this.resetTimer();
            }
        },
        toggleMic() {
            if (!this.recognition) {
                alert("Speech recognition not supported in this browser.");
                return;
            }

            if (this.isListening) {
                this.recognition.stop();
            } else {
                this.recognition.start();
            }
        },
    },
    beforeUnmount() {
        this.resetTimer();
    }
}
</script>

<style scoped src="../../css/users/volcabulary.css">

</style>