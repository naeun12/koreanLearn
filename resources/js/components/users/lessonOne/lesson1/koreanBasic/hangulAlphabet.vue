<template>
    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h3 class="fw-bold mb-0 text-capitalize">
                {{ sectionTitle }}
            </h3>
        </div>
        <div class="btn-group shadow-sm bg-white rounded-3 p-1 border">
            <button
                @click="prevSection"
                class="btn btn-sm px-3 rounded-2"
                :class="
                    canGoBack
                        ? 'btn-light text-primary'
                        : 'btn-light text-muted'
                "
                disabled="!canGoBack"
            >
                <i class="bi bi-arrow-left"></i>
            </button>
            <span class="btn btn-sm disabled text-dark fw-bold border-0 px-2">
                {{ currentIndex + 1 }} / {{ sections.length }}
            </span>
            <button
                @click="nextSection"
                class="btn btn-sm px-3 rounded-2"
                :class="canGoForward ? 'btn-arrow' : 'btn-light text-muted'"
                :disabled="!canGoForward"
            >
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
    <template v-if="currentSection === 'consonants'">
        <div class="row g-p">
            <div
                v-for="consonant in consonants"
                :key="'c-' + consonant.char"
                class="col-sm-6 col-lg-4 col-xxl-3 mt-3"
                style="cursor: pointer"
                @click="
                    isalphabetimageModal(
                        consonant.image,
                        consonant.char,
                        consonant.instruction,
                    )
                "
            >
                <div
                    class="card h-100 shadow-sm rounded-4 text-center py-4 custom-card-gradient p-3"
                >
                    <div class="hangul-char text-primary-color fs-1">
                        {{ consonant.char }}
                    </div>
                    <div class="text-secondary-color fw-bold fs-5 mb-2">
                        {{ consonant.sound }}
                    </div>
                    <p class="description-text mb-4">
                        {{ consonant.description }}
                    </p>
                    <button
                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                        @click.stop="playSound(consonant.char)"
                    >
                        <i class="bi bi-volume-up-fill"></i>
                        Listen
                    </button>
                </div>
            </div>
        </div>
    </template>
    <template v-if="currentSection === 'vowels'">
        <div class="row g-p">
            <div
                v-for="vowel in vowels"
                :key="'v-' + vowel.char"
                class="col-sm-6 col-lg-4 col-xxl-3 mt-3"
            >
                <div
                    class="card h-100 shadow-sm rounded-4 text-center py-4 custom-card-gradient p-3"
                >
                    <div class="hangul-char text-primary-color fs-1">
                        {{ vowel.char }}
                    </div>
                    <div
                        class="text-secondary-color fw-bold fs-5 mb-2 fw-bold fs-5 mb-2"
                    >
                        {{ vowel.sound }}
                    </div>
                    <p class="description-text mb-4">
                        {{ vowel.description }}
                    </p>
                    <button
                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                        @click.stop="playSound(vowel.char)"
                    >
                        <i class="bi bi-volume-up-fill"></i>
                        Listen
                    </button>
                </div>
            </div>
        </div>
    </template>
    <template v-if="currentSection === 'doubleConsonants'">
        <div class="row g-p">
            <div
                v-for="con in doubleConsonants"
                :key="'c-' + con.char"
                class="col-sm-6 col-lg-4 col-xxl-3 mt-3"
            >
                <div
                    class="card h-100 shadow-sm rounded-4 text-center py-4 custom-card-gradient p-3"
                >
                    <div class="hangul-char text-primary-color fs-1">
                        {{ con.char }}
                    </div>
                    <div
                        class="text-secondary-color fw-bold fs-5 mb-2 fw-bold fs-5 mb-2"
                    >
                        {{ con.sound }}
                    </div>
                    <p class="description-text mb-4">
                        {{ con.description }}
                    </p>

                    <button
                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                        @click.stop="playSound(con.char)"
                    >
                        <i class="bi bi-volume-up-fill"></i>
                        Listen
                    </button>
                </div>
            </div>
        </div>
    </template>
    <template v-if="currentSection === 'aspiratedConsonants'">
        <div class="row g-p">
            <div
                v-for="con in aspiratedConsonants"
                :key="'c-' + con.char"
                class="col-sm-6 col-lg-4 col-xxl-3 mt-3"
            >
                <div
                    class="card h-100 shadow-sm rounded-4 text-center py-4 custom-card-gradient p-3"
                >
                    <div class="hangul-char text-primary-color fs-1">
                        {{ con.char }}
                    </div>
                    <div class="text-secondary-color fw-bold fs-5 mb-2">
                        {{ con.sound }}
                    </div>
                    <p class="description-text mb-4">
                        {{ con.description }}
                    </p>
                    <button
                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                        @click.stop="playSound(con.char)"
                    >
                        <i class="bi bi-volume-up-fill"></i>
                        Listen
                    </button>
                </div>
            </div>
        </div>
    </template>
    <div
        class="modal-alphabet"
        v-if="alphabetinstructiondraw"
        id="modernImageModal"
    >
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content custom-card-style">
                <button
                    type="button"
                    class="btn-close custom-close"
                    @click="alphabetinstructiondraw = false"
                ></button>

                <div class="modal-body p-0">
                    <div class="card border-0">
                        <img
                            :src="Alphabetimage"
                            :alt="Alphabetimage"
                            class="img-fluid rounded-top-4"
                        />
                        <div class="card-body p-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5 p-4 pro-tip-box" :class="currentSection">
        <div class="d-flex align-items-center mb-3">
            <div class="tip-icon">
                <i class="bi bi-lightbulb-fill"></i>
            </div>
            <h5 class="mb-0 fw-bold text-accent-primary-color fs-2">
                Pro Learning Tip
            </h5>
        </div>

        <div class="tip-body-text">
            <p
                v-if="currentSection === 'vowels'"
                class="mb-0 text-primary-color"
            >
                Vowels cannot stand alone! Combine these with the silent
                <span class="kr-badge-sm text-primary-color">ㅇ</span> to form
                blocks like
                <span class="kr-badge-sm text-primary-color">아</span> (a) or
                <span class="kr-badge-sm text-primary-color">야</span> (ya).
            </p>

            <p
                v-else-if="currentSection === 'consonants'"
                class="mb-0 text-primary-color"
            >
                The sound of these can change! For example,
                <span class="kr-badge-sm text-primary-color">ㄱ</span> sounds
                like 'k' at the end of a word but more like 'g' at the start.
            </p>

            <p
                v-else-if="currentSection === 'doubleConsonants'"
                class="mb-0 text-primary-color"
            >
                These require <strong>"tenseness."</strong> Imagine you are
                tightening your throat or stomach muscles to create a sharp,
                forceful sound!
            </p>

            <p
                v-else-if="currentSection === 'aspiratedConsonants'"
                class="mb-0 text-primary-color"
            >
                These consonants are pronounced with a
                <strong>strong burst of air</strong>. Try placing your hand in
                front of your mouth and feel the air!
            </p>
        </div>
    </div>
