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

                        <p class="text-uppercase text-muted small fw-bold mb-3">Types</p>
                        <nav class="d-flex flex-column gap-2 mb-5">
                            <button v-for="cat in types" :key="cat" @click="changeTypes(cat)"
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

                            <a href="/pronouns" class="nav-btn">
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


                            <a href="/particles" class="nav-btn active">
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
                        <div class="col-12 col-md-6 col-xl-4" v-for="(p, index) in filteredparticles"
                            :key="p.id || index">
                            <div class="vocab-card border-0 shadow-sm h-100 transition-hover">

                                <div class="card-header-visual position-relative text-center p-4 overflow-hidden">
                                    <div class="particle-bg-text">{{ p.particle }}</div>
                                    <span class="type-badge">{{ p.type }}</span>

                                    <h2 class="display-4 fw-bold particle-main mb-0">{{ p.particle }}</h2>
                                    <p class="romanization-sub text-uppercase ls-2 small mb-0">{{ p.romanization }}</p>

                                    <button @click="speak(p.particle)" class="btn-voice-round">
                                        <i class="bi bi-volume-up-fill"></i>
                                    </button>
                                </div>

                                <div class="card-content p-4">
                                    <div class="meaning-group mb-3">
                                        <label class="text-muted tiny-label text-uppercase fw-bold">Translation</label>
                                        <h5 class="text-primary fw-semibold mb-0">{{ p.translation }}</h5>
                                    </div>

                                    <div
                                        class="usage-group mb-3 p-3 rounded-3 bg-light-soft border-start border-primary border-3">
                                        <label class="text-muted tiny-label text-uppercase fw-bold">Grammar
                                            Usage</label>
                                        <p class="small mb-0 text-dark">{{ p.usage }}</p>
                                    </div>

                                    <div class="example-group" v-if="p.example">
                                        <label class="text-muted tiny-label text-uppercase fw-bold">Example</label>
                                        <div class="example-bubble p-3 mt-1">
                                            <p class="mb-0 korean-example fw-medium">{{ p.example }}</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </transition-group>
                    <nav v-if="lastPage > 1" class="pagination-wrapper mt-5">
                        <button class="pg-action" :disabled="currentPage === 1" @click="fetchparticles(currentPage - 1)">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <div class="pg-info">
                            <span>{{ currentPage }}</span>
                            <span class="mx-2 opacity-50">/</span>
                            <span>{{ lastPage }}</span>
                        </div>
                        <button class="pg-action" :disabled="currentPage === lastPage"
                            @click="fetchparticles(currentPage + 1)">
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
            particles: [],
            types: [],
            isLoading: false,
            activeFilter: 'All',
            lastPage: 1,
            currentPage: 1,
            loadingMessage: 'Loading particles...'


        }
    },
    mounted() {
        document.title = "Korean Learning Platform - Particles Vocabulary";
        this.fetchparticles();
        this.fetchTypes();
    },
    methods: {
        async changeTypes(type) {
            this.activeFilter = type;
            await this.fetchparticles(1);
        },
        async fetchparticles(page = 1) {
            try {
                this.isLoading = true;

                const response = await axios.get('/fetch-particles', {
                    params: {
                        page: page,
                        type: this.activeFilter !== 'All' ? this.activeFilter : null
                    }
                });
                this.particles = response.data.data;
                console.log(this.particles);

                this.currentPage = response.data.current_page;
                this.lastPage = response.data.last_page;
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchTypes() {
            try {
                const res = await fetch('/particle-type');

                if (!res.ok) {
                    throw new Error('Failed to fetch types');
                }

                const data = await res.json();

                this.types = ['All', ...data.data ?? data];
            } catch (error) {
                console.error('Error fetching types:', error);
                this.types = ['All'];
            }
        },
       
        speak(text) {
            if (!window.speechSynthesis) {
                alert("Sorry, your browser does not support text to speech.");
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);

            // Set language to Korean
            utterance.lang = 'ko-KR';
            utterance.rate = 0.8; 
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
        }
    },
    computed: {
        filteredparticles() {
            if (!this.particles || !this.particles.length) return [];

            if (this.activeFilter === 'All') return this.particles;

            return this.particles.filter(item => item.type === this.activeFilter);
        }
    },
}
</script>
<style scoped src="../../../css/users/partofspeech/noun.css"></style>
<style>
.vocab-card {
    border-radius: 20px;
    background: #ffffff;
    transition: all 0.3s ease;
}

.card-header-visual {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 20px 20px 0 0;
}

.particle-bg-text {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 5rem;
    font-weight: 900;
    opacity: 0.05;
    pointer-events: none;
}

.particle-main {
    color: #2d3436;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}

.type-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #0984e3;
    color: white;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: bold;
}

.btn-voice-round {
    margin-top: 15px;
    border: none;
    background: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.btn-voice-round:hover {
    transform: scale(1.1);
    color: #0984e3;
}

.tiny-label {
    font-size: 0.65rem;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 4px;
}

.bg-light-soft {
    background-color: #f1f3f5;
}

.example-bubble {
    background-color: #e7f5ff;
    border-radius: 12px;
    color: #1971c2;
}
</style>
