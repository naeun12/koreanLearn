<template>
    <playVisualSound ref="gameSounds" />
    <div class="k-card">
         <h1 class="fw-black text-dark mb-3" style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1;">
           Past, Present, and Future <span class="text-primary">(Core Rule)</span>
        </h1>
          <p class="lead text-secondary" style="max-width: 2000px;">

    Because of this structure, Korean speakers often wait until the end of the sentence to understand the full
    meaning of the action being described.


   <span class="badge bg-light text-dark fw-bold">Past, Present, and Future</span> are the three basic time tenses used to describe when an action happens.
    The <span class="badge bg-primary fw-bold">past</span> is used for actions that already happened, the <span class="badge bg-primary fw-bold">present</span> is used for actions happening now or general truths, and the <span class="badge bg-primary fw-bold">future</span> is used for actions that will happen later.
    These tenses help learners understand time clearly and express when events occur in a sentence.
</p>
<h2 class="h5 text-uppercase fw-bold text-muted mb-4" style="letter-spacing: 1px;">
    Rule: <span class="text-primary">The Verb Stem Formula</span>
</h2>

<div class="list-group list-group-flush gap-3">
    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; flex-shrink: 0;">
            <span class="fw-bold text-primary">1</span>
        </div>
        <div>
            <strong class="d-block text-dark">Past Transformation</strong>
            <span class="text-secondary small">
                Attach <strong>~었/았습니다</strong> to the verb stem. This indicates the action was completed in the past.
            </span>
        </div>
    </div>

    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; flex-shrink: 0;">
            <span class="fw-bold text-primary">2</span>
        </div>
        <div>
            <strong class="d-block text-dark">Present Transformation</strong>
            <span class="text-secondary small">
                Attach <strong>~습니다/ㅂ니다</strong> to the verb stem. Used for facts, habits, or current states.
            </span>
        </div>
    </div>

    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; flex-shrink: 0;">
            <span class="fw-bold text-primary">3</span>
        </div>
        <div>
            <strong class="d-block text-dark">Future Transformation</strong>
            <span class="text-secondary small">
                Attach <strong>~겠습니다</strong> to the verb stem. Expresses a strong intention or a planned event.
            </span>
        </div>
    </div>
     <div class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden">
                <div class="d-flex align-items-center position-relative" style="z-index: 1;">
                    <div class="me-3 fs-2">💡</div>
                    <div>
             <div class="w-75">
            <strong class="d-block mb-1" style="color: #ffffff;">Pro Tip: The Time Anchor</strong>
            <p class="mb-0 opacity-75 small">
                In Korean, the verb acts as your <strong>"Time Anchor."</strong> No matter how long your sentence is, the final verb ending is what determines the timeline locking in whether the action is already finished (Past), currently happening (Present), or still a plan (Future).
            </p>
        </div>
        </div>
                    <button class="example-sentences ms-auto" @click="btnExampleOpen()">Example</button>
                </div>

                <div class="position-absolute"
                    style="width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; right: -20px; bottom: -20px;">
                </div>
            </div>
</div>

</div>
<div class="k-card mt-4" v-if="isExamplePastPresentAndFutureTense"ref="ExamplePastPresentAndFutureTense">
    <div class="d-flex align-items-center mb-4">
    <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
        <i class="bi bi-journal-text fs-4"></i>
    </div>
    <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">
        Tense Pattern Examples
    </h3>
</div>

<p class="text-muted small mb-4">
    Observe how the base verb remains the "anchor" while the suffixes shift to change the timeline from past to future.
