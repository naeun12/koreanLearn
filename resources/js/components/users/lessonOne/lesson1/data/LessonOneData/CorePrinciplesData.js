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
};
