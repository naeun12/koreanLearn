<template>
    <gameSounds ref="gameSounds"/>
    <div class="k-card">
        <h1 class="fw-black text-dark mb-3" style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1;">
            Short-Form Negation (Pre-Verbal) and Long-Form Negation (Post-Verbal) <span class="text-primary">(Core Rule)</span>
        </h1>
        <p class="lead text-secondary  text-justify" style="max-width: 2000px;">
            Short-form negation is created by placing a modifier directly before the verb or adjective. It is the most common form in spoken Korean. In the structure <strong>[안 / 못] + Verb/Adjective</strong>, <strong>안</strong> is used when the subject does not do something by choice or as a simple fact, such as <strong>안 가요</strong> (I am not going). <strong>못</strong> is used when the subject cannot do something because of lack of ability or external circumstances, such as <strong>못 가요</strong> (I cannot go).
            For verbs that follow the pattern <strong>[Noun] + 하다</strong>, the negation particle is placed between the noun and 하다, such as <strong>공부 안 해요</strong> (I do not study). This rule applies only to verbs. For adjectives ending in <strong>하다</strong>, such as <strong>건강하다</strong>, the word remains together: <strong>안 건강해요</strong>.
            Long-form negation is more formal and is often used in writing, literature, or formal speech. It is also preferred with longer verbs or adjectives when the short form sounds awkward. The structure is <strong>Stem + [-지 않다 / -지 못하다]</strong>. <strong>-지 않다</strong> is equivalent to <strong>안</strong>, as in <strong>먹지 않아요</strong> (I do not eat). <strong>-지 못하다</strong> is equivalent to <strong>못</strong>, as in <strong>먹지 못해요</strong> (I cannot eat).
        </p>
        <div class="row g-4">
            <div class="col-12">
                 <h2 class="h5 text-uppercase fw-bold text-muted mb-4" style="letter-spacing: 1px;">
                    Core Principles of Korean Negation
                </h2>
                 <div class="list-group list-group-flush gap-3">
                     <div
                        class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">1</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Intent (안 / -지 않다)</strong>
                            <span class="text-secondary small">
                               Focuses on the will of the subject or a general state of being.
                            </span>
                        </div>
                    </div>
                </div>
                <div
                        class="list-group-item border-0 p-3 rounded-3 mt-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">2</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Placement</strong>
                            <span class="text-secondary small">
                              Short forms act as prefixes (before the verb), while long forms act as suffixes (attached to the verb stem).
                            </span>
                        </div>
                </div>
                 <div
                        class="list-group-item border-0 p-3 rounded-3 mt-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">3</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Lexical Replacement</strong>
                            <span class="text-secondary small">
                              Certain concepts (existence, identity, knowledge) use entirely different words rather than adding a negative particle.
                            </span>
                        </div>
                </div>
            <div class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden">
                <div class="d-flex align-items-center position-relative" style="z-index: 1;">
                    <div class="me-3 fs-2">💡</div>
                        <div>
                            <strong class="d-block mb-1">Pro Tip: Korean Negation Shortcut</strong>
                            <p class="mb-0 opacity-75 small">
                                In Korean negation, remember this simple rule: <strong>안 = not (by choice)</strong> and <strong>못 = cannot (by ability or situation)</strong>. 
                                Use <strong>안</strong> when someone simply does not do something, and use <strong>못</strong> when someone is unable to do it.
                            </p>
                        </div>
                    <button class="example-sentences ms-auto" @click="btnNegation()">Example</button>
                </div>

                <div class="position-absolute"
                    style="width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; right: -20px; bottom: -20px;">
                </div>
            </div>
        </div>
     </div>
