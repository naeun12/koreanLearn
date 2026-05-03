<template>
    <playVisualSound ref="sounds"></playVisualSound>
    <div class="k-card">
        <h1 class="fw-black text-dark mb-3" style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1;">
            SOV Structure & Conjunction <span class="text-primary">(Core Rule)</span>
        </h1>
       <p class="lead text-secondary" style="max-width: 2000px;">
            The most fundamental difference between English and Korean is the position of sentence elements and the use
            of <strong>conjunctions</strong>.
            While English follows a <span class="badge bg-light text-dark fw-bold">SVO</span> pattern,
            Korean uses a <span class="badge bg-primary fw-bold">SOV</span> pattern. This means that in Korean, the verb
            usually comes at the end of the sentence.
            In addition, Korean often relies on conjunctions differently compared to English, connecting ideas in a more
            context-based structure.
            Because of this structure, Korean speakers often wait until the end of the sentence to understand the full
            meaning of the action being described.
        </p>
  
    <div class="row g-4">
            <div class="col-12">
                <h2 class="h5 text-uppercase fw-bold text-muted mb-4" style="letter-spacing: 1px;">
                    Key Principles to Remember
                </h2>

                <div class="list-group list-group-flush gap-3">
                    <div
                        class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">1</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">SOV Structure: Verb is Always Last</strong>
                            <span class="text-secondary small">
                                In a complete Korean sentence, the verb or adjective <em>must</em> come at the very end.
                            </span>
                        </div>
                    </div>

                    <div
                        class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">2</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Conjunction Usage</strong>
                            <span class="text-secondary small">
                                Korean connects ideas using conjunctions, but often in a more context-based way compared
                                to English.
                            </span>
                        </div>
                    </div>

                    <div
                        class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">3</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Particle Power</strong>
                            <span class="text-secondary small">
                                Because word order is flexible, Korean uses <strong>particles</strong> (like -는/은 and
                                -를/을) to define the role of each word.
                            </span>
                        </div>
                    </div>

                    <div
                        class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">4</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Dropping the Subject</strong>
                            <span class="text-secondary small">
                                If the context is clear, the subject is often omitted. <em>"사과를 먹어요"</em> (Eat apple) is
                                perfectly natural.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden">
                <div class="d-flex align-items-center position-relative" style="z-index: 1;">
                    <div class="me-3 fs-2">💡</div>
                    <div>
                        <strong class="d-block mb-1">Pro Tip: The Anchor Rule</strong>
                        <p class="mb-0 opacity-75 small">
                            Think of the Korean verb as the "anchor." Everything else—time, location, and objects—builds
                            up to that final action.
                        </p>
                    </div>
                    <button class="example-sentences ms-auto" @click="btnSentenceCore()">Example</button>
                </div>

                <div class="position-absolute"
                    style="width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; right: -20px; bottom: -20px;">
                </div>
            </div>
        </div>
    </div>

    
    <transition name="fade-slide">

  
    <div class="mt-4 p-4  bg-white overflow-hidden mb-3 k-card" v-if="isSentenceCore" ref="sentenceCore">
        <div class="d-flex align-items-center mb-4">
            <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                <i class="bi bi-journal-text fs-4"></i>
            </div>
            <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">Sentence Breakdowns</h3>
        </div>

        <div class="row g-3">
            <div class="col-lg-4">
                <div
                    class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 1</span>
                        <span class="text-primary fw-bold small">SOV Structure</span>
                    </div>
                    <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                        <span>저는 밥을 먹어요</span>
                        <button class="btn btn-link text-primary p-0 border-0" @click="sentenceCoreSound('iaterice')"
                            title="Play Sound">
                            <i class="bi bi-volume-up-fill fs-3"></i>
                        </button>
                    </div>
                    <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>밥을</strong>
                            (rice)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>먹어요</strong>
                            (eat)</span>
                    </div>
                    <div class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                        <i class="bi bi-translate me-2"></i> “I eat rice”
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div
                    class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 2</span>
                        <span class="text-primary fw-bold small">SOV Structure</span>
                    </div>
                    <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                        <span>저는 커피를 마셔요</span>
                        <button class="btn btn-link text-primary p-0 border-0"
                            @click="sentenceCoreSound('idrinkcoffee')" title="Play Sound">
                            <i class="bi bi-volume-up-fill fs-3"></i>
                        </button>
                    </div>
                    <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>커피를</strong>
                            (coffee)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>마셔요</strong>
                            (drink)</span>
                    </div>
                    <div class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                        <i class="bi bi-translate me-2"></i> “I drink coffee”
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div
                    class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 3</span>
                        <span class="text-primary fw-bold small">SOV Structure</span>
                    </div>
                    <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                        <span>저는 책을 읽어요</span>
                        <button class="btn btn-link text-primary p-0 border-0" @click="sentenceCoreSound('ireadabook')"
                            title="Play Sound">
                            <i class="bi bi-volume-up-fill fs-3"></i>
                        </button>
                    </div>
                    <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>책을</strong>
                            (book)</span>
                        <span class="text-muted">+</span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>읽어요</strong>
                            (read)</span>
                    </div>
                    <div class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                        <i class="bi bi-translate me-2"></i> “I read a book”
                    </div>
                </div>
                
            </div>
            <div class="col-lg-4">
               <div
                    class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 4</span>
                        <span class="text-primary fw-bold small">Conjunction</span>
                    </div>

                    <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                        <span>저는 밥을 먹어요 그리고 커피를 마셔요</span>
                        <button class="btn btn-link text-primary p-0 border-0"
                            @click="sentenceCoreSound('conjuctionex4')" title="Play Sound">
                            <i class="bi bi-volume-up-fill fs-3"></i>
                        </button>
                    </div>

                      <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>저는 밥을 먹어요</strong> (I eat rice)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>그리고</strong> (and)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>커피를 마셔요</strong> (I drink coffee)
                            </span>
                        </div>
                    <div class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                        <i class="bi bi-translate me-2"></i> “I eat rice and I drink coffee”
                    </div>
                </div>
             
            </div>
            <div class="col-lg-4">
                   <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 5</span>
                            <span class="text-primary fw-bold small">Conjunction</span>
                        </div>

                        <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                            <span>저는 밥을 먹어요 하지만 커피는 안 마셔요</span>
                            <button class="btn btn-link text-primary p-0 border-0"
                                @click="sentenceCoreSound('conjuctionex5')" title="Play Sound">
                                <i class="bi bi-volume-up-fill fs-3"></i>
                            </button>
                        </div>

                        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>저는 밥을 먹어요</strong> (I eat rice)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>하지만</strong> (but)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>커피는 안 마셔요</strong> (I don’t drink coffee)
                            </span>
                        </div>

                        <div
                            class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                            <i class="bi bi-translate me-2"></i> “I eat rice but I don’t drink coffee”
                        </div>
                    </div>
            </div>
               <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 6</span>
                            <span class="text-primary fw-bold small">Conjunction</span>
                        </div>

                        <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                            <span>배가 고파요 그래서 밥을 먹어요</span>
                            <button class="btn btn-link text-primary p-0 border-0"
                                @click="sentenceCoreSound('conjuctionex6')" title="Play Sound">
                                <i class="bi bi-volume-up-fill fs-3"></i>
                            </button>
                        </div>

                        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>배가 고파요</strong> (I am hungry)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>그래서</strong> (so)
                            </span>

                            <span class="text-muted">+</span>

                            <span class="p-2 rounded-3 bg-white border shadow-sm small">
                                <strong>밥을 먹어요</strong> (I eat rice)
                            </span>
                        </div>

                        <div
                            class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                            <i class="bi bi-translate me-2"></i> “I am hungry so I eat rice”
                        </div>
                    </div>

                </div>
               <div
               
                    class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                    <div class="mb-4 mb-md-0 text-center text-md-start">
                        <h3 class="fw-black mb-1">Practice Mode</h3>
                       <p class="mb-0 opacity-75 fs-5">Build Korean sentences by arranging the words correctly</p>
                    </div>


                    <button class="btn btn-quiz rounded-pill shadow-lg" @click="isSentenceCoreQuiz = true">
                        Start All-In-One Quiz
                    </button>
                </div>
  
        </div>
        
    </div>
    </transition>
   <div v-if="isSentenceCoreQuiz" class="modal fade show d-block" tabindex="-1"
        style="background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden animate-pop">

                <div class="modal-header border-0 p-4 pb-0">
                    <div class="d-flex align-items-center">
                        <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary shadow-sm">
                            <i class="bi bi-puzzle-fill fs-4"></i>
                        </div>
                        <div>
                            <h5 class="modal-title fw-bold">Sentence Puzzle</h5>
                            <p class="text-muted small mb-0">Build the correct sentence</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close shadow-none bg-light rounded-circle"
                        @click="isSentenceCoreQuiz = false"></button>
                </div>

                <div class="modal-body p-4">
                   <div class="d-flex justify-content-between align-items-end mb-1">
                        <span class="badge rounded-pill bg-primary px-3 py-2 fs-6">
                            Question {{ currentIndex }} of 10
                        </span>
                        <span class="text-muted small fw-bold">{{ (currentIndex / 10) * 100 }}% Complete</span>
                    </div>
                    <div class="progress mb-4" style="height: 10px; border-radius: 50px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar" :style="{ width: (currentIndex / 10) * 100 + '%' }"
                            :aria-valuenow="currentIndex" aria-valuemin="0" aria-valuemax="10">
                        </div>
                    </div>
                    <div class="text-center mb-4">
                        <span class="badge bg-primary-subtle text-primary rounded-pill px-3 mb-2">English Meaning</span>
                        <h3 class="fw-black text-dark">{{ currentQuestion.translation }}</h3>
                    </div>

                    <div
                        class="answer-zone border-2 border-dashed rounded-4 p-4 mb-4 d-flex flex-wrap gap-2 justify-content-center align-items-center">
                        <button v-for="(word, index) in assembledWords" :key="'ans' + index"
                            class="btn  rounded-pill px-4 shadow-sm animate-word" @click="removeWord(index)" style="background:#4f46e5;color: white">
                            {{ word }}
                        </button>

                        <div v-if="assembledWords.length === 0" class="text-muted small opacity-50 py-2">
                            Tap the words below...
                        </div>
                    </div>

                    <div class="d-flex flex-wrap gap-2 justify-content-center mb-4">
                        <button v-for="(word, index) in shuffledWords" :key="'pool' + index"
                            class="btn btn-outline-secondary border-2 rounded-pill px-3 fw-bold word-pill"
                            @click="selectWord(word, index)">
                            {{ word }}
                        </button>
                    </div>

                    <div v-if="quizMessage" class="animate-slide-up">
                        <div
                            :class="['alert border-0 rounded-4 text-center fw-bold shadow-sm', isCorrect ? 'alert-success text-success' : 'alert-danger text-danger']">
                            <i :class="['bi me-2', isCorrect ? 'bi-check-circle-fill' : 'bi-x-circle-fill']"></i>
                            {{ quizMessage }}
                        </div>
                    </div>
                </div>

                <div class="modal-footer border-0 p-4 pt-0 d-flex gap-3">
                    <button class="btn btn-light flex-grow-1 rounded-pill fw-bold py-2" @click="resetQuiz">
                        Reset
                    </button>
                    <button class="btn btn-sm rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button" @click="checkSentence">
                        Check Answer <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isQuizFinished" class="result-modal-backdrop">
        <div class="result-modal-content">

            <div class="celebration-header">
                <div class="result-icon-wrapper">
                    <div class="modern-celebration-icon">
                        <div class="ribbon-icon"></div>
                        <div class="confetti-burst"></div>
                    </div>
                </div>
                <h2 class="fw-bold mb-1">Quiz Finished</h2>
                <div class="status-badge" :class="score >= 5 ? 'pass' : 'retry'">
                    {{ score >= 5 ? 'Excellent Work!' : 'Keep Practicing' }}
                </div>
            </div>

            <div class="score-visualization my-5">
                <div class="score-circle-glow">
                    <div class="score-content">
                        <span class="score-main">{{ score }}</span>
                        <span class="score-divider"></span>
                        <span class="score-total">10</span>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0 small text-uppercase fw-bold ls-1">Final Score</p>
            </div>

            <div class="result-actions">
                <button class="btn-retry-premium" @click="resetQuiz">
                    <i class="bi bi-arrow-clockwise me-2"></i> Try Again
                </button>
            </div>

        </div>
    </div>
