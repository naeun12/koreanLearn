<template>
    <div class="pronunciation-guide-container h-100">
        <div class="row align-items-stretch g-4">
            <!-- LEFT CARD (UNCHANGED) -->
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

                        <h3 class="fw-bold mb-3">Pronunciation Pro-Tips</h3>

                        <p class="small opacity-75">
                            Mastering these rules is the secret to moving from
                            "reading letters" to "speaking Korean."
                        </p>

                        <ul class="list-unstyled mt-4 d-flex flex-column gap-3">
                            <li
                                class="d-flex align-items-start gap-3"
                                v-for="pronunciationtip in pronunciationTips"
                            >
                                <div
                                    class="bg-white rounded-circle p-1 text-primary"
                                >
                                    <i class="bi bi-check2"></i>
                                </div>
                                <div>
                                    <strong
                                        >{{ pronunciationtip.title }}:</strong
                                    >
                                    {{ pronunciationtip.description }}
                                    <p>
                                        Example: {{ pronunciationtip.example }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- RIGHT CONTENT (NOW DYNAMIC) -->
            <div class="col-lg-8">
                <div class="row g-3">
                    <div
                        class="col-md-6"
                        v-for="tip in pronunciationRules"
                        :key="tip.id"
                    >
                        <div
                            class="card h-100 border-0 shadow-sm rounded-4 border-start border-4 border-info bg-white p-3 hover-lift"
                        >
                            <h6
                                class="text-info fw-bold text-uppercase smaller-text"
                            >
                                {{ tip.title }}
                            </h6>

                            <p class="small text-muted">
                                {{ tip.rule }}
                            </p>

                            <div class="p-2 rounded-3 text-center">
                                <span class="text-muted">{{
                                    tip.exampleFrom
                                }}</span>

                                <i class="bi bi-arrow-right mx-2"></i>

                                <strong>{{ tip.exampleTo }}</strong>
                            </div>
                            <!-- 🔊 TRY TO SPEAK -->
                            <button
                                class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                                @click="playSound(tip.speak)"
                            >
                                <i class="bi bi-volume-up-fill"></i>
                                Listen
                            </button>

                            <div class="button-wrapper">
                                <button
                                    class="btn-minimal-speak"
                                    @click="tryToSpeak(tip.speak)"
                                >
                                    <div class="icon-circle">
                                        <i class="bi bi-volume-up-fill"></i>
                                    </div>
                                    <span>Try to Speak</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="gameModal"
            tabindex="-1"
            aria-hidden="true"
            class="modal d-flex justify-content-center align-items-center"
            v-if="openPronouncationModal"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content custom-plain-modal">
                    <div class="modal-header border-0 pb-0">
                        <h6
                            class="modal-title text-uppercase fw-bold text-muted small"
                        >
                            <i class="bi bi-stars me-2"></i>Korean Pronouncation
                        </h6>
                        <button
                            type="button"
                            @click="closePronounceModal"
                            class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="d-flex flex-column align-items-center py-3">
                            <div
                                :class="[
                                    'speak-btn',
                                    { 'is-listening': !isListening },
                                ]"
                                @click="!isListening && startSpeech()"
                                :style="
                                    isListening
                                        ? 'pointer-events: none; opacity: 0.6;'
                                        : 'cursor: pointer;'
                                "
                            >
                                <div class="voice-waves">
                                    <span v-for="i in 5" :key="i"></span>
                                </div>
                            </div>
                            <span
                                class="mt-3 small fw-bold text-muted text-uppercase tracking-wider"
                            >
                                {{
                                    isListening
                                        ? "Listening..."
                                        : "Tap to Speak"
                                }}
                            </span>
                            <div
                                v-if="isListening || liveTranscript"
                                class="mt-4 d-flex justify-content-center"
                            >
                                <div
                                    class="live-transcript-pill shadow-sm d-flex align-items-center px-4 py-2 border border-info rounded-pill bg-light"
                                >
                                    <div class="mic-container me-3">
                                        <div class="pulse-ring"></div>
                                        <i
                                            class="bi bi-mic-fill text-danger fs-5"
                                        ></i>
                                    </div>

                                    <p class="mb-0 text-dark fw-medium">
                                        <span
                                            v-if="!liveTranscript"
                                            class="text-muted opacity-75"
                                            >Speak now...</span
                                        >
                                        <span v-else class="typing-effect">{{
                                            liveTranscript
                                        }}</span>
                                    </p>
                                </div>
                            </div>
                            <div
                                v-if="userTranscript"
                                class="explanation-card mt-4 p-4 shadow-sm border-0 rounded-4 animate__animated animate__fadeIn"
                            >
                                <div
                                    class="transcript-box mb-3 d-flex align-items-center"
                                >
                                    <i
                                        class="bi bi-mic-fill me-2 text-primary opacity-75"
                                    ></i>
                                    <p class="mb-0 small text-muted fst-italic">
                                        I heard:
                                        <span class="text-dark fw-medium"
                                            >"{{ userTranscript }}"</span
                                        >
                                    </p>
                                    <div v-if="feedbackTextVisible">
                                        <p
                                            class="mb-0 small ms-3 fw-bold"
                                            :class="
                                                feedbackText.includes('Correct')
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            "
                                        >
                                            {{ feedbackText }}
                                        </p>
                                    </div>
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
import pronunciationTips from "../data/pronunciationTips.js";
import pronunciationRules from "../data/pronunciationRules.js";