</p>
<div class="k-card shadow-lg border-0 overflow-hidden" style="background: #ffffff; border-radius: 30px; border-top: 6px solid #4f46e5;">
    <div class="p-4 border-bottom border-light bg-white">
        <div class="d-flex align-items-center">
            <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                <i class="bi bi-arrow-repeat fs-4"></i>
            </div>
            <div>
                <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">Tense Comparison Matrix</h3>
                <p class="text-muted small mb-0">Visualizing structural shifts across timelines</p>
            </div>
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-borderless align-middle mb-0">
            <thead>
                <tr style="background: #f8fafc;">
                    <th class="ps-4 py-3 text-uppercase small fw-800 text-secondary" style="letter-spacing: 1px;">Dictionary Form</th>
                    <th class="py-3 text-uppercase small fw-800 text-primary" style="letter-spacing: 1px;">Present (현재)</th>
                    <th class="py-3 text-uppercase small fw-800 text-info" style="letter-spacing: 1px;">Past (과거)</th>
                    <th class="py-3 text-uppercase small fw-800 text-warning" style="letter-spacing: 1px;">Future (미래)</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr class="border-bottom border-light transition-all hover-light">
                    <td class="ps-4 py-4">
                        <span class="d-block fw-bold text-dark">먹다</span>
                        <span class="text-muted small">to eat</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">먹는다</span>
                        <span class="d-block text-secondary smaller opacity-75">I eat rice.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">먹었다</span>
                        <span class="d-block text-secondary smaller opacity-75">I ate rice.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">먹을 것이다</span>
                        <span class="d-block text-secondary smaller opacity-75">I will eat rice.</span>
                    </td>
                </tr>

                <tr class="border-bottom border-light transition-all hover-light">
                    <td class="ps-4 py-4">
                        <span class="d-block fw-bold text-dark">가다</span>
                        <span class="text-muted small">to go</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">간다</span>
                        <span class="d-block text-secondary smaller opacity-75">I go to school.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">갔다</span>
                        <span class="d-block text-secondary smaller opacity-75">I went to school.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">갈 것이다</span>
                        <span class="d-block text-secondary smaller opacity-75">I will go to school.</span>
                    </td>
                </tr>

                <tr class="border-bottom border-light transition-all hover-light">
                    <td class="ps-4 py-4">
                        <span class="d-block fw-bold text-dark">보다</span>
                        <span class="text-muted small">to watch</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">본다</span>
                        <span class="d-block text-secondary smaller opacity-75">I watch a movie.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">봤다</span>
                        <span class="d-block text-secondary smaller opacity-75">I watched a movie.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">볼 것이다</span>
                        <span class="d-block text-secondary smaller opacity-75">I will watch a movie.</span>
                    </td>
                </tr>

                <tr class="border-bottom border-light transition-all hover-light">
                    <td class="ps-4 py-4">
                        <span class="d-block fw-bold text-dark">하다</span>
                        <span class="text-muted small">to do</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">한다</span>
                        <span class="d-block text-secondary smaller opacity-75">I study.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">했다</span>
                        <span class="d-block text-secondary smaller opacity-75">I studied.</span>
                    </td>
                    <td>
                        <span class="fw-medium text-dark">할 것이다</span>
                        <span class="d-block text-secondary smaller opacity-75">I will study.</span>
                    </td>
                </tr>
            </tbody>
        </table>
       <div class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
        <div class="mb-4 mb-md-0 text-center text-md-start">
            <h3 class="fw-black mb-1">Time to Practice</h3>
            <p class="mb-0 opacity-75 fs-5">
                Test your skills on <strong>Past, Present, and Future</strong> sentence structures
            </p>
        </div>

        <button class="btn btn-quiz rounded-pill shadow-lg" @click="OpenQuiz">
            Start Tense Mastery Quiz
        </button>
    </div>
</div>
</div>
</div>
<div v-if="isOpenQuiz" class="modal fade show d-block" tabindex="-1"
        style="background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden animate-pop">

                <div class="modal-header border-0 p-4 pb-0">
                    <div class="d-flex align-items-center">
                        <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary shadow-sm">
                            <i class="bi bi-puzzle-fill fs-4"></i>
                        </div>
                        <div>
                        <h5 class="modal-title fw-bold mt-2">Tense Practice</h5>       
                                     </div>
                    </div>
                    <button type="button" class="btn-close shadow-none bg-light rounded-circle"
                        @click="isOpenQuiz = false"></button>
                </div>

                <div class="modal-body p-4">
                   <div class="d-flex justify-content-between align-items-end mb-1">
                        <span class="badge rounded-pill bg-primary px-3 py-2 fs-6">
                            Question {{ currentIndex }} of 10
                        </span>
                        <span class="text-muted small fw-bold">{{ (currentIndex / 10) * 100 }}% Complete</span>
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
                    <h2 class="question-text">{{currentQuestion.sentence}}</h2>
                    <div class="translation-container mx-auto">
                <div class="translation-divider">
                    <span class="divider-icon">
                        <i class="bi bi-translate"></i> </span>
                </div>
                <p class="translation-text">
                    {{currentQuestion.translation}}
                </p>
                </div>
                    </div>
                <div v-if="isFeedback" :class="iscorrectAnswer" class="feedback-card animate__animated animate__fadeIn">
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
        <button
        v-for="choice in currentQuestion.choices"
        :key="choice"
                    class="btn choice-card shadow-sm mb-3"
                    @click="Getanswer(choice)"
                    :disabled="showExplanation"
                    :class="{
                        
                        active: selectedAnswer === choice,

                        // 🟢 always show correct answer
                        correct: showExplanation && choice === currentQuestion.answer,

                        // 🔴 show wrong selected answer
                        // wrong: showExplanation && selectedAnswer === choice && selectedAnswer !== currentQuestion.answer
                    }"
                    >
                    <span class="choice-text">{{ choice }}</span>
                    <div class="check-circle"></div>
                    </button>
                    </div>
                </div>
                <div class="text-center">
                <button class="btn btn-lg rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button mb-4 mt-2" @click="checkAnswer">
                    Check Answer <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                </button>
               
                            <div class="action-footer mt-4 pt-4 border-top">
    <p class="text-muted small mb-3">Ready to move on?</p>
    
    <div class="text-center mb-3">
        <button class="btn btn-lg rounded-pill px-5 py-3 fw-bold bg-gradient-blue pulse-button" @click="nextQuestion">
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
import QuizData from '../../../data/grammar/pastPresentAndFutureTenseData'
import playVisualSound from '../../../gamesounds/sounds.vue';

