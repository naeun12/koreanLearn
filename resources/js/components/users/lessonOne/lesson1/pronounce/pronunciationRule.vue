<template>
    <div class="k-card">
        <h1 class="fw-black text-dark mb-3">
            Pronunciation Rules
            <span class="text-primary">(Phonetic Mastery)</span>
        </h1>
        <p class="lead text-secondary text-justify" style="max-width: 2000px">
            <strong>Advanced Phonetic Transitions</strong> govern how Korean
            syllables flow naturally in spoken conversation. While basic vowels
            and consonants form the foundation, the true essence of Korean
            pronunciation lies in mastering the
            <strong>16 essential rules</strong> including Nasalization,
            Palatalization, and Liquidization. These rules dictate how sounds
            shift and blend when specific letters meet, such as the ㅂ sound
            changing to an ㅁ in "감사합니다." By internalizing these phonetic
            shifts, you will move beyond literal reading to achieve a more
            rhythmic, native-like fluency, ensuring your speaking and listening
            skills are both accurate and natural.
        </p>
        <div class="row g-4">
            <div class="col-12">
                <h2
                    class="h5 text-uppercase fw-bold text-muted mb-4"
                    style="letter-spacing: 1px"
                >
                    Core Principles of Pronunciation Rules
                </h2>
            </div>
            <div class="list-group list-group-flush gap-3">
                <div
                    class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow"
                >
                    <div
                        class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; flex-shrink: 0"
                    >
                        <span class="fw-bold text-primary">1</span>
                    </div>
                    <div>
                        <strong class="d-block text-dark"
                            >Economy of Effort</strong
                        >
                        <span class="text-secondary small">
                            Sounds shift to minimize the movement of the tongue
                            and throat, allowing for faster, smoother speech
                            flow.
                        </span>
                    </div>
                </div>
                <div
                    class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow"
                >
                    <div
                        class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; flex-shrink: 0"
                    >
                        <span class="fw-bold text-primary">2</span>
                    </div>
                    <div>
                        <strong class="d-block text-dark"
                            >Syllable Interaction</strong
                        >
                        <span class="text-secondary small">
                            Pronunciation is rarely isolated; the final
                            consonant (Batchim) of one block is heavily
                            influenced by the start of the next.
                        </span>
                    </div>
                </div>
                <div
                    class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow"
                >
                    <div
                        class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; flex-shrink: 0"
                    >
                        <span class="fw-bold text-primary">3</span>
                    </div>
                    <div>
                        <strong class="d-block text-dark"
                            >Nasal & Liquid Dominance</strong
                        >
                        <span class="text-secondary small">
                            Stronger sounds like ㄴ (n), ㅁ (m), and ㄹ (r/l)
                            often "absorb" or transform weaker stops like ㄱ,
                            ㄷ, and ㅂ.
                        </span>
                    </div>
                </div>
                <div
                    class="list-group-item border-0 p-3 rounded-3 bg-light d-flex align-items-start transition-all hover-shadow"
                >
                    <div
                        class="me-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; flex-shrink: 0"
                    >
                        <span class="fw-bold text-primary">4</span>
                    </div>
                    <div>
                        <strong class="d-block text-dark"
                            >Morphological Flow</strong
                        >
                        <span class="text-secondary small">
                            Grammatical particles and suffixes trigger specific
                            shifts (like Palatalization) to distinguish word
                            boundaries.
                        </span>
                    </div>
                </div>
            </div>
            <div
                class="mt-5 p-4 rounded-4 bg-primary text-white shadow-sm position-relative overflow-hidden"
            >
                <div
                    class="d-flex align-items-center position-relative"
                    style="z-index: 1"
                >
                    <div class="me-3 fs-2">💡</div>

                    <div>
                        <strong class="d-block mb-1"
                            >Pro Tip: Think “Connection First, Spelling
                            Second</strong
                        >

                        <p class="mb-0 opacity-75 small">
                            In Korean pronunciation rules, the biggest mistake
                            learners make is reading syllables one by one.
                            Native pronunciation is not about blocks it’s about
                            sound connection across words.
                        </p>
                    </div>

                    <button
                        class="example-sentences ms-auto"
                        @click="btnPronunciationRuleExample()"
                    >
                        Example
                    </button>
                </div>

                <div
                    class="position-absolute"
                    style="
                        width: 100px;
                        height: 100px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 50%;
                        right: -20px;
                        bottom: -20px;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div
        class="mt-4 p-4 bg-white overflow-hidden mb-3 k-card"
        v-if="isPronunciationRuleExample"
        ref="PronunciationRule"
    >
        <div class="p-4 border-bottom border-light bg-white">
            <div class="d-flex align-items-center">
                <div class="p-2 bg-primary-subtle rounded-3 me-3 text-primary">
                    <i class="bi bi-arrow-repeat fs-4"></i>
                </div>
                <div>
                    <h3
                        class="h5 fw-black text-dark mb-0"
                        style="letter-spacing: -0.5px"
                    >
                        Pronunciation Rules
                    </h3>
                    <p class="text-muted small mb-0">
                        Korean pronunciation changes depending on how sounds
                        connect between syllables. Final consonants (batchim),
                        nasalization, linking, and other phonetic rules
                        transform how words are actually spoken in natural
                        conversation. Below are beginner-friendly examples of
                        these sound changes.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="k-card shadow-lg border-0 overflow-hidden"
            style="
                background: #ffffff;
                border-radius: 30px;
                border-top: 6px solid #4f46e5;
            "
        >
            <div class="row g-3">
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 1</span
                            >
                            <span class="text-primary fw-bold small"
                                >Linking</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (음악)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>으막
                                (Eu-mak)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The final consonant slides over to the next empty
                            'ㅇ' syllable.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 2</span
                            >
                            <span class="text-primary fw-bold small"
                                >Linking</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (한국어)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>한구거
                                (Han-gu-geo)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The 'ㄱ' sound moves forward to create a smooth flow
                            between words
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 3</span
                            >
                            <span class="text-primary fw-bold small"
                                >Linking</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (있어요)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>이써요
                                (I-sseo-yo)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            Double consonants like 'ㅆ' carry their sound into
                            the next vowel.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 4</span
                            >
                            <span class="text-primary fw-bold small"
                                >Nasalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (합니다)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>함니다
                                (Ham-ni-da)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The 'p/b' sound (ㅂ) becomes an 'm' sound when
                            followed by ㄴ.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 5</span
                            >
                            <span class="text-primary fw-bold small"
                                >Nasalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (국물)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>궁물
                                (Gung-mul)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The 'k/g' sound (ㄱ) turns into an 'ng' sound when
                            followed by ㅁ.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 6</span
                            >
                            <span class="text-primary fw-bold small"
                                >Nasalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (작년)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>장년
                                (Jang-nyeon)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The ㄱ changes to an 'ng' sound for a softer
                            transition into ㄴ.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 7</span
                            >
                            <span class="text-primary fw-bold small"
                                >Nasalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (낱말)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>난말
                                (Nan-mal)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The final ㅌ changes to an 'n' sound when it meets
                            the nasal ㅁ
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 8</span
                            >
                            <span class="text-primary fw-bold small"
                                >Lateralization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (연락)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>열락
                                (Yeol-lak)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            When ㄴ and ㄹ meet, they both transform into a
                            strong 'L' sound.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 9</span
                            >
                            <span class="text-primary fw-bold small"
                                >Lateralization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (관리)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>괄리
                                (Gwal-li)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The bottom ㄴ is pulled into an 'L' sound by the
                            following ㄹ
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 10</span
                            >
                            <span class="text-primary fw-bold small"
                                >Lateralization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (신라)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>실라
                                (Sil-la)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            A "Double L" is used because it's easier to say than
                            switching from N to R.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 11</span
                            >
                            <span class="text-primary fw-bold small"
                                >Tensification</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (학교)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>학꾜
                                (Hak-kkyo)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The second consonant becomes "double" or sharp after
                            a stop sound like ㄱ.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 12</span
                            >
                            <span class="text-primary fw-bold small"
                                >Tensification</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (식당)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>식땅
                                (Sik-ttang)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The ㄷ becomes a sharp 'TT' sound due to the
                            pressure of the ㄱ.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 13</span
                            >
                            <span class="text-primary fw-bold small"
                                >Aspiration</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (축하해)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>추카해 (Chu-ka-hae
                                )</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            ㄱ + ㅎ merge to create the strong, breathy ㅋ sound
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 14</span
                            >
                            <span class="text-primary fw-bold small"
                                >Aspiration</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (입학)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>이팍 (I-pak)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            ㅂ + ㅎ merge to create the aspirated, breathy ㅍ
                            sound.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 15</span
                            >
                            <span class="text-primary fw-bold small"
                                >Neutralization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (꽃)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>꼿 (Kkot)</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            Complex end-sounds like ㅊ revert to a basic 'T'
                            stop at word ends.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 16</span
                            >
                            <span class="text-primary fw-bold small"
                                >Palatalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (같이)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>가치 (Ga-chi
                                )</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            When ㅌ is followed by the vowel 이, it naturally
                            shifts to a 'CH' sound
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div
                        class="example-row h-100 p-3 rounded-4 border-start border-4 border-primary bg-light transition-all"
                    >
                        <!-- Header -->
                        <div class="d-flex align-items-center mb-2">
                            <span
                                class="badge rounded-pill bg-dark px-3 py-1 me-2 small text-uppercase"
                                >Ex 17</span
                            >
                            <span class="text-primary fw-bold small"
                                >S-Palatalization</span
                            >
                        </div>
                        <div
                            class="d-flex flex-wrap gap-2 align-items-center mb-3"
                        >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong> Written: </strong> (시)</span
                            >
                            <span
                                class="p-2 rounded-3 bg-white border shadow-sm small"
                                ><strong>Pronounced: </strong>시 (Shi )</span
                            >
                        </div>
                        <div class="text-secondary small mb-3">
                            The ㅅ sound shifts to 'SH' when followed by the
                            vowel ㅣ or 'y' sounds.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="practice-banner mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text-white"
        >
            <div class="mb-4 mb-md-0 text-center text-md-start">
                <h3 class="fw-black mb-1">
                    Master Korean Vowel & Consonant Sounds
                </h3>
                <p class="mb-0 opacity-75 fs-5">
                    Strengthen your foundation in Hangul by practicing how
                    vowels and consonants combine to form syllables. Learn how
                    each letter contributes<br />
                    to pronunciation, improve your reading accuracy, and build
                    confidence in recognizing Korean sound patterns through
                    interactive exercises and quizzes.
                </p>
            </div>
            <button
                class="btn btn-quiz rounded-pill shadow-lg"
                @click="openQuiz = true"
            >
                Start Mastery Quiz
            </button>
        </div>
    </div>
    <GameModal
        v-model="openQuiz"
        :questions="questions"
        :gameDescription="gameDescription"
        :gameTitle="gameTitle"
    />
</template>
<script>
import GameModal from "../../../../users/partials/games/gameModal.vue";
import questionData from "../data/LessonOneData/questionsData";

export default {
    components: {
        GameModal,
    },
    data() {
        return {
            isPronunciationRuleExample: false,
            openQuiz: false,
            questions: questionData.questionsPronunciationRules,
            gameTitle: "Pronunciation Rules Quiz",
            gameDescription:
                "Improve your pronunciation through guided practice exercises",
        };
    },
    methods: {
        btnPronunciationRuleExample() {
            this.isPronunciationRuleExample = !this.isPronunciationRuleExample;
            if (this.isPronunciationRuleExample) {
                this.$nextTick(() => {
                    this.$refs.PronunciationRule.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        },
    },
};
</script>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/basic/batchim.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/card/k-card.css"
></style>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gameFooter.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gameModal.css"
></style>
<style
    scoped
    src="../../../../../../css/users/partials/game/gamefinalresultmodal.css"
></style>
