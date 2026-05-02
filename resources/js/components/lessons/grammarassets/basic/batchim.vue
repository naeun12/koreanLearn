<template>
<soundQuiz ref="gameSounds"/>
<div class="k-card">
        <h1 class="fw-black text-dark mb-3" style="letter-spacing: -2.5px; font-size: 3.5rem; line-height: 1;">
            Batchim (Final Consonants) <span class="text-primary">(Core Rule)</span>
        </h1>
        <p class="lead text-secondary text-justify" style="max-width: 2000px;">
            <strong>Batchim (받침)</strong> is the final consonant placed at the bottom of a Hangul syllable block. It is an important part of Korean pronunciation because it changes how words sound and how syllables connect when speaking. Not every syllable has Batchim, but many Korean words use it.
            A basic Hangul syllable follows the pattern <strong>consonant + vowel</strong>, such as “가 (ga)” or “나 (na)”. When a final consonant is added, it becomes <strong>consonant + vowel + final consonant</strong>, such as “각 (gak)”, “한 (han)”, and “집 (jip)”.
            Batchim helps complete the syllable and often affects grammar rules, particles, and natural pronunciation. Some final consonants may sound different from their original consonant sound, so learning Batchim is essential for reading and speaking Korean correctly.
            Understanding Batchim will make it easier to pronounce words clearly, read Hangul faster, and sound more natural in Korean conversations.
        </p>
        <div class="row g-4">
            <div class="col-12">
                 <h2 class="h5 text-uppercase fw-bold text-muted mb-4" style="letter-spacing: 1px;">
                    Core Principles of Batchim
                </h2>
              <div class="list-group list-group-flush gap-3">

                    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">1</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Final Consonant Position</strong>
                            <span class="text-secondary small">
                                Batchim is the consonant placed at the bottom of a Hangul syllable block. It completes the syllable and gives it an ending sound.
                            </span>
                        </div>
                    </div>

                    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">2</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Pronunciation Changes</strong>
                            <span class="text-secondary small">
                                Some consonants sound different when used as Batchim. Final sounds are often shorter and softer than their normal pronunciation.
                            </span>
                        </div>
                    </div>

                    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">3</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Linking Sound Rule</strong>
                            <span class="text-secondary small">
                                When the next syllable starts with ㅇ, the Batchim sound can move smoothly to the next syllable for natural pronunciation.
                            </span>
                        </div>
                    </div>

                    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">4</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Grammar Importance</strong>
                            <span class="text-secondary small">
                                Batchim affects Korean grammar particles such as 은/는, 이/가, and 을/를, which depend on whether a word ends with a consonant.
                            </span>
                        </div>
                    </div>

                    <div class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow">
                        <div class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 32px; height: 32px; flex-shrink: 0;">
                            <span class="fw-bold text-primary">5</span>
                        </div>
                        <div>
                            <strong class="d-block text-dark">Essential for Fluency</strong>
                            <span class="text-secondary small">
                                Learning Batchim improves reading speed, clearer pronunciation, and helps you sound more natural when speaking Korean.
                            </span>
                        </div>
                    </div>

                </div>
                <div class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden">
                    <div class="d-flex align-items-center position-relative" style="z-index: 1;">
                        
                        <div class="me-3 fs-2">💡</div>

                        <div>
                            <strong class="d-block mb-1">Pro Tip: Batchim Shortcut</strong>
                            
                            <p class="mb-0 opacity-75 small">
                                Batchim (받침) is the <strong>final consonant</strong> placed at the bottom of a Hangul syllable block.  
                                
                                Remember this simple pattern:  
                                <strong>Consonant + Vowel</strong> = 가 (ga)  
                                <strong>Consonant + Vowel + Batchim</strong> = 각 (gak)  

                                Batchim gives the syllable an ending sound and is important for natural pronunciation.  

                                Once you recognize bottom consonants quickly, reading Korean words becomes much easier.
                            </p>
                        </div>

                        <button class="example-sentences ms-auto" @click="btnBatchimExample()">
                            Example
                        </button>
                    </div>

                    <div class="position-absolute"
                        style="width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; right: -20px; bottom: -20px;">
                    </div>
                </div>
            </div>
        </div>