</div>
<transition name="fade-slide">
<div class="mt-4 p-4  bg-white overflow-hidden mb-3 k-card" v-if="isNegationExample" ref="negationExample">
    <div class="d-flex align-items-center">
            <div class="p-4 border-bottom border-light bg-white">
                <div class="d-flex align-items-center">
                    <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                        <i class="bi bi-arrow-repeat fs-4"></i>
                    </div>
                    <div>
                        <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">
                            Korean Negation Comparison Matrix
                        </h3>
                        <p class="text-muted small mb-0">
                            Visualizing how negation structures differ across grammar categories
                        </p>
                    </div>
                </div>
            </div>
        </div>
    <div class="k-card shadow-lg border-0 overflow-hidden" style="background: #ffffff; border-radius: 30px; border-top: 6px solid #4f46e5;">
            <div class="table-responsive">
                <table class="table table-borderless align-middle mb-0">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th class="ps-4 py-3 text-uppercase small fw-800 text-secondary" style="letter-spacing: 1px;">Category</th>
                            <th class="py-3 text-uppercase small fw-800 text-primary" style="letter-spacing: 1px;">Negation Type</th>
                            <th class="py-3 text-uppercase small fw-800 text-info" style="letter-spacing: 1px;">Grammar Structure</th>
                            <th class="py-3 text-uppercase small fw-800 text-warning" style="letter-spacing: 1px;">Usage Context</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-bottom border-light transition-all hover-light">
                            <td class="ps-4 py-4">
                                <span class="d-block fw-bold text-dark">Short Form</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Simple (안)</span>
                                <span class="d-block text-secondary smaller opacity-75">Inability (못)</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">안 + Verb/Adj</span>
                                <span class="d-block text-secondary smaller opacity-75">못 + Verb</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Daily conversation; expresses "don't" or "is not."</span>
                                <span class="d-block text-secondary smaller opacity-75">Daily conversation; expresses "can't."</span>
                            </td>
                        </tr>

                        <tr class="border-bottom border-light transition-all hover-light">
                            <td class="ps-4 py-4">
                                <span class="d-block fw-bold text-dark">Long Form</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Simple (-지 않다)</span>
                                <span class="d-block text-secondary smaller opacity-75">Inability (-지 못하다)</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Stem + 지 않다</span>
                                <span class="d-block text-secondary smaller opacity-75">Stem + 지 못하다</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Formal/Written; "does not" or "is not."</span>
                                <span class="d-block text-secondary smaller opacity-75">Formal/Written; "cannot."</span>
                            </td>
                        </tr>

                        <tr class="border-bottom border-light transition-all hover-light">
                            <td class="ps-4 py-4">
                                <span class="d-block fw-bold text-dark">Existence</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Lack (없다)</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Noun + 이/가 없다</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Used instead of negating "있다."</span>
                            </td>
                        </tr>
                        <tr class="border-bottom border-light transition-all hover-light">
                            <td class="ps-4 py-4">
                                <span class="d-block fw-bold text-dark">Identity</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Non-Identity (아니다)</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Noun + 이/가 아니다</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Used instead of negating "이다" (to be).</span>
                            </td>
                        </tr>
                        <tr class="border-bottom border-light transition-all hover-light">
                            <td class="ps-4 py-4">
                                <span class="d-block fw-bold text-dark">Command</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Prohibitive (-지 마다)</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Stem + 지 마세요</span>
                            </td>
                            <td>
                                <span class="fw-medium text-dark">Used for "don't do" commands.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
           <div class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                <div class="mb-4 mb-md-0 text-center text-md-start">
                    <h3 class="fw-black mb-1">Time to Practice</h3>
                    <p class="mb-0 opacity-75 fs-5">
                        Test your understanding of <strong>Korean negation forms</strong> (안, 못, -지 않다, -지 못하다)
                    </p>
                </div>
                <button class="btn btn-quiz rounded-pill shadow-lg" @click="OpenQuiz">
                    Start Negation Mastery Quiz
                </button>
            </div>
        </div>
    </div>
</div>
</transition>

<div v-if="isQuizModalOpen" class="modal fade show d-block" tabindex="-1"
        style="background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden animate-pop">
            <div class="modal-header border-0 p-4 pb-0">
                <div class="d-flex align-items-center">
                    <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary shadow-sm">
                        <i class="bi bi-puzzle-fill fs-4"></i>
                    </div>
                    <div>
                        <h5 class="modal-title fw-bold mt-2">
                            Korean Negation Quiz
                        </h5>      
                        <p class="text-muted mb-0">
                            Learn how Korean negation works in different grammatical forms
                        </p>
                    </div>
                </div>
                    <button type="button" class="btn-close shadow-none bg-light rounded-circle"
                        @click="isQuizModalOpen = false">
                    </button>
            </div>
            <div class="modal-body p-4">
                <div class="d-flex justify-content-between align-items-end mb-1">
                    <span class="badge rounded-pill bg-primary px-3 py-2 fs-6">
                        Question {{ currentIndex }} of 10
                    </span>
                    <span class="text-muted small fw-bold">
                        {{ (currentIndex / 10) * 100 }}% Complete
                    </span>
                    </div>
                    <div class="progress " style="height: 10px; border-radius: 50px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar" :style="{ width: (currentIndex / 10) * 100 + '%' }"
                            :aria-valuenow="currentIndex" aria-valuemin="0" aria-valuemax="10">
                        </div>
                    </div>
                </div>
                <div class="question-container">
                    <span class="question-label">QUESTION</span>
                    <h2 class="question-text">{{currentQuestion.question}}</h2>
                
                </div>
                  <div v-if="isExplanation" :class="iscorrectAnswer" class="feedback-card animate__animated animate__fadeIn">
                    <div class="card-content d-flex align-items-center">
                        <div class="feedback-icon me-3">
                        <i :class="{
                            'bi bi-check-circle-fill text-success': correctAnswer === 'correct',
                            'bi bi-x-circle-fill text-danger': correctAnswer === 'wrong',
                        }"></i>                        
                        </div>
                        <div class="feedback-text">
                            <strong class="d-block mb-1">
                                {{
                                    correctAnswer === 'correct'
                                        ? 'Great Job!'
                                        : correctAnswer === 'wrong'
                                        ? 'Not Quite!'
                                        : 'No Answer Selected'
                                }}
                            </strong>
                            <p class="mb-0">{{ explanation }}</p>
                        </div>
                    </div>
              </div>
                <div class="choices-container mb-4">
                    <div class="text-center mb-3">
                        <small class="text-uppercase fw-bold text-muted" style="letter-spacing: 2px;">Select the correct answer</small>
                    </div>        
                    <div class="d-grid gap-3 col-md-10 mx-auto">
                    <button v-for="choice in currentQuestion.choices" :key="choice" class="btn choice-card shadow-sm mb-3" 
                        @click="Getanswer(choice)" :disabled="showExplanation" 
                        :class="{
                            active: selectedAnswer === choice,
                            correct: showExplanation && choice === currentQuestion.correctAnswer,
                            wrong: showExplanation && selectedAnswer === choice && selectedAnswer !== currentQuestion.correctAnswer,
                        }">
                        <span class="choice-text">{{ choice }}</span>
                        <div class="check-circle"></div>
                    </button>
                    </div>
                    
                </div>
                <div class="text-center">
                    <button class="btn btn-lg rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button mb-4 mt-2" :disabled="selectedAnswer === ''" @click="checkAnswer">
                        Check Answer <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                    <div class="action-footer mt-4 pt-4 border-top">
                        <p class="text-muted small mb-3">Ready to move on?</p>
    
                        <div class="text-center mb-3">
                            <button class="btn btn-lg  rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button" :disabled="isContinue === false" @click="nextQuestion">
                                <span>Continue</span>
                                <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     </div>
