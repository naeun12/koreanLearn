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
            ` <strong class="d-block text-dark">Ease of Pronunciation</strong>
             <span class="text-secondary small"> Korean speakers naturally change sounds to make words easier and faster to say. </span>
             <span class="d-block text-dark">Example:합니다 → 함니다</span>
             <span class="text-secondary small">(ham-ni-da instead of hap-ni-da)</span>
             <span class="d-block text-secondary small">Saying ㅂ + ㄴ directly is harder, so it changes smoothly.</span>`,
        ),
        new CorePrinciplesModel(
            2,
            "Smooth Sound Connection",
            `<strong class="d-block text-dark">Smooth Sound Connection</strong>
             <span class="text-secondary small">When a syllable ends in a consonant and the next syllable begins with a vowel,
             the final consonant often links to the next syllable.</span>
             <strong class="d-block text-dark">Example: 한국어 → 한구거 <br />책이 → 채기</strong>
             <span class="text-secondary small"> Sounds flow naturally between syllables.
             </span>`,
        ),
        new CorePrinciplesModel(
            3,
            "Neighboring Sounds Influence Each Other",
            `<span class="text-secondary small">A sound may change because of the letter besideit.</span>
             <strong class="d-block text-dark">Example: 국물 → 궁물 </strong>
            <span class="text-secondary small">ㅁ affects ㄱ, making it nasal.<br /> Nearby sounds often “blend.”
             </span>`,
        ),
        new CorePrinciplesModel(
            4,
            "Natural Speech Rhythm",
            ` <strong class="d-block text-dark">Natural Speech Rhythm</strong>
            <span class="text-secondary small">Some sounds become stronger or softer to match Korean speaking rhythm.</span>
            <strong class="d-block text-dark">Example: </strong>
            <span class="text-secondary small">학교 → 학꾜 </span>
            <span class="text-secondary small">Tense sounds help create clearer rhythm.</span>`,
        ),
        new CorePrinciplesModel(
            5,
            "Consistency in Native Speech",
            ` <strong class="d-block text-dark">Consistency in Native Speech</strong>
              <span class="text-secondary small">These sound changes are not random. They follow regular patterns used by native speakers.
              <br />Once you learn the rules, many words become predictable.</span>`,
        ),
    ],
};
