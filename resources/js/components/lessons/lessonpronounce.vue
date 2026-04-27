<template>
    <div class="pronunciation-guide-container h-100">

        <div class="row align-items-stretch g-4">

            <!-- LEFT CARD (UNCHANGED) -->
            <div class="col-lg-4">

                <div class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden">

                    <div class="card-body p-4 position-relative">

                        <div class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3">
                            🗣️
                        </div>

                        <h3 class="fw-bold mb-3">Pronunciation Pro-Tips</h3>

                        <p class="small opacity-75">
                            Mastering these rules is the secret to moving from "reading
                            letters" to "speaking Korean."
                        </p>

                        <ul class="list-unstyled mt-4 d-flex flex-column gap-3">

                            <li class="d-flex align-items-start gap-3" v-for="pronunciationtip in pronunciationTips">
                                <div class="bg-white rounded-circle p-1 text-primary">
                                    <i class="bi bi-check2"></i>
                                </div>
                                <div>
                                    <strong>{{ pronunciationtip.title }}:</strong> {{
                                        pronunciationtip.description }} <p>
                                        Example: {{ pronunciationtip.example }}</p>
                                </div>
                            </li>





                        </ul>

                    </div>

                </div>

            </div>

            <!-- RIGHT CONTENT (NOW DYNAMIC) -->
            <div class="col-lg-8">

                <div class="row g-3 ">

                    <div class="col-md-6" v-for="tip in pronunciationRules" :key="tip.id">

                        <div
                            class="card h-100 border-0 shadow-sm rounded-4 border-start border-4 border-info bg-white p-3 hover-lift">

                            <h6 class="text-info fw-bold text-uppercase smaller-text">
                                {{ tip.title }}
                            </h6>

                            <p class="small text-muted">
                                {{ tip.rule }}
                            </p>

                            <div class=" p-2 rounded-3 text-center">

                                <span class="text-muted">{{ tip.exampleFrom }}</span>

                                <i class="bi bi-arrow-right mx-2"></i>

                                <strong>{{ tip.exampleTo }}</strong>

                            </div>
                            <!-- 🔊 TRY TO SPEAK -->
                            <button
                                class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                                @click="playSound(tip.speak)">
                                <i class="bi bi-volume-up-fill"></i>
                                Listen
                            </button>

                            <div class="button-wrapper">
                                <button class="btn-minimal-speak" @click="tryToSpeak(tip.speak)">
                                    <div class="icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07">
                                            </path>
                                        </svg>
                                    </div>
                                    <span>Try to Speak</span>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    <div class="bottom-sheet" v-if="isListening">
        <div class="handle"></div>
        <div class="speech-content">
            <span class="status-badge">Listening...</span>

            <div class="result-wrapper">
                <div class="hangul-display">{{ spokenText ||
                    '...' }}<transition name="success-pop">
                        <div v-if="isspeakCorrect" class="feedback-toast success">
                            <div class="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div class="text-group">
                                <span class="label-main">Perfect!</span>
                                <span class="label-sub">Accurate pronunciation</span>
                            </div>
                        </div>
                    </transition>
                </div>
                <transition name="error-shake">
                    <div v-if="isFinalResult" class="feedback-toast error">
                        <div class="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <div class="text-group">
                            <span class="label-main">Correct Pronouncation!
                                {{ finalResult }}</span>
                            <span class="label-sub">Try Again</span>
                        </div>
                    </div>
                </transition>
            </div>

            <button class="close-btn" @click="isListening = false">Done</button>
        </div>
    </div>
</template>
<script>
import pronunciationTips from '../data/pronunciationTips.js';
import pronunciationRules from '../data/pronunciationRules.js';
export default { 
    data() { 
        return { 
            pronunciationTips: pronunciationTips.pronunciationTipsData,
            pronunciationRules: pronunciationRules.pronunciationRules,
            isFinalResult: false,
            isspeakCorrect: false,
            speakCorrect: '',
            correctSpeak: 0,
            spokenText: 'Im Listening.....',
            isListening: 0,
            finalResult: '',   
        }
    },
    methods:
    { 
        enableAutoSpeech() {
            console.log("User interacted, starting speech...");
            this.startSpeak();
        },
        playSound(text) {
            if (!text) return;

            const utterance = new SpeechSynthesisUtterance(text);

            // Korean voice
            utterance.lang = "ko-KR";

            // AI-like tuning
            utterance.pitch = 1;
            utterance.rate = 0.9;

            console.log("🔊 Playing:", text);

            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        },
        tryToSpeak(speak) {
            this.isListening = true;
            this.spokenText = "";
            this.isFinalResult = false;
            this.finalResult = "";
            this.isspeakCorrect = false;
            this.correctSpeak = 0;
            const SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                alert("Speech recognition not supported");
                return;
            }

            const recognition = new SpeechRecognition();

            recognition.lang = "ko-KR";
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;
            recognition.start();
            recognition.onresult = (event) => {
                let text = "";
                this.isspeakCorrect = false;
                this.correctSpeak = 0;
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    text += event.results[i][0].transcript;
                }
                this.spokenText = text;
                // 🔥 IF / ELSE CHECK
                if (text.includes(speak)) {
                    console.log("🟢 CORRECT:", text);
                    this.isspeakCorrect = true;
                    this.correctSpeak += 1;
                    new Audio('/sounds/gamevisualsound/chrisiex1-correct-156911.mp3').play();
                } else {
                    console.log("🔴 WRONG:", text, "Expected:", speak);
                }
            };

            recognition.onerror = (err) => {
                console.error("🔴 Speech error:", err.error);
            };

            // ⏱️ AUTO STOP AFTER 20 SECONDS
            setTimeout(() => {
                recognition.stop();
                // FINAL CHECK BEFORE STOP
                if (this.spokenText && this.spokenText.length > 1) {

                    if (this.spokenText.includes(speak)) {
                        console.log("✅ FINAL RESULT: Correct pronunciation!");
                        this.speakCorrect = true;
                        new Audio('/sounds/gamevisualsound/audley_fergine-game-over-classic-206486.mp3').play();


                    } else {
                        this.speakCorrect = false;
                        this.isFinalResult = true;
                        this.finalResult = speak;

                    }

                } else {
                    this.speakCorrect = false;
                    this.isFinalResult = true;
                    this.finalResult = speak;
                }

                console.log("⛔ Stopped after 20 seconds");

            }, 30000);

            this.recognition = recognition;
        },
      
    }
}
</script>
<style scoped src="../../../css/users/assets/lessons/lessonpronounce.css">
</style>