</div>
<div v-if="isQuizFinished" class="result-modal-backdrop">
        <div class="result-modal-content">
            <div class="celebration-header">
                <div class="result-icon-wrapper">
                    <div class="modern-celebration-icon">
                        <div class="ribbon-icon"></div>
                        <div class="confetti-burst"></div>
                    </div>
                </div>
                <h2 class="fw-bold mb-1">Quiz Finished</h2>
                <div class="status-badge" :class="score >= 5 ? 'pass' : 'retry'">
                    {{ score >= 5 ? 'Excellent Work!' : 'Keep Practicing' }}
                </div>
            </div>
            <div class="score-visualization my-5">
                <div class="score-circle-glow">
                    <div class="score-content">
                        <span class="score-main">{{ score }}</span>
                        <span class="score-divider"></span>
                        <span class="score-total">10</span>
                    </div>
                </div>
                <p class="text-muted mt-3 mb-0 small text-uppercase fw-bold ls-1">Final Score</p>
            </div>
            <div class="result-actions">
                <button class="btn-retry-premium" @click="OpenQuiz">
                    <i class="bi bi-arrow-clockwise me-2"></i> Try Again
                </button>
            </div>
        </div>
</div>
</template>
<script>
import NegationContentData from "../../../data/grammar/negationContentData";
import gameSounds from "../../../gamesounds/sounds.vue";
export default {
        components: {
            gameSounds
        },
    data() {
        return{ 
            isNegationExample: false,
            isQuizModalOpen: false,
            questions: NegationContentData.NegationContentData,
            currentIndex: 0,
            score: 0,
            selectedAnswer: "",
            iscorrectAnswer: false,
            correctAnswer: "",
            isExplanation: false,
            explanation: "",
            showExplanation: false,
            isQuizFinished: false,
            isContinue : false,
        }
    },  
    mounted() {
        this.shuffleQuestions();
        
    }, 
    computed: { 
        currentQuestion() {
        return this.questions[this.currentIndex]
        }
    },
    methods: {
        btnNegation() { 
            this.isNegationExample = !this.isNegationExample;
            if (this.isNegationExample) {
                this.$nextTick(() => {
                    const element = this.$refs.negationExample;
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        },
        OpenQuiz() { 
            this.isQuizModalOpen = true;
            this.isQuizFinished = false
        },
         shuffleQuestions() {
            if (!this.questions) return;

            this.questions = [...this.questions]
                .sort(() => Math.random() - 0.5);
        },
        Getanswer(choice) { 
            this.selectedAnswer = choice;
        },
       checkAnswer() {
        if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
            this.iscorrectAnswer = true;
            this.isContinue = true;
            this.correctAnswer = "correct";
            this.score++;
            this.$refs.gameSounds.playSound('correct');
        } 
        else {
            this.iscorrectAnswer = false;
            this.isContinue = true;
            this.correctAnswer = "wrong";
            this.$refs.gameSounds.playSound('wrong');
        }
        this.isExplanation = true;
        this.explanation = this.currentQuestion.explanation;this.currentQuestion.explanation;
        this.showExplanation = true;
     },
        nextQuestion() {
            this.currentIndex++
            if (this.currentIndex >= 10) {
                this.currentIndex = 0
                this.$refs.gameSounds.playSound('finalscores')
                this.isQuizFinished = true
                this.isQuizModalOpen = false

            }
            this.selectedAnswer = ""
            this.isExplanation = false
            this.explanation = ""
            this.showExplanation = false
            this.isContinue = false;

        },

    } 
    }
</script>
<style scoped src="../../../../../css/users/partials/card/k-card.css"></style>
<style scoped src="../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameFooter.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameModal.css"></style>
<style scoped src="../../../../../css/users/partials/game/gamefinalresultmodal.css"></style>