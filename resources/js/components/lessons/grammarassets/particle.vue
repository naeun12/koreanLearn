<template>
    <GameSounds ref="sounds" />
    <main>
        <div class="mb-5 k-card p-4">
            <h1 class="fw-black text-dark" style="letter-spacing: -2.5px; font-size: 3rem;">
                The Particle Library
            </h1>
            <p class="text-secondary fs-5 mb-4">Master every essential marker in the Korean language.</p>

            <hr class="opacity-10 mb-4">

            <div class="row g-4">
                <div class="col-md-8">
                    <p class="text-dark-50">
                        In Korean, <strong>Particles (조사)</strong> are small markers attached to the end of nouns to
                        define their role in a sentence. They tell you who is performing the action, who is receiving
                        it, and where the action is taking place.
                    </p>
                    <p class="text-dark-50">
                        Think of them as the "map" of a sentence—without them, words are just a list. With them, you
                        unlock the ability to shuffle word order while keeping your meaning crystal clear.
                    </p>
                </div>
                <div class="col-md-4">
                    <div class="p-3 bg-light rounded-3 border-start border-4 border-warning">
                        <small class="text-uppercase fw-bold text-muted d-block mb-1">Pro Tip</small>
                        <span class="small">Particles often change shape based on whether the preceding noun ends in a
                            <strong>vowel</strong> or a <strong>consonant (batchim)</strong>.</span>
                    </div>
                    <button @click="btnParticleLibrary" class="btn-k-primary shadow-sm mt-2">
                        <span>Start Learning</span>
                        <i class="bi bi-arrow-right-short fs-4"></i>
                    </button>
                </div>
            </div>

            <div class=" d-flex gap-3">
                <span class="badge bg-dark-map-style rounded-pill px-3 py-2">Sentence Core</span>
                <span class="badge bg-dark-map-style rounded-pill px-3 py-2">Time & Space</span>
                <span class="badge bg-dark-map-style rounded-pill px-3 py-2">Method & Direction
                </span>
                <span class="badge bg-dark-map-style rounded-pill px-3 py-2">Connection</span>
                <span class="badge bg-dark-map-style rounded-pill px-3 py-2">Possession</span>
            </div>
        </div>

        <transition name="fade-slide">


            <div class=" p-4  mb-5 k-card " v-if="isParticleLibrary" ref="particleSection">

                <button class="btn-k-close mb-2" @click="isParticleLibrary = false" aria-label="Close">
                    <i class="bi bi-x-lg" style="font-size: 0.9rem;"></i>
                </button>

                <div class="particle-master-grid">

                    <!-- CATEGORY CARD -->
                    <div class="particle-category-card" v-for="(category, index) in particleData.categories"
                        :key="index">

                        <!-- Category Header -->
                        <span class="category-number">
                            {{ String(index + 1).padStart(2, '0') }}
                        </span>

                        <h6 class="fw-bold text-uppercase small mb-4" :class="category.color">
                            {{ category.title }}
                        </h6>



                        <!-- ITEMS -->
                        <div v-for="item in category.items" :key="item.particle" class="particle-item mb-4">

                            <!-- Particle Header -->
                            <div class="d-flex align-items-center mb-1">

                                <span class="particle-pill">
                                    {{ item.particle }}
                                </span>

                                <span class="ms-2 small fw-bold text-dark">
                                    {{ item.type }}
                                </span>

                            </div>

                            <!-- Description -->
                            <p class="particle-meaning mb-2">
                                {{ item.description }}
                            </p>

                            <!-- Examples -->
                            <div class="particle-examples">
                                <ul class="mb-0 ps-3">
                                    <li v-for="ex in item.examples.split('\n')" :key="ex" class="small text-muted">
                                        {{ ex }}
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div
                    class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                    <div class="mb-4 mb-md-0 text-center text-md-start">
                        <h3 class="fw-black mb-1">Practice Mode</h3>
                        <p class="mb-0 opacity-75 fs-5">All 12 particle types are ready for testing.</p>
                    </div>


                    <button class="btn btn-quiz rounded-pill shadow-lg" @click="startQuiz">
                        Start All-In-One Quiz
                    </button>
                </div>
            </div>
        </transition>
        <div class="quiz-modal-overlay d-flex align-items-center justify-content-center w-100" v-if="started"
            @click.self="exitGame">
            <div class="modal-dialog custom-quiz-wrapper w-50">

                <div class="modal-content premium-glass-card">
                    <div class="modal-header border-0 p-4 pb-0">

                        <div class="row w-100 align-items-center">

                            <!-- LEFT SIDE -->
                            <div class="col d-flex align-items-center">

                                <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary shadow-sm">
                                    <i class="bi bi-diagram-3-fill fs-4"></i>
                                </div>

                                <div>
                                    <h5 class="modal-title fw-bold mb-0">Particle Practice</h5>
                                    <p class="text-muted small mb-0">Choose the correct Korean particles</p>
                                </div>

                            </div>

                            <!-- RIGHT SIDE -->
                            <div class="col-auto">
                                <button type="button" class="btn-close shadow-none bg-light rounded-circle"
                                    @click="started = false">
                                </button>
                            </div>

                        </div>

                    </div>
                    <div class="modal-body p-4 p-md-5">

                        <div class="d-flex justify-content-between align-items-end mb-1">

                            <span class="badge rounded-pill bg-primary px-3 py-2 fs-6">
                                Question {{ currentIndex + 1 }} of 20
                            </span>

                            <span class="text-muted small fw-bold">
                                {{ Math.round(((currentIndex + 1) / 20) * 100) }}% Complete
                            </span>

                        </div>

                        <div class="progress mb-4" style="height: 10px; border-radius: 50px;">

                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar" :style="{ width: ((currentIndex + 1) / 20) * 100 + '%' }"
                                :aria-valuenow="currentIndex + 1" aria-valuemin="0" aria-valuemax="20">
                            </div>

                        </div>
                        <div class="question-header mb-4">
                            <h2 class="question-text text-center fw-bold text-dark mb-2">
                                {{ currentQuestion.question }}
                            </h2>
                            <div
                                class="translation-pill text-center d-flex flex-column align-items-center justify-content-center  ">

                                <span class="label text-primary mb-1">
                                    English Meaning
                                </span>

                                <span class="value fw-bold fs-6 text-center">
                                    "{{ currentQuestion.english }}"
                                </span>

                            </div>
                        </div>
                        <div class="explanation-wrapper mb-3" v-if="isSelectedAnswer">
                            <div class="explanation-box">
                                <div class="empty-icon">
                                    <i class="bi bi-info-circle"></i>
                                </div>
                                <p class="empty-text">
                                    {{ emptyAnswer || 'Please select an answer to proceed.' }}
                                </p>
                            </div>
                        </div>
                        <div class="explanation-wrapper mb-3" v-if="showExplanation">
                            <div class="explanation-box">
                                <div class="explanation-header">
                                    <i class="bi bi-lightbulb-fill me-2 text-warning"></i>
                                    <span class="text-uppercase fw-bold ls-1">Learning Note</span>
                                </div>
                                <p class="explanation-text">
                                    {{ currentQuestion.explanation }}
                                </p>
                            </div>
                        </div>

                        <div class="options-grid">
                            <button v-for="(opt, i) in currentQuestion.options" :key="i" class="option-btn"
                                @click="selectOption(opt)" :class="getOptionClass(opt)">
                                <span class="opt-index">{{ String.fromCharCode(65 + i) }}</span>
                                <span class="opt-text">{{ opt }}</span>
                            </button>
                        </div>

                        <div class="modal-footer border-0 px-0 mt-4">
                            <button class="btn-next-step" @click="nextQuestion">
                                Next Question
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="showResult" class="result-modal-backdrop">
            <div class="result-modal-content">

                <div class="celebration-header">
                    <div class="result-icon-wrapper">
                        <div class="modern-celebration-icon">
                            <div class="ribbon-icon"></div>
                            <div class="confetti-burst"></div>
                        </div>
                    </div>
                    <h2 class="fw-bold mb-1">Quiz Finished</h2>
                    <div class="status-badge" :class="score >= 15 ? 'pass' : 'retry'">
                        {{ score >= 15 ? 'Excellent Work!' : 'Keep Practicing' }}
                    </div>
                </div>

                <div class="score-visualization my-5">
                    <div class="score-circle-glow">
                        <div class="score-content">
                            <span class="score-main">{{ score }}</span>
                            <span class="score-divider"></span>
                            <span class="score-total">20</span>
                        </div>
                    </div>
                    <p class="text-muted mt-3 mb-0 small text-uppercase fw-bold ls-1">Final Score</p>
                </div>

                <div class="result-actions">
                    <button class="btn-retry-premium" @click="retryGame">
                        <i class="bi bi-arrow-clockwise me-2"></i> Try Again
                    </button>
                </div>

            </div>
        </div>
        
    </main>
    <!-- Scroll Buttons -->

