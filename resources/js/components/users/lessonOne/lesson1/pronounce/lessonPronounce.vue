<template>
    <div class="pronunciation-guide-container h-100">
        <div class="row align-items-stretch g-4">
            <!-- LEFT CARD (UNCHANGED) -->
            <TipsSidebar
                :Tips="TipsData"
                :TipTitle="TipTitle"
                :TipDescription="TipDescription"
            />

            <!-- RIGHT CONTENT (NOW DYNAMIC) -->
            <div class="col-lg-8">
                <div class="row g-3">
                    <div
                        class="col-md-6"
                        v-for="tip in pronunciationRules"
                        :key="tip.id"
                    >
                        <div
                            class="h-100 p-3 example-card-design transition-all"
                        >
                            <h6
                                class="text-uppercase text-accent-primary-color"
                            >
                                {{ tip.title }}
                            </h6>

                            <p class="text-primary-color fs-5">
                                {{ tip.rule }}
                            </p>

                            <div class="p-2 rounded-3 text-center">
                                <span class="text-secondary-color">{{
                                    tip.exampleFrom
                                }}</span>

                                <i
                                    class="bi bi-arrow-right mx-2 text-secondary-color"
                                ></i>

                                <strong class="text-secondary-color">{{
                                    tip.exampleTo
                                }}</strong>
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
                                    <div class="icon-circle bg-card-speaker">
                                        <i
                                            class="bi bi-volume-up-fill icon-color-badge icon-color"
                                        ></i>
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
                            <i
                                class="bi bi-stars me-2 icon-color-badge icon-color"
                            ></i
                            >Korean Pronouncation
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
                                    class="live-transcript-pill shadow-sm d-flex align-items-center px-4 py-2 rounded-pill"
                                >
                                    <div class="mic-container me-3">
                                        <div class="pulse-ring"></div>
                                        <i
                                            class="bi bi-mic-fill text-header-color fs-5"
                                        ></i>
                                    </div>

                                    <p class="mb-0 text-dark fw-medium">
                                        <span
                                            v-if="!liveTranscript"
                                            class="text-title-color opacity-75"
                                            >Speak now...</span
                                        >
                                        <span
                                            v-else
                                            class="typing-effect text-title-color"
                                            >{{ liveTranscript }}</span
                                        >
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
                                        class="bi bi-mic-fill me-2 text-title-color opacity-75"
                                    ></i>
                                    <p class="mb-0 small text-muted fst-italic">
                                        I heard:
                                        <span class="text-title-color fw-medium"
                                            >"{{ userTranscript }}"</span
                                        >
                                    </p>
                                    <div v-if="feedbackTextVisible">
                                        <p
                                            class="mb-0 small ms-3 fw-bold"
                                            :class="
                                                feedbackText.includes('Correct')
                                                    ? 'text-title-color'
                                                    : 'text-header-color'
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
import TipsData from "../data/LessonOneData/TipsData.js";
import TipsSidebar from "../../../partials/TipsSidebar.vue";
import greetingContent from "../data/greetingscontent.js";
import pronunciationRules from "../data/pronunciationRules.js";

export default {
    components: {
        TipsSidebar,
    },
    data() {
        return {
            pronunciationRules: pronunciationRules.pronunciationRules,
            TipsData: TipsData.pronunciationTipsData,
            TipTitle: "Pronounce Tips",
            TipDescription:
                "Master Korean pronunciation with simple rules on consonants, vowels, sound changes, and natural speaking flow.",
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
<style scoped src="../../../../../../css/users/partials/textColors.css"></style>
