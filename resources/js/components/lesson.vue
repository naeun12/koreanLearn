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
                                <p class="lead text-muted mb-0">Ready to master the Korean language? Let’s start with
                                    the basics.</p>
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

                                    <div class="pronunciation-guide-container h-100">

                                        <div class="row align-items-stretch g-4">

                                            <!-- LEFT CARD (UNCHANGED) -->
                                            <div class="col-lg-4">

                                                <div
                                                    class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden">

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

                                                            <li class="d-flex align-items-start gap-3" v-for="pronunciationtip in pronunciationTips">
                                                                <div class="bg-white rounded-circle p-1 text-primary">
                                                                    <i class="bi bi-check2"></i>
                                                                </div>
                                                                <div>
                                                                    <strong>{{ pronunciationtip.title }}:</strong> {{ pronunciationtip.description}} <p>Example: {{ pronunciationtip.example}}</p>
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
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'greetings'">
                            <div class="row align-items-stretch g-4">
                                 <div class="col-lg-4">
      
                                    <div
                                        class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden">

                                        <div class="card-body p-4 position-relative">

                                            <div
                                                class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3">
                                                🗣️
                                            </div>

                                                  <h3 class="fw-bold mb-3"><i class="bi bi-hand-index-thumb"></i>
                                                        Greeting Tips</h3>

                                                    <p class="small opacity-75">
                                                        Learn how Koreans greet each other in real life—simple, natural,
                                                        and easy to follow.
                                                    </p>

    

                                            <ul class="list-unstyled mt-4 d-flex flex-column gap-3">

                                                <li class="d-flex align-items-start gap-3"
                                                    v-for="greeting in greetings">
                                                  
                                                           <div>
                                                                <i :class="greeting.icon"></i>
                                                                <span class="ms-2">{{ greeting.text }}</span>
                                                            </div>
      
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        </div>
                                        </div>
                                       <div class="col-lg-8">
                                        
                                            <div
                                                class="card-body-greeting p-5 shadow-sm border-0 position-relative overflow-hidden">
                                                <div
                                                    class="border-1 position-absolute top-0 start-0 w-100 h-100 z-0">
                                                </div>

                                                <div class="position-relative z-1">
                                                    <h1 class="display-5 fw-bold mb-3 text-gradient">
                                                        What is a Greeting?
                                                    </h1>
                                                    <p class="lead text-secondary lh-base">
                                                        A greeting is more than just words it's the gateway to a
                                                        conversation.
                                                        In Korean culture, greetings carry deep significance, reflecting
                                                        <span class=" fw-semibold">respect</span>,
                                                        <span class=" fw-semibold">politeness</span>, and
                                                        <span class=" fw-semibold">friendliness</span>.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-4">
                                                <div class="row g-4">
                                                    <div class="col-lg-6 col-xl-4"
                                                        v-for="greetingcontent in greetingscontent"
                                                        :key="greetingcontent.id">
                                                        <div
                                                            class="card-greeting-content glass-effect p-3 shadow-sm border-0 h-100">
                                                            <div class="row align-items-center g-0">

                                        
                                                                <div class=" ps-3 text-start">
                                                                   <div class="icon-wrapper shadow-sm w-100 h-100 mb-4">
                                                                        <div class="glass-overlay"></div>
                                                                        <img :src="greetingcontent.image"
                                                                            alt="Greeting Illustration"
                                                                            class="img-fluid greeting-image">
                                                                    </div>
                                                                    <h1
                                                                        class="h4 fw-bold text-primary mb-1 hangul-text">
                                                                        {{ greetingcontent.korean }}</h1>
                                                                    <h2
                                                                        class="h6 text-muted fw-normal mb-2 text-uppercase tracking-wider small">
                                                                        {{ greetingcontent.meaning }}
                                                                    </h2>
                                                                    <p class="x-small text-secondary mb-3 lh-sm">
                                                                        {{ greetingcontent.usage }}
                                                                    </p>

                                                                    <button @click="greetingVoice(greetingcontent.sound)"
                                                                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2">
                                                                        <i class="bi bi-volume-up-fill"></i>
                                                                        <span>Listen</span>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="usage-container p-4 p-md-5 glass-effect border-0">
                                                    <div class="text-center mb-5">
                                                        <h1 class="display-6 fw-bold text-gradient mb-2">When to Use?
                                                        </h1>
                                                        <p class="text-secondary">Understanding Korean social fullGameData and
                                                            etiquette</p>
                                                    </div>

                                                    <div class="row g-4">
                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="usage-card shadow-sm h-100">
                                                                <div class="usage-icon bg-soft-danger">
                                                                    <i class="bi bi-person-workspace"></i>
                                                                </div>
                                                                <h3 class="h6 fw-bold mt-3">Teachers & Elders</h3>
                                                                <p class="small text-muted mb-0">Always use honorifics
                                                                    and full polite speech.</p>
                                                                <span class="badge rounded-pill bg-danger mt-2">Highly
                                                                    Formal</span>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="usage-card shadow-sm h-100">
                                                                <div class="usage-icon bg-soft-primary">
                                                                    <i class="bi bi-people-fill"></i>
                                                                </div>
                                                                <h3 class="h6 fw-bold mt-3">Strangers</h3>
                                                                <p class="small text-muted mb-0">Default to
                                                                    <strong>안녕하세요</strong> for safety.</p>
                                                                <span class="badge rounded-pill bg-primary mt-2">Polite
                                                                    (Jondaemal)</span>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="usage-card shadow-sm h-100">
                                                                <div class="usage-icon bg-soft-info">
                                                                    <i class="bi bi-briefcase-fill"></i>
                                                                </div>
                                                                <h3 class="h6 fw-bold mt-3">Business Settings</h3>
                                                                <p class="small text-muted mb-0">Use formal endings even
                                                                    with colleagues.</p>
                                                                <span
                                                                    class="badge rounded-pill bg-info mt-2">Professional</span>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="usage-card shadow-sm h-100">
                                                                <div class="usage-icon bg-soft-success">
                                                                    <i class="bi bi-chat-heart-fill"></i>
                                                                </div>
                                                                <h3 class="h6 fw-bold mt-3">Close Friends</h3>
                                                                <p class="small text-muted mb-0">Casual
                                                                    <strong>안녕</strong> is acceptable here.</p>
                                                                <span
                                                                    class="badge rounded-pill bg-success mt-2">Informal
                                                                    (Banmal)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="practice-section p-4 p-md-5 glass-effect border-0 mt-5">
                                                    <div class="text-center mb-5">
                                                        <h2 class="display-6 fw-bold text-gradient">How to Practice</h2>
                                                        <p class="text-secondary">Follow these steps to master Korean
                                                            greetings naturally.</p>
                                                    </div>

                                                    <div class="row g-4 justify-content-center">
                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="practice-card shadow-sm">
                                                                <div class="step-badge">1</div>
                                                                <div class="practice-icon">
                                                                    <i class="bi bi-ear-fill text-primary"></i>
                                                                </div>
                                                                <h4 class="h5 fw-bold">Listen First</h4>
                                                                <p class="small text-muted">Focus on the intonation and
                                                                    pronunciation before you try to speak.</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="practice-card shadow-sm">
                                                                <div class="step-badge">2</div>
                                                                <div class="practice-icon">
                                                                    <i class="bi bi-mic-fill text-danger"></i>
                                                                </div>
                                                                <h4 class="h5 fw-bold">Shadow It</h4>
                                                                <p class="small text-muted">Repeat the words out loud
                                                                    every day to build muscle memory.</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="practice-card shadow-sm">
                                                                <div class="step-badge">3</div>
                                                                <div class="practice-icon">
                                                                    <i class="bi bi-speedometer2 text-warning"></i>
                                                                </div>
                                                                <h4 class="h5 fw-bold">Pace Control</h4>
                                                                <p class="small text-muted">Start slowly for accuracy,
                                                                    then gradually increase your speed.</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="practice-card shadow-sm border-primary-subtle">
                                                                <div class="step-badge">4</div>
                                                                <div class="practice-icon">
                                                                    <i class="bi bi-chat-dots-fill text-info"></i>
                                                                </div>
                                                                <h4 class="h5 fw-bold">Real World</h4>
                                                                <p class="small text-muted">Use these greetings in real
                                                                    situations to gain true confidence.</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 col-lg-4">
                                                            <div class="practice-card tip-card h-100">
                                                                <div class="practice-icon">
                                                                    <i class="bi bi-heart-pulse-fill text-white"></i>
                                                                </div>
                                                                <h4 class="h5 fw-bold text-white">Don't Worry!</h4>
                                                                <p class="small text-white opacity-75">Mistakes are
                                                                    proof you're learning. Keep trying!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                                       <div class="col-12 mt-5">
                                            <div
                                                class="reminder-banner p-4 p-md-5 overflow-hidden position-relative border-0 shadow-lg">
                                                <div class="blur-circle-1"></div>
                                                <div class="blur-circle-2"></div>

                                                <div class="row align-items-center position-relative z-index-1">
                                                    <div class="col-md-2 text-center text-md-start mb-3 mb-md-0">
                                                        <div class="heart-wrapper shadow">
                                                            <i class="bi bi-heart-fill text-white fs-1"></i>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h3 class="fw-bold text-white mb-2">Confidence starts here.</h3>
                                                        <p class="lead text-white opacity-90 mb-0">
                                                            Mastering greetings is your first major milestone in
                                                            speaking Korean fluently.
                                                            Remember, <span class="fw-bold border-bottom border-2">small
                                                                daily steps</span> lead to massive improvements over
                                                            time.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div class="fixed-bottom p-3 d-flex justify-content-center" >
                                        <button
                                            class="btn btn-practice-bottom w-100 d-flex align-items-center justify-content-center shadow-sm"                                             data-bs-toggle="modal" data-bs-target="#gameModal">
                                            <i class="bi bi-pencil-square me-2"></i>
                                            <span>Practice Now</span>
                                        </button>
                                    </div>
                                    
                                  <div class="modal fade" id="gameModal" tabindex="-1" ref="gameModal">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content glass-modal">

                                                <div class="modal-body text-center p-4" v-if="currentLevel">
                                                   

                                                   

                                                    <h4 class="fw-bold mb-1">{{ currentLevel.korean }}</h4>
                                                    <p class="text-primary fw-medium mb-3">{{ currentLevel.english }}
                                                    </p>
                                                    <p class="text-muted small mb-4 px-3">{{ currentLevel.description }}
                                                    </p>

                                                    <div class="voice-section mb-4">
                                                        <div class="mic-wrapper">
                                                            <button @click="toggleMic" class="btn-mic shadow"
                                                                :class="{ 'is-listening': isRecording, 'is-correct': isCorrect }">
                                                                <i
                                                                    :class="isRecording ? 'bi bi-mic-fill' : 'bi bi-mic'"></i>
                                                            </button>
                                                            <div v-if="isRecording" class="pulse-ring"></div>
                                                        </div>
                                                        <p class="mt-3 transcript-preview">{{ transcript || '...' }}</p>
                                                    </div>
                                                </div>

                                                <div class="modal-footer border-0 justify-content-center pb-4">
                                                    <button @click="prevLevel" class="btn btn-light rounded-pill px-4"
                                                        :disabled="currentIndex === 0">Back</button>

                                                    <button @click="handleNavigation"
                                                        class="btn btn-primary rounded-pill px-4 shadow-sm"
                                                        :disabled="!isCorrect">
                                                        {{ currentIndex === 2 ? 'Finish' : 'Next' }}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'grammar'">
                                    grammar
                                </transition-group>
                                <transition-group name="fade-slide" tag="div" class="row g-3"
                                    v-if="activeMainSection === 'verb'">
                                    verb
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
import hangulData from './data/koreanalphabet.js';
import pronunciationTips from './data/pronunciationTips.js';
import pronunciationRules from './data/pronunciationRules.js';
import greetings from './data/greetingstip.js';
import greetingContent from './data/greetingscontent.js'
import GameData from './data/greetinggame.js'
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
            vowels: hangulData.vowels,
            consonants: hangulData.consonants,
            doubleConsonants: hangulData.doubleConsonants,
            otherConsonants: hangulData.otherConsonants,
            pronunciationTips: pronunciationTips.pronunciationTipsData,
            pronunciationRules: pronunciationRules.pronunciationRules,
            greetings: greetings.Greeting,
            greetingscontent: greetingContent.GreetingContent,
            fullList: GameData.GreetingGame, // Dito papasok yung 7 items mo
            currentIndex: 0,
            isRecording: false,
            transcript: '',
            isCorrect: false,
            recognition: null
            

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
                    new Audio('/sounds/gamevisualsound/chrisiex1-correct-156911.mp3').play();
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
                                        new Audio('/sounds/gamevisualsound/audley_fergine-game-over-classic-206486.mp3').play();


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
        },
        greetingVoice(file) {
            const audio = new Audio(`/sounds/greetings/${file}`);
            audio.play();
        },
        toggleMic() {
            if (this.isRecording) {
                this.recognition.stop();
            } else {
                this.isCorrect = false;
                this.transcript = '';
                this.isRecording = true;
                this.recognition.start();
            }
        },
        checkSpeech() {
            // Inihahambing ang boses sa correctResponse ng model mo
            const voiceInput = this.transcript.replace(/\s/g, '');
            const target = this.currentLevel.correctResponse.replace(/\s/g, '');

            if (voiceInput === target) {
                this.isCorrect = true;
                this.playAudio(this.currentLevel.audio);
            }
        },
        playAudio(file) {
            const audio = new Audio(`/audio/${file}`);
            audio.play();
        },
        handleNavigation() {
            if (this.currentIndex < 2) {
                this.currentIndex++;
                this.resetState();
            } else {
                alert("Practice Complete!");
                // Isara ang modal or i-reset ang game
            }
        },
        prevLevel() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.resetState();
            }
        },
        resetState() {
            this.isCorrect = false;
            this.transcript = '';
        }
       
        
    },
    
    mounted() {
        document.title = "Korean Learning Platform - Lesson 1";
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRec) {
            this.recognition = new SpeechRec();
            this.recognition.lang = 'ko-KR';

            this.recognition.onresult = (event) => {
                this.transcript = event.results[0][0].transcript;
                this.checkSpeech();
            };

            // Importante: Kapag nag-end ang mic pero hindi pa 'Correct', 
            // i-restart natin para tuloy-tuloy ang pakikinig.
            this.recognition.onend = () => {
                if (this.isRecording && !this.isCorrect) {
                    this.recognition.start();
                } else {
                    this.isRecording = false;
                }
            };
        }

        // Listener para sa Bootstrap Modal - 'shown.bs.modal' 
        // Ibig sabihin, pagka-open na pagka-open ng modal, mag-start ang mic.
        const modalEl = document.getElementById('gameModal');
        modalEl.addEventListener('shown.bs.modal', () => {
            this.startAutomaticMic();
        });

        // Patayin ang mic pag sinara ang modal
        modalEl.addEventListener('hide.bs.modal', () => {
            this.stopMic();
        });
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
        gameLevels() {
            return this.fullList.slice(0, 3);
        },
        currentLevel() {
            return this.gameLevels[this.currentIndex];
        }
    

       


},
}
</script>
<style  src="../../css/users/lesson.css"></style>
<style src="../../css/trytospeekbutton.css"></style>
