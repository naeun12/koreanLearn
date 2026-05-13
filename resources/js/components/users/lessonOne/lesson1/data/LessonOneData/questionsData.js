import QuizModel from "../../models/LessonOneModel/QuizModel";

export default {
    questionsHangulStructure: [
        new QuizModel(
            1,
            "Question: 가 = ____",
            "short_answer",
            null,
            "ga",
            "가 is formed with ㄱ (g/k) + ㅏ (a), so it is romanized as ga.",
        ),

        new QuizModel(
            2,
            "Question: 녀 = ____",
            "identification",
            null,
            "nyeo",
            "녀 is formed with ㄴ (n) + ㅕ (yeo), giving nyeo.",
        ),

        new QuizModel(
            3,
            "Question: 교 = ____",
            "multiple_choice",
            ["gyo", "geo", "go", "gyeo"],
            "gyo",
            "교 is made from ㄱ (g/k) + ㅛ (yo), pronounced gyo.",
        ),

        new QuizModel(
            4,
            "Question: 머 = ____",
            "short_answer",
            null,
            "meo",
            "머 combines ㅁ (m) + ㅓ (eo), so it becomes meo.",
        ),

        new QuizModel(
            5,
            "Question: 보 = ____",
            "multiple_choice",
            ["bo", "po", "bu", "beo"],
            "bo",
            "보 is formed using ㅂ (b/p) + ㅗ (o), giving bo.",
        ),

        new QuizModel(
            6,
            "Question: 시 = ____",
            "identification",
            null,
            "si",
            "시 is ㅅ + ㅣ. In romanization, it is written as si.",
        ),

        new QuizModel(
            7,
            "Question: 차 = ____",
            "multiple_choice",
            ["cha", "cho", "che", "ja"],
            "cha",
            "차 is made with ㅊ (ch) + ㅏ (a), pronounced cha.",
        ),

        new QuizModel(
            8,
            "Question: 효 = ____",
            "short_answer",
            null,
            "hyo",
            "효 combines ㅎ (h) + ㅛ (yo), making hyo.",
        ),

        new QuizModel(
            9,
            "Question: 개 = ____",
            "multiple_choice",
            ["gae", "gye", "goe", "ge"],
            "gae",
            "개 is ㄱ + ㅐ, romanized as gae.",
        ),

        new QuizModel(
            10,
            "Question: 왜 = ____",
            "identification",
            null,
            "wae",
            "왜 uses ㅇ + ㅙ and is pronounced wae.",
        ),

        new QuizModel(
            11,
            "Question: 쉐 = ____",
            "multiple_choice",
            ["swe", "swi", "soe", "she"],
            "swe",
            "쉐 combines ㅅ + ㅞ, giving swe.",
        ),

        new QuizModel(
            12,
            "Question: 희 = ____",
            "short_answer",
            null,
            "hui",
            "희 is formed with ㅎ + ㅢ and romanized as hui.",
        ),

        new QuizModel(
            13,
            "Question: ㄲ = ____",
            "multiple_choice",
            ["kk", "gg", "k", "g"],
            "kk",
            "ㄲ is the tense consonant version of ㄱ and is romanized as kk.",
        ),

        new QuizModel(
            14,
            "Question: 따 = ____",
            "identification",
            null,
            "tta",
            "따 uses ㄸ + ㅏ, giving tta.",
        ),

        new QuizModel(
            15,
            "Question: 뽀 = ____",
            "multiple_choice",
            ["ppo", "po", "bo", "ppu"],
            "ppo",
            "뽀 combines ㅃ + ㅗ and is romanized as ppo.",
        ),

        new QuizModel(
            16,
            "Question: 씨 = ____",
            "short_answer",
            null,
            "ssi",
            "씨 uses ㅆ + ㅣ and is romanized as ssi.",
        ),

        new QuizModel(
            17,
            "Question: 째 = ____",
            "multiple_choice",
            ["jje", "jae", "jja", "je"],
            "jje",
            "째 combines ㅉ + ㅐ, pronounced jje.",
        ),

        new QuizModel(
            18,
            "Question: 꽤 = ____",
            "identification",
            null,
            "kkwae",
            "꽤 uses ㄲ + ㅙ and is romanized as kkwae.",
        ),

        new QuizModel(
            19,
            "Question: 뛰 = ____",
            "short_answer",
            null,
            "ttwi",
            "뛰 combines ㄸ + ㅟ and is pronounced ttwi.",
        ),

        new QuizModel(
            20,
            "Question: 쮜 = ____",
            "multiple_choice",
            ["jjwi", "jwi", "jjui", "jje"],
            "jjwi",
            "쮜 uses ㅉ + ㅟ, giving jjwi.",
        ),
    ],
    questionsBasicSoundChangeData: [
        new QuizModel(
            1,
            "What is the main purpose of Korean sound changes?",
            "multiple_choice",
            [
                "To make pronunciation smoother",
                "To make spelling harder",
                "To remove vowels",
                "To change grammar rules",
            ],
            "To make pronunciation smoother",
            "They make Korean speech flow naturally.",
        ),

        new QuizModel(
            2,
            "합니다 is commonly pronounced as?",
            "multiple_choice",
            ["hap-ni-da", "ham-ni-da", "ha-ni-da", "hab-ni-da"],
            "ham-ni-da",
            "ㅂ + ㄴ becomes ㅁ + ㄴ for smoother speech.",
        ),

        new QuizModel(
            3,
            "What happens in 책이 → 채기?",
            "multiple_choice",
            [
                "Final consonant links to next vowel",
                "Vowel disappears",
                "Consonant becomes silent",
                "No change",
            ],
            "Final consonant links to next vowel",
            "The final consonant connects to the next syllable.",
        ),

        new QuizModel(
            4,
            "한국어 is pronounced as?",
            "short_answer",
            null,
            "han-gu-geo",
            "Syllables are linked smoothly.",
        ),

        new QuizModel(
            5,
            "국물 → 궁물 is an example of what sound change?",
            "identification",
            null,
            "nasalization",
            "ㄱ changes due to nasal influence of ㅁ.",
        ),

        new QuizModel(
            6,
            "학교 is pronounced as?",
            "multiple_choice",
            ["hak-gyo", "hak-kyo", "ha-kyo", "hak-yo"],
            "hak-kyo",
            "Tense consonant appears after batchim.",
        ),

        new QuizModel(
            7,
            "입구 becomes?",
            "multiple_choice",
            ["ip-gu", "ip-kku", "ib-gu", "i-gu"],
            "ip-kku",
            "ㄱ becomes tense after final consonant.",
        ),

        new QuizModel(
            8,
            "국밥 is pronounced as?",
            "multiple_choice",
            ["guk-bap", "guk-ppap", "gu-bap", "gup-bap"],
            "guk-ppap",
            "ㅂ becomes tense after batchim.",
        ),

        new QuizModel(
            9,
            "설날 becomes?",
            "short_answer",
            null,
            "seol-lal",
            "ㄴ changes to ㄹ between liquid sounds.",
        ),

        new QuizModel(
            10,
            "신라 is pronounced as?",
            "multiple_choice",
            ["sin-ra", "sil-la", "shi-ra", "sin-la"],
            "sil-la",
            "ㄴ + ㄹ becomes double ㄹ.",
        ),

        new QuizModel(
            11,
            "좋아요 becomes?",
            "multiple_choice",
            ["jo-ha-yo", "jo-a-yo", "jo-yo", "joh-a-yo"],
            "jo-a-yo",
            "ㅎ becomes silent in fast speech.",
        ),

        new QuizModel(
            12,
            "놓다 is pronounced as?",
            "short_answer",
            null,
            "no-ta",
            "ㅎ affects the next consonant.",
        ),

        new QuizModel(
            13,
            "많다 becomes?",
            "multiple_choice",
            ["man-da", "man-ta", "ma-ta", "mal-ta"],
            "man-ta",
            "ㅎ strengthens the following consonant.",
        ),

        new QuizModel(
            14,
            "What sound change is in 국물 → 궁물?",
            "identification",
            null,
            "nasalization",
            "Nasal consonant influence.",
        ),

        new QuizModel(
            15,
            "Which is linking sound change?",
            "multiple_choice",
            ["책이 → 채기", "국물 → 궁물", "학교 → 학꾜", "많다 → 만타"],
            "책이 → 채기",
            "Final consonant connects to next syllable.",
        ),

        new QuizModel(
            16,
            "Which shows tense consonant?",
            "multiple_choice",
            ["학교", "국물", "신라", "책이"],
            "학교",
            "Consonant becomes stronger after batchim.",
        ),

        new QuizModel(
            17,
            "What improves by learning sound changes?",
            "multiple_choice",
            [
                "Reading only",
                "Listening only",
                "Speaking only",
                "Reading, listening, and speaking",
            ],
            "Reading, listening, and speaking",
            "Improves overall communication skills.",
        ),

        new QuizModel(
            18,
            "Final consonants in Korean are called?",
            "short_answer",
            null,
            "batchim",
            "Final consonants affect pronunciation.",
        ),

        new QuizModel(
            19,
            "Sound changes in Korean are?",
            "multiple_choice",
            [
                "Random changes",
                "Strict grammar rules",
                "Fixed pronunciation patterns",
                "Optional accents only",
            ],
            "Fixed pronunciation patterns",
            "They follow consistent rules.",
        ),

        new QuizModel(
            20,
            "Which is NOT a sound change example?",
            "multiple_choice",
            ["책이 → 채기", "국물 → 궁물", "사과 → 사과", "학교 → 학꾜"],
            "사과 → 사과",
            "No pronunciation change occurs here.",
        ),
    ],
    questionsKoreanAndConsonants: [
        new QuizModel(
            1,
            "What sound does ㅏ make?",
            "multiple_choice",
            ["a", "eo", "o", "u"],
            "a",
            "ㅏ is pronounced as 'a', like the a in father.",
        ),

        new QuizModel(
            2,
            "What sound does ㅓ make?",
            "multiple_choice",
            ["eo", "i", "u", "ya"],
            "eo",
            "ㅓ is pronounced as 'eo', like a soft uh sound.",
        ),

        new QuizModel(
            3,
            "What sound does ㄴ usually make?",
            "multiple_choice",
            ["m", "n", "s", "g"],
            "n",
            "ㄴ gives the 'n' sound.",
        ),

        new QuizModel(
            4,
            "What sound does ㅁ usually make?",
            "multiple_choice",
            ["b", "m", "d", "h"],
            "m",
            "ㅁ gives the 'm' sound.",
        ),

        new QuizModel(
            5,
            "ㄱ + ㅏ = ____",
            "short_answer",
            null,
            "ga",
            "ㄱ gives g/k sound and ㅏ gives a, so it becomes ga.",
        ),

        new QuizModel(
            6,
            "ㄴ + ㅏ = ____",
            "short_answer",
            null,
            "na",
            "ㄴ gives n sound and ㅏ gives a, so it becomes na.",
        ),

        new QuizModel(
            7,
            "ㅁ + ㅗ = ____",
            "short_answer",
            null,
            "mo",
            "ㅁ gives m sound and ㅗ gives o, so it becomes mo.",
        ),

        new QuizModel(
            8,
            "ㅅ + ㅜ = ____",
            "short_answer",
            null,
            "su",
            "ㅅ gives s sound and ㅜ gives u/oo, so it becomes su.",
        ),

        new QuizModel(
            9,
            "Which letter is a consonant?",
            "multiple_choice",
            ["ㅏ", "ㅗ", "ㄷ", "ㅣ"],
            "ㄷ",
            "ㄷ is a consonant. The others are vowels.",
        ),

        new QuizModel(
            10,
            "Which letter is a vowel?",
            "multiple_choice",
            ["ㄴ", "ㅁ", "ㅓ", "ㄱ"],
            "ㅓ",
            "ㅓ is a vowel.",
        ),

        new QuizModel(
            11,
            "A complete Korean syllable needs at least one consonant and one ____.",
            "multiple_choice",
            ["number", "vowel", "symbol", "space"],
            "vowel",
            "A Hangul syllable needs a consonant and a vowel.",
        ),

        new QuizModel(
            12,
            "What is the romanization of 가 ?",
            "short_answer",
            null,
            "ga",
            "가 = ㄱ + ㅏ = ga.",
        ),

        new QuizModel(
            13,
            "What is the romanization of 나 ?",
            "short_answer",
            null,
            "na",
            "나 = ㄴ + ㅏ = na.",
        ),

        new QuizModel(
            14,
            "What is the romanization of 모 ?",
            "short_answer",
            null,
            "mo",
            "모 = ㅁ + ㅗ = mo.",
        ),

        new QuizModel(
            15,
            "What is the romanization of 수 ?",
            "short_answer",
            null,
            "su",
            "수 = ㅅ + ㅜ = su.",
        ),

        new QuizModel(
            16,
            "Which vowel is horizontal?",
            "multiple_choice",
            ["ㅏ", "ㅓ", "ㅗ", "ㅣ"],
            "ㅗ",
            "ㅗ is a horizontal vowel.",
        ),

        new QuizModel(
            17,
            "Which vowel is vertical?",
            "multiple_choice",
            ["ㅜ", "ㅡ", "ㅏ", "ㅗ"],
            "ㅏ",
            "ㅏ is a vertical vowel.",
        ),

        new QuizModel(
            18,
            "What sound does ㅣ make?",
            "multiple_choice",
            ["ee", "ah", "oh", "uh"],
            "ee",
            "ㅣ sounds like ee in see.",
        ),

        new QuizModel(
            19,
            "ㄱ + ㅣ = ____",
            "short_answer",
            null,
            "gi",
            "ㄱ + ㅣ becomes gi (or soft ki sound).",
        ),

        new QuizModel(
            20,
            "What is 받침 (batchim)?",
            "multiple_choice",
            [
                "starting sound",
                "final consonant",
                "double vowel",
                "silent sound",
            ],
            "final consonant",
            "받침 means the final consonant at the bottom of a syllable.",
        ),
    ],
    questionsPronunciationRules: [
        new QuizModel(
            1,
            "What is the main goal of Korean pronunciation rules?",
            "multiple_choice",
            [
                "To make speech smoother and natural",
                "To change spelling",
                "To remove consonants",
                "To make words longer",
            ],
            "To make speech smoother and natural",
            "Pronunciation rules help Korean flow naturally in speech.",
        ),

        new QuizModel(
            2,
            "What happens in 합니다?",
            "multiple_choice",
            ["hab-ni-da", "ham-ni-da", "ha-ni-da", "hap-da"],
            "ham-ni-da",
            "ㅂ changes to ㅁ before ㄴ. This is nasalization.",
        ),

        new QuizModel(
            3,
            "국물 is commonly pronounced as ____",
            "short_answer",
            null,
            "gungmul",
            "ㄱ changes to ㅇ before ㅁ, making 궁물 (gungmul).",
        ),

        new QuizModel(
            4,
            "Which rule changes ㄱ to ㅇ before ㅁ or ㄴ?",
            "multiple_choice",
            ["Linking", "Nasalization", "Palatalization", "Aspiration"],
            "Nasalization",
            "Stops often become nasal sounds before ㄴ or ㅁ.",
        ),

        new QuizModel(
            5,
            "연락 is pronounced as ____",
            "short_answer",
            null,
            "yeollak",
            "ㄴ + ㄹ becomes ㄹ + ㄹ, so 연락 sounds like yeollak.",
        ),

        new QuizModel(
            6,
            "What rule happens in 신라 → 실라?",
            "multiple_choice",
            ["Tensification", "Lateralization", "Linking", "Neutralization"],
            "Lateralization",
            "ㄴ + ㄹ becomes ㄹㄹ.",
        ),

        new QuizModel(
            7,
            "학교 is pronounced as ____",
            "multiple_choice",
            ["hakgyo", "hakkyo", "hagyo", "hakyo"],
            "hakkyo",
            "ㄱ strengthens the next consonant, creating ㄲ.",
        ),

        new QuizModel(
            8,
            "Which pronunciation rule appears in 학교 → 학꾜?",
            "multiple_choice",
            ["Tensification", "Nasalization", "Linking", "Aspiration"],
            "Tensification",
            "The second consonant becomes tense.",
        ),

        new QuizModel(
            9,
            "축하해 is pronounced as ____",
            "short_answer",
            null,
            "chukahae",
            "ㄱ + ㅎ creates aspirated ㅋ sound.",
        ),

        new QuizModel(
            10,
            "Which rule appears in 입학 → 이팍?",
            "multiple_choice",
            ["Aspiration", "Palatalization", "Linking", "Neutralization"],
            "Aspiration",
            "ㅂ + ㅎ becomes ㅍ.",
        ),

        new QuizModel(
            11,
            "꽃 at the end of a word is pronounced as ____",
            "multiple_choice",
            ["kkoch", "kkot", "kkos", "kkon"],
            "kkot",
            "Final complex sounds are neutralized into simple stop sounds.",
        ),

        new QuizModel(
            12,
            "What rule appears in 꽃 → 꼿?",
            "multiple_choice",
            ["Neutralization", "Linking", "Nasalization", "Lateralization"],
            "Neutralization",
            "Complex final consonants simplify at the end.",
        ),

        new QuizModel(
            13,
            "같이 is pronounced as ____",
            "short_answer",
            null,
            "gachi",
            "ㅌ + 이 changes into 치 sound.",
        ),

        new QuizModel(
            14,
            "What rule appears in 같이 → 가치?",
            "multiple_choice",
            ["Palatalization", "Aspiration", "Tensification", "Linking"],
            "Palatalization",
            "ㅌ before 이 often changes to 치.",
        ),

        new QuizModel(
            15,
            "How is 시 usually pronounced?",
            "multiple_choice",
            ["si", "shi", "chi", "ji"],
            "shi",
            "ㅅ becomes SH before ㅣ.",
        ),

        new QuizModel(
            16,
            "What rule appears in 시?",
            "multiple_choice",
            ["S-Palatalization", "Neutralization", "Linking", "Nasalization"],
            "S-Palatalization",
            "ㅅ sounds like SH before ㅣ or y vowels.",
        ),

        new QuizModel(
            17,
            "한국어 is pronounced as ____",
            "short_answer",
            null,
            "hangugeo",
            "Linking moves sounds smoothly between syllables.",
        ),

        new QuizModel(
            18,
            "What happens in 있어요 → 이써요?",
            "multiple_choice",
            [
                "Double consonant carries forward",
                "Vowel removed",
                "No sound change",
                "Nasalization",
            ],
            "Double consonant carries forward",
            "ㅆ links strongly into the next syllable.",
        ),

        new QuizModel(
            19,
            "Which rule helps speech become easier and faster?",
            "multiple_choice",
            [
                "Economy of Effort",
                "Silent Grammar",
                "Random Shift",
                "Spacing Rule",
            ],
            "Economy of Effort",
            "Sounds change to reduce effort in speaking.",
        ),

        new QuizModel(
            20,
            "Which one is an example of linking?",
            "multiple_choice",
            ["음악", "국물", "신라", "꽃"],
            "음악",
            "The final consonant connects to the next vowel syllable.",
        ),
    ],
    questionsBatchim: [
        new QuizModel(
            1,
            "What is Batchim in Korean?",
            "multiple_choice",
            [
                "A vowel sound",
                "A final consonant",
                "A grammar particle",
                "A tone marker",
            ],
            "A final consonant",
            "Batchim is the final consonant placed at the bottom of a syllable.",
        ),

        new QuizModel(
            2,
            "Which syllable has NO Batchim?",
            "multiple_choice",
            ["각 (gak)", "한 (han)", "가 (ga)", "집 (jip)"],
            "가 (ga)",
            "가 has no final consonant, so it is an open syllable.",
        ),

        new QuizModel(
            3,
            "각 is made of ____",
            "short_answer",
            null,
            "gak",
            "ㄱ + ㅏ + ㄱ forms 각 (gak).",
        ),

        new QuizModel(
            4,
            "집 is pronounced as ____",
            "short_answer",
            null,
            "jip",
            "ㅈ + ㅣ + ㅂ gives the final sound jip.",
        ),

        new QuizModel(
            5,
            "Which is an example of Batchim?",
            "multiple_choice",
            ["가", "나", "각", "다"],
            "각",
            "각 has a final consonant ㄱ.",
        ),

        new QuizModel(
            6,
            "What does Batchim affect?",
            "multiple_choice",
            [
                "Only spelling",
                "Pronunciation and grammar",
                "Only writing style",
                "Only vowels",
            ],
            "Pronunciation and grammar",
            "Batchim affects how words are pronounced and grammar particles.",
        ),

        new QuizModel(
            7,
            "한 is pronounced as ____",
            "short_answer",
            null,
            "han",
            "ㅎ + ㅏ + ㄴ gives han.",
        ),

        new QuizModel(
            8,
            "Which word has Batchim ㄱ?",
            "multiple_choice",
            ["각", "가", "나", "다"],
            "각",
            "각 ends with ㄱ.",
        ),

        new QuizModel(
            9,
            "What happens when Batchim meets ㅇ (no sound)?",
            "multiple_choice",
            [
                "Sound disappears",
                "Sound moves to next syllable",
                "Vowel changes",
                "Word is deleted",
            ],
            "Sound moves to next syllable",
            "Batchim links smoothly to the next syllable starting with ㅇ.",
        ),

        new QuizModel(
            10,
            "Which syllable ends with ㅂ Batchim?",
            "multiple_choice",
            ["집", "각", "한", "가"],
            "집",
            "집 ends with ㅂ Batchim.",
        ),

        new QuizModel(
            11,
            "Batchim is located at ____ position",
            "multiple_choice",
            ["top", "middle", "bottom", "side"],
            "bottom",
            "Batchim is always at the bottom of a syllable block.",
        ),

        new QuizModel(
            12,
            "What is the pronunciation of 집?",
            "short_answer",
            null,
            "jip",
            "ㅈ + ㅣ + ㅂ = jip.",
        ),

        new QuizModel(
            13,
            "Which is NOT a Batchim word?",
            "multiple_choice",
            ["각", "집", "한", "가"],
            "가",
            "가 has no final consonant.",
        ),

        new QuizModel(
            14,
            "Batchim helps Korean pronunciation become ____",
            "multiple_choice",
            ["slower", "unnatural", "natural", "silent"],
            "natural",
            "Batchim makes pronunciation more natural and smooth.",
        ),

        new QuizModel(
            15,
            "Which syllable is structure Consonant + Vowel + Batchim?",
            "multiple_choice",
            ["가", "나", "각", "다"],
            "각",
            "각 includes a final consonant ㄱ.",
        ),

        new QuizModel(
            16,
            "What is the Batchim in '한'?",
            "short_answer",
            null,
            "ㄴ",
            "한 ends with ㄴ Batchim.",
        ),

        new QuizModel(
            17,
            "Batchim can affect grammar particles like ____",
            "multiple_choice",
            ["은/는", "and only vowels", "numbers", "English words"],
            "은/는",
            "Particles change depending on Batchim presence.",
        ),

        new QuizModel(
            18,
            "Which word contains 2 consonant structure + Batchim?",
            "multiple_choice",
            ["각", "가", "나", "다"],
            "각",
            "각 has initial + vowel + final consonant.",
        ),

        new QuizModel(
            19,
            "What improves when you master Batchim?",
            "multiple_choice",
            [
                "Reading only",
                "Speaking only",
                "Reading and pronunciation",
                "Only writing",
            ],
            "Reading and pronunciation",
            "Batchim improves reading and speaking fluency.",
        ),

        new QuizModel(
            20,
            "집 ends with which Batchim sound?",
            "short_answer",
            null,
            "ㅂ",
            "집 ends with ㅂ Batchim.",
        ),
    ],
    ToBe: [
        // ================= MULTIPLE CHOICE =================
        new QuizModel(
            1,
            "What does '되다' mean in English?",
            "multiple_choice",
            ["to be", "to become", "to go", "to do"],
            "to become",
            "Correct Answer: to become — 되다 means 'to become' or change into something.",
        ),
        new QuizModel(
            2,
            "What does '이다' mean?",
            "multiple_choice",
            ["to become", "to be", "to have", "to eat"],
            "to be",
            "Correct Answer: to be — used for identity.",
        ),
        new QuizModel(
            3,
            "What does '-(으)ㄹ 것이다' express?",
            "multiple_choice",
            ["past tense", "future intention", "command", "ability"],
            "future intention",
            "Correct Answer: future intention — used for predictions and plans.",
        ),
        new QuizModel(
            4,
            "Translate: 나는 학생이다",
            "multiple_choice",
            [
                "I became a student",
                "I am a student",
                "I will become a student",
                "I was a student",
            ],
            "I am a student",
            "Correct Answer: I am a student — present identity.",
        ),
        new QuizModel(
            5,
            "Translate: 나는 의사가 될 것이다",
            "multiple_choice",
            [
                "I am a doctor",
                "I became a doctor",
                "I will become a doctor",
                "I study medicine",
            ],
            "I will become a doctor",
            "Correct Answer: I will become a doctor — future form.",
        ),

        // ================= identification =================
        new QuizModel(
            6,
            "identification the meaning of: 나는 의사가 되었다",
            "identification",
            null,
            "I became a doctor",
            "Correct Answer: I became a doctor — shows past change of state.",
        ),
        new QuizModel(
            7,
            "identification the meaning of: 그는 선생님이다",
            "identification",
            null,
            "He is a teacher",
            "Correct Answer: He is a teacher — expresses identity.",
        ),
        new QuizModel(
            8,
            "identification the meaning of: 우리는 친구가 될 것이다",
            "identification",
            null,
            "We will become friends",
            "Correct Answer: We will become friends — future intention.",
        ),
        new QuizModel(
            9,
            "identification the meaning of: 내일은 비가 올 것이다",
            "identification",
            null,
            "It will rain tomorrow",
            "Correct Answer: It will rain tomorrow — prediction.",
        ),
        new QuizModel(
            10,
            "identification the meaning of: 그는 좋은 사람이 되었다",
            "identification",
            null,
            "He became a good person",
            "Correct Answer: He became a good person — transformation.",

            // ================= SHORT ANSWER =================
        ),
        new QuizModel(
            11,
            "What does '되다' mean?",
            "short_answer",
            null,
            "to become",
            "Correct Answer: to become — core meaning of 되다.",
        ),
        new QuizModel(
            12,
            "What does '이다' mean?",
            "short_answer",
            null,
            "to be",
            "Correct Answer: to be — used for identity.",
        ),
        new QuizModel(
            13,
            "What does '-(으)ㄹ 것이다' mean?",
            "short_answer",
            null,
            "future intention",
            "Correct Answer: future intention — used for future plans.",
        ),
        new QuizModel(
            14,
            "Translate: 나는 학생이다",
            "short_answer",
            null,
            "I am a student",
            "Correct Answer: I am a student — identity sentence.",
        ),
        new QuizModel(
            15,
            "Translate: 나는 의사가 되었다",
            "short_answer",
            null,
            "I became a doctor",
            "Correct Answer: I became a doctor — past form of 되다.",
        ),
        new QuizModel(
            16,
            "Translate: 나는 의사가 될 것이다",
            "short_answer",
            null,
            "I will become a doctor",
            "Correct Answer: I will become a doctor — future form.",
        ),
        new QuizModel(
            17,
            "What is the past form of 되다?",
            "short_answer",
            null,
            "되었다",
            "Correct Answer: 되었다 — means 'became'.",
        ),
        new QuizModel(
            18,
            "Translate: 그녀는 학생이다",
            "short_answer",
            null,
            "She is a student",
            "Correct Answer: She is a student — identity.",
        ),
        new QuizModel(
            19,
            "Translate: 우리는 친구가 될 것이다",
            "short_answer",
            null,
            "We will become friends",
            "Correct Answer: We will become friends — future relationship.",
        ),
        new QuizModel(
            20,
            "What does '좋은 사람이 되다' mean?",
            "short_answer",
            null,
            "to become a good person",
            "Correct Answer: to become a good person — transformation.",
        ),
    ],
};
