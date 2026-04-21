<template>
    <div class="app-bg">
        <navigation></navigation>

        <div class="container-fluid px-4 py-4">
            <loading v-if="isLoading" :message="loadingMessage" />
            <div class="row">
                <aside class="col-lg-3 col-xl-2 mb-4">
                    <div class="modern-sidebar shadow-sm border">
                        <div class="sidebar-brand mb-4">
                            <span class="logo-box">🇰🇷</span>
                            <span class="brand-text">K-LEARN</span>
                        </div>

                        <p class="text-uppercase text-muted small fw-bold mb-3">Categories</p>
                        <nav class="d-flex flex-column gap-2 mb-5">
                            <button v-for="cat in categories" :key="cat" @click="changeCategory(cat)"
                                :class="['nav-item-btn', { active: activeFilter === cat }]">
                                {{ cat }}
                            </button>
                        </nav>
                    </div>
                </aside>

                <main class="col-lg-9 col-xl-10">
                    <nav class="nav-container">
                        <div class="button-group">

                            <a href="/nouns" class="nav-btn">
                                <i class="ph-bold ph-cube"></i>
                                Nouns
                            </a>

                            <a href="/adjectives" class="nav-btn ">
                                <i class="ph-bold ph-palette"></i>
                                Adjectives
                            </a>

                            <a href="/pronouns" class="nav-btn active">
                                <i class="ph-bold ph-users-three"></i>
                                Pronouns
                            </a>

                            <a href="/verbs" class="nav-btn ">
                                <i class="ph-bold ph-running"></i>
                                Verbs
                            </a>
                           <a href="/adverbs" class="nav-btn ">
                                <i class="ph-bold ph-lightning"></i>
                                Adverbs
                            </a>
                            

                            <a href="/particles" class="nav-btn">
                                <i class="ph-bold ph-gear"></i>
                                Particles
                            </a>

                            <a href="/quiz" class="nav-btn">
                                <i class="ph-bold ph-quiz"></i>
                                Quiz Mode
                            </a>

                        </div>
                    </nav>
                    <transition-group name="list" tag="div" class="row g-4 vocab-grid">
                        <div class="col-12 col-md-6 col-xl-4" v-for="pronoun in filteredpronouns" :key="pronoun.id">
                            <div class="vocab-card">
                                <div class="img-container">
                                    <img :src="pronoun.image || 'https://via.placeholder.com/400x300'"
                                        :alt="pronoun.english">
                                    <span class="category-tag">{{ pronoun.category || 'Pronoun' }}</span>
                                </div>

                                <div class="card-content">
                                    <div class="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h2 class="korean-text">{{ pronoun.korean }}</h2>
                                            <p class="romanization-text">{{ pronoun.romanization }}</p>
                                        </div>
                                        <button @click="speak(pronoun.korean)" class="btn-pronounce shadow-sm">
                                            <i class="bi bi-volume-up-fill"></i>
                                        </button>
                                    </div>

                                    <p class="english-meaning">{{ pronoun.english }}</p>

                                    <div class="d-flex gap-2 mt-auto pt-3">
                                        <span v-if="pronoun.level" class="meta-badge level">{{ pronoun.level }}</span>
                                        <span v-if="pronoun.difficulty" class="meta-badge diff">{{ pronoun.difficulty
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition-group>




                    <nav v-if="lastPage > 1" class="pagination-wrapper mt-5">
                        <button class="pg-action" :disabled="currentPage === 1" @click="fetchpronouns(currentPage - 1)">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <div class="pg-info">
                            <span>{{ currentPage }}</span>
                            <span class="mx-2 opacity-50">/</span>
                            <span>{{ lastPage }}</span>
                        </div>
                        <button class="pg-action" :disabled="currentPage === lastPage"
                            @click="fetchpronouns(currentPage + 1)">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </nav>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../partials/navigation.vue';
import loading from '../loading.vue';
import axios from 'axios';
export default {
    components: {
        navigation,
        loading
    },
    data() {
        return {
            pronouns: [],
            categories: [],
            isLoading: false,
            activeFilter: 'All',
            lastPage: 1,
            currentPage: 1,
            loadingMessage: 'Loading pronouns...'


        }
    },
    mounted() {
        document.title = "Korean Learning Platform - Pronouns Vocabulary";
        this.fetchpronouns();
        this.fetchCategories();
    },
    methods: {
        async fetchpronouns(page = 1) {
            try {
                this.isLoading = true;

                const response = await axios.get('/fetch-pronouns', {
                    params: {
                        page: page
                        , category: this.activeFilter !== 'All' ? this.activeFilter : null
                    }
                });

                this.pronouns = response.data.data;
                this.currentPage = response.data.current_page ?? 1;
                this.lastPage = response.data.last_page ?? 1;
            }
            catch (error) {
                console.error('Error fetching pronouns:', error);
            }
            finally {
                this.isLoading = false;
            }
        },
        async fetchCategories() {
            try {
                const res = await fetch('/pronoun-categories');

                if (!res.ok) {
                    throw new Error('Failed to fetch categories');
                }

                const data = await res.json();

                this.categories = ['All', ...data.data ?? data];
            } catch (error) {
                console.error('Error fetching categories:', error);
                this.categories = ['All'];
            }
        },
        async changeCategory(category) {
            this.activeFilter = category;
            await this.fetchpronouns(1);
        },
        speak(text) {
            if (!window.speechSynthesis) {
                alert("Sorry, your browser does not support text to speech.");
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);

            // Set language to Korean
            utterance.lang = 'ko-KR';

            // Optional: Fine-tune the voice
            utterance.rate = 0.8; // Slightly slower for learners
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
        }
    },
    computed: {
        filteredpronouns() {
            if (!this.pronouns) return [];
            if (this.activeFilter === 'All') return this.pronouns;
            return this.pronouns.filter(item => item.category === this.activeFilter);
        }
    },
}
</script>
<style scoped src="../../../css/users/partofspeech/noun.css"></style>