</template>
<script>
import sentenceData from '../data/sentenceData';
import playVisualSound from '../../../../gamesounds/sounds.vue';

export default {
    name: "sentenceCore",
    components: {
        playVisualSound
    },
    data() {
        return {
            isSentenceCoreQuiz: false,
            isSentenceCore: false,
            currentIndex: 0,
            originalQuestions: sentenceData.sentencePuzzleQuestions || [],
            questions: [],
            shuffledWords: [],
            assembledWords: [],
            quizMessage: "",
            isCorrect: false,
            score: 0,
            maxQuestions: 10,
            totalAnswered: 0,
            isQuizFinished: false
        }
    },

    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex];
        }
    },

    mounted() {
        this.questions = [...this.originalQuestions]
            .sort(() => Math.random() - 0.5);

        if (this.questions.length > 0) {
            this.loadQuestion();
        }
    },

    methods: {

        btnSentenceCore() {
            this.isSentenceCore = !this.isSentenceCore;

            this.$nextTick(() => {
                this.$refs.sentenceCore.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        },

        sentenceCoreSound(soundKey) {
            const audio = new Audio(`/sounds/sentence/${soundKey}.mp3`);
            audio.play();
        },
        playPuzzleSound(word) {

                const utterance = new SpeechSynthesisUtterance(word);

                // Korean voice
                utterance.lang = "ko-KR";

                // optional settings
                utterance.rate = 0.9;
                utterance.pitch = 1;
                utterance.volume = 1;

                speechSynthesis.cancel();
                speechSynthesis.speak(utterance);
            
        },

        loadQuestion() {

            if (!this.currentQuestion) return;

            this.assembledWords = [];
            this.quizMessage = "";

            const words = this.currentQuestion.answer || [];

            this.shuffledWords = Array.isArray(words)
                ? [...words].sort(() => Math.random() - 0.5)
                : [];
        },
        selectWord(word, index) {
            this.assembledWords.push(word);
            this.shuffledWords.splice(index, 1);
            this.playPuzzleSound(word);
        },

        removeWord(index) {
            const removed = this.assembledWords[index];
            this.shuffledWords.push(removed);
            this.assembledWords.splice(index, 1);
        },

        checkSentence() {

            if (this.isQuizFinished) return;

            const userAnswer = this.assembledWords.join(" ");

            const correctAnswer = Array.isArray(this.currentQuestion.answer)
                ? this.currentQuestion.answer.join(" ")
                : this.currentQuestion.answer;

            if (this.assembledWords.length === 0) {
                this.quizMessage = "⚠️ Please select words to form a sentence!";
                this.isCorrect = false;
                return;
            }

            if (userAnswer === correctAnswer) {

                this.quizMessage = "✅ Correct!";
                this.isCorrect = true;
                this.score++;

                if (this.$refs.sounds) {
                    this.$refs.sounds.playSound('correct');
                }

            } else {

                this.quizMessage = `❌ Wrong! The correct answer is: ${correctAnswer}`;
                this.isCorrect = false;

                if (this.$refs.sounds) {
                    this.$refs.sounds.playSound('wrong');
                }
            }

            // 🔥 COUNT ANSWERED QUESTIONS
            this.totalAnswered++;

            setTimeout(() => {

                // ✅ STOP AFTER 10 QUESTIONS
                if (this.totalAnswered >= this.maxQuestions) {
                    this.finishQuiz();
                    return;
                }

                this.currentIndex++;
                this.loadQuestion();

            }, 3000);
        },
        finishQuiz() {
            this.isQuizFinished = true;
            this.isSentenceCoreQuiz = false;
            this.$refs.sounds.playSound('finalscores')

            this.quizMessage = `🎉 Quiz Finished! Your Score: ${this.score} / ${this.maxQuestions}`;

            this.assembledWords = [];
            this.shuffledWords = [];
        },
        resetQuiz() {
            this.isSentenceCoreQuiz = true; // or true ONLY if intentional start screen

            this.isQuizFinished = false;
            this.totalAnswered = 0;
            this.score = 0;
            this.currentIndex = 0; // ✅ IMPORTANT FIX

            this.quizMessage = "";
            this.assembledWords = [];
            this.shuffledWords = [];

            this.loadQuestion();
        },
    }
}
</script>
<style scoped src="../../../../../../css/users/assets/lessons/grammarassetscss/sentencescore.css"></style>
<style scoped src="../../../../../../css/users/partials/game/gameFooter.css"></style>
<style scoped src="../../../../../../css/users/partials/game/gameModal.css"></style>
<style scoped src="../../../../../../css/users/partials/game/gamefinalresultmodal.css"></style>
<style scoped src="../../../../../../css/users/partials/card/k-card.css"></style>
<style scoped src="../../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"></style>