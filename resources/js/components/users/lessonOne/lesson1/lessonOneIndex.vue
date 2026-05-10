<template>
    <div>
        <navigation></navigation>

        <div class="container-fluid mt-4 px-4">
            <div class="row mb-4">
                <aside class="col-lg-3 col-xl-2 mb-4">
                    <div class="modern-sidebar shadow-sm border p-3 rounded-4">
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
                        class="p-4 p-md-5 k-nav-container shadow-sm rounded-4 min-vh-50 mb-4"
                    >
                        <div class="row align-items-center mb-4">
                            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                                <h1 class="display-5 fw-bold tracking-tight">
                                    Hello, K-Learner! 👋
                                </h1>
                                <p class="lead mb-0">
                                    Ready to master the Korean language? Let’s
                                    start with the basics.
                                </p>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="p-2 rounded-4 nav-container">
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
                                                            'Hangul-Structure'
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
                                                            goToLesson('Hangul')
                                                        "
                                                    >
                                                        Hangul Alphabet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            goToLesson(
                                                                'Hangul-Structure',
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
                                                            'BasicVowelConsonantSounds' ||
                                                        activeMainSection ===
                                                            'pronunciationRules' ||
                                                        activeMainSection ===
                                                            'Batchim' ||
                                                        activeMainSection ===
                                                            'soundChange'
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
                                                            goToLesson(
                                                                'BasicVowelConsonantSounds',
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
                                                            goToLesson(
                                                                'pronunciationRules',
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
                                                            goToLesson(
                                                                'Batchim',
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
                                                            goToLesson(
                                                                'soundChange',
                                                            )
                                                        "
                                                    >
                                                        Basic Sound Changes
                                                        (Intro)
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
                                                            'greetings' ||
                                                        activeMainSection ===
                                                            'basicClassroomExpressions',
                                                }"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <!-- Main Label -->
                                                DAILY EXPRESSIONS
                                            </a>

                                            <ul
                                                class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2"
                                            >
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            goToLesson(
                                                                'greetings',
                                                            )
                                                        "
                                                    >
                                                        Self Introductions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            goToLesson(
                                                                'basicClassroomExpressions',
                                                            )
                                                        "
                                                    >
                                                        Basic Classroom
                                                        Expressions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                        @click.prevent="
                                                            goToLesson(
                                                                'Batchim',
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
                                                            goToLesson(
                                                                'soundChange',
                                                            )
                                                        "
                                                    >
                                                        Basic Sound Changes
                                                        (Intro)
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
                                                            goToLesson(
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
                                                            goToLesson(
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
                                                            goToLesson(
                                                                'numbersCounter',
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
                                                            goToLesson('to_be')
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
                                                            goToLesson(
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
                                                            goToLesson(
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
                                                            goToLesson('tenses')
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
                                                            goToLesson(
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
                                                            goToLesson(
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
                                                            goToLesson(
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
                                                            goToLesson(
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
                                            @click.prevent="goToLesson('verbs')"
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
                                v-if="
                                    activeMainSection === 'Hangul' ||
                                    activeMainSection === 'Hangul-Structure'
                                "
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
                                    activeMainSection ===
                                        'BasicVowelConsonantSounds' ||
                                    activeMainSection ===
                                        'pronunciationRules' ||
                                    activeMainSection === 'Batchim' ||
                                    activeMainSection === 'soundChange'
                                "
                            >
                                <pronouncationIndex></pronouncationIndex>
                            </transition-group>
                            <transition-group
                                name="fade-slide"
                                tag="div"
                                class="row g-3"
                                v-if="
                                    activeMainSection === 'greetings' ||
                                    activeMainSection ===
                                        'basicClassroomExpressions'
                                "
                            >
                                <dailyExpressionsIndex></dailyExpressionsIndex>
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
            class="scroll-buttons d-flex flex-row align-items-center gap-2 position-fixed p-2 rounded-pill shadow-lg"
            style="
                bottom: 2rem;
                left: 2rem; /* Changed from 50% to move it to the left side */
                z-index: 1050;
                background: rgba(255, 255, 255, 0.25);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                border: 1px solid rgba(255, 255, 255, 0.4);
            "
        >
            <button
                class="scroll-btn top btn-glass shadow-sm"
                @click="scrollToTop"
                title="Scroll to Top"
            >
                <i class="bi bi-chevron-up fw-bold"></i>
            </button>

            <div
                class="vr mx-1"
                style="height: 20px; color: rgba(255, 255, 255, 0.5)"
            ></div>

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
import dailyExpressionsIndex from "../lesson1/dailyExpressions/dailyExpressionsIndex.vue";
import koreanalphabet from "./data/koreanalphabet.js";
import particleAssets from "../lesson1/particle/particle.vue";
import verbAndSentenceIndex from "../lesson1/verbandsentence/verbAndSentenceIndex.vue";

export default {
    components: {
        navigation,
        koreanBasics,
        pronouncationIndex,
        dailyExpressionsIndex,
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
        goToLesson(section) {
            this.activeMainSection = section;

            this.$nextTick(() => {
                setTimeout(() => {
                    const el = document.getElementById(section);

                    if (el) {
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    } else {
                        console.warn("Section not found:", section);
                    }
                }, 50);
            });
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
<style src="../../../../../css/users/assets/lessons/lessonMain.css"></style>
<style src="../../../../../css/trytospeekbutton.css"></style>
<style scoped src="../../../../../css/buttonscrolldownandscrollup.css"></style>
