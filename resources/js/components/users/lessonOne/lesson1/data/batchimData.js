import QuestionModel from "../models/batchimModel";

export default [

    new QuestionModel(
        "What is Batchim (받침)?",
        [
            "Initial consonant",
            "Final consonant",
            "Vowel sound",
            "Sentence ending"
        ],
        "Final consonant",
        "Batchim is the final consonant at the bottom of a syllable block."
    ),

    new QuestionModel(
        "Which syllable has Batchim?",
        ["가", "나", "각", "고"],
        "각",
        "각 contains ㄱ at the bottom as Batchim."
    ),

    new QuestionModel(
        "Which is an open syllable (no Batchim)?",
        ["가", "각", "집", "밥"],
        "가",
        "가 ends with a vowel, so it has no Batchim."
    ),

    new QuestionModel(
        "What is the Batchim in '집'?",
        ["ㅈ", "ㅂ", "ㅣ", "ㅇ"],
        "ㅂ",
        "집 ends with ㅂ as the final consonant."
    ),

    new QuestionModel(
        "Which rule uses Batchim for grammar?",
        ["Verb tense", "Particles", "Numbers", "Colors"],
        "Particles",
        "Particles like 은/는, 이/가 depend on Batchim."
    ),

    new QuestionModel(
        "Which syllable has double Batchim?",
        ["각", "값", "가", "나"],
        "값",
        "값 has double final consonants (ㅄ)."
    ),

    new QuestionModel(
        "How is Batchim usually pronounced?",
        ["Long and strong", "Silent always", "Simplified or changed", "Like a vowel"],
        "Simplified or changed",
        "Batchim pronunciation often changes depending on rules."
    ),

    new QuestionModel(
        "What happens when next syllable starts with ㅇ?",
        [
            "Sound disappears",
            "Batchim moves forward",
            "Vowel becomes silent",
            "Consonant doubles"
        ],
        "Batchim moves forward",
        "This is linking sound rule (연음)."
    ),

    new QuestionModel(
        "Which is a Batchim example of ㄴ sound?",
        ["난", "가", "고", "두"],
        "난",
        "난 ends with ㄴ as Batchim."
    ),

    new QuestionModel(
        "Which syllable contains ㄹ Batchim?",
        ["달", "가", "고", "바"],
        "달",
        "달 ends with ㄹ."
    ),

    new QuestionModel(
        "Which is NOT a Batchim rule effect?",
        [
            "Pronunciation change",
            "Grammar particle change",
            "Word ending sound",
            "Writing vowels only"
        ],
        "Writing vowels only",
        "Batchim does not affect writing vowels alone."
    ),

    new QuestionModel(
        "Which syllable ends with ㅁ Batchim?",
        ["맘", "가", "고", "너"],
        "맘",
        "맘 ends with ㅁ."
    ),

    new QuestionModel(
        "Which is correct Batchim pronunciation rule?",
        [
            "All consonants sound the same",
            "Only 7 final sounds exist",
            "No pronunciation rules",
            "Batchim becomes vowel"
        ],
        "Only 7 final sounds exist",
        "Korean Batchim reduces to 7 main sounds."
    ),

    new QuestionModel(
        "Which syllable has ㅅ Batchim?",
        ["옷", "가", "고", "다"],
        "옷",
        "옷 ends with ㅅ."
    ),

    new QuestionModel(
        "What is the Batchim in '항'?",
        ["ㅎ", "ㅇ", "ㅏ", "ㄱ"],
        "ㅇ",
        "항 ends with ㅇ Batchim."
    ),

    new QuestionModel(
        "Which syllable has ㄷ Batchim?",
        ["닫", "가", "고", "나"],
        "닫",
        "닫 ends with ㄷ."
    ),

    new QuestionModel(
        "Which is a correct Batchim structure?",
        [
            "Vowel only",
            "Consonant + Vowel + Final consonant",
            "Only consonants",
            "Random letters"
        ],
        "Consonant + Vowel + Final consonant",
        "This is the full Hangul syllable structure."
    ),

    new QuestionModel(
        "Which syllable ends with ㅋ Batchim?",
        ["부엌", "가", "나", "고"],
        "부엌",
        "부엌 ends with ㅋ Batchim."
    ),

    new QuestionModel(
        "Which Batchim affects linking sound?",
        ["Final consonant", "Initial vowel", "Tone mark", "Spacing"],
        "Final consonant",
        "Batchim connects sounds in pronunciation."
    ),

    new QuestionModel(
        "Which is NOT a Batchim example?",
        ["가", "각", "집", "밥"],
        "가",
        "가 has no Batchim."
    )
];