export default {
    data() {
        return {
            pronunciationTips: pronunciationTips.pronunciationTipsData,
            pronunciationRules: pronunciationRules.pronunciationRules,

            openPronouncationModal: false,
            answer: "",

            isListening: false,
            liveTranscript: "",
            userTranscript: "",
            feedbackText: "",
            feedbackTextVisible: false,
            recognition: null,
        };
    },

    methods: {
        enableAutoSpeech() {
            this.startSpeech();
        },

        playSound(text) {
            if (!text) return;

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "ko-KR";
            utterance.pitch = 1;
            utterance.rate = 0.9;

            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        },

        tryToSpeak(text) {
            this.openPronouncationModal = true;
            this.answer = text;
        },

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

        cleanText(text) {
            return text.toLowerCase().replace(/\s+/g, "").trim();
        },

        // =========================
        // FIXED START SPEECH
        // =========================
        startSpeech() {
            const Recognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!Recognition) {
                alert("Browser not supported");
                return;
            }

            if (this.recognition) {
                this.recognition.stop();
            }

            const recognition = new Recognition();
            this.recognition = recognition;

            recognition.lang = "ko-KR";

            // 🔥 Better for short words
            recognition.interimResults = true;
            recognition.continuous = true;
            recognition.maxAlternatives = 5;

            this.isListening = true;
            this.liveTranscript = "";
            this.userTranscript = "";
            this.feedbackText = "";
            this.feedbackTextVisible = false;

            let finalText = "";

            recognition.onresult = (event) => {
                let interimTranscript = "";

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript.trim();

                    if (event.results[i].isFinal) {
                        finalText += transcript + " ";
                    } else {
                        interimTranscript += transcript + " ";
                    }
                }

                this.liveTranscript = interimTranscript || finalText;

                // if naka detect bisag short word
                if (finalText.trim().length > 0) {
                    const result = finalText.trim();
                    const target = this.answer;

                    this.userTranscript = result;

                    const cleanResult = this.cleanText(result);
                    const cleanTarget = this.cleanText(target);

                    const similarity = this.calculateSimilarity(
                        cleanResult,
                        cleanTarget,
                    );

                    const grade = Math.round(similarity * 100);

                    const passed =
                        cleanResult === cleanTarget ||
                        cleanTarget.includes(cleanResult) ||
                        cleanResult.includes(cleanTarget) ||
                        similarity >= 0.6; // lowered for short words

                    if (passed) {
                        this.feedbackText = `✅ Correct (${grade}%)`;
                    } else {
                        this.feedbackText = `❌ Wrong (${grade}%)`;
                    }

                    this.feedbackTextVisible = true;

                    recognition.stop();
                }
            };

            recognition.onerror = (event) => {
                console.log("Mic Error:", event.error);
                this.isListening = false;
            };

            recognition.onend = () => {
                this.isListening = false;
            };

            recognition.start();

            // auto stop after 5 sec
            setTimeout(() => {
                if (this.isListening) {
                    recognition.stop();
                }
            }, 5000);
        },
        closePronounceModal() {
            this.openPronouncationModal = false;
            this.isListening = false;
            this.liveTranscript = "";
            this.userTranscript = "";
            this.feedbackText = "";

            if (this.recognition) {
                this.recognition.stop();
            }
        },
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/lessonpronounce.css"
></style>
