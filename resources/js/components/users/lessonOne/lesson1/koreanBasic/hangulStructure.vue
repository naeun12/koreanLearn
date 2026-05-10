<template>
    <div class="k-card">
        <h1
            class="text-header-color mb-3"
            style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1"
        >
            Hangul Structure
            <span class="text-description-color">(Core Rule)</span>
        </h1>

        <p
            class="lead text-description-color text-justify"
            style="max-width: 2000px"
        >
            Hangul, the Korean writing system, is built in a very logical and
            structured way that makes it easy to learn. It is made up of three
            main components that work together to form complete syllables. The
            first component is the <strong>consonants (자음)</strong>, which
            represent sounds such as b, k, m, and s. These consonants are used
            to start or end a syllable. The second component is the
            <strong>vowels (모음)</strong>, which represent vowel sounds like a,
            e, i, o, and u. These vowels are essential because they give shape
            and sound to each syllable. The third component is the
            <strong>syllable blocks</strong>, which are formed by combining
            consonants and vowels into a single square-shaped unit. Unlike
            English, where letters are written in a straight line, Hangul
            organizes letters into blocks. Each block represents one complete
            sound or syllable. A basic syllable is formed using a structure like
            <strong>consonant + vowel</strong>, while more complex syllables can
            include an optional final consonant, forming patterns like
            <strong>consonant + vowel + consonant</strong>. For example, simple
            syllables like “가 (ga)” and “나 (na)” follow the basic pattern,
            while words like “한국 (han-guk)” use multiple syllable blocks
            combined together. This structure makes Hangul very efficient and
            easy to read because each syllable is visually grouped and
            pronounced as one unit, helping learners quickly understand how
            Korean words are formed.
        </p>
        <div class="row g-4">
            <CorePrinciplesAssets
                :CorePrincipleData="CorePrincipleData"
                :isHangulStructureExampleModal="isHangulStructureExampleModal"
                @open-example="btnHangulStructure"
                :ExampleTitle="ExampleTitle"
                :proTipTitle="proTipTitle"
                :proTipDescription="proTipDescription"
            />
        </div>
    </div>
    <div
        class="mt-4 p-4 overflow-hidden mb-3 k-card"
        v-if="isHangulStructureExampleModal"
        ref="hangulStructureExample"
    >
        <div class="d-flex align-items-center m-2">
            <div class="p-4 card-parent-title">
                <div class="d-flex align-items-center">
                    <div class="p-2 icon-color-badge rounded-3 me-3 icon-color">
                        <i class="bi bi-arrow-repeat fs-4"></i>
                    </div>
                    <div>
                        <h3
                            class="h5 fw-black text-title-color mb-0"
                            style="letter-spacing: -0.5px"
                        >
                            Hangul Consonants & Structure Overview
                        </h3>
                        <p class="text-description-color small mb-0">
                            Learn basic, aspirated, and double consonants with
                            vowel combinations
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="m-2">
            <div class="table-responsive">
                <table
                    class="table table-borderless table-design mb-0"
                    v-if="changeCombination === 'vowelsAndConsonants'"
                >
                    <thead>
                        <tr>
                            <th class="">
                                <div
                                    class="d-flex flex-column"
                                    style="line-height: 1.2"
                                >
                                    <span class="d-flex align-items-center">
                                        Vowels
                                        <i
                                            class="bi bi-arrow-right-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                    <span
                                        class="d-flex align-items-center mt-1"
                                    >
                                        Consonants
                                        <i
                                            class="bi bi-arrow-down-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-secondary"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅏ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        a
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅑ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        ya
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-info"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅓ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        eo
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-info"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅕ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        yeo
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅗ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        o
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅛ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        yo
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅜ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        u
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅠ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        yu
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅣ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        i
                                    </div>
                                </div>
                            </th>

                            <th
                                class="py-3 small fw-800 text-header-color"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 text-header-color fw-bold">
                                        ㅡ
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        eu
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr
                            class="border-bottom border-light transition-all hover-light"
                            v-for="(
                                row, index
                            ) in hangulStructureData.consonantsVowels"
                            :key="index"
                        >
                            <!-- CONSONANT -->
                            <td class="px-2 py-3 border-end">
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                    :class="{
                                        'text-title-color':
                                            row.type === 'aspirated',
                                    }"
                                >
                                    <div class="text-description-color">
                                        {{ row.consonant }}
                                    </div>

                                    <div class="text-example-color">
                                        {{ row.roman }}
                                    </div>
                                    <div
                                        v-if="row.type === 'aspirated'"
                                        class="mt-1"
                                    >
                                        <span
                                            class="text-header-color"
                                            style="font-size: 0.6rem"
                                        >
                                            aspirated
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <!-- COMBINATIONS -->
                            <td
                                class="px-2 py-3"
                                v-for="(item, i) in row.combinations"
                                :key="i"
                            >
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                >
                                    <div
                                        class="fs-5 fw-bold"
                                        :class="{
                                            'text-header-color':
                                                row.type === 'aspirated',
                                        }"
                                    >
                                        {{ item.char }}
                                    </div>
                                    <div
                                        class="text-secondary-title"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ item.roman }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    class="table table-borderless table-design mb-0"
                    v-if="changeCombination === 'vowelsAndDipthongs'"
                >
                    <thead>
                        <tr>
                            <th>
                                <div
                                    class="d-flex flex-column"
                                    style="line-height: 1.2"
                                >
                                    <span class="d-flex align-items-center">
                                        Diphthongs
                                        <i
                                            class="bi bi-arrow-right-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                    <span
                                        class="d-flex align-items-center mt-1"
                                    >
                                        Consonants
                                        <i
                                            class="bi bi-arrow-down-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                </div>
                            </th>

                            <!-- VOWEL HEADERS -->
                            <th
                                v-for="(vowel, i) in hangulData.otherConsonants"
                                :key="'vowel-' + i"
                            >
                                <div class="text-center">
                                    <div class="fs-5 fw-bold text-header-color">
                                        {{ vowel.char }}
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ vowel.sound }}
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            class="border-bottom border-light transition-all hover-light"
                            v-for="(
                                row, index
                            ) in hangulStructureData.consonantsDiphthongs"
                            :key="index"
                        >
                            <!-- CONSONANT -->
                            <td class="px-2 py-3 border-end">
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                    :class="{
                                        'text-title-color':
                                            row.type === 'aspirated',
                                    }"
                                >
                                    <div class="text-description-color">
                                        {{ row.consonant }}
                                    </div>

                                    <div class="text-example-color">
                                        {{ row.roman }}
                                    </div>
                                    <div
                                        v-if="row.type === 'aspirated'"
                                        class="mt-1"
                                    >
                                        <span
                                            class="text-header-color"
                                            style="font-size: 0.6rem"
                                        >
                                            aspirated
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <!-- COMBINATIONS -->
                            <td
                                class="px-2 py-3"
                                v-for="(item, i) in row.combinations"
                                :key="i"
                            >
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                >
                                    <div
                                        class="fs-5 fw-bold"
                                        :class="{
                                            'text-header-color':
                                                row.type === 'aspirated',
                                        }"
                                    >
                                        {{ item.char }}
                                    </div>
                                    <div
                                        class="text-secondary-title"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ item.roman }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    class="table table-borderless table-design mb-0"
                    v-if="changeCombination === 'tenseAndBasicVowels'"
                >
                    <thead>
                        <tr>
                            <th
                                class="py-4 border-end text-uppercase small fw-800 text-secondary"
                                style="letter-spacing: 1px"
                            >
                                <div
                                    class="d-flex flex-column"
                                    style="line-height: 1.2"
                                >
                                    <span class="d-flex align-items-center">
                                        Vowels
                                        <i
                                            class="bi bi-arrow-right-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                    <span
                                        class="d-flex align-items-center mt-1"
                                    >
                                        Tense Consonants
                                        <i
                                            class="bi bi-arrow-down-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                </div>
                            </th>

                            <!-- VOWEL HEADERS -->
                            <th
                                v-for="(vowel, i) in hangulData.vowels"
                                :key="'vowel-' + i"
                                class="py-3 small fw-800 text-secondary"
                                style="letter-spacing: 1px"
                            >
                                <div class="text-center">
                                    <div class="fs-5 fw-bold text-header-color">
                                        {{ vowel.char }}
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ vowel.sound }}
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            class="border-bottom border-light transition-all hover-light"
                            v-for="(
                                row, index
                            ) in hangulStructureData.TenseSoundsBasicVowels"
                            :key="index"
                        >
                            <!-- CONSONANT -->
                            <td class="px-2 py-3 border-end">
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                    :class="{
                                        'text-title-color':
                                            row.type === 'aspirated',
                                    }"
                                >
                                    <div class="text-description-color">
                                        {{ row.consonant }}
                                    </div>

                                    <div class="text-example-color">
                                        {{ row.roman }}
                                    </div>
                                    <div
                                        v-if="row.type === 'aspirated'"
                                        class="mt-1"
                                    >
                                        <span
                                            class="text-header-color"
                                            style="font-size: 0.6rem"
                                        >
                                            aspirated
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <!-- COMBINATIONS -->
                            <td
                                class="px-2 py-3"
                                v-for="(item, i) in row.combinations"
                                :key="i"
                            >
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                >
                                    <div
                                        class="fs-5 fw-bold"
                                        :class="{
                                            'text-header-color':
                                                row.type === 'aspirated',
                                        }"
                                    >
                                        {{ item.char }}
                                    </div>
                                    <div
                                        class="text-secondary-title"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ item.roman }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    class="table table-borderless table-design mb-0"
                    v-if="changeCombination === 'tenseAndDipthongs'"
                >
                    <thead>
                        <tr style="background: #f8fafc">
                            <th
                                class="py-4 border-end text-uppercase small fw-800 text-secondary"
                                style="letter-spacing: 1px"
                            >
                                <div
                                    class="d-flex flex-column"
                                    style="line-height: 1.2"
                                >
                                    <span class="d-flex align-items-center">
                                        Diphthongs
                                        <i
                                            class="bi bi-arrow-right-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                    <span
                                        class="d-flex align-items-center mt-1"
                                    >
                                        Tense Consonants
                                        <i
                                            class="bi bi-arrow-down-short lh-1 ms-1"
                                        ></i>
                                    </span>
                                </div>
                            </th>

                            <!-- VOWEL HEADERS -->
                            <th
                                v-for="(vowel, i) in hangulData.otherConsonants"
                                :key="'vowel-' + i"
                            >
                                <div class="text-center">
                                    <div class="fs-5 fw-bold text-header-color">
                                        {{ vowel.char }}
                                    </div>
                                    <div
                                        class="text-muted small"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ vowel.sound }}
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="bg-white">
                        <tr
                            class="border-bottom border-light transition-all hover-light"
                            v-for="(
                                row, index
                            ) in hangulStructureData.TenseSoundsDipthongs"
                            :key="index"
                        >
                            <!-- CONSONANT -->
                            <td class="px-2 py-3 border-end">
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                    :class="{
                                        'text-title-color':
                                            row.type === 'aspirated',
                                    }"
                                >
                                    <div class="text-description-color">
                                        {{ row.consonant }}
                                    </div>

                                    <div class="text-example-color">
                                        {{ row.roman }}
                                    </div>
                                    <div
                                        v-if="row.type === 'aspirated'"
                                        class="mt-1"
                                    >
                                        <span
                                            class="text-header-color"
                                            style="font-size: 0.6rem"
                                        >
                                            aspirated
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <!-- COMBINATIONS -->
                            <td
                                class="px-2 py-3"
                                v-for="(item, i) in row.combinations"
                                :key="i"
                            >
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                    style="line-height: 1"
                                >
                                    <div
                                        class="fs-5 fw-bold"
                                        :class="{
                                            'text-header-color':
                                                row.type === 'aspirated',
                                        }"
                                    >
                                        {{ item.char }}
                                    </div>
                                    <div
                                        class="text-secondary-title"
                                        style="font-size: 0.7rem"
                                    >
                                        {{ item.roman }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button
                    type="button"
                    @click="btnChangeCombinations('vowelsAndConsonants')"
                    class="dot-btn"
                    :class="{
                        active: changeCombination === 'vowelsAndConsonants',
                    }"
                ></button>
                <button
                    type="button"
                    @click="btnChangeCombinations('vowelsAndDipthongs')"
                    class="dot-btn"
                    :class="{
                        active: changeCombination === 'vowelsAndDipthongs',
                    }"
                ></button>
                <button
                    type="button"
                    @click="btnChangeCombinations('tenseAndBasicVowels')"
                    class="dot-btn"
                    :class="{
                        active: changeCombination === 'tenseAndBasicVowels',
                    }"
                ></button>
                <button
                    type="button"
                    @click="btnChangeCombinations('tenseAndDipthongs')"
                    class="dot-btn"
                    :class="{
                        active: changeCombination === 'tenseAndDipthongs',
                    }"
                ></button>
            </div>
        </div>
        <div
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white"
        >
            <div class="mb-4 mb-md-0 text-center text-md-start">
                <h3 class="fw-black mb-1">Time to Practice</h3>
                <p class="mb-0 opacity-75 fs-5">
                    Test your understanding of
                    <strong>Hangul Structure</strong>, including syllable
                    formation, consonants, vowels and final consonants.
                </p>
            </div>
            <button
                class="btn btn-quiz rounded-pill shadow-lg"
                @click="openQuiz = true"
            >
                Start Negation Mastery Quiz
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
import hangulstuctureData from "../data/hangulstuctureData.js";
import hangulData from "../data/koreanalphabet.js";
import CorePrinciplesAssets from "../CorePrinciples/CorePrincipleAssets.vue";
import CorePrincipleData from "../data/LessonOneData/CorePrinciplesData.js";
import questionData from "../data/LessonOneData/questionsData.js";
import GameModal from "../../../partials/games/gameModal.vue";

