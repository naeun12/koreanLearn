<template>
    <div>
        <navigation></navigation>

        <div class="container-fluid mt-4 px-4">
            <div class="row mb-4">
                <aside class="col-lg-3 col-xl-2 mb-4">
                    <div
                        class="modern-sidebar shadow-sm border p-3 bg-white rounded-4"
                    >
                        <div
                            class="sidebar-brand d-flex align-items-center mb-4"
                        >
                            <a class="navbar-brand mx-lg-auto" href="#">
                                <img
                                    src="../../../../../../public/logo/logowithtext.jpg"
                                    alt="Logo"
                                    width="120"
                                    height="30"
                                    class=""
                                />
                            </a>
                        </div>

                        <p
                            class="text-uppercase text-muted smaller-text fw-bold mb-3"
                        >
                            Learn
                        </p>
                        <nav class="nav-links d-flex flex-column gap-2">
                            <a href="#" class="nav-item active">
                                <i
                                    class="bi bi-star-fill me-2 text-warning"
                                ></i>
                                LESSON 1
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-unlock me-2 text-muted"></i>
                                LESSON 2
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LESSON 3
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LESSON 4
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LESSON 5
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LESSON 6
                            </a>
                        </nav>
                    </div>
                </aside>

                <main class="col-lg-9 col-xl-10 m">
                    <div
                        class="p-4 p-md-5 bg-white shadow-sm rounded-4 border min-vh-50 mb-4"
                    >
                        <div class="row align-items-center mb-4">
                            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                                <h1
                                    class="display-5 fw-bold text-dark tracking-tight"
                                >
                                    Hello, K-Learner! 👋
                                </h1>
                                <p class="lead text-muted mb-0">
                                    Ready to master the Korean language? Let’s
                                    start with the basics.
                                </p>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div
                                    class="k-nav-container p-2 rounded-4 border bg-light"
                                >
                                    <div
                                        class="nav d-flex flex-row align-items-center justify-content-between gap-2"
                                    >
                                        <div class="dropdown flex-fill">
                                            <a
                                                href="#"
                                                class="k-nav-item dropdown-toggle w-100 d-flex align-items-center justify-content-center"
                                                :class="{
                                                    active:
                                                        activeMainSection ===
                                                            'Hangul' ||
                                                        activeMainSection ===
                                                            'sentence_structure'
                                                            ? 'active'
                                                            : '',
                                                }"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Reading & Writing
                                            </a>

                                            <ul
                                                class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2"
                                            >
                                                <li>
                                                    <h6
                                                        class="dropdown-header small text-uppercase fw-bold opacity-50"
                                                    >
                                                        Basics
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'Hangul',
                                                            )
                                                        "
                                                        >Hangul Alphabet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'batchim',
                                                            )
                                                        "
                                                        >Hangul Structure
                                                        (Syllable Blocks)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="dropdown flex-fill">
                                            <a
                                                href="#"
                                                class="k-nav-item dropdown-toggle w-100 d-flex align-items-center justify-content-center"
                                                :class="{
                                                    active:
                                                        activeMainSection ===
                                                            'pronunciation' ||
                                                        activeMainSection ===
                                                            'batchim'
                                                            ? 'active'
                                                            : '',
                                                }"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <!-- Main Label -->
                                                PRONUNCIATION
                                            </a>

                                            <ul
                                                class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2"
                                            >
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'pronunciation',
                                                            )
                                                        "
                                                    >
                                                        Basic Vowel and
                                                        Consonant Sounds
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'pronunciation',
                                                            )
                                                        "
                                                    >
                                                        Pronouncation Rules
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'batchim',
                                                            )
                                                        "
                                                    >
                                                        Batchim (Final
                                                        Consonants)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'sound_changes',
                                                            )
                                                        "
                                                    >
                                                        Basic Sound Changes
                                                        (Intro)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a
                                            href="#"
                                            @click.prevent="
                                                changeSection('greetings')
                                            "
                                            class="k-nav-item flex-fill text-center"
                                            :class="{
                                                active:
                                                    activeMainSection ===
                                                    'greetings',
                                            }"
                                        >
                                            GREETINGS
                                        </a>

                                        <div class="dropdown flex-fill">
                                            <a
                                                href="#"
                                                class="k-nav-item dropdown-toggle w-100 d-flex align-items-center justify-content-center"
                                                :class="{
                                                    active:
                                                        activeMainSection ===
                                                            'to_be' ||
                                                        activeMainSection ===
                                                            'particles_all' ||
                                                        activeMainSection ===
                                                            'verb_conjugation' ||
                                                        activeMainSection ===
                                                            'tenses' ||
                                                        activeMainSection ===
                                                            'negation' ||
                                                        activeMainSection ===
                                                            'honorifics' ||
                                                        activeMainSection ===
                                                            'complex_structures' ||
                                                        activeMainSection ===
                                                            'pronunciation_changes'
                                                            ? 'active'
                                                            : '',
                                                }"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Grammar
                                            </a>

                                            <ul
                                                class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2"
                                            >
                                                <li>
                                                    <h6
                                                        class="dropdown-header small text-uppercase fw-bold opacity-50"
                                                    >
                                                        Basics
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'hangul_structure',
                                                            )
                                                        "
                                                        >Hangul Structure</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'batchim',
                                                            )
                                                        "
                                                        >Batchim (Final
                                                        Consonants)</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'numbers_counters',
                                                            )
                                                        "
                                                        >Numbers & Counters</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'to_be',
                                                            )
                                                        "
                                                        >To Be (Identification &
                                                        Existence)</a
                                                    >
                                                </li>

                                                <li>
                                                    <hr
                                                        class="dropdown-divider"
                                                    />
                                                </li>

                                                <li>
                                                    <h6
                                                        class="dropdown-header small text-uppercase fw-bold opacity-50"
                                                    >
                                                        Particles
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'particles_all',
                                                            )
                                                        "
                                                    >
                                                        Korean Particles (은/는,
                                                        이/가, 을/를, 에/에서)
                                                    </a>
                                                </li>

                                                <li>
                                                    <hr
                                                        class="dropdown-divider"
                                                    />
                                                </li>

                                                <li>
                                                    <h6
                                                        class="dropdown-header small text-uppercase fw-bold opacity-50"
                                                    >
                                                        Verbs & Sentences
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'sentence_structure',
                                                            )
                                                        "
                                                        >SOV Structure &
                                                        Conjugation</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'tenses',
                                                            )
                                                        "
                                                        >Past, Present, & Future
                                                        Tenses</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'negation',
                                                            )
                                                        "
                                                        >Negation (안, 못, ~지
                                                        않다)</a
                                                    >
                                                </li>

                                                <li>
                                                    <hr
                                                        class="dropdown-divider"
                                                    />
                                                </li>

                                                <li>
                                                    <h6
                                                        class="dropdown-header small text-uppercase fw-bold opacity-50"
                                                    >
                                                        Social & Complex
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'honorifics',
                                                            )
                                                        "
                                                        >Levels of Politeness
                                                        (Speech Levels)</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'complex_structures',
                                                            )
                                                        "
                                                        >Connectors, Modifiers &
                                                        Questions</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            changeSection(
                                                                'pronunciation_changes',
                                                            )
                                                        "
                                                        >Sound Changes</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>

                                        <a
                                            href="#"
                                            @click.prevent="
                                                changeSection('verbs')
                                            "
                                            class="k-nav-item flex-fill text-center"
                                            :class="{
                                                active:
                                                    activeMainSection ===
                                                    'verbs',
                                            }"
                                        >
                                            Verbs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-9 col-xl-12">
                            <transition-group
                                v-if="activeMainSection === 'Hangul'"
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                            >
                                <koreanBasics></koreanBasics>
                            </transition-group>
                            <transition-group
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                                v-if="
                                    activeMainSection === 'pronunciation' ||
                                    activeMainSection === 'batchim'
                                "
                            >
                                <pronouncationIndex></pronouncationIndex>
                            </transition-group>
                            <transition-group
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                                v-if="activeMainSection === 'greetings'"
                            >
                                <greetingAssets></greetingAssets>
                            </transition-group>

                            <transition-group
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                                v-if="
                                    activeMainSection ===
                                        'sentence_structure' ||
                                    activeMainSection === 'tenses' ||
                                    activeMainSection === 'negation'
                                "
                            >
                                <verbAndSentenceIndex></verbAndSentenceIndex>
                            </transition-group>

                            <transition-group
                                v-if="activeMainSection === 'particles_all'"
                            >
                                <particleAssets></particleAssets>
                            </transition-group>
                            <transition-group
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                                v-if="activeMainSection === 'verb'"
                            >
                                verb
                            </transition-group>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div
            class="scroll-buttons d-flex flex-row gap-3 position-fixed shadow-lg p-2 rounded-pill"
            style="
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1050;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(15px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            "
        >
            <button
                class="scroll-btn top btn-glass shadow-sm"
                @click="scrollToTop"
                title="Scroll to Top"
            >
                <i class="bi bi-chevron-up fw-bold"></i>
            </button>

            <div class="vr opacity-25 my-1"></div>

            <button
                class="scroll-btn bottom btn-glass shadow-sm"
                @click="scrollToBottom"
                title="Scroll to Bottom"
            >
                <i class="bi bi-chevron-down fw-bold"></i>
            </button>
        </div>
    </div>
</template>

<script>
import navigation from "../../partials/navigation.vue";
import koreanBasics from "../lesson1/koreanBasic/basicIndex.vue";
import pronouncationIndex from "../lesson1/pronounce/pronounceIndex.vue";
import greetingAssets from "../lesson1/greetings/lessonGreetings.vue";
import koreanalphabet from "./data/koreanalphabet.js";
import particleAssets from "../lesson1/particle/particle.vue";
import verbAndSentenceIndex from "../lesson1/verbandsentence/verbAndSentenceIndex.vue";

export default {
    components: {
        navigation,
        koreanBasics,
        pronouncationIndex,
        greetingAssets,
        particleAssets,
        verbAndSentenceIndex,
    },
    data() {
        return {
            // currentSection: 'consonants',
            activeMainSection: "Hangul",
        };
    },
    methods: {
        changeSection(sectionName) {
            // Update the active section when clicked
            this.activeMainSection = sectionName;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        scrollToBottom() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        },
    },

    mounted() {
        document.title = "Korean Learning Platform - Lesson 1";
    },
    computed: {},
};
</script>
<!-- <style src="../../../css/users/lesson.css"></style> -->
<style
    scoped
    src="../../../../../css/users/assets/lessons/lessonMain.css"
></style>
<style src="../../../../../css/trytospeekbutton.css"></style>
<style scoped src="../../../../../css/buttonscrolldownandscrollup.css"></style>
<style>
body {
    width: 100%;
    overflow-x: hidden;
}
</style>
