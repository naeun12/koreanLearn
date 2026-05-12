<template>
    <div class="k-card">
        <h1
            class="fw-black mb-3 text-accent-primary-color"
            style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
        >
            Basic Sound Changes (Intro)
            <span
                class="text-primary-color"
                style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
                >(Core Rule)</span
            >
        </h1>
        <p
            class="lead text-secondary-color text-justify"
            style="max-width: 2000px"
        >
            refers to the natural pronunciation changes that happen when Korean
            letters are combined in words or sentences. These changes make
            speech smoother and faster, so native speakers often pronounce words
            differently from how they are written. Learning these sound changes
            helps you
            <strong
                >listen better, speak more naturally, and read Hangul
                correctly.</strong
            >
        </p>
        <div class="row g-4">
            <CorePrinciplesAssets
                :CorePrincipleData="CorePrincipleData"
                :isExampleModal="isExampleModal"
                :ExampleTitle="ExampleTitle"
                :btnBasicSoundsChangeExamples="btnBasicSoundsChangeExamples"
                :proTipTitle="proTipTitle"
                :proTipDescription="proTipDescription"
                @open-example="btnBasicSoundsChangeExamples"
            />
        </div>
    </div>
    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isExampleModal"
        ref="BasicSoundsChangeExample"
    >
        <div class="p-4">
            <div class="d-flex align-items-center">
                <div class="p-2 text-header-color rounded-3 me-3">
                    <i class="bi bi-arrow-repeat fs-4"></i>
                </div>
                <div>
                    <h3
                        class="text-title-color mb-0"
                        style="letter-spacing: -0.5px"
                    >
                        Examples of Basic Vowel & Consonant Sounds
                    </h3>
                    <p class="text-description-color small mb-0">
                        Each Korean syllable block is made by combining one
                        consonant and one vowel. The consonant gives the
                        starting sound, while the vowel creates the main voice
                        sound. Below are common beginner examples with clear
                        explanations.
                    </p>
                </div>
            </div>
        </div>
        <div class="k-card shadow-lg border-0 overflow-hidden">
            <ExampleAssets :ExampleData="ExampleData" />
            <!-- Title -->
        </div>
        <div
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
        >
            <div class="mb-4 mb-md-0 text-md-start">
                <div class="">
                    <h3 class="text-title-color mb-2">
                        Master Basic Sound Changes
                    </h3>

                    <p
                        class="small mb-0 text-description-color"
                        style="max-width: 1200px"
                    >
                        Build a strong foundation in Hangul by understanding how
                        sounds naturally change in real Korean speech. Learn how
                        vowels and consonants combine, how syllables connect,
                        and how pronunciation shifts for smoother flow. Improve
                        your reading accuracy, train your listening skills, and
                        gain confidence in recognizing natural Korean sound
                        patterns through guided practice and interactive
                        exercises.
                    </p>
                </div>
            </div>
            <button
                class="btn btn-quiz rounded-pill shadow-lg"
                @click="openQuiz = true"
            >
                Start Mastery Quiz
            </button>
        </div>
    </div>
    <GameModal
        v-model="openQuiz"
        :questions="questions"
        :gameDescription="gameDescription"
        :gameTitle="gameTitle"
    />
</template>
<script>
import questionData from "../data/LessonOneData/questionsData";
import GameModal from "../../../../users/partials/games/gameModal.vue";
import CorePrinciplesAssets from "../CorePrinciples/CorePrincipleAssets.vue";
import CorePrincipleData from "../data/LessonOneData/CorePrinciplesData.js";
import ExampleAssets from "../../../partials/ExampleAssets/ExampleAssets.vue";
import ExampleData from "../data/LessonOneData/ExampleData.js";
export default {
    components: {
        GameModal,
        CorePrinciplesAssets,
        ExampleAssets,
    },
    data() {
        return {
            isExampleModal: false,
            ExampleTitle: "Core Principles of Basic Sound Changes (Intro)",
            proTipTitle: "Pro Tip: Basic Sound Changes (Intro)",
            proTipDescription: `
                            Basic sound changes happen when Korean letters meet
                            and adjust to make pronunciation smoother and more
                            natural. Final consonants may connect to the next syllable,
                            nearby sounds can influence each other, and some sounds become
                            stronger or softer in speech. Learning these patterns helps you
                            read, listen, and speak Korean more naturally.
                            `,
            CorePrincipleData: CorePrincipleData.BasicSoundChangeData,
            ExampleData: ExampleData.BasicSoundsChangeExamples,
            openQuiz: false,
            questions: questionData.questionsBasicSoundChangeData,
            gameDescription: "Practice Korean Basic Sounds Change!",
            gameTitle: "Quiz Basic Sounds And Change",
        };
    },
    methods: {
        btnBasicSoundsChangeExamples() {
            this.isExampleModal = !this.isExampleModal;
            if (this.isExampleModal) {
                this.$nextTick(() => {
                    this.$refs.BasicSoundsChangeExample.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        },
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/basic/batchim.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gameFooter.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gameModal.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gamefinalresultmodal.css"
></style>
