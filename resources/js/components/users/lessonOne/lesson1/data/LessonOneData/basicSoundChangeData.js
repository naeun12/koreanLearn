import basicSoundChangeModel from "../../models/LessonOneModel/basicSoundChangeModel";

export default {
  questions: [
    new basicSoundChangeModel(
      1,
      "What is the main purpose of Korean sound changes?",
      "multiple_choice",
      [
        "To make pronunciation smoother",
        "To make spelling harder",
        "To remove vowels",
        "To change grammar rules"
      ],
      "To make pronunciation smoother",
      "They make Korean speech flow naturally."
    ),

    new basicSoundChangeModel(
      2,
      "합니다 is commonly pronounced as?",
      "multiple_choice",
      ["hap-ni-da", "ham-ni-da", "ha-ni-da", "hab-ni-da"],
      "ham-ni-da",
      "ㅂ + ㄴ becomes ㅁ + ㄴ for smoother speech."
    ),

    new basicSoundChangeModel(
      3,
      "What happens in 책이 → 채기?",
      "multiple_choice",
      [
        "Final consonant links to next vowel",
        "Vowel disappears",
        "Consonant becomes silent",
        "No change"
      ],
      "Final consonant links to next vowel",
      "The final consonant connects to the next syllable."
    ),

    new basicSoundChangeModel(
      4,
      "한국어 is pronounced as?",
      "short_answer",
      null,
      "han-gu-geo",
      "Syllables are linked smoothly."
    ),

    new basicSoundChangeModel(
      5,
      "국물 → 궁물 is an example of what sound change?",
      "identification",
      null,
      "nasalization",
      "ㄱ changes due to nasal influence of ㅁ."
    ),

    new basicSoundChangeModel(
      6,
      "학교 is pronounced as?",
      "multiple_choice",
      ["hak-gyo", "hak-kyo", "ha-kyo", "hak-yo"],
      "hak-kyo",
      "Tense consonant appears after batchim."
    ),

    new basicSoundChangeModel(
      7,
      "입구 becomes?",
      "multiple_choice",
      ["ip-gu", "ip-kku", "ib-gu", "i-gu"],
      "ip-kku",
      "ㄱ becomes tense after final consonant."
    ),

    new basicSoundChangeModel(
      8,
      "국밥 is pronounced as?",
      "multiple_choice",
      ["guk-bap", "guk-ppap", "gu-bap", "gup-bap"],
      "guk-ppap",
      "ㅂ becomes tense after batchim."
    ),

    new basicSoundChangeModel(
      9,
      "설날 becomes?",
      "short_answer",
      null,
      "seol-lal",
      "ㄴ changes to ㄹ between liquid sounds."
    ),

    new basicSoundChangeModel(
      10,
      "신라 is pronounced as?",
      "multiple_choice",
      ["sin-ra", "sil-la", "shi-ra", "sin-la"],
      "sil-la",
      "ㄴ + ㄹ becomes double ㄹ."
    ),

    new basicSoundChangeModel(
      11,
      "좋아요 becomes?",
      "multiple_choice",
      ["jo-ha-yo", "jo-a-yo", "jo-yo", "joh-a-yo"],
      "jo-a-yo",
      "ㅎ becomes silent in fast speech."
    ),

    new basicSoundChangeModel(
      12,
      "놓다 is pronounced as?",
      "short_answer",
      null,
      "no-ta",
      "ㅎ affects the next consonant."
    ),

    new basicSoundChangeModel(
      13,
      "많다 becomes?",
      "multiple_choice",
      ["man-da", "man-ta", "ma-ta", "mal-ta"],
      "man-ta",
      "ㅎ strengthens the following consonant."
    ),

    new basicSoundChangeModel(
      14,
      "What sound change is in 국물 → 궁물?",
      "identification",
      null,
      "nasalization",
      "Nasal consonant influence."
    ),

    new basicSoundChangeModel(
      15,
      "Which is linking sound change?",
      "multiple_choice",
      ["책이 → 채기", "국물 → 궁물", "학교 → 학꾜", "많다 → 만타"],
      "책이 → 채기",
      "Final consonant connects to next syllable."
    ),

    new basicSoundChangeModel(
      16,
      "Which shows tense consonant?",
      "multiple_choice",
      ["학교", "국물", "신라", "책이"],
      "학교",
      "Consonant becomes stronger after batchim."
    ),

    new basicSoundChangeModel(
      17,
      "What improves by learning sound changes?",
      "multiple_choice",
      [
        "Reading only",
        "Listening only",
        "Speaking only",
        "Reading, listening, and speaking"
      ],
      "Reading, listening, and speaking",
      "Improves overall communication skills."
    ),

    new basicSoundChangeModel(
      18,
      "Final consonants in Korean are called?",
      "short_answer",
      null,
      "batchim",
      "Final consonants affect pronunciation."
    ),

    new basicSoundChangeModel(
      19,
      "Sound changes in Korean are?",
      "multiple_choice",
      [
        "Random changes",
        "Strict grammar rules",
        "Fixed pronunciation patterns",
        "Optional accents only"
      ],
      "Fixed pronunciation patterns",
      "They follow consistent rules."
    ),

    new basicSoundChangeModel(
      20,
      "Which is NOT a sound change example?",
      "multiple_choice",
      ["책이 → 채기", "국물 → 궁물", "사과 → 사과", "학교 → 학꾜"],
      "사과 → 사과",
      "No pronunciation change occurs here."
    )
  ]
};