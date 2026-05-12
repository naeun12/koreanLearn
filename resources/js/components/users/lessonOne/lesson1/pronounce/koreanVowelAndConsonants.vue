<template>
    <div class="k-card">
        <h1
            class="fw-black mb-3 text-accent-primary-color"
            style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
        >
            Basic Vowel and Consonant Sounds (Korean)
            <span
                class="text-secondary-color"
                style="letter-spacing: -2.5px; font-size: 2rem; line-height: 1"
                >(Core Rule)</span
            >
        </h1>
        <p
            class="lead text-secondary-color text-justify"
            style="max-width: 2000px"
        >
            <strong>Basic Vowel and Consonant Sounds</strong> are the foundation
            of reading and pronouncing Hangul correctly. Korean words are formed
            by combining consonants and vowels into syllable blocks, so
            understanding their sounds is essential for beginners. Korean vowels
            include simple sounds such as “ㅏ (a)”, “ㅓ (eo)”, “ㅗ (o)”, and “ㅜ
            (u)”, while consonants include sounds like “ㄱ (g/k)”, “ㄴ (n)”, “ㅁ
            (m)”, and “ㅅ (s)”. Some letters may sound slightly different
            depending on their position in a word or when combined with other
            letters. By mastering these core sounds, learners can read Korean
            words accurately, improve pronunciation, and develop stronger
            listening skills. Learning vowel and consonant sounds also builds
            confidence in speaking, spelling, and understanding how Korean
            syllables are naturally formed in everyday language.
        </p>
        <div class="row g-4">
            <CorePrinciplesAssets
                :CorePrincipleData="CorePrincipleData"
                :btnVowelConsonantExample="btnVowelConsonantExample"
                :ExampleTitle="ExampleTitle"
                :proTipTitle="proTipTitle"
                :proTipDescription="proTipDescription"
                @open-example="btnVowelConsonantExample"
            />
        </div>
    </div>
    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isExampleModal"
        ref="VowelConsonantExample"
    >
        <div class="p-4">
            <div class="d-flex align-items-center">
                <div class="p-2 rounded-3 me-3 text-accent-primary-color">
                    <i class="bi bi-arrow-repeat fs-4"></i>
                </div>
                <div>
                    <h3
                        class="text-title-color mb-0"
                        style="letter-spacing: -0.5px"
                    >
                        Examples of Basic Vowel & Consonant Sounds
                    </h3>
                    <p class="text-secondary-color small mb-0">
                        Each Korean syllable block is made by combining one
                        consonant and one vowel. The consonant gives the
                        starting sound, while the vowel creates the main voice
                        sound. Below are common beginner examples with clear
                        explanations.
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
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
        >
            <div class="mb-4 mb-md-0 text-center text-md-start">
                <h3 class="text-title-color mb-1">
                    Master Korean Vowel & Consonant Sounds
                </h3>
                <p class="mb-0 opacity-75 text-secondary-color">
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
        :gamesecondary="gamesecondary"
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
            ExampleTitle: "Core Principles of Korean Vowel and Consonants",
            proTipTitle: "Pro Tip: Vowel & Consonant Shortcut",
            proTipDescription: `
                            Korean syllables are made by combining a 
                            <strong>consonant + vowel</strong>. Remember 
                            this easy pattern: <strong>ㄱ + ㅏ</strong> = 가 (ga), 
                            <strong>ㄴ + ㅏ</strong> = 나 (na), 
                            <strong>ㅁ + ㅜ</strong> = 무 (mu). 

                            Consonants give the starting sound, while vowels give the 
                            main voice sound. Once you recognize these combinations 
                            quickly, reading Hangul becomes much easier.
                            `,
            CorePrincipleData: CorePrincipleData.BasicVowelConsonantsData,
            ExampleData: ExampleData.KoreanVowelAndConsonantsExamples,
            isExampleModal: false,
            questions: questionData.questionsKoreanAndConsonants,
            openQuiz: false,
            gamesecondary:
                "Practice Korean vowels and consonants with fun quiz questions!",
            gameTitle: "Quiz Vowel and Consonants",
        };
    },
    methods: {
        btnVowelConsonantExample() {
            this.isExampleModal = !this.isExampleModal;
            if (this.isExampleModal) {
                this.$nextTick(() => {
                    this.$refs.VowelConsonantExample.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        },
        listenSound(file) {
            const audio = new Audio(`/sounds/volcabulary/${file}`);
            audio.play();
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
