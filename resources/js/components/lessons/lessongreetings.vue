<template>
    <div class="row align-items-stretch g-4">
        <div class="col-lg-4">

            <div class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden">

                <div class="card-body p-4 position-relative">

                    <div class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3">
                        🗣️
                    </div>

                    <h3 class="fw-bold mb-3"><i class="bi bi-hand-index-thumb"></i>
                        Greeting Tips</h3>

                    <p class="small opacity-75">
                        Learn how Koreans greet each other in real life—simple, natural,
                        and easy to follow.
                    </p>



                    <ul class="list-unstyled mt-4 d-flex flex-column gap-3">

                        <li class="d-flex align-items-start gap-3" v-for="greeting in greetings">

                            <div>
                                <i :class="greeting.icon"></i>
                                <span class="ms-2">{{ greeting.text }}</span>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="col-lg-8">

            <div class="card-body-greeting p-5 shadow-sm border-0 position-relative overflow-hidden">
                <div class="border-1 position-absolute top-0 start-0 w-100 h-100 z-0">
                </div>

                <div class="position-relative z-1">
                    <h1 class="display-5 fw-bold mb-3 text-gradient">
                        What is a Greeting?
                    </h1>
                    <p class="lead text-secondary lh-base">
                        A greeting is more than just words it's the gateway to a
                        conversation.
                        In Korean culture, greetings carry deep significance, reflecting
                        <span class=" fw-semibold">respect</span>,
                        <span class=" fw-semibold">politeness</span>, and
                        <span class=" fw-semibold">friendliness</span>.
                    </p>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="row g-4">
                    <div class="col-lg-6 col-xl-4" v-for="greetingcontent in greetingscontent"
                        :key="greetingcontent.id">
                        <div class="card-greeting-content glass-effect p-3 shadow-sm border-0 h-100">
                            <div class="row align-items-center g-0">


                                <div class=" ps-3 text-start">
                                    <div class="icon-wrapper shadow-sm w-100 h-100 mb-4">
                                        <div class="glass-overlay"></div>
                                        <img :src="greetingcontent.image" alt="Greeting Illustration"
                                            class="img-fluid greeting-image">
                                    </div>
                                    <h1 class="h4 fw-bold text-primary mb-1 hangul-text">
                                        {{ greetingcontent.korean }}</h1>
                                    <h2 class="h6 text-muted fw-normal mb-2 text-uppercase tracking-wider small">
                                        {{ greetingcontent.meaning }}
                                    </h2>
                                    <p class="x-small text-secondary mb-3 lh-sm">
                                        {{ greetingcontent.usage }}
                                    </p>

                                    <button @click="greetingVoice(greetingcontent.sound)"
                                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2">
                                        <i class="bi bi-volume-up-fill"></i>
                                        <span>Listen</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="usage-container p-4 p-md-5 glass-effect border-0">
                    <div class="text-center mb-5">
                        <h1 class="display-6 fw-bold text-gradient mb-2">When to Use?
                        </h1>
                        <p class="text-secondary">Understanding Korean social
                            fullGameData and
                            etiquette</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-danger">
                                    <i class="bi bi-person-workspace"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">Teachers & Elders</h3>
                                <p class="small text-muted mb-0">Always use honorifics
                                    and full polite speech.</p>
                                <span class="badge rounded-pill bg-danger mt-2">Highly
                                    Formal</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-primary">
                                    <i class="bi bi-people-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">Strangers</h3>
                                <p class="small text-muted mb-0">Default to
                                    <strong>안녕하세요</strong> for safety.
                                </p>
                                <span class="badge rounded-pill bg-primary mt-2">Polite
                                    (Jondaemal)</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-info">
                                    <i class="bi bi-briefcase-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">Business Settings</h3>
                                <p class="small text-muted mb-0">Use formal endings even
                                    with colleagues.</p>
                                <span class="badge rounded-pill bg-info mt-2">Professional</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="usage-card shadow-sm h-100">
                                <div class="usage-icon bg-soft-success">
                                    <i class="bi bi-chat-heart-fill"></i>
                                </div>
                                <h3 class="h6 fw-bold mt-3">Close Friends</h3>
                                <p class="small text-muted mb-0">Casual
                                    <strong>안녕</strong> is acceptable here.
                                </p>
                                <span class="badge rounded-pill bg-success mt-2">Informal
                                    (Banmal)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="practice-section p-4 p-md-5 glass-effect border-0 mt-5">
                    <div class="text-center mb-5">
                        <h2 class="display-6 fw-bold text-gradient">How to Practice</h2>
                        <p class="text-secondary">Follow these steps to master Korean
                            greetings naturally.</p>
                    </div>

                    <div class="row g-4 justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">1</div>
                                <div class="practice-icon">
                                    <i class="bi bi-ear-fill text-primary"></i>
                                </div>
                                <h4 class="h5 fw-bold">Listen First</h4>
                                <p class="small text-muted">Focus on the intonation and
                                    pronunciation before you try to speak.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">2</div>
                                <div class="practice-icon">
                                    <i class="bi bi-mic-fill text-danger"></i>
                                </div>
                                <h4 class="h5 fw-bold">Shadow It</h4>
                                <p class="small text-muted">Repeat the words out loud
                                    every day to build muscle memory.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm">
                                <div class="step-badge">3</div>
                                <div class="practice-icon">
                                    <i class="bi bi-speedometer2 text-warning"></i>
                                </div>
                                <h4 class="h5 fw-bold">Pace Control</h4>
                                <p class="small text-muted">Start slowly for accuracy,
                                    then gradually increase your speed.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card shadow-sm border-primary-subtle">
                                <div class="step-badge">4</div>
                                <div class="practice-icon">
                                    <i class="bi bi-chat-dots-fill text-info"></i>
                                </div>
                                <h4 class="h5 fw-bold">Real World</h4>
                                <p class="small text-muted">Use these greetings in real
                                    situations to gain true confidence.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="practice-card tip-card h-100">
                                <div class="practice-icon">
                                    <i class="bi bi-heart-pulse-fill text-white"></i>
                                </div>
                                <h4 class="h5 fw-bold text-white">Don't Worry!</h4>
                                <p class="small text-white opacity-75">Mistakes are
                                    proof you're learning. Keep trying!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-5">
            <div class="reminder-banner p-4 p-md-5 overflow-hidden position-relative border-0 shadow-lg">
                <div class="blur-circle-1"></div>
                <div class="blur-circle-2"></div>

                <div class="row align-items-center position-relative z-index-1">
                    <div class="col-md-2 text-center text-md-start mb-3 mb-md-0">
                        <div class="heart-wrapper shadow">
                            <i class="bi bi-heart-fill text-white fs-1"></i>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <h3 class="fw-bold text-white mb-2">Confidence starts here.</h3>
                        <p class="lead text-white opacity-90 mb-0">
                            Mastering greetings is your first major milestone in
                            speaking Korean fluently.
                            Remember, <span class="fw-bold border-bottom border-2">small
                                daily steps</span> lead to massive improvements over
                            time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fixed-bottom p-3 d-flex justify-content-center">
        <button class="btn btn-practice-bottom w-100 d-flex align-items-center justify-content-center shadow-sm"
            @click="btnOpenPronouncationGameModal()">
            <i class="bi bi-pencil-square me-2"></i>
            <span>Practice Now</span>
        </button>
    </div>
        <!-- OVERLAY -->
    <!-- VUE CONTROLLED MODAL (NO BOOTSTRAP JS) -->
   <div v-if="openPronouncationModal" id="gameModal" tabindex="-1" aria-hidden="true"
        class="modal d-flex justify-content-center align-items-center">

        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content custom-plain-modal">
                <div class="modal-header border-0 pb-0">
                    <h6 class="modal-title text-uppercase fw-bold text-muted small"> <i
                            class="bi bi-stars me-2"></i>Korean Tutor </h6>
                   <button type="button" class="btn-close" @click="btnClosePronouncationGameModal()">
                    </button>                    
                </div>
                <div class="modal-body p-4">
                    <div class="d-flex justify-content-between position-relative mb-5 stage-wrapper">
                        <div v-for="step in stagesCount" :key="step"
                            :class="['stage-step', { active: currentStep >= step }]"> {{ step }} </div>
                    </div>
                    <div class="content-card mb-3"> <small class="label-text">Situation</small>
                        <div class="d-flex align-items-center mt-1">
                            <h5 class="mb-0 fw-bold text-dark">{{ currentQuestion.korean }}</h5> <button
                                @click="greetingVoice(currentQuestion.korean)"
                                class="btn btn-sm btn-light ms-auto rounded-circle"> <i
                                    class="bi bi-volume-up-fill text-primary"></i> </button>
                        </div>
                    </div>
                    <div class="content-card mb-4 border-primary-subtle"> <small class="label-text text-primary">Your
                            Task: {{ currentQuestion.english }}</small>
                        <p class="mb-0 mt-1 text-dark fw-bold fs-5">{{ currentQuestion.correctResponse }}</p>
                        <p class="small text-muted mb-0">{{ currentQuestion.description }}</p>
                    </div>
                   <div class="d-flex flex-column align-items-center py-3">
                        <div :class="['speak-btn', { 'is-listening': isListening }]"
                            @click="!isListening && startSpeech()"
                            :style="isListening ? 'pointer-events: none; opacity: 0.6;' : 'cursor: pointer;'">
                            <div class="voice-waves">
                                <span v-for="i in 5" :key="i"></span>
                            </div>
                        </div>

                        <span class="mt-3 small fw-bold text-muted text-uppercase tracking-wider">
                            {{ isListening ? 'Listening...' : 'Tap to Speak' }}
                        </span>
                       <div v-if="isListening || liveTranscript" class="mt-4 d-flex justify-content-center">
                            <div
                                class="live-transcript-pill shadow-sm d-flex align-items-center px-4 py-2 border border-info rounded-pill bg-light">

                                <div class="mic-container me-3">
                                    <div class="pulse-ring"></div>
                                    <i class="bi bi-mic-fill text-danger fs-5"></i>
                                </div>

                                <p class="mb-0 text-dark fw-medium">
                                    <span v-if="!liveTranscript" class="text-muted opacity-75">Speak now...</span>
                                    <span v-else class="typing-effect">{{ liveTranscript }}</span>
                                </p>
                            </div>
                        </div>
                       
                       <div v-if="userTranscript"
                            class="explanation-card mt-4 p-4 shadow-sm border-0 rounded-4 animate__animated animate__fadeIn">

                            <div class="transcript-box mb-3 d-flex align-items-center">
                                <i class="bi bi-mic-fill me-2 text-primary opacity-75"></i>
                                <p class="mb-0 small text-muted fst-italic">
                                    I heard: <span class="text-dark fw-medium">"{{ userTranscript }}"</span>
                                </p>
                            </div>

                            <hr class="my-3 opacity-10">

                            <div class="explanation-content">
                                <div class="explanation-header d-flex align-items-center mb-2">
                                    <div class="icon-badge me-2">
                                        <i class="bi bi-lightbulb-fill text-warning"></i>
                                    </div>
                                    <h6 class="mb-0 fw-bold text-uppercase letter-spacing-1">Did you know?</h6>
                                </div>

                                <p class="explanation-text text-secondary lh-base mb-4">
                                    {{ currentQuestion.explaination }}
                                </p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div v-if="feedbackText">
                                    <span
                                        :class="isCorrect ? 'badge bg-success-soft text-success' : 'badge bg-danger-soft text-danger'"
                                        class="p-2 px-3 rounded-pill">
                                        <i :class="isCorrect ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"
                                            class="me-1"></i>
                                        {{ feedbackText }}
                                    </span>
                                </div>

                                <button @click="btnQuestionNext"
                                    class="btn btn-primary rounded-pill px-4 py-2 shadow-sm d-flex align-items-center">
                                    <span>Next Question</span>
                                    <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       <div class="modal-overlay" v-if="showFinal">
            <div class="modal-card animated-modal">
                <div class="torotot-left"><i class="bi bi-megaphone-fill"></i></div>
                <div class="torotot-right"><i class="bi bi-megaphone-fill"></i></div>

                <div class="modal-header">
                    <h2><i class="bi bi-trophy-fill me-2 text-warning"></i>Results</h2>
                </div>

                <div class="modal-body">
                    <div class="score-circle">
                        <span class="percentage">{{ finalScore }}%</span>
                    </div>
                    <p class="summary-text">Pronunciation Summary</p>

                    <div v-for="(item, index) in totalGrades" :key="index" class="grade-pill">
                        <div class="item-header">
                            <span class="item-label">
                           <i class="bi bi-bookmark-star-fill me-1"></i> Pronunciation {{ index + 1 }}
                                                    </span>
                            <span class="item-score">{{ item.grade }}%</span>
                        </div>

                        <div class="speech-details">
                            <div class="detail-row">
                                <i class="bi bi-mic-fill text-danger me-2"></i>
                                <span class="label">Heard:</span>
                                <span class="heard-text">{{ item.heard || '---' }}</span>
                            </div>
                            <div class="detail-row">
                                <i class="bi bi-bullseye text-success me-2"></i>
                                <span class="label">Target:</span>
                                <span class="target-text">{{ item.target }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn-primary" @click="startGame">
                        <i class="bi bi-arrow-clockwise me-2"></i> Continue
                    </button>
                </div>
            </div>
        </div>
</template>
<script>
import greetings from '../data/greetingstip.js';
import greetingContent from '../data/greetingscontent.js';
import GameData from '../data/greetinggame.js';
const SOUND_URLS = {
    correct: '/sounds/gamevisualsound/chrisiex1-correct-156911.mp3',
    wrong: '/sounds/gamevisualsound/wrong.mp3',
    finalscores: '/sounds/gamevisualsound/freesound_community-success-fanfare-trumpets-6185.mp3'
};
export default {
    data() {
        return {
            greetings: greetings.Greeting,
            greetingscontent: greetingContent.GreetingContent,
            fullList: GameData.GreetingGame,
            openPronouncationModal: false,
            shuffledList: [],
            currentIndex: 0,
            isListening: false,
            userTranscript: '',
            isCorrect: false,
            feedbackText: '',
            liveTranscript: '',
            stages: 4,
            stagesCount: 4,
            score: 0,
            showFinal: false,
            totalGrades: [],
            finalScore: 0,
            isMuted: false,
            audioCache: {}
        };
    },

    computed: {
        currentQuestion() {
            return this.shuffledList[this.currentIndex] || {};
        },

        currentStep() {
            return (this.currentIndex % this.stagesCount) + 1;
        }
    },

    methods: {

        // 🎧 play sound
        greetingVoice(file) {
            const audio = new Audio(`/sounds/greetings/${file}`);
            audio.play();
        },
        btnOpenPronouncationGameModal() { 
            this.openPronouncationModal = true;
        },
        btnClosePronouncationGameModal() { 
            this.openPronouncationModal = false;

        },
        triggerCelebration() {
            if (typeof confetti === 'undefined') return;

            const end = Date.now() + (5 * 1000); // 5 ka segundo ang gidugayon
            const colors = ['#4f46e5', '#0043a8', '#f59e0b', '#ffffff'];

            (function frame() {
                // Pabuto sa Wala
                confetti({
                    particleCount: 3, // Gidugangan nato ang gidaghanon matag frame
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.6 }, // Medyo gipaubos gamay ang sugod
                    colors: colors,
                    zIndex: 9999, // PARA SIGURADO NGA NAA SA IBABAW SA MODAL
                    ticks: 200 // Unsa kadugay ang confetti sa dili pa mawala (default is 200)
                });

                // Pabuto sa Too
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.6 },
                    colors: colors,
                    zIndex: 9999,
                    ticks: 200
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        },
        // 🔀 shuffle game
        startGame() {
            let array = [...this.fullList];

            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            this.shuffledList = array.slice(0, this.stagesCount);
            this.currentIndex = 0;

            this.score = 0;
            this.isCorrect = false;
            this.userTranscript = '';
            this.feedbackText = '';
            this.showFinal = false;
        },
        preloadSounds() {
            Object.keys(SOUND_URLS).forEach(key => {
                this.audioCache[key] = new Audio(SOUND_URLS[key]);
                this.audioCache[key].preload = 'auto';
            });
        },
        playSound(type) {
            console.log("TYPE:", type);
            console.log("CACHE:", this.audioCache);

            if (this.isMuted || !this.audioCache[type]) {
                console.warn("Audio missing:", type);
                return;
            }

            const sound = this.audioCache[type];
            sound.currentTime = 0;
            sound.play().catch(err => console.log("Audio blocked:", err));
        },
        // 🧹 clean text
        cleanText(text) {
            return (text || "")
                .toLowerCase()
                .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
                .replace(/\s+/g, "")
                .trim();
        },

        // 📊 flexible Korean speech match
        calculateSimilarity(a, b) {
            let longer = a.length > b.length ? a : b;
            let shorter = a.length > b.length ? b : a;

            let matches = 0;

            for (let i = 0; i < shorter.length; i++) {
                if (longer.includes(shorter[i])) {
                    matches++;
                }
            }

            return matches / (shorter.length || 1);
        },

        // 🎤 speech recognition
        startSpeech() {
            const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!Recognition) {
                alert("Browser not supported");
                return;
            }

            const recognition = new Recognition();

            // 🇰🇷 Korean only
            recognition.lang = 'ko-KR';

            // 🔥 LIVE ENABLED
            recognition.interimResults = true;
            recognition.continuous = false;

            this.isListening = true;
            this.userTranscript = '';
            this.liveTranscript = '';
            this.feedbackText = '';

            recognition.onresult = (event) => {

                let interimTranscript = '';
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;

                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }

                // 🔥 LIVE TEXT
                this.liveTranscript = interimTranscript || finalTranscript;

                // =========================
                // FINAL CHECK ONLY
                // =========================
                if (finalTranscript) {

                    if (!this.isListening) return;

                    const result = finalTranscript.trim();

                    const target =
                        this.currentQuestion.image ||
                        this.currentQuestion.korean ||
                        this.currentQuestion.answer ||
                        '';

                    if (!target) {
                        this.feedbackText = "⚠️ No correct answer set";
                        recognition.stop();
                        return;
                    }

                    const cleanResult = this.cleanText(result);
                    const cleanTarget = this.cleanText(target);

                    const similarity = this.calculateSimilarity(cleanResult, cleanTarget);
                    const grade = Math.round(similarity * 100);

                    const passed =
                        cleanResult === cleanTarget ||
                        cleanResult.includes(cleanTarget) ||
                        similarity >= 0.75;

                    this.totalGrades.push({
                        heard: result,
                        target: target,
                        grade: grade
                    });

                    // move LIVE → FINAL
                    this.userTranscript = result;

                    if (passed) {
                        this.isCorrect = true;
                        this.feedbackText = `✅ Correct! (${grade}%)`;
                        this.playSound('correct');
                        this.handleSuccess();
                    } else {
                        this.isCorrect = false;
                        this.feedbackText = `❌ Wrong! (${grade}%)`;
                        this.playSound('wrong');
                    }

                    recognition.stop();
                    this.isListening = false;
                }
            };

            recognition.onspeechend = () => {
                this.isListening = false;
                recognition.stop();
            };

            recognition.onerror = (event) => {
                console.error("Speech Error:", event.error);
                this.isListening = false;
            };

            recognition.start();
        },
        // ✅ success handler
        handleSuccess() {
            this.isListening = false;
            this.isCorrect = true;

            this.score++;
        },
        btnQuestionNext() { 
            
            this.isCorrect = false;
            this.userTranscript = '';
            this.feedbackText = '';
            this.liveTranscript = '';
            this.currentIndex++;
            

            // 🏁 FINAL CHECK
            if (this.currentIndex >= this.stagesCount) {

                const sum = this.totalGrades.reduce((acc, item) => {
                    return acc + (item.grade || 0);
                }, 0);

                this.finalScore = Math.round(sum / (this.totalGrades.length || 1));



                this.showFinal = true;
                this.openPronouncationModal = false;
                // ❌ REMOVE AUTO RESTART (IMPORTANT)
                return;
            }
        },
        nextQuestion() {
            this.currentIndex++;

            if (this.currentIndex >= this.stagesCount) {

                // ✅ ADD FINAL SCORE HERE
                // Siguradoha nga 'grade' ang property name sa imong object
                const sum = this.totalGrades.reduce((a, b) => a + (b.grade || 0), 0);

                this.finalScore = this.totalGrades.length > 0
                    ? Math.round(sum / this.totalGrades.length)
                    : 0;

                console.log("===== FINAL RESULT =====");
                console.log("📊 All Grades:", this.totalGrades);
                console.log("🏁 Final Score:", this.finalScore + "%");
                console.log("========================");
                console.log("SHOW FINAL:", this.showFinal);
                this.showFinal = true;
                this.openPronouncationModal = false;
                this.playSound('finalscores');
                this.triggerCelebration();
                

                return;
            }

            // reset states for next round
            this.userTranscript = '';
            this.feedbackText = '';
            this.isCorrect = false;
        }
    },

    mounted() {
        document.title = "Korean Learning Platform - Lesson 1";
        this.preloadSounds();

    },

    created() {
        this.startGame();
    }
};
</script>
<style scoped src="../../../css/users/assets/lessons/lessongreetings.css">
</style>
<style scoped src="../../../css/users/partials/game/gamefinalresultmodal.css">
</style>