</template>

<script>
import SoundsGameComponent from '../../gamesounds/sounds.vue'
import questionData from '../../data/grammar/particleQuizData';
import particleContent from '../../data/grammar/particledata'
export default {
   
    name: "Particle",
    components: {
        GameSounds: SoundsGameComponent,
    },
    data() {
        return {
            isParticleLibrary: false,
            particleData: particleContent,
            questions: questionData.questions,
            started: false,
            currentIndex: 0,
            score: 0,
            selectedAnswer: null,
            isSelectedAnswer: false,
            emptyAnswer: '',
            answered: false,
            showExplanation: false,
            showResult: false,
            isCorred: false,
        }
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex] || null
        },
        progress() {
            if (!this.questions.length) return 0
            return ((this.currentIndex + 1) / this.questions.length) * 100
        },
    },
        methods: {
            btnParticleLibrary() {
                this.isParticleLibrary = true;
                this.$nextTick(() => {
                    this.$refs.particleSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            },
            startQuiz() {
                this.started = true
                this.showResult = false
                this.currentIndex = 0
                this.score = 0
                this.answered = false
                this.selectedAnswer = null
                this.showExplanation = false
                this.questions = [...questionData.questions]
                this.shuffleQuestions(this.questions)

                // 👉 optional: shuffle choices
                this.shuffleOptions()

            },
            shuffleQuestions(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                        ;[array[i], array[j]] = [array[j], array[i]]
                }
            },

            // 🎲 SHUFFLE OPTIONS
            shuffleOptions() {
                this.questions.forEach(q => {
                    for (let i = q.options.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1))
                            ;[q.options[i], q.options[j]] = [q.options[j], q.options[i]]
                    }
                })
            },
            selectOption(option) {
                if (this.answered) return

                this.selectedAnswer = option
                this.answered = true
                this.showExplanation = true

                if (option === this.currentQuestion.answer) {
                    this.score++
                    this.$refs.sounds.playSound('correct')
                } else {
                    this.$refs.sounds.playSound('wrong')
                }
            },

            getOptionClass(option) {
                if (!this.answered) return ""

                if (option === this.currentQuestion.answer) {
                    return "correct"
                }

                if (option === this.selectedAnswer) {
                    return "wrong"
                }


                return ""
            },
            nextQuestion() {
                // 🚫 block if walay answer
                if (!this.selectedAnswer) {
                    this.isSelectedAnswer = true
                    this.emptyAnswer = "Answer must be selected before proceeding to the next question."
                    return // 🛑 IMPORTANT: stop here
                }

                // reset states
                this.selectedAnswer = null
                this.answered = false
                this.showExplanation = false
                this.isSelectedAnswer = false
                this.emptyAnswer = ""

                // go next
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++
                } else {
                    this.$refs.sounds.playSound('finalscores')

                    this.finishGame()
                }
            },

            finishGame() {
                this.showResult = true

            },
            exitGame() {
                this.started = false
                this.showResult = false
                this.currentIndex = 0
                this.score = 0
                this.selectedAnswer = null
                this.answered = false
            },

            retryGame() {
                this.started = true
                this.showResult = false
                this.currentIndex = 0
                this.score = 0
                this.selectedAnswer = null
                this.answered = false
            },
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },
            scrollToBottom() {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            },
        }


    }

</script>
<style scoped src="../../../../css/users/assets/lessons/grammarassetscss/particle.css"></style>
<style scoped src="../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"></style>
<style scoped src="../../../../css/users/partials/game/gameFooter.css"></style>
<style scoped src="../../../../css/users/partials/game/gameModal.css"></style>
<style scoped src="../../../../css/users/partials/game/gamefinalresultmodal.css"></style>
