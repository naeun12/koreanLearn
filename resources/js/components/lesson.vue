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
                                <p class="lead text-muted mb-0">Ready to master Hangul today? Let's start with the
                                    basics.</p>
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
                                <div class="d-flex justify-content-between align-items-center mb-4"  v-if="activeMainSection === 'Hangul'">
                                    <div>
                                       <h3 class="fw-bold mb-0 text-capitalize">
                                            {{ sectionTitle }}
                                        </h3>
                                       
                                    </div>

                                    <div v-if="activeMainSection === 'Hangul'" class="btn-group shadow-sm bg-white rounded-3 p-1 border">
                                        <button @click="prevSection" class="btn btn-sm px-3 rounded-2"
                                            :class="canGoBack ? 'btn-light text-primary' : 'btn-light text-muted'"
                                            :disabled="!canGoBack">
                                            <i class="bi bi-arrow-left"></i>
                                        </button>

                                        <span class="btn btn-sm disabled text-dark fw-bold border-0 px-2">
                                            {{ currentIndex + 1 }} / {{ sections.length }}
                                        </span>

                                        <button @click="nextSection" class="btn btn-sm px-3 rounded-2"
                                            :class="canGoForward ? 'btn-primary' : 'btn-light text-muted'"
                                            :disabled="!canGoForward">
                                            <i class="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <transition-group name="fade-slide" tag="div" class="row g-3" v-if="activeMainSection === 'Hangul'">
                                    <template v-if="currentSection === 'consonants'">
                                        <div v-for="consonant in consonants" :key="'c-' + consonant.char"
                                            class="col-sm-6 col-lg-4 col-xxl-3" style="cursor: pointer;"
                                            @click="isalphabetimageModal(consonant.image,consonant.char, consonant.instruction)">
                                            <div
                                                class="card h-100 border-0 shadow-sm rounded-4 hover-lift text-center py-4 bg-white border">
                                                <div class="hangul-char display-4 fw-bold text-primary mb-2">{{
                                                    consonant.char }}</div>
                                                <div class="badge bg-light text-primary border px-3 mb-2">{{ consonant.sound
                                                    }}</div>
                                                <p class="small text-muted mb-0 px-3">{{ consonant.description }}</p>
                                                <button
                                                    class="modern-btn-minimal d-flex align-items-center justify-content-center gap-2"
                                                    @click="playSound(consonant.char)">
                                                    <span class="icon">🔊</span>
                                                    <span>Play Sound</span>
                                                </button>
                                            </div>
                                           </div>

                                    </template>


                                    <template v-if="currentSection === 'vowels'">
                                        <div v-for="vowel in vowels" :key="'v-' + vowel.char"
                                            class="col-sm-6 col-lg-4 col-xxl-3">
                                            <div
                                                class="card h-100 border-0 shadow-sm rounded-4 hover-lift text-center py-4 bg-white border-start-4 border-primary">
                                                <div class="hangul-char display-4 fw-bold text-dark mb-2">{{ vowel.char }}
                                                </div>
                                                <div
                                                    class="badge bg-warning-subtle text-dark border border-warning px-3 mb-2">
                                                    {{ vowel.sound }}</div>
                                                <p class="small text-muted mb-0 px-3">{{ vowel.description }}</p>
                                               <button
                                                    class="modern-btn-minimal d-flex align-items-center justify-content-center gap-2"
                                                    @click="playSound(vowel.char)">
                                                    <span class="icon">🔊</span>
                                                    <span>Play Sound</span>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </template>
                                    <template v-if="currentSection === 'doubleConsonants'">
                                        <div v-for="con in doubleConsonants" :key="'c-' + con.char"
                                            class="col-sm-6 col-lg-4 col-xxl-3">
                                            <div
                                                class="card h-100 border-0 shadow-sm rounded-4 hover-lift text-center py-4 bg-white border-start-4 border-warning">
                                                <div class="hangul-char display-4 fw-bold text-dark mb-2">{{ con.char }}
                                                </div>
                                                <div
                                                    class="badge bg-warning-subtle text-dark border border-warning px-3 mb-2">
                                                    {{ con.sound }}</div>
                                                <p class="small text-muted mb-0 px-3">{{ con.description }}</p>
                                               <button
                                                    class="modern-btn-minimal d-flex align-items-center justify-content-center gap-2"
                                                    @click="playSound(con.char)">
                                                    <span class="icon">🔊</span>
                                                    <span>Play Sound</span>
                                                </button>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-if="currentSection === 'otherconsonants'">
                                        <div v-for="con in otherConsonants" :key="'c-' + con.char"
                                            class="col-sm-6 col-lg-4 col-xxl-3">
                                            <div
                                                class="card h-100 border-0 shadow-sm rounded-4 hover-lift text-center py-4 bg-white border-start-4 border-warning">
                                                <div class="hangul-char display-4 fw-bold text-dark mb-2">{{ con.char }}
                                                </div>
                                                <div
                                                    class="badge bg-warning-subtle text-dark border border-warning px-3 mb-2">
                                                    {{ con.sound }}</div>
                                                <p class="small text-muted mb-0 px-3">{{ con.description }}</p>
                                                <button
                                                    class="modern-btn-minimal d-flex align-items-center justify-content-center gap-2"
                                                    @click="playSound(con.char)">
                                                    <span class="icon">🔊</span>
                                                    <span>Play Sound</span>
                                                </button>
                                            </div>
                                        </div>
                                    </template>

                                </transition-group>
                               <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'pronunciation'">   

                                    <div class="pronunciation-guide-container h-50">

                                        <div class="row align-items-stretch g-4">

                                            <!-- LEFT CARD (UNCHANGED) -->
                                            <div class="col-lg-4">

                                                <div
                                                    class="card h-50 border-0 shadow-sm rounded-4 bg-primary text-white overflow-hidden">

                                                    <div class="card-body p-4 position-relative">

                                                        <div
                                                            class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3">
                                                            🗣️
                                                        </div>

                                                        <h3 class="fw-bold mb-3">Pronunciation Pro-Tips</h3>

                                                        <p class="small opacity-75">
                                                            Mastering these rules is the secret to moving from "reading
                                                            letters" to "speaking Korean."
                                                        </p>

                                                        <ul class="list-unstyled mt-4 d-flex flex-column gap-3">

                                                            <li class="d-flex align-items-start gap-3">
                                                                <div class="bg-white rounded-circle p-1 text-primary">
                                                                    <i class="bi bi-check2"></i>
                                                                </div>
                                                                <div>
                                                                    <strong>Tenseness:</strong> Tighten your throat for
                                                                    double consonants.
                                                                </div>
                                                            </li>

                                                            <li class="d-flex align-items-start gap-3">
                                                                <div class="bg-white rounded-circle p-1 text-primary">
                                                                    <i class="bi bi-check2"></i>
                                                                </div>
                                                                <div>
                                                                    <strong>No Puff:</strong> Basic consonants like 'ㅂ'
                                                                    shouldn't have air puff.
                                                                </div>
                                                            </li>

                                                        </ul>

                                                    </div>

                                                </div>

                                            </div>

                                            <!-- RIGHT CONTENT (NOW DYNAMIC) -->
                                            <div class="col-lg-8">

                                                <div class="row g-3 ">

                                                    <div class="col-md-6" v-for="tip in pronunciationRules"
                                                        :key="tip.id">

                                                        <div
                                                            class="card h-100 border-0 shadow-sm rounded-4 border-start border-4 border-info bg-white p-3 hover-lift">

                                                            <h6 class="text-info fw-bold text-uppercase smaller-text">
                                                                {{ tip.title }}
                                                            </h6>

                                                            <p class="small text-muted">
                                                                {{ tip.rule }}
                                                            </p>

                                                            <div class="bg-light p-2 rounded-3 text-center">

                                                                <span class="text-muted">{{ tip.exampleFrom }}</span>

                                                                <i class="bi bi-arrow-right mx-2"></i>

                                                                <strong>{{ tip.exampleTo }}</strong>

                                                            </div>
                                                            <!-- 🔊 TRY TO SPEAK -->
                                                            <button
                                                                class="modern-btn-minimal w-100 mt-2 d-flex align-items-center justify-content-center gap-2"
                                                                @click="playSound(tip.speak)">
                                                                🔊 Play Sound
                                                            </button>
                                                           
                                                           <div class="button-wrapper">
                                                                <button class="btn-minimal-speak"
                                                                    @click="tryToSpeak(tip.speak)">
                                                                    <div class="icon-circle">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" stroke-width="2.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <span>Try to Speak</span>
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </transition-group>
                               <div class="bottom-sheet" v-if="isListening">
                                    <div class="handle"></div>
                                    <div class="speech-content">
                                        <span class="status-badge">Listening...</span>

                                        <div class="result-wrapper">
                                            <div class="hangul-display">{{ spokenText ||
                                                '...' }}<transition name="success-pop">
                                                    <div v-if="isspeakCorrect" class="feedback-toast success">
                                                        <div class="icon-wrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="3"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="text-group">
                                                            <span class="label-main">Perfect!</span>
                                                            <span class="label-sub">Accurate pronunciation</span>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                            <transition name="error-shake">
                                                <div v-if="isFinalResult" class="feedback-toast error">
                                                    <div class="icon-wrapper">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="3" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </div>
                                                    <div class="text-group">
                                                        <span class="label-main">Correct Pronouncation!
                                                            {{ finalResult }}</span>
                                                        <span class="label-sub">Try Again</span>
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>

                                        <button class="close-btn" @click="isListening = false">Done</button>
                                    </div>
                                </div>
                                <div  class="modal-alphabet" v-if="alphabetinstructiondraw" id="modernImageModal"
                                   >
                                    <div class="modal-dialog modal-dialog-centered modal-xl">
                                        <div class="modal-content custom-card-style">

                                            <button type="button" class="btn-close custom-close" @click="alphabetinstructiondraw = false"
                                            ></button>

                                            <div class="modal-body p-0">
                                                <div class="card border-0">
                                                    <img :src="Alphabetimage" :alt="Alphabetimage"
                                                        class="img-fluid rounded-top-4" alt="Full size view">


                                                    <div class="card-body p-4">
                                                    

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                              <div v-if="activeMainSection === 'Hangul'" class="mt-5 p-4 rounded-4 border-0 shadow-sm transition-all" :class="{
                                    'bg-primary-subtle text-primary': currentSection === 'vowels',
                                    'bg-success-subtle text-success': currentSection === 'consonants',
                                    'bg-warning-subtle text-dark': currentSection === 'doubleConsonants',
                                    'bg-info-subtle text-dark': currentSection === 'otherconsonants'
                                }">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="bi bi-lightbulb-fill me-2 fs-5"></i>
                                        <h5 class="mb-0 fw-bold">Pro Learning Tip</h5>
                                    </div>

                                    <p v-if="currentSection === 'vowels'" class="mb-0 small">
                                        Vowels cannot stand alone! Combine these with the silent <strong>ㅇ</strong> to
                                        form blocks like
                                        <strong>아</strong> (a) or <strong>야</strong> (ya).
                                    </p>

                                    <p v-else-if="currentSection === 'consonants'" class="mb-0 small">
                                        The sound of these can change! For example, <strong>ㄱ</strong> sounds like 'k'
                                        at the end of a word but more like 'g' at the start.
                                    </p>

                                    <p v-else-if="currentSection === 'doubleConsonants'" class="mb-0 small">
                                        These require "tenseness." Imagine you are tightening your throat or stomach
                                        muscles to create a sharp, forceful sound!
                                    </p>

                                    <p v-else-if="currentSection === 'otherconsonants'" class="mb-0 small">
                                        These are "diphthongs" (combined vowels). Think of them as sliding your tongue
                                        from the first vowel sound into the second!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                  
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from './partials/navigation.vue';
export default {
    components: {
        navigation
    },
    data() {
        return {
            currentSection: 'consonants',
            activeMainSection: 'Hangul',
            isListening: 0,
            finalResult: '',
            alphabetinstructiondraw: false,
            Alphabetimage: null,
            Alphabetname: '',
            Alphabetexample: '',
            isFinalResult: false,
            isspeakCorrect: false,
            speakCorrect: '',
            correctSpeak: 0,
            spokenText: 'Im Listening.....',
            sections: ['consonants', 'vowels', 'doubleConsonants', 'otherconsonants'],

            vowels: [
                { char: 'ㅏ', sound: 'a', description: 'Like "ah" in father.', example: 'FATHER' },
                { char: 'ㅑ', sound: 'ya', description: 'Like "yah" in yard.', example: 'YARD' },
                { char: 'ㅓ', sound: 'eo', description: 'Like "u" in up.', example: 'UP' },
                { char: 'ㅕ', sound: 'yeo', description: 'Like "yo" in young.', example: 'YOUNG' },
                { char: 'ㅗ', sound: 'o', description: 'Like "o" in home.', example: 'HOME' },
                { char: 'ㅛ', sound: 'yo', description: 'Like "yo" in yoga.', example: 'YOGA' },
                { char: 'ㅜ', sound: 'u', description: 'Like "oo" in moon.', example: 'MOON' },
                { char: 'ㅠ', sound: 'yu', description: 'Like "yu" in youth.', example: 'YOUTH' },
                { char: 'ㅡ', sound: 'eu', description: 'Like "u" in pull.', example: 'PULL' },
                { char: 'ㅣ', sound: 'i', description: 'Like "ee" in meet.', example: 'MEET' }
            ],

            consonants: [
                {
                    char: 'ㄱ',
                    sound: 'g/k',
                    description: 'Soft "k" or "g" sound.',
                    example: 'GUN',
                    image: '/hangulalphabetimages/g.png',
                    instruction: 'Draw a short horizontal line first, then a vertical line going down from the right end.'
                },
                {
                    char: 'ㄴ',
                    sound: 'n',
                    description: 'Like "n" in nose.',
                    example: 'NOSE',
                    image: '/hangulalphabetimages/n.png',
                },
                {
                    char: 'ㄷ',
                    sound: 'd/t',
                    description: 'Soft "t" or "d" sound.',
                    example: 'DOG',
                    image: '/hangulalphabetimages/d.png',
                },
                {
                    char: 'ㄹ',
                    sound: 'r/l',
                    description: 'Between "r" and "l".',
                    example: 'RATTLE',
                    image: '/hangulalphabetimages/r.png',
                },
                {
                    char: 'ㅁ',
                    sound: 'm',
                    description: 'Like "m" in mouth.',
                    example: 'MOUTH',
                    image: '/hangulalphabetimages/m.png',
                },
                {
                    char: 'ㅂ',
                    sound: 'b/p',
                    description: 'Soft "b" or "p" sound.',
                    example: 'BUCKET',
                    image: '/hangulalphabetimages/b.png',
                },
                {
                    char: 'ㅇ',
                    sound: 'ng',
                    description: 'Silent prefix; "ng" suffix.',
                    example: 'SING',
                    image: '/hangulalphabetimages/ng.png',
                },
                {
                    char: 'ㅅ',
                    sound: 's',
                    description: 'Like "s" in soul.',
                    example: 'SOUL',
                    image: '/hangulalphabetimages/s.png',
                },
                {
                    char: 'ㅈ',
                    sound: 'j',
                    description: 'Like "j" in jump.',
                    example: 'JUMP',
                    image: '/hangulalphabetimages/j.png',
                },
                {
                    char: 'ㅊ',
                    sound: 'ch',
                    description: 'Strong "ch" sound like in chair.',
                    example: 'CHAIR',
                    image: '/hangulalphabetimages/ch.png',
                },
                {
                    char: 'ㅋ',
                    sound: 'k',
                    description: 'Strong aspirated "k" sound.',
                    example: 'KITE',
                    image: '/hangulalphabetimages/k.png',
                },
                {
                    char: 'ㅌ',
                    sound: 't',
                    description: 'Strong aspirated "t" sound.',
                    example: 'TOP',
                    image: '/hangulalphabetimages/t.png',
                },
                {
                    char: 'ㅍ',
                    sound: 'p',
                    description: 'Strong aspirated "p" sound.',
                    example: 'PEN',
                    image: '/hangulalphabetimages/p.png',
                },
                {
                    char: 'ㅎ',
                    sound: 'h',
                    description: 'Soft breath "h" sound.',
                    example: 'HOPE',
                    image: '/hangulalphabetimages/h.png',
                }
            ],
            doubleConsonants: [
                { char: 'ㄲ', sound: 'kk', description: 'Tense "k" sound.', example: 'SKILL' },
                { char: 'ㄸ', sound: 'tt', description: 'Tense "t" sound.', example: 'STOP' },
                { char: 'ㅃ', sound: 'pp', description: 'Tense "p" sound.', example: 'SPY' },
                { char: 'ㅆ', sound: 'ss', description: 'Tense "s" sound.', example: 'SEA' },
                { char: 'ㅉ', sound: 'jj', description: 'Tense "j" sound.', example: 'MESSAGE (the "ge")' }
            ],

            otherConsonants: [
                { char: 'ㅐ', sound: 'ae', description: 'Like "a" in care.', example: 'CARE' },
                { char: 'ㅒ', sound: 'yae', description: 'Like "ya" in yankee.', example: 'YANKEE' },
                { char: 'ㅔ', sound: 'e', description: 'Like "e" in bed.', example: 'BED' },
                { char: 'ㅖ', sound: 'ye', description: 'Like "ye" in yes.', example: 'YES' },
                { char: 'ㅘ', sound: 'wa', description: 'Like "wa" in water.', example: 'WATER' },
                { char: 'ㅙ', sound: 'wae', description: 'Like "wa" in wax.', example: 'WAX' },
                { char: 'ㅚ', sound: 'oe', description: 'Like "we" in wet.', example: 'WET' },
                { char: 'ㅝ', sound: 'wo', description: 'Like "wo" in won.', example: 'WON' },
                { char: 'ㅞ', sound: 'we', description: 'Like "we" in wedding.', example: 'WEDDING' },
                { char: 'ㅟ', sound: 'wi', description: 'Like "wee" in week.', example: 'WEEK' },
                { char: 'ㅢ', sound: 'ui', description: 'Combined "eu" and "i".', example: 'UI' }
            ],

            pronunciationRules: [
                {
                    id: 1,
                    title: "Tenseness",
                    type: "warning",
                    rule: "Double consonants are pronounced with a tight, strong sound from the throat.",
                    exampleFrom: "학교",
                    exampleTo: "학꾜 (hak-kyo)",
                    speak: "학교"
                },
                {
                    id: 2,
                    title: "No Puff (Aspiration Control)",
                    type: "info",
                    rule: "Basic consonants like ㅂ, ㄷ, ㄱ, ㅈ, ㅅ are pronounced without strong air release.",
                    exampleFrom: "바다",
                    exampleTo: "ba-da",
                    speak: "바다"
                },
                {
                    id: 3,
                    title: "Liaison (Linking)",
                    type: "success",
                    rule: "When a syllable ends in a consonant and the next starts with ㅇ, the consonant moves forward.",
                    exampleFrom: "먹어요",
                    exampleTo: "머거요 (meo-geo-yo)",
                    speak: "먹어요"
                },
                {
                    id: 4,
                    title: "Nasalization",
                    type: "warning",
                    rule: "When ㄱ, ㄷ, ㅂ meet ㄴ or ㅁ, the sound becomes nasal (m/n/ng flow).",
                    exampleFrom: "합니다",
                    exampleTo: "함니다 (ham-ni-da)",
                    speak: "합니다"
                },
                {
                    id: 5,
                    title: "Tensification",
                    type: "warning",
                    rule: "Two consonants together can make a tense double sound.",
                    exampleFrom: "국밥",
                    exampleTo: "국빱 (guk-bbap)",
                    speak: "국밥"
                },
                {
                    id: 6,
                    title: "Batchim Rules",
                    type: "info",
                    rule: "Final consonants are simplified or pronounced differently depending on position.",
                    exampleFrom: "읽다",
                    exampleTo: "익따 (ik-tta)",
                    speak: "읽다"
                },
                {
                    id: 7,
                    title: "Assimilation",
                    type: "info",
                    rule: "Consonants change to make pronunciation smoother and easier to flow.",
                    exampleFrom: "국물",
                    exampleTo: "궁물 (gung-mul)",
                    speak: "국물"
                },
                {
                    id: 8,
                    title: "Liquidization",
                    type: "info",
                    rule: "When ㄴ and ㄹ meet, or ㄹ and ㄴ meet, it becomes a double ㄹ sound.",
                    exampleFrom: "신라",
                    exampleTo: "실라 (sil-la)",
                    speak: "신라"
                },
                {
                    id: 9,
                    title: "Aspiration Rule",
                    type: "warning",
                    rule: "When ㅎ meets another consonant, the sound becomes stronger or changes.",
                    exampleFrom: "좋다",
                    exampleTo: "조타 (jo-ta)",
                    speak: "좋다"
                },
                {
                    id: 10,
                    title: "Final Sound Neutralization",
                    type: "info",
                    rule: "Only specific consonant sounds are pronounced at the end of a syllable.",
                    exampleFrom: "닭",
                    exampleTo: "닥 (dak)",
                    speak: "닭"
                }
            ],

        }
    },
    methods: {
        nextSection() {
            const currentIndex = this.sections.indexOf(this.currentSection);
            if (currentIndex < this.sections.length - 1) {
                this.currentSection = this.sections[currentIndex + 1];
            }
        },
        prevSection() {
            const currentIndex = this.sections.indexOf(this.currentSection);
            if (currentIndex > 0) {
                this.currentSection = this.sections[currentIndex - 1];
            }
        }, 
        changeSection(sectionName) {
            // Update the active section when clicked
            this.activeMainSection = sectionName;

            // Add any additional logic here (like switching views)
            console.log("Switched to:", sectionName);
        },
        isalphabetimageModal(image,text,example) { 
            this.Alphabetimage = image;
            this.alphabetinstructiondraw = true;
            this.Alphabetexample = example;
            this.Alphabetname = text;
        },
        enableAutoSpeech() {
            console.log("User interacted, starting speech...");
            this.startSpeak();
        },
        playSound(text) {
            if (!text) return;

            const utterance = new SpeechSynthesisUtterance(text);

            // Korean voice
            utterance.lang = "ko-KR";

            // AI-like tuning
            utterance.pitch = 1;
            utterance.rate = 0.9;

            console.log("🔊 Playing:", text);

            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        },
        tryToSpeak(speak) {
            this.isListening = true;
            this.spokenText = "";
            this.isFinalResult = false;
            this.finalResult = "";
            this.isspeakCorrect = false;
            this.correctSpeak = 0;


            const SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                alert("Speech recognition not supported");
                return;
            }

            const recognition = new SpeechRecognition();

            recognition.lang = "ko-KR";
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = (event) => {
                let text = "";
                this.isspeakCorrect = false;
                this.correctSpeak = 0;


                for (let i = event.resultIndex; i < event.results.length; i++) {
                    text += event.results[i][0].transcript;
                }

                this.spokenText = text;

                // 🔥 IF / ELSE CHECK
                if (text.includes(speak)) {
                    console.log("🟢 CORRECT:", text);
                    this.isspeakCorrect = true;
                    this.correctSpeak += 1;
                } else {
                    console.log("🔴 WRONG:", text, "Expected:", speak);
                }
            };

            recognition.onerror = (err) => {
                console.error("🔴 Speech error:", err.error);
            };

            // ⏱️ AUTO STOP AFTER 20 SECONDS
            setTimeout(() => {
                recognition.stop();
                // FINAL CHECK BEFORE STOP
                if (this.spokenText && this.spokenText.length > 1) {

                    if (this.spokenText.includes(speak)) {
                        console.log("✅ FINAL RESULT: Correct pronunciation!");
                        this.speakCorrect = true;
                    } else {
                        this.speakCorrect = false;
                        this.isFinalResult = true;
                        this.finalResult = speak;
                    }

                } else {
                    this.speakCorrect = false;
                    this.isFinalResult = true;
                    this.finalResult = speak;
                }

                console.log("⛔ Stopped after 20 seconds");
            }, 30000);

            this.recognition = recognition;
        }
    },
    mounted() {
        document.title = "Korean Learning Platform - activeMainSection";
    },
    computed: {
    currentIndex() {
        return this.sections.indexOf(this.currentSection);
    },
    canGoBack() {
        return this.currentIndex > 0;
    },
    canGoForward() {
        return this.currentIndex < this.sections.length - 1;
        },
        sectionTitle() {
            switch (this.currentSection) {
                case 'vowels':
                    return 'Basic Vowels';
                case 'consonants':
                    return 'Basic Consonants';
                case 'doubleConsonants':
                    return 'Double Consonants';
                case 'otherconsonants':
                    return 'Aspirated Consonants';
                default:
                    return 'Hangul activeMainSection';
            }
        },

},
}
</script>
<style  src="../../css/users/lesson.css"></style>
<style src="../../css/trytospeekbutton.css"></style>
