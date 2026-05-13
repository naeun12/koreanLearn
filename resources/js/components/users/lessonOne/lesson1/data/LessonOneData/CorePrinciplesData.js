import CorePrinciplesModel from "../../models/LessonOneModel/CorePrinciplesModel";
export default {
    HangulStructureData: [
        new CorePrinciplesModel(
            1,
            "Phonetic Principle (Sound-Based Writing)",
            "Hangul is a phonetic alphabet, which means each letter represents a sound. Words are written exactly how they are pronounced, making reading and pronunciation much easier for learners.",
        ),
        new CorePrinciplesModel(
            2,
            "Syllable Block System",
            `Instead of writing letters in a straight line, Hangul groups letters into square syllable blocks.
            Each block represents one complete syllable, formed by combining consonants and vowels.
            `,
            `
            <br>
            가 = ga <br>
            한 = han <br>
            국 = guk
            `,
        ),
        new CorePrinciplesModel(
            3,
            "Combination of Consonants and Vowels",
            `Every syllable in Hangul is built using a combination
            of: <br />Consonants (자음): Representing sounds like b, k, m,
            s.<br />- Vowels (모음): Representing vowel sounds like a, e, i,
            o, u.<br />These combine in structured patterns like:
            <br />Consonant + Vowel<br />
            Consonant + Vowel + Consonant
       `,
        ),
        new CorePrinciplesModel(
            4,
            "Logical Letter Design",
            "The shapes of Hangul letters are not random. They were originally designed to represent the position of the mouth, tongue, and throat when pronouncing sounds. This makes the system intuitive and systematic.",
        ),
        new CorePrinciplesModel(
            5,
            "Simplicity and Efficiency",
            "Hangul was created to be easy to learn and use. With only a small set of basic letters, learners can form thousands of words quickly and efficiently.",
        ),
    ],
    BasicVowelConsonantsData: [
        new CorePrinciplesModel(
            1,
            "Consonants create the base sound",
            "Every Korean syllable begins with a consonant or a silent placeholder (ㅇ).",
        ),
        new CorePrinciplesModel(
            2,
            "Vowels provide the voice sound",
            "Vowels determine the main sound of the syllable such as a, eo, o, u, i.",
        ),
        new CorePrinciplesModel(
            3,
            "Syllables are built in blocks",
            "Korean letters combine into one square-shaped syllable block like 가, 나, 한.",
        ),
        new CorePrinciplesModel(
            4,
            "At least one consonant + one vowel",
            "A complete Hangul syllable needs both parts to be readable.",
        ),
        new CorePrinciplesModel(
            5,
            "Vowel direction affects layout",
            "Vertical vowels (ㅏ,ㅓ,ㅣ) and horizontal vowels (ㅗ,ㅜ,ㅡ) change block structure.",
        ),

        new CorePrinciplesModel(
            6,
            "Consonant sounds can change",
            "Some consonants sound softer or stronger depending on position or nearby letters.",
        ),
        new CorePrinciplesModel(
            7,
            "Final consonants add ending sound",
            "Batchim (받침) closes the syllable and affects pronunciation.",
        ),
        new CorePrinciplesModel(
            8,
            "Practice improves fluency",
            "Repetition helps learners read faster and speak more naturally.",
        ),
    ],
    PronunciationRulesData: [
        new CorePrinciplesModel(
            1,
            "Economy of Effort",
            "Sounds shift to minimize the movement of the tongue and throat, allowing for faster, smoother speech flow.",
        ),
        new CorePrinciplesModel(
            2,
            "Syllable Interaction",
            "Pronunciation is rarely isolated; the final consonant (Batchim) of one block is heavily influenced by the start of the next.",
        ),
        new CorePrinciplesModel(
            3,
            "Nasal & Liquid Dominance",
            `Stronger sounds like ㄴ (n), ㅁ (m), and ㄹ (r/l) often "absorb" or transform weaker stops like ㄱ, ㄷ, and ㅂ.`,
        ),
        new CorePrinciplesModel(
            4,
            "Morphological Flow",
            "Grammatical particles and suffixes trigger specific shifts (like Palatalization) to distinguish word boundaries.",
        ),
        new CorePrinciplesModel(
            5,
            "Economy of Effort",
            "Sounds shift to minimize the movement of the tongue and throat, allowing for faster, smoother speech flow.",
        ),
    ],
    BatchimData: [
        new CorePrinciplesModel(
            1,
            "Final Consonant Position",
            "Batchim is the consonant placed at the bottom of a Hangul syllable block. It completes the syllable and gives it an ending sound.",
        ),

        new CorePrinciplesModel(
            2,
            "Pronunciation Changes",
            "Some consonants sound different when used as Batchim. Final sounds are often shorter and softer than their normal pronunciation.",
        ),
        new CorePrinciplesModel(
            3,
            "Linking Sound Rule",
            "When the next syllable starts with ㅇ, the Batchim sound can move smoothly to the next syllable for natural pronunciation.",
        ),
        new CorePrinciplesModel(
            4,
            "Grammar Importance",
            "Batchim affects Korean grammar particles such as 은/는, 이/가, and 을/를, which depend on whether a word ends with a consonant.",
        ),
        new CorePrinciplesModel(
            5,
            "Essential for Fluency",
            "Learning Batchim improves reading speed, clearer pronunciation, and helps you sound more natural when speaking Korean.",
        ),
    ],
    BasicSoundChangeData: [
        new CorePrinciplesModel(
            1,
            "Ease of Pronunciation",
            ` <strong class="d-block text-secondary-color">Ease of Pronunciation</strong>
             <span class="text-secondary-color"> Korean speakers naturally change sounds to make words easier and faster to say. </span>
             <span class="d-block text-secondary-color">Example:합니다 → 함니다</span>
             <span class="text-secondary-color">(ham-ni-da instead of hap-ni-da)</span>
             <span class="d-block text-secondary-color">Saying ㅂ + ㄴ directly is harder, so it changes smoothly.</span>`,
        ),
        new CorePrinciplesModel(
            2,
            "Smooth Sound Connection",
            `<strong class="text-secondary-color">Smooth Sound Connection</strong>
             <span class="text-secondary-color">When a syllable ends in a consonant and the next syllable begins with a vowel,
             the final consonant often links to the next syllable.</span>
             <strong class="text-secondary-color">Example: 한국어 → 한구거 <br />책이 → 채기</strong>
             <span class="text-secondary-color"> Sounds flow naturally between syllables.
             </span>`,
        ),
        new CorePrinciplesModel(
            3,
            "Neighboring Sounds Influence Each Other",
            `<span class="text-secondary-color">A sound may change because of the letter besideit.</span>
             <strong class="text-secondary-color">Example: 국물 → 궁물 </strong>
            <span class="text-secondary-color">ㅁ affects ㄱ, making it nasal.<br /> Nearby sounds often “blend.”
             </span>`,
        ),
        new CorePrinciplesModel(
            4,
            "Natural Speech Rhythm",
            ` <strong class="text-secondary-color">Natural Speech Rhythm</strong>
            <span class="text-secondary-color">Some sounds become stronger or softer to match Korean speaking rhythm.</span>
            <strong class="text-secondary-color">Example: </strong>
            <span class="text-secondary-color">학교 → 학꾜 </span>
            <span class="text-secondary-color">Tense sounds help create clearer rhythm.</span>`,
        ),
        new CorePrinciplesModel(
            5,
            "Consistency in Native Speech",
            ` <strong class="text-secondary-color">Consistency in Native Speech</strong>
              <span class="text-secondary-color">These sound changes are not random. They follow regular patterns used by native speakers.
              <br />Once you learn the rules, many words become predictable.</span>`,
        ),
    ],
    ToBeData: [
        new CorePrinciplesModel(
            1,
            "Change of State Principle",
            `
            <p class="text-secondary-color">
            Use <strong>되다 (doeda)</strong> when something changes into something else.
            </p>
            <ul class="text-secondary-color m-4">
            <li>Focus: transformation or becoming</li>
            <li>Example: <strong>학생이 되다 → to become a student</strong></li>
            </ul>
                `,
        ),
        new CorePrinciplesModel(
            2,
            "Identity vs Change Principle",
            `
            <ul class="text-secondary-color m-4">
            <li><strong>이다 (ida)</strong> → permanent identity (is/am/are)</li>
            <li><strong>되다 (doeda)</strong> → change into a new identity</strong></li>
            <li><strong>Example:</strong><ul class="text-secondary-color">
             <li><strong>나는 학생이다</strong> → I am a student</li>
            <li><strong>나는 학생이 되었다</strong> → I became a student></li>
            </ul></li>
            </ul>
                `,
        ),
        new CorePrinciplesModel(
            3,
            "Time Reference Principle",
            `
            <ul class="text-secondary-color m-4">
            <li><strong>Present:</strong>되다 → becomes / is becoming</li>
            <li><strong>Past:</strong> 되었다 → became</li>
             <li><strong>Future:</strong> 될 것이다 → will become</li>
            </ul>
                `,
        ),
        new CorePrinciplesModel(
            4,
            "Future Intention Principle",
            `
            <p class="text-secondary-color">
            Use <strong>(으)ㄹ 것이다</strong> to express:
            </p>
            <ul class="text-secondary-color m-4">
            <li>future plans</li>
            <li>predictions</li>
            <li>expectations</li>
            <li>Example: <ul class="text-secondary-color">
                <li><strong>의사가 될 것이다</strong> → will become a doctor</li>
            </ul></li>

            </ul>
                `,
        ),
        new CorePrinciplesModel(
            5,
            "Sentence Structure Principle",
            `
            <p class="text-secondary-color">
            Basic pattern:
            </p>
            <p class="text-secondary-color m-3">
            Subject + object + 이/가 + 되다 / 될 것이다
            </p>
            <ul class="text-secondary-color">
            <li>Example: <ul class="text-secondary-color">
                <li>나는 의사가 될 것이다</li>
            </ul></li>
            </ul>
                `,
        ),
        new CorePrinciplesModel(
            6,
            "Context Importance Principle",
            `
            <p class="text-secondary-color">
            Meaning depends on context:
            </p>
            <ul class="text-secondary-color m-4">
            <li><strong>“되다”</strong> can mean become, work, or function depending on sentence</li>
            <li>Always check surrounding words</li>
            </ul>
                `,
        ),
    ],
};
