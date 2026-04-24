<template>
    <div>
        <navigation></navigation>

        <div class="container-fluid mt-4 px-4">
            <div class="row">
                <aside class="col-lg-3 col-xl-2 mb-4">
                    <div class="modern-sidebar shadow-sm border p-3 bg-white rounded-4">
                        <div class="sidebar-brand d-flex align-items-center mb-4">
                            <span class="logo-box fs-3 me-2">🇰🇷</span>
                            <span class="brand-text fw-bold fs-5 tracking-tight">K-LEARN</span>
                        </div>

                        <p class="text-uppercase text-muted smaller-text fw-bold mb-3">Learn</p>
                        <nav class="nav-links d-flex flex-column gap-2">
                            <a href="#" class="nav-item active">
                                <i class="bi bi-star-fill me-2 text-warning"></i>
                                LEVEL 1
                                <span class="badge rounded-pill bg-white text-primary ms-auto border">Beginner</span>
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-unlock me-2 text-muted"></i>
                                LEVEL 2
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 3
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 4
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 5
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 6
                            </a>
                        </nav>


                    </div>
                </aside>

                <main class="col-lg-9 col-xl-10">
                    <div class="p-4 p-md-5 bg-white shadow-sm rounded-4 border min-vh-50">
                        <div class="row align-items-center mb-4">
                            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                                <h1 class="display-5 fw-bold text-dark tracking-tight">Hello, K-Learner! 👋</h1>
                                <p class="lead text-muted mb-0">Ready to master the Korean language? Let’s start with
                                    the basics.</p>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="k-nav-container p-2 rounded-4 border bg-light">
                                    <div class="nav flex-row justify-content-around gap-2">
                                        <a href="#" @click.prevent="changeSection('Hangul')"
                                            class="k-nav-item flex-fill text-center"
                                            :class="{ 'active': activeMainSection === 'Hangul' }">
                                            <span class="k-icon">🇰🇷</span> Hangul
                                        </a>

                                        <a href="#" @click.prevent="changeSection('pronunciation')"
                                            class="k-nav-item flex-fill text-center"
                                            :class="{ 'active': activeMainSection === 'pronunciation' }">
                                            Pronunciation
                                        </a>

                                        <a href="#" @click.prevent="changeSection('greetings')"
                                            class="k-nav-item flex-fill text-center"
                                            :class="{ 'active': activeMainSection === 'greetings' }">
                                            Greetings
                                        </a>

                                        <a href="#" @click.prevent="changeSection('grammar')"
                                            class="k-nav-item flex-fill text-center"
                                            :class="{ 'active': activeMainSection === 'grammar' }">
                                            Grammar
                                        </a>

                                        <a href="#" @click.prevent="changeSection('verbs')"
                                            class="k-nav-item flex-fill text-center"
                                            :class="{ 'active': activeMainSection === 'verbs' }">
                                            Verbs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row g-4">


                            <div class="col-md-9 col-xl-12">
                                <transition-group v-if="activeMainSection === 'Hangul'" name="fade-slide" tag="div"
                                    class="row g-3">
                                    <alphabetAssets></alphabetAssets>
                                    </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'pronunciation'">
                                    <pronouncationAssets></pronouncationAssets>
                                </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'greetings'">
                                    <greetingAssets></greetingAssets>
                                </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'grammar'">
                                    grammar
                                </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'verb'">
                                    verb
                                </transition-group>               
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from '../partials/navigation.vue';
import alphabetAssets from '../lessons/lessonalphabet.vue'
import pronouncationAssets from '../lessons/lessonpronounce.vue'
import greetingAssets from '../lessons/lessongreetings.vue'
import koreanalphabet from '../data/koreanalphabet.js';

export default {
    components: {
        navigation,
        alphabetAssets,
        pronouncationAssets,
        greetingAssets
    },
    data() {
        return {
            // currentSection: 'consonants',
            activeMainSection: 'Hangul',
        }
    },
    methods: {
        changeSection(sectionName) {
            // Update the active section when clicked
            this.activeMainSection = sectionName;

            // Add any additional logic here (like switching views)
            console.log("Switched to:", sectionName);
        },
    },

    mounted() {
        document.title = "Korean Learning Platform - Lesson 1";
    },
    computed: {
    
    },
}
</script>
<!-- <style src="../../../css/users/lesson.css"></style> -->
 <style scoped src="../../../css/users/assets/lessons/lessonMain.css"></style>
<style src="../../../css/trytospeekbutton.css"></style>
