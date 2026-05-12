<template>
    <div class="k-card">
        <h1
            class="fw-black mb-3 text-accent-primary-color"
            style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
        >
            Batchim (Final Consonants)
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
            <strong>Batchim (받침)</strong> is the final consonant placed at the
            bottom of a Hangul syllable block. It is an important part of Korean
            pronunciation because it changes how words sound and how syllables
            connect when speaking. Not every syllable has Batchim, but many
            Korean words use it. A basic Hangul syllable follows the pattern
            <strong>consonant + vowel</strong>, such as “가 (ga)” or “나 (na)”.
            When a final consonant is added, it becomes
            <strong>consonant + vowel + final consonant</strong>, such as “각
            (gak)”, “한 (han)”, and “집 (jip)”. Batchim helps complete the
            syllable and often affects grammar rules, particles, and natural
            pronunciation. Some final consonants may sound different from their
            original consonant sound, so learning Batchim is essential for
            reading and speaking Korean correctly. Understanding Batchim will
            make it easier to pronounce words clearly, read Hangul faster, and
            sound more natural in Korean conversations.
        </p>
        <div class="row g-4">
            <CorePrinciplesAssets
                :CorePrincipleData="CorePrincipleData"
                :isBatchimExample="isBatchimExample"
                :ExampleTitle="ExampleTitle"
                :btnBatchimExample="btnBatchimExample"
                :proTipTitle="proTipTitle"
                :proTipDescription="proTipDescription"
                @open-example="btnBatchimExample"
            />
        </div>
    </div>

    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isBatchimExample"
        ref="BatchimExample"
    >
        <div class="p-4 border-bottom border-light">
            <div class="d-flex align-items-center">
                <div class="p-2 rounded-3 me-3 text-header-color">
                    <i class="bi bi-arrow-repeat fs-4"></i>
                </div>
                <div>
                    <h3
                        class="text-title-color mb-0"
                        style="letter-spacing: -0.5px"
                    >
                        Batchim (Final Consonants)
                    </h3>
                    <p class="text-description-color small mb-0">
                        Learn how final consonants (받침) affect pronunciation,
                        word endings, and natural Korean reading.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="k-card shadow-lg border-0 overflow-hidden"
            style="border-radius: 30px; border-top: 6px solid #4f46e5"
        >
            <ExampleAssets :ExampleData="ExampleData" />
        </div>
        <div
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white"
        >
            <div class="mb-4 mb-md-0 text-center text-md-start">
                <h3 class="text-title-color mb-1">Master Your Batchim</h3>
                <p class="mb-0 opacity-75 text-description-color">
                    Test your knowledge of syllable formation, complex sound
                    shifts, and final consonants through our interactive mastery
                    quiz.
                </p>
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
import GameModal from "../../../../users/partials/games/gameModal.vue";
import questionData from "../data/LessonOneData/questionsData";
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
            isBatchimExample: false,
            ExampleTitle: "Core Principles of Batchim",
            proTipTitle: "Pro Tip: Batchim Shortcut",
            proTipDescription: `
                            Batchim (받침) is the final consonant placed at the bottom of a Hangul
                            syllable block. Remember this simple pattern: Consonant + Vowel = 가 (ga)
                            Consonant + Vowel + Batchim = 각 (gak) Batchim gives the syllable an ending
                            sound and is important for natural pronunciation. Once you recognize bottom
                            consonants quickly, reading Korean words becomes much easier.
                            `,
            CorePrincipleData: CorePrincipleData.BatchimData,
            ExampleData: ExampleData.BatchimExamples,
            openQuiz: false,
            questions: questionData.questionsBatchim,
            gameTitle: "Batchim (Final Consonants) Practice Quiz",
            gameDescription:
                "Test your understanding of 받침 (final consonants) in Korean syllables. Learn how Batchim affects pronunciation, reading, and natural Korean speech through interactive questions.",
        };
    },
    methods: {
        btnBatchimExample() {
            this.isBatchimExample = !this.isBatchimExample;
            if (this.isBatchimExample) {
                this.$nextTick(() => {
                    this.$refs.BatchimExample.scrollIntoView({
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
