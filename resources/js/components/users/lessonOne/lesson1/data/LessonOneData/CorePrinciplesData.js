import CorePrinciplesModel from "../../models/LessonOneModel/CorePrinciplesModel";
export default {
    HangulStructureData: [
        new CorePrinciplesModel(
            1,
            "Phonetic Principle (Sound-Based Writing)",
            "Hangul is a phonetic alphabet, which means each letter represents a sound. Words are written exactly how they are pronounced, making reading and pronunciation much easier for learners."
        ),
      new CorePrinciplesModel(
    2,
    "Syllable Block System",
    `
    Instead of writing letters in a straight line, Hangul groups letters into square syllable blocks.
    Each block represents one complete syllable, formed by combining consonants and vowels.
    `,
    `
    <br>
    가 = ga <br>
    한 = han <br>
    국 = guk
    `
),
        new CorePrinciplesModel(
            3,
            "Combination of Consonants and Vowels",
            `
                Every syllable in Hangul is built using a combination
                of:
                <br />
                    Consonants (자음): Representing sounds like b, k, m,
                    s.
                    <br />
                        - Vowels (모음): Representing vowel sounds like a, e, i,
                        o, u.
                        <br />
                        These combine in structured patterns like:
                        <br />
                        Consonant + Vowel
                        <br />
                        Consonant + Vowel + Consonant
       `
        ),
         new CorePrinciplesModel(
            4,
            "Logical Letter Design",
            "The shapes of Hangul letters are not random. They were originally designed to represent the position of the mouth, tongue, and throat when pronouncing sounds. This makes the system intuitive and systematic."
        ),
          new CorePrinciplesModel(
            5,
            "Simplicity and Efficiency",
              "Hangul was created to be easy to learn and use. With only a small set of basic letters, learners can form thousands of words quickly and efficiently."
          ),
    ]
    
}