export default {
    components: { playVisualSound },
    
    data() { 
        return {
            isExamplePastPresentAndFutureTense: false,
            isOpenQuiz: false,
            QuizQuestions: QuizData.questions,
            currentIndex: 0,
            selectedAnswer: "",
            iscorrectAnswer: false,
            correctAnswer: "",
            isFeedback: false,
            explanation: "",
            showExplanation: false,
            score: 0,
            isQuizFinished: false
        }
    },

    computed: { 
        currentQuestion() {
            return this.QuizQuestions[this.currentIndex]
        }
    },

    mounted() { 
        this.shuffleQuestions();
    },

    methods:{ 

        btnExampleOpen() {
            this.isExamplePastPresentAndFutureTense = !this.isExamplePastPresentAndFutureTense;

            this.$nextTick(() => {
                this.$refs.ExamplePastPresentAndFutureTense.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        },

        shuffleQuestions() {
            this.QuizQuestions = this.QuizQuestions
                .map(q => ({ ...q }))
                .sort(() => Math.random() - 0.5)
        },

        OpenQuiz() { 
            this.isOpenQuiz = true
            this.shuffleQuestions()
            this.currentIndex = 0
            this.explanation = ""
            this.selectedAnswer = ""
            this.correctAnswer = ""
            this.showExplanation = false
            this.isQuizFinished = false


        },

        Getanswer(choice) { 
            this.selectedAnswer = choice;
        },

        checkAnswer() {
            if (!this.selectedAnswer) {
                this.isFeedback = true;
                this.explanation = this.currentQuestion.explanation;
                this.$refs.gameSounds.playSound('wrong');
                this.showExplanation = true;
                return; // 🔥 STOP HERE
            }
            if (this.selectedAnswer === this.currentQuestion.answer) {
                this.iscorrectAnswer = true
                this.isFeedback = true
                this.correctAnswer = "correct"
                this.explanation = this.currentQuestion.explanation
                this.score++
                this.$refs.gameSounds.playSound('correct');
            } else {
                this.iscorrectAnswer = false
                this.isFeedback = true
                this.correctAnswer = "wrong"
                this.explanation = this.currentQuestion.explanation
                this.$refs.gameSounds.playSound('wrong');



            }
            this.showExplanation = true
            

        },

        nextQuestion() {
            if(!this.selectedAnswer) 
                return;
            this.currentIndex++
            if (this.currentIndex >= this.QuizQuestions.length) {
                this.currentIndex = 0
                this.$refs.gameSounds.playSound('finalscores')
                this.isQuizFinished = true
                this.isOpenQuiz = false


            }

            this.selectedAnswer = ""
            this.isFeedback = false
            this.explanation = ""
            this.showExplanation = false
        },

    }

}
</script>
<style scoped src="../../../../../css/users/partials/card/k-card.css"></style>
<style scoped src="../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameFooter.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameModal.css"></style>
<style scoped src="../../../../../css/users/partials/game/gamefinalresultmodal.css"></style>