</template>

<script>
import hangulData from "../data/koreanalphabet.js";

export default {
    data() {
        return {
            currentSection: "consonants",
            alphabetinstructiondraw: false,
            Alphabetimage: null,
            Alphabetname: "",
            Alphabetexample: "",
            sections: [
                "consonants",
                "vowels",
                "doubleConsonants",
                "aspiratedConsonants",
            ],
            vowels: hangulData.vowels,
            consonants: hangulData.consonants,
            doubleConsonants: hangulData.doubleConsonants,
            aspiratedConsonants: hangulData.otherConsonants,
        };
    },
    methods: {
        nextSection() {
            const currentIndex = this.sections.indexOf(this.currentSection);
            if (currentIndex < this.sections.length - 1) {
                this.currentSection = this.sections[currentIndex + 1];
            }
        },
        prevSection() {
            const currentIndex = this.sections.indexOf(this.currentSection);
            if (currentIndex > 0) {
                this.currentSection = this.sections[currentIndex - 1];
            }
        },

        isalphabetimageModal(image, text, example) {
            this.Alphabetimage = image;
            this.alphabetinstructiondraw = true;
            this.Alphabetexample = example;
            this.Alphabetname = text;
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
    },
    computed: {
        currentIndex() {
            return this.sections.indexOf(this.currentSection);
        },
        canGoBack() {
            return this.currentIndex > 0;
        },
        canGoForward() {
            return this.currentIndex < this.sections.length - 1;
        },
        sectionTitle() {
            switch (this.currentSection) {
                case "vowels":
                    return "Basic Vowels";
                case "consonants":
                    return "Basic Consonants";
                case "doubleConsonants":
                    return "Double Consonants";
                case "aspiratedConsonants":
                    return "Aspirated Consonants";
                default:
                    return "Hangul activeMainSection";
            }
        },
    },
};
</script>
<style src="../../../../../../css/trytospeekbutton.css"></style>
<style
    src="../../../../../../css/users/assets/lessons/lessonalpbhabet.css"
></style>
<style src="../../../../../../css/btn-audio.css"></style>
<style scoped src="../../../../../../css/users/partials/textColors.css"></style>