</div>
<div class="mt-4 p-4  bg-white overflow-hidden mb-3 k-card" v-if="isBatchimExample" ref="BatchimExample">
        <div class="p-4 border-bottom border-light bg-white">
                <div class="d-flex align-items-center">
                    <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                        <i class="bi bi-arrow-repeat fs-4"></i>
                    </div>
                  <div>
                        <h3 class="h5 fw-black text-dark mb-0" style="letter-spacing: -0.5px;">
                            Batchim (Final Consonants)
                        </h3>
                        <p class="text-muted small mb-0">
                                    Learn how final consonants (받침) affect pronunciation, word endings, and natural Korean reading.
                                </p>
                            </div>
                        </div>
                    </div>
    <div class="k-card shadow-lg border-0 overflow-hidden" style="background: #ffffff; border-radius: 30px; border-top: 6px solid #4f46e5;">
        <div class="row g-3">
            <div class="col-lg-4">
                <div class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                    <!-- Header -->
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 1</span>
                        <span class="text-primary fw-bold small">No Batchim (Open Syllables)</span>
                    </div>

                    <!-- Title -->
                    <div class="h6 fw-bold text-dark mb-3">
                        Basic Structure: Consonant + Vowel
                    </div>

                    <!-- Description -->
                    <div class="text-secondary small mb-3">
                        This type of syllable has no final consonant (Batchim), so it ends with a clear and smooth vowel sound.
                    </div>

                    <!-- Examples -->
                    <div class="d-flex flex-wrap gap-2 align-items-center">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>가 (ga)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>나 (na)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>다 (da)</strong></span>
                    </div>

                  </div>            
            </div>
            <div class="col-lg-4">
                 <div class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">
        <!-- Header -->
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 2</span>
                        <span class="text-primary fw-bold small">Standard Batchim (Final Consonants)</span>
                    </div>
                    <!-- Description -->
                    <div class="h6 fw-bold text-dark mb-3">
                        Common final consonants and their resulting sounds:
                    </div>

                    <!-- Examples -->
                    <div class="d-flex flex-wrap gap-2 align-items-center">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄱ (k) → 각 (gak)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄴ (n) → 난 (nan)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄷ (t) → 닫 (dat)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄹ (l) → 달 (dal)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅁ (m) → 맘 (mam)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅂ (p) → 밥 (bap)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅅ (t) → 옷 (ot)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅇ (ng) → 항 (hang)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅈ (t) → 낮 (nat)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅊ (t) → 꽃 (kkot)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅋ (k) → 부엌 (bueok)</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅌ (t) → 끝 (kkeut)</strong></span>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                    <!-- Header -->
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 3</span>
                        <span class="text-primary fw-bold small">Double Batchim (Complex Final Consonants)</span>
                    </div>

                    <!-- Title -->
                    <div class="h6 fw-bold text-dark mb-3">
                        Two consonants in final position (but only one is pronounced or changes sound):  
                    </div>
                    <!-- Examples -->
                    <div class="d-flex flex-wrap gap-2 align-items-center">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>읽 (ilg) → sounds like “il”  </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>앉 (anj) → sounds like “an” </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>삶 (salm) → sounds like “sam” </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>값 (gaps) → sounds like “gap”  </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>닭 (dak) → sound shifts to “dak” </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>흙 (heuk) → ending sound “heuk”</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>없 (eop) → ending sound “eop”</strong></span>
                    </div>
                  </div>            
            </div>
             <div class="col-lg-4 w-100">
                <div class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all">

                    <!-- Header -->
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase">Ex 4</span>
                        <span class="text-primary fw-bold small">Pronunciation Rule Summary</span>
                    </div>

                    <!-- Title -->
                    <div class="h6 fw-bold text-dark mb-3">
                        Batchim is usually pronounced in a simplified way.  
                        Only 7 main sounds are commonly heard:  
                    </div>
                    <!-- Examples -->
                    <div class="d-flex flex-wrap gap-2 align-items-center">
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄱ  </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄴ </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄷ </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㄹ  </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅁ </strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅂ</strong></span>
                        <span class="p-2 rounded-3 bg-white border shadow-sm small"><strong>ㅇ</strong></span>
                        <span class="p-2"><strong> → Other final consonants change to one of these sounds.</strong></span>
                    </div>
                  </div>            
            </div>
        </div>
    </div>
    <div class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
         <div class="mb-4 mb-md-0 text-center text-md-start">
            <h3 class="fw-black mb-1">
                Master Your Batchim
            </h3>
            <p class="mb-0 opacity-75 fs-5">
                 Test your knowledge of syllable formation, complex sound shifts, and final consonants through our interactive mastery quiz.
            </p>
        </div>
        <button class="btn btn-quiz rounded-pill shadow-lg" @click="OpenQuiz">
            Start Mastery Quiz
        </button>
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
                        <h5 class="modal-title fw-bold mt-2">
                            Korean Batchim Quiz
                        </h5>      
                        <p class="text-muted mb-0">
                            Test your understanding of Korean Batchim (final consonants) through simple and interactive quiz questions.
                        </p>
                    </div>
                </div>
                    <button type="button" class="btn-close shadow-none bg-light rounded-circle"
                        @click="isOpenQuiz = false">
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
                    <div class="question-container">
                        <span class="question-label">QUESTION</span>
                        <h2 class="question-text">{{currentQuestion.question}}</h2>
                    </div>
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
                    <button
                        v-for="choice in currentQuestion.choices"
                        :key="choice"
                        class="btn choice-card shadow-sm mb-3"
                        @click="Getanswer(choice)"
                        :disabled="showExplanation"
                       :class="{
                            active: selectedAnswer === choice,
                            correct: showExplanation && choice === currentQuestion.answer,
                            wrong: showExplanation && selectedAnswer === choice && selectedAnswer !== currentQuestion.answer
                        }"
                    >
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
import questionData from '../../../data/grammar/basic/questionData/batchimData'
import soundQuiz from '../../../gamesounds/sounds.vue'
export default {
    components: {
        soundQuiz
    },
    data() { 
        return {
            isBatchimExample: false,
            isOpenQuiz: false,
            questions: questionData,
            currentIndex: 0,
            score: 0,
            selectedAnswer: "",
            iscorrectAnswer: false,
            correctAnswer: "",
            isExplanation: false,
            explanation: "",
            showExplanation: false,
            isQuizFinished: false,
            isContinue: false,
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
         shuffleQuestions() {
            if (!this.questions) return;

            this.questions = [...this.questions]
                .sort(() => Math.random() - 0.5);
        },
        btnBatchimExample() { 
            this.isBatchimExample = !this.isBatchimExample;
             if (this.isBatchimExample) {
                    this.$nextTick(() => {
                        this.$refs.BatchimExample.scrollIntoView({ behavior: 'smooth' });
                    });
                }
        },
        OpenQuiz() { 
            this.isOpenQuiz = true;
            this.isQuizFinished = false
        },
         Getanswer(choice) { 
            this.selectedAnswer = choice;
        },
        checkAnswer() {
        // ✅ CORRECT ANSWER
        if (this.selectedAnswer === this.currentQuestion.answer) {
            this.iscorrectAnswer = true;
            this.isContinue = true
            this.correctAnswer = "correct";
            this.score++;
            this.$refs.gameSounds.playSound('correct');
        } 
        // ❌ WRONG ANSWER
        else {
            this.iscorrectAnswer = false;
            this.correctAnswer = "wrong";
            this.$refs.gameSounds.playSound('wrong');
            this.isContinue = true
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
                this.isOpenQuiz = false

            }
            this.selectedAnswer = ""
            this.isExplanation = false
            this.explanation = ""
            this.showExplanation = false
            this.isContinue = false
        },
    }
}
</script>
<style scoped src="../../../../../css/users/assets/lessons/basic/batchim.css"></style>
<style scoped src="../../../../../css/users/partials/card/k-card.css"></style>
<style scoped src="../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameFooter.css"></style>
<style scoped src="../../../../../css/users/partials/game/gameModal.css"></style>
<style scoped src="../../../../../css/users/partials/game/gamefinalresultmodal.css"></style>