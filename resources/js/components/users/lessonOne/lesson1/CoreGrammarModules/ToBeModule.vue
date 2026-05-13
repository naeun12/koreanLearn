<template>
    <div class="k-card">
        <h1
            class="text-accent-primary-color mb-3"
            style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
        >
            TOBE (되다/될 것이다) – Expressing Future and Becoming
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
            This lesson introduces how to express “to be” and “to become” in
            Korean using the grammar structures 이다 (ida), 되다 (doeda), and
            the future form -(으)ㄹ 것이다. Learners will understand how Koreans
            describe identity, changes in state, and future intentions. Through
            simple explanations, examples, and practical vocabulary, this module
            helps students build essential sentences for daily conversation,
            such as expressing professions, relationships, and future goals.
        </p>
        <div class="row g-4">
            <CorePrinciplesAssets
                :CorePrincipleData="CorePrincipleData"
                @open-example="btnToBe"
                :ExampleTitle="ExampleTitle"
                :proTipTitle="proTipTitle"
                :proTipDescription="proTipDescription"
            />
        </div>
    </div>
    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isToBeExample"
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
                        TOBE Examples
                    </h3>
                    <p class="text-description-color small mb-0">
                        Learn how to express identity, change of state, and
                        future intentions in Korean using “이다 (to be)”, “되다
                        (to become)”, and “-(으)ㄹ 것이다 (will be)”.
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
                <h3 class="text-primary-color mb-1">
                    Master the TOBE Expressions
                </h3>
                <p class="mb-0 opacity-75 text-secondary-color">
                    Test your understanding of “이다 (to be)”, “되다 (to
                    become)”, and “-(으)ㄹ 것이다 (will be)” through interactive
                    practice on identity, change, and future intentions.
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
        CorePrinciplesAssets,
        GameModal,
        ExampleAssets,
    },
    data() {
        return {
            isToBeExample: false,
            CorePrincipleData: CorePrincipleData.ToBeData,
            ExampleTitle: "Core Principles of TOBE",
            proTipTitle: "Pro Tip: TOBE",
            proTipDescription: `In Hangul, remember this simple rule: consonants (자음) provide the basic sound, while vowels
             (모음) complete it. Together, they form syllable blocks.Each Korean syllable is built using this structure:Consonant + Vowel
            (CV) or Consonant + Vowel + Consonant (CVC).Once you understand this pattern, reading Korean becomes much easier because each
            block represents one complete sound.`,
            ExampleData: ExampleData.ToBeExamples,
            openQuiz: false,
            questions: questionData.ToBe,
            gameTitle: "TOBE Practice Quiz",
            gameDescription:
                "Test your understanding of Korean expressions using '이다 (to be)', '되다 (to become)', and '-(으)ㄹ 것이다 (will be)'. Practice how Koreans express identity, changes in state, and future intentions through interactive questions.",
        };
    },
    methods: {
        btnToBe() {
            this.isToBeExample = !this.isToBeExample;
            if (this.isToBeExample) {
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
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
<style src="../../../../../../css/users/assets/lessons/mic.css"></style>
<style scoped src="../../../../../../css/users/partials/textColors.css"></style>
