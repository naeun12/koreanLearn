<template>
    <div class="app-layout">
        <div class="main-wrapper">
            <navigation />

            <main class="content-area">
                <div class="container py-5">

                    <div class="selector-container mb-5">
                        <div class="category-pill-wide">
                            <div class="active-bg" :class="activeCategory"></div>

                            <button @click="activeCategory = 'basic'"
                                :class="{ 'active-text': activeCategory === 'basic' }">Consonants</button>
                            <button @click="activeCategory = 'vowels'"
                                :class="{ 'active-text': activeCategory === 'vowels' }">Vowels</button>
                            <button @click="activeCategory = 'double_c'"
                                :class="{ 'active-text': activeCategory === 'double_c' }">Dbl Cons</button>
                            <button @click="activeCategory = 'double_v'"
                                :class="{ 'active-text': activeCategory === 'double_v' }">Dbl Vowels</button>
                            <button @click="activeCategory = 'batchim'"
                                :class="{ 'active-text': activeCategory === 'batchim' }">Batchim</button>
                            <button @click="startEmojiGame" :class="{ 'active-text': activeCategory === 'game' }"
                                class="game-btn-nav">
                                <i class="bi bi-controller me-1"></i>Play
                            </button>
                        </div>
                    </div>

                    <div v-if="activeCategory === 'game'" class="game-container shadow-lg">
                        <div v-if="lives <= 0" class="game-overlay">
                            <h1 class="display-3 fw-800 text-danger">GAME OVER</h1>
                            <p class="fs-4">You scored <strong>{{ score }}</strong> points!</p>
                            <button @click="startEmojiGame" class="btn-restart">Try Again</button>
                        </div>

                        <div class="game-dashboard d-flex justify-content-between align-items-center mb-4">
                            <div class="stat-box">
                                <span class="label">SCORE</span>
                                <span class="value">{{ score }}</span>
                            </div>
                            <div class="lives-box">
                                <i v-for="n in 3" :key="n" class="bi"
                                    :class="n <= lives ? 'bi-heart-fill text-danger' : 'bi-heart text-secondary'">
                                </i>
                            </div>
                        </div>

                        <div class="quiz-section text-center">
                            <div class="quiz-card" :class="feedback">
                                <div class="quiz-char">{{ currentQuestion.kr }}</div>
                                <button @click="playSound(currentQuestion.kr)" class="speaker-btn">
                                    <i class="bi bi-volume-up-fill"></i>
                                </button>
                            </div>
                            <p class="text-muted mt-4">Identify the correct sound:</p>
                            <div class="options-grid mt-3">
                                <button v-for="option in gameOptions" :key="option" @click="checkAnswer(option)"
                                    class="option-pill">
                                    {{ option }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="activeCategory === 'basic'" class="main-glass-card">
                        <div class="card-intro text-center mb-5">
                            <h1 class="display-6 fw-800">Basic Consonants</h1>
                            <p class="text-muted">The 14 fundamental building blocks.</p>
                        </div>
                        <div class="modern-grid">
                            <div v-for="l in basicLetters" :key="l.kr" class="letter-tile basic"
                                @click="playSound(l.kr)">
                                <div class="tile-inner">
                                    <div class="kr-glyph">{{ l.kr }}</div>
                                    <span class="romaji">{{ l.en }}</span>
                                    <small class="mnemonic">{{ l.ex }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="activeCategory === 'vowels'" class="main-glass-card vowel-theme">
                        <div class="card-intro text-center mb-5">
                            <h1 class="display-6 fw-800">Basic Vowels</h1>
                            <p class="text-muted">The 10 essential vowel sounds.</p>
                        </div>
                        <div class="modern-grid">
                            <div v-for="v in basicVowels" :key="v.kr" class="letter-tile vowel"
                                @click="playSound(v.kr)">
                                <div class="tile-inner">
                                    <div class="kr-glyph">{{ v.kr }}</div>
                                    <span class="romaji">{{ v.en }}</span>
                                    <small class="mnemonic">{{ v.ex }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="activeCategory === 'double_c'" class="main-glass-card tense-theme">
                        <div class="card-intro text-center mb-5">
                            <h1 class="display-6 fw-800">Double Consonants</h1>
                            <p class="text-muted">Tense sounds (Ssang-jaeum).</p>
                        </div>
                        <div class="modern-grid">
                            <div v-for="dl in doubleLetters" :key="dl.kr" class="letter-tile double"
                                @click="playSound(dl.kr)">
                                <div class="tile-inner">
                                    <div class="kr-glyph">{{ dl.kr }}</div>
                                    <span class="romaji">{{ dl.en }}</span>
                                    <small class="mnemonic">{{ dl.ex }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="activeCategory === 'double_v'" class="main-glass-card adv-vowel-theme">
                        <div class="card-intro text-center mb-5">
                            <h1 class="display-6 fw-800">Double Vowels</h1>
                            <p class="text-muted">Combined vowel sounds or Diphthongs.</p>
                        </div>
                        <div class="modern-grid">
                            <div v-for="dv in doubleVowels" :key="dv.kr" class="letter-tile adv-vowel"
                                @click="playSound(dv.kr)">
                                <div class="tile-inner">
                                    <div class="kr-glyph">{{ dv.kr }}</div>
                                    <span class="romaji">{{ dv.en }}</span>
                                    <small class="mnemonic">{{ dv.ex }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="activeCategory === 'batchim'" class="main-glass-card batchim-theme">
                        <div class="card-intro text-center mb-5">
                            <h1 class="display-6 fw-800">Final Consonants</h1>
                            <p class="text-muted">Consonants at the end of a syllable block.</p>
                        </div>
                        <div class="batchim-list">
                            <div v-for="b in batchimRules" :key="b.kr" class="batchim-row" @click="playSound(b.kr)">
                                <div class="batchim-char">{{ b.kr }}</div>
                                <div class="batchim-info">
                                    <div class="batchim-sound">Sounds like: <strong>{{ b.en }}</strong></div>
                                    <div class="batchim-ex">Example: {{ b.ex }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>

<script>
import navigation from './partials/navigation.vue';

export default {
    components: { navigation },
    data() {
        return {
            // Mao ni ang mo-toggle sa imong CSS active-bg class
            activeCategory: 'basic',

            // GAME STATE
            score: 0,
            lives: 3,
            currentQuestion: {},
            gameOptions: [],
            feedback: '', // 'correct-state' or 'wrong-state'

            // --- DATA ARRAYS ---
            basicLetters: [
                { kr: 'ㄱ', en: 'g/k', ex: 'giyeok' },
                { kr: 'ㄴ', en: 'n', ex: 'nieun' },
                { kr: 'ㄷ', en: 'd/t', ex: 'digeut' },
                { kr: 'ㄹ', en: 'r/l', ex: 'rieul' },
                { kr: 'ㅁ', en: 'm', ex: 'mieum' },
                { kr: 'ㅂ', en: 'b/p', ex: 'bieup' },
                { kr: 'ㅅ', en: 's', ex: 'siot' },
                { kr: 'ㅇ', en: 'ng', ex: 'ieung' },
                { kr: 'ㅈ', en: 'j', ex: 'jieut' },
                { kr: 'ㅊ', en: 'ch', ex: 'chieut' },
                { kr: 'ㅋ', en: 'k', ex: 'kieuk' },
                { kr: 'ㅌ', en: 't', ex: 'tieut' },
                { kr: 'ㅍ', en: 'p', ex: 'pieup' },
                { kr: 'ㅎ', en: 'h', ex: 'hieut' }
            ],
            basicVowels: [
                { kr: 'ㅏ', en: 'a', ex: 'a' },
                { kr: 'ㅑ', en: 'ya', ex: 'ya' },
                { kr: 'ㅓ', en: 'eo', ex: 'eo' },
                { kr: 'ㅕ', en: 'yeo', ex: 'yeo' },
                { kr: 'ㅗ', en: 'o', ex: 'o' },
                { kr: 'ㅛ', en: 'yo', ex: 'yo' },
                { kr: 'ㅜ', en: 'u', ex: 'u' },
                { kr: 'ㅠ', en: 'yu', ex: 'yu' },
                { kr: 'ㅡ', en: 'eu', ex: 'eu' },
                { kr: 'ㅣ', en: 'i', ex: 'i' }
            ],
            doubleLetters: [
                { kr: 'ㄲ', en: 'kk', ex: 'ssang giyeok' },
                { kr: 'ㄸ', en: 'tt', ex: 'ssang digeut' },
                { kr: 'ㅃ', en: 'pp', ex: 'ssang bieup' },
                { kr: 'ㅆ', en: 'ss', ex: 'ssang siot' },
                { kr: 'ㅉ', en: 'jj', ex: 'ssang jieut' }
            ],
            doubleVowels: [
                { kr: 'ㅐ', en: 'ae', ex: 'ae' },
                { kr: 'ㅒ', en: 'yae', ex: 'yae' },
                { kr: 'ㅔ', en: 'e', ex: 'e' },
                { kr: 'ㅖ', en: 'ye', ex: 'ye' },
                { kr: 'ㅘ', en: 'wa', ex: 'wa' },
                { kr: 'ㅙ', en: 'wae', ex: 'wae' },
                { kr: 'ㅚ', en: 'oe', ex: 'oe' },
                { kr: 'ㅝ', en: 'wo', ex: 'wo' },
                { kr: 'ㅞ', en: 'we', ex: 'we' },
                { kr: 'ㅟ', en: 'wi', ex: 'wi' },
                { kr: 'ㅢ', en: 'ui', ex: 'ui' }
            ],
            batchimRules: [
                { kr: 'ㄱ, ㅋ, ㄲ', en: 'k', ex: '책 (chaek)' },
                { kr: 'ㄴ', en: 'n', ex: '눈 (nun)' },
                { kr: 'ㄷ, ㅅ, ㅈ, ㅊ, ㅌ, ㅎ, ㅆ', en: 't', ex: '옷 (ot)' },
                { kr: 'ㄹ', en: 'l', ex: '물 (mul)' },
                { kr: 'ㅁ', en: 'm', ex: '몸 (mom)' },
                { kr: 'ㅂ, ㅍ', en: 'p', ex: '집 (jip)' },
                { kr: 'ㅇ', en: 'ng', ex: '공 (gong)' }
            ]
        }
    },
    methods: {
        playSound(text) {
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = "ko-KR";
            window.speechSynthesis.speak(msg);
        },
        startEmojiGame() {
            this.activeCategory = 'game';
            this.score = 0;
            this.lives = 3;
            this.feedback = '';
            this.nextQuestion();
        },
        nextQuestion() {
            this.feedback = '';
            const pool = [...this.basicLetters, ...this.basicVowels, ...this.doubleLetters, ...this.doubleVowels];
            this.currentQuestion = pool[Math.floor(Math.random() * pool.length)];
            let options = [this.currentQuestion.en];
            while (options.length < 4) {
                let randomOption = pool[Math.floor(Math.random() * pool.length)].en;
                if (!options.includes(randomOption)) {
                    options.push(randomOption);
                }
            }
            // Shuffle choices
            this.gameOptions = options.sort(() => Math.random() - 0.5);
        },
        checkAnswer(selected) {
            if (this.lives <= 0) return;

            if (selected === this.currentQuestion.en) {
                this.score += 10;
                this.feedback = 'correct-state';

                // 🎉 success sound
                new Audio('/sounds/gamevisualsound/chrisiex1-correct-156911.mp3').play();
                setTimeout(this.nextQuestion, 600);
            } else {
                this.lives--;
                this.feedback = 'wrong-state';
                new Audio('/sounds/gamevisualsound/wrong.mp3').play();
                setTimeout(() => {
                    this.feedback = '';
                }, 500);
            }
        }
    },
    mounted() {
        document.title = "Korean Learning Platform - Korean Letters";
    },  
}
</script>
<style scoped src="../../../css/users/koreanletters.css">

</style>