export default {
    components: {
        GameModal,
        CorePrinciplesAssets,
    },
    data() {
        return {
            isHangulStructureExampleModal: false,
            hangulStructureData: hangulstuctureData.HangulContentData,
            hangulData: hangulData,
            CorePrincipleData: CorePrincipleData.HangulStructureData,
            ExampleTitle: "Core Principles of Hangul",
            proTipTitle: "Pro Tip: Hangul Structure Shortcut",
            proTipDescription: `In Hangul, remember this simple rule: Consonants (자음)
                                provide the basic sound, Vowels (모음) complete the sound,
                                and together they form Syllable Blocks. Every Korean syllable
                                is built using this structure: Consonant + Vowel or Consonant
                                + Vowel + Consonant. Once you understand this pattern,
                                reading Korean becomes much easier because each block
                                represents one complete sound.
                            `,
            changeCombination: "vowelsAndConsonants",
            questions: questionData.questionsHangulStructure,
            openQuiz: false,
            gameDescription:
                "Practice Korean vowels and consonants with fun quiz questions!",
            gameTitle: "Quiz Vowel and Consonants",
        };
    },
    methods: {
        btnHangulStructure() {
            this.isHangulStructureExampleModal =
                !this.isHangulStructureExampleModal;

            if (this.isHangulStructureExampleModal) {
                this.$nextTick(() => {
                    this.$refs.hangulStructureExample.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        },
        btnChangeCombinations(change) {
            this.changeCombination = change;
        },
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/basic/hangulStructure.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
<style src="../../../../../../css/users/partials/textColors.css"></style>
<style src="../../../../../../css/users/partials/card/exampleCard.css"></style>
