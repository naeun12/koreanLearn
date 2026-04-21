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
                            <button type="button" class="nav-btn active">
                                <i class="ph-bold ph-cube"></i>
                                Nouns
                            </button>

                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-palette"></i>
                                Adjectives
                            </button>

                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-users-three"></i>
                                Pronouns
                            </button>

                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-running"></i>
                                Verbs
                            </button>

                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-lightning"></i>
                                Adverbs
                            </button>
                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-gear"></i>
                                Particles
                            </button>
                            <button type="button" class="nav-btn">
                                <i class="ph-bold ph-quiz"></i>
                                Quiz Mode
                            </button>
                        </div>
                </nav>
                   <transition-group name="list" tag="div" class="row g-4 vocab-grid">
                        <div class="col-12 col-md-6 col-xl-4" v-for="noun in filteredNouns" :key="noun.id">
                            <div class="vocab-card">
                                <div class="img-container">
                                    <img :src="noun.image || 'https://via.placeholder.com/400x300'" :alt="noun.english">
                                    <span class="category-tag">{{ noun.category || 'Noun' }}</span>
                                </div>

                                <div class="card-content">
                                    <div class="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h2 class="korean-text">{{ noun.korean }}</h2>
                                            <p class="romanization-text">{{ noun.romanization }}</p>
                                        </div>
                                        <button @click="speak(noun.korean)" class="btn-pronounce shadow-sm">
                                            <i class="bi bi-volume-up-fill"></i>
                                        </button>
                                    </div>

                                    <p class="english-meaning">{{ noun.english }}</p>

                                    <div class="d-flex gap-2 mt-auto pt-3">
                                        <span v-if="noun.level" class="meta-badge level">{{ noun.level }}</span>
                                        <span v-if="noun.difficulty" class="meta-badge diff">{{ noun.difficulty
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition-group>




                    <nav v-if="lastPage > 1" class="pagination-wrapper mt-5">
                        <button class="pg-action" :disabled="currentPage === 1" @click="fetchNouns(currentPage - 1)">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <div class="pg-info">
                            <span>{{ currentPage }}</span>
                            <span class="mx-2 opacity-50">/</span>
                            <span>{{ lastPage }}</span>
                        </div>
                        <button class="pg-action" :disabled="currentPage === lastPage"
                            @click="fetchNouns(currentPage + 1)">
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
            nouns: [],
            categories: [],
            isLoading: false,
            activeFilter: 'All',
            lastPage: 1,
            currentPage: 1,
            loadingMessage: 'Loading nouns...'
            

        }
    },
    mounted() {
        document.title = "Korean Learning Platform - Noun Vocabulary";
        this.fetchNouns();
        this.fetchCategories();
    },
    methods: {
        async fetchNouns(page = 1) {
            try {
                this.isLoading = true;

                const response = await axios.get('/fetch-nouns', {
                    params: {
                        page: page
                        ,category: this.activeFilter !== 'All' ? this.activeFilter : null
                     }
                });

                this.nouns = response.data.data;
                this.currentPage = response.data.current_page ?? 1;
                this.lastPage = response.data.last_page ?? 1;
            }
            catch (error) {
                console.error('Error fetching nouns:', error);
            }
            finally {
                this.isLoading = false;
            }
        },
        async fetchCategories() {
            try {
                const res = await fetch('/noun-categories');

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
            console.log(this.activeFilter);
            await this.fetchNouns(1);
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
        filteredNouns() {
            if (!this.nouns) return [];
            if (this.activeFilter === 'All') return this.nouns;
            return this.nouns.filter(item => item.category === this.activeFilter);
        }
    },
}
</script>
<style scoped src="../../../css/users/partofspeech/noun.css">

</style>
