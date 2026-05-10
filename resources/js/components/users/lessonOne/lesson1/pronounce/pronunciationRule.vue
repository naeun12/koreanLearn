<template>
    <div class="k-card">
        <h1
            class="fw-black mb-3 text-header-color"
            style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
        >
            Pronunciation Rules
            <span
                class="text-description-color"
                style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
                >(Phonetic Mastery)</span
            >
        </h1>
        <p
            class="lead text-description-color text-justify"
            style="max-width: 2000px"
        >
            <strong>Advanced Phonetic Transitions</strong> govern how Korean
            syllables flow naturally in spoken conversation. While basic vowels
            and consonants form the foundation, the true essence of Korean
            pronunciation lies in mastering the
            <strong>16 essential rules</strong> including Nasalization,
            Palatalization, and Liquidization. These rules dictate how sounds
            shift and blend when specific letters meet, such as the ㅂ sound
            changing to an ㅁ in "감사합니다." By internalizing these phonetic
            shifts, you will move beyond literal reading to achieve a more
            rhythmic, native-like fluency, ensuring your speaking and listening
            skills are both accurate and natural.
        </p>
        <CorePrinciplesAssets
            :CorePrincipleData="CorePrincipleData"
            :btnPronunciationRuleExample="btnPronunciationRuleExample"
            :ExampleTitle="ExampleTitle"
            :proTipTitle="proTipTitle"
            :proTipDescription="proTipDescription"
            @open-example="btnPronunciationRuleExample"
        />
    </div>
    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isPronunciationRuleExample"
        ref="PronunciationRule"
    >
        <div class="p-4">
            <div class="d-flex align-items-center">
                <div class="p-2 rounded-3 me-3 text-header-color">
                    <i class="bi bi-arrow-repeat fs-4"></i>
                </div>
                <div>
                    <h3
                        class="text-title-color mb-0"
                        style="letter-spacing: -0.5px"
                    >
                        Pronunciation Rules
                    </h3>
                    <p class="text-description-color small mb-0">
                        Korean pronunciation changes depending on how sounds
                        connect between syllables. Final consonants (batchim),
                        nasalization, linking, and other phonetic rules
                        transform how words are actually spoken in natural
                        conversation. Below are beginner-friendly examples of
                        these sound changes.
                    </p>
                </div>
            </div>
        </div>
        <div class="k-card shadow-lg border-0 overflow-hidden">
            <ExampleAssets :ExampleData="ExampleData" />
        </div>
        <div
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white"
        >
            <div class="mb-4 mb-md-0 text-center text-md-start">
                <h3 class="fw-black mb-1">
                    Master Korean Vowel & Consonant Sounds
                </h3>
                <p class="mb-0 opacity-75 fs-5">
                    Strengthen your foundation in Hangul by practicing how
                    vowels and consonants combine to form syllables. Learn how
                    each letter contributes<br />
                    to pronunciation, improve your reading accuracy, and build
                    confidence in recognizing Korean sound patterns through
                    interactive exercises and quizzes.
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
import CorePrinciplesAssets from "../CorePrinciples/CorePrincipleAssets.vue";
import CorePrincipleData from "../data/LessonOneData/CorePrinciplesData.js";
import ExampleAssets from "../../../partials/ExampleAssets/ExampleAssets.vue";
import ExampleData from "../data/LessonOneData/ExampleData.js";
import GameModal from "../../../../users/partials/games/gameModal.vue";
import questionData from "../data/LessonOneData/questionsData";

export default {
    components: {
        GameModal,
        CorePrinciplesAssets,
        ExampleAssets,
    },
    data() {
        return {
            CorePrincipleData: CorePrincipleData.PronunciationRulesData,
            ExampleData: ExampleData.PronunciationRuleExamples,
            proTipTitle: "Pro Tip: Think “Connection First, Spelling Second",
            proTipDescription: `
                           In Korean pronunciation rules, the biggest mistake learners make is reading
                           syllables one by one. Native pronunciation is not about blocks it’s
                           about sound connection across words.
                            `,
            isPronunciationRuleExample: false,
            openQuiz: false,
            questions: questionData.questionsPronunciationRules,

            gameTitle: "Pronunciation Rules Quiz",
            gameDescription:
                "Improve your pronunciation through guided practice exercises",
        };
    },
    methods: {
        btnPronunciationRuleExample() {
            this.isPronunciationRuleExample = !this.isPronunciationRuleExample;
            if (this.isPronunciationRuleExample) {
                this.$nextTick(() => {
                    this.$refs.PronunciationRule.scrollIntoView({
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
