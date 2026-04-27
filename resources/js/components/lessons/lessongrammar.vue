<template>
    <GameSounds ref="sounds" />

   <div class="container k-lesson-wrapper">
        <div class="row">
           <div class="col-12 col-md-12 col-lg-12">
                <div class="k-card">
                    <div class="k-accent-bar"></div>

                    <div class="p-4 p-md-5">
                        <div class="d-flex align-items-center mb-4">
                            <div class="k-icon-container me-3">
                                <i class="bi bi-translate fs-4"></i>
                            </div>
                            <div>
                                <h2 class="h4 mb-0 fw-bold">Korean Grammar Essentials</h2>
                            </div>
                        </div>

                        <p class="text-dark-50 ">
                           Korean is an <b>Agglutinative</b> language, which means meanings are built by attaching various
                            suffixes to the end of a verb or noun base. Instead of using many separate words, Korean
                            "glues" particles and endings together to change the tense or mood of a sentence.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <main>
        
        <div class="mb-3 k-card p-4"
            >
            <h1 class="fw-black text-dark mb-3" style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1;">
                Sentence Structure <span class="text-primary">(Core Rule)</span>
            </h1>

            <p class="lead text-secondary mb-5 border-bottom pb-4" style="max-width: 800px;">
                The most fundamental difference between English and Korean is the position of the <strong>verb</strong>.
                While English follows a <span class="badge bg-light text-dark fw-bold">SVO</span> pattern,
                Korean uses a <span class="badge bg-primary fw-bold">SOV</span> pattern.
            </p>

            <div class="row g-4">
                <div class="col-12">
                    <h2 class="h5 text-uppercase fw-bold text-muted mb-4" style="letter-spacing: 1px;">Key Principles to
                        Remember</h2>

                    <div class="list-group list-group-flush gap-3">
                        <div
                            class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                            <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 32px; height: 32px; flex-shrink: 0;">
                                <span class="fw-bold text-primary">1</span>
                            </div>
                            <div>
                                <strong class="d-block text-dark">The Verb is Always Last</strong>
                                <span class="text-secondary small">In a complete Korean sentence, the verb or adjective
                                    <em>must</em> come at the very end.</span>
                            </div>
                        </div>

                        <div
                            class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                            <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 32px; height: 32px; flex-shrink: 0;">
                                <span class="fw-bold text-primary">2</span>
                            </div>
                            <div>
                                <strong class="d-block text-dark">Particle Power</strong>
                                <span class="text-secondary small">Because word order is flexible, Korean uses
                                    <strong>particles</strong> (like -는/은 and -를/을) to define the role of each
                                    word.</span>
                            </div>
                        </div>

                        <div
                            class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                            <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 32px; height: 32px; flex-shrink: 0;">
                                <span class="fw-bold text-primary">3</span>
                            </div>
                            <div>
                                <strong class="d-block text-dark">Dropping the Subject</strong>
                                <span class="text-secondary small">If the context is clear, the subject is often
                                    omitted. <em>"사과를 먹어요"</em> (Eat apple) is perfectly natural.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden">
                <div class="d-flex align-items-center position-relative" style="z-index: 1;">
                    <div class="me-3 fs-2">💡</div>
                    <div>
                        <strong class="d-block mb-1">Pro Tip: The Anchor Rule</strong>
                        <p class="mb-0 opacity-75 small">Think of the Korean verb as the "anchor." Everything else—time,
                            location, and objects—builds up to that final action.</p>
                    </div>
                   <button class="example-sentences ms-auto" @click="btnSentenceCore()">Example</button>
                </div>
                <div class="position-absolute"
                    style="width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; right: -20px; bottom: -20px;">
                </div>
            </div>
        </div>
        <transition name="fade-slide">

   
       <div class="mt-4 p-4  bg-white overflow-hidden mb-3 k-card" v-if="isSentenceCore" ref="sentenceCore">
            <div class="d-flex align-items-center mb-4">
                <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                    <i class="bi bi-journal-text fs-4"></i>
                </div>
                <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">Sentence Breakdowns</h3>
            </div>

            <div class="row g-3">
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 1</span>
                            <span class="text-primary fw-bold small">SOV Structure</span>
                        </div>
                       <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                            <span>저는 밥을 먹어요</span>
                                <button class="btn btn-link text-primary p-0 border-0" @click="sentenceCoreSound('iaterice')" title="Play Sound">
                                    <i class="bi bi-volume-up-fill fs-3"></i>
                                </button>
                        </div>
                        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>밥을</strong>
                                (rice)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>먹어요</strong>
                                (eat)</span>
                        </div>
                        <div
                            class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                            <i class="bi bi-translate me-2"></i> “I eat rice”
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 2</span>
                            <span class="text-primary fw-bold small">SOV Structure</span>
                        </div>
                        <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                            <span>저는 커피를 마셔요</span>
                            <button class="btn btn-link text-primary p-0 border-0" @click="sentenceCoreSound('idrinkcoffee')" title="Play Sound">
                                <i class="bi bi-volume-up-fill fs-3"></i>
                            </button>
                        </div>
                        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>커피를</strong>
                                (coffee)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>마셔요</strong>
                                (drink)</span>
                        </div>
                        <div
                            class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                            <i class="bi bi-translate me-2"></i> “I drink coffee”
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
                        <div class="d-flex align-items-center mb-2">
                            <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 3</span>
                            <span class="text-primary fw-bold small">SOV Structure</span>
                        </div>
                        <div class="h3 fw-black text-dark mb-3 d-flex align-items-center justify-content-between">
                            <span>저는 책을 읽어요</span>
                            <button class="btn btn-link text-primary p-0 border-0" @click="sentenceCoreSound('ireadabook')" title="Play Sound">
                                <i class="bi bi-volume-up-fill fs-3"></i>
                            </button>
                        </div>
                        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>저는</strong> (I)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>책을</strong>
                                (book)</span>
                            <span class="text-muted">+</span>
                            <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>읽어요</strong>
                                (read)</span>
                        </div>
                        <div
                            class="py-2 px-3 rounded-3 bg-primary text-white d-inline-block shadow-sm w-100 text-center">
                            <i class="bi bi-translate me-2"></i> “I read a book”
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </transition>
        <div class="mb-5 k-card p-4" >
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
       <div class="quiz-modal-overlay d-flex align-items-center justify-content-center w-100" v-if="started" @click.self="exitGame">
            <div class="modal-dialog custom-quiz-wrapper w-25">
                <div class="modal-content premium-glass-card">

                    <div  class="modal-body p-4 p-md-5">
                        <div class="d-flex justify-content-between align-items-center mb-4 ">
                            <span class="modern-badge">Question {{ currentIndex + 1 }}</span>
                            <div class="progress-container w-50">
                                <div class="progress-bar-glow" :style="{ width: progress + '%' }"></div>
                            </div>
                        </div>

                        <div class="question-header mb-4">
                            <h2 class="question-text fw-bold text-dark mb-2">
                                {{ currentQuestion.question }}
                            </h2>
                            <div class="translation-pill">
                                <span class="label">English</span>
                                <span class="value">"{{ currentQuestion.english }}"</span>
                            </div>
                        </div>
                        <div class="empty-answer-container mb-3" v-if="isSelectedAnswer">
                            <div class="empty-state-content">
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
        <div class="scroll-buttons d-flex flex-row gap-3 position-fixed shadow-lg p-2 rounded-pill"
            style="bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 1050; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2);">

            <button class="scroll-btn top btn-glass shadow-sm" @click="scrollToTop" title="Scroll to Top">
                <i class="bi bi-chevron-up fw-bold"></i>
            </button>

            <div class="vr opacity-25 my-1"></div>

            <button class="scroll-btn bottom btn-glass shadow-sm" @click="scrollToBottom" title="Scroll to Bottom">
                <i class="bi bi-chevron-down fw-bold"></i>
            </button>
        </div>

        
    </main>
    <!-- Scroll Buttons -->
    
</template>
<script>
import SoundsGameComponent from '../gamesounds/sounds.vue'
import particleContent from '../data/grammar/particledata';
import questionData from '../data/grammar/particleQuizData';
export default {
        components: {
            GameSounds: SoundsGameComponent
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
            emptyAnswer:'',
            answered: false,
            showExplanation: false,
            showResult: false,
            isCorred: false,
            // lesson sentences structure
            isSentenceCore: false,
        }

    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex] || null
        },
        progress() {
            if (!this.questions.length) return 0
            return ((this.currentIndex + 1) / this.questions.length) * 100
        }
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
            this.showExplanation =true

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
        //Sentence structure example button
        btnSentenceCore() {
            this.isSentenceCore = !this.isSentenceCore;
            this.$nextTick(() => {
                this.$refs.sentenceCore.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        },
        sentenceCoreSound(soundKey) {
            const audio = new Audio(`/sounds/sentence/${soundKey}.mp3`);
            audio.play();

        }


    }
}
</script>
<style scoped src="../../../css/users/assets/lessons/lessongrammar.css">
</style>
<style scoped src="../../../css/buttonscrolldownandscrollup.